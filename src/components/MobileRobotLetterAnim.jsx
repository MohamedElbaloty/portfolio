import React, { useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrthographicCamera, Text } from '@react-three/drei'
import * as THREE from 'three'

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

function clamp01(x) {
  return Math.max(0, Math.min(1, x))
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

function makeScatter(i) {
  // deterministic pseudo-random based on i
  const x = Math.sin(i * 999) * 0.5
  const y = Math.cos(i * 777) * 0.25
  const z = Math.sin(i * 333) * 0.15
  return new THREE.Vector3(x, y, z)
}

function Robot({ x }) {
  // Simple robot built from primitives
  return (
    <group position={[x, -0.08, 0]}>
      {/* legs */}
      <mesh position={[-0.06, -0.18, 0]}>
        <boxGeometry args={[0.06, 0.12, 0.06]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.3} roughness={0.4} />
      </mesh>
      <mesh position={[0.06, -0.18, 0]}>
        <boxGeometry args={[0.06, 0.12, 0.06]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.22, 0.22, 0.14]} />
        <meshStandardMaterial color="#e5e7eb" metalness={0.2} roughness={0.35} />
      </mesh>

      {/* backpack */}
      <mesh position={[-0.16, 0.02, -0.02]}>
        <boxGeometry args={[0.10, 0.16, 0.10]} />
        <meshStandardMaterial color="#111827" metalness={0.1} roughness={0.6} />
      </mesh>

      {/* head */}
      <mesh position={[0, 0.19, 0]}>
        <boxGeometry args={[0.16, 0.14, 0.14]} />
        <meshStandardMaterial color="#f3f4f6" metalness={0.2} roughness={0.35} />
      </mesh>

      {/* visor */}
      <mesh position={[0, 0.19, 0.08]}>
        <boxGeometry args={[0.14, 0.06, 0.02]} />
        <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.7} />
      </mesh>
    </group>
  )
}

function Scene({ text }) {
  const chars = useMemo(() => {
    const raw = String(text || '').trim()
    const list = []
    let x = -1.25
    const letterSpacing = 0.12
    const space = 0.11

    for (let i = 0; i < raw.length; i++) {
      const ch = raw[i]
      if (ch === ' ') {
        x += space
        continue
      }
      list.push({
        ch,
        x,
        i: list.length,
        scatter: makeScatter(i + 1),
      })
      x += letterSpacing
    }

    const startX = -1.35
    const endX = x + 0.15
    return { raw, list, startX, endX }
  }, [text])

  const robot = useMemo(() => ({ x: chars.startX }), [chars.startX])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const cycle = 9.5
    const local = t % cycle

    // phases
    // 0-5.2 collect, 5.2-6.2 hold, 6.2-7.2 scatter, 7.2-9.0 rebuild, 9.0-9.5 idle
    let robotX = chars.startX
    if (local <= 5.2) {
      const p = easeInOut(clamp01(local / 5.2))
      robotX = lerp(chars.startX, chars.endX, p)
    } else if (local <= 7.2) {
      robotX = chars.endX
    } else if (local <= 9.0) {
      const p = easeInOut(clamp01((local - 7.2) / 1.8))
      robotX = lerp(chars.endX, chars.startX, p)
    } else {
      robotX = chars.startX
    }

    robot.x = robotX
  })

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={160} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 3, 4]} intensity={0.9} />

      {/* letters */}
      {chars.list.map((c) => (
        <Letter
          key={`${c.ch}-${c.x}`}
          ch={c.ch}
          x={c.x}
          index={c.i}
          total={chars.list.length}
          startX={chars.startX}
          endX={chars.endX}
          scatter={c.scatter}
        />
      ))}

      <Robot x={robot.x} />
    </>
  )
}

function Letter({ ch, x, index, total, startX, endX, scatter }) {
  const ref = React.useRef()

  const basePos = useMemo(() => new THREE.Vector3(x, 0.02, 0), [x])
  const bagPos = useMemo(() => {
    const p = (index + 0.55) / Math.max(1, total)
    return new THREE.Vector3(lerp(startX, endX, p) - 0.18, 0.03, -0.02)
  }, [index, total, startX, endX])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    const cycle = 9.5
    const local = t % cycle

    // collect timing per letter
    const stagger = 0.18
    const collectWindow = 0.72
    const collectStart = index * stagger
    const collectEnd = collectStart + collectWindow

    // phases: collect(0-5.2), hold(5.2-6.2), scatter(6.2-7.2), rebuild(7.2-9.0)
    let pos = basePos.clone()
    let opacity = 1
    let scale = 1

    if (local <= 5.2) {
      const p = clamp01((local - collectStart) / collectWindow)
      if (p > 0) {
        const e = easeInOut(p)
        pos.lerpVectors(basePos, bagPos, e)
        scale = lerp(1, 0.9, e)
        opacity = lerp(1, 0.0, e)
      }
    } else if (local <= 6.2) {
      // hold in bag (invisible)
      pos.copy(bagPos)
      opacity = 0
    } else if (local <= 7.2) {
      // scatter out (visible)
      const p = easeInOut(clamp01((local - 6.2) / 1.0))
      pos.lerpVectors(bagPos, bagPos.clone().add(scatter), p)
      opacity = lerp(0, 1, p)
      scale = lerp(0.9, 1.0, p)
    } else if (local <= 9.0) {
      // rebuild back in sequence
      const rebuildStagger = 0.08
      const rebuildWindow = 0.9
      const rs = 7.2 + index * rebuildStagger
      const re = rs + rebuildWindow
      const p = clamp01((local - rs) / rebuildWindow)
      const e = easeInOut(p)
      const from = bagPos.clone().add(scatter)
      pos.lerpVectors(from, basePos, e)
      opacity = lerp(1, 1, e)
      scale = 1
    }

    ref.current.position.copy(pos)
    ref.current.scale.setScalar(scale)
    ref.current.material.opacity = opacity
    ref.current.material.transparent = true
  })

  return (
    <Text
      ref={ref}
      fontSize={0.14}
      color="#e5e7eb"
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.004}
      outlineColor="rgba(139,92,246,0.35)"
    >
      {ch}
    </Text>
  )
}

const MobileRobotLetterAnim = ({ text = 'Mohamed Ezzat' }) => {
  return (
    <div className="sm:hidden w-full flex justify-center mb-1">
      <div className="glass border border-white/10 rounded-2xl px-3 py-2">
        <div className="w-[340px] h-[86px]">
          <Canvas
            dpr={[1, 1.25]}
            gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
          >
            <Scene text={text} />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default MobileRobotLetterAnim


