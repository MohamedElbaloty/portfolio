import React, { useMemo, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'
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

const Robot = React.forwardRef(function Robot(_props, ref) {
  // Simple robot built from primitives (more visible on mobile)
  return (
    <group ref={ref} position={[0, -0.06, 0]} scale={[1.15, 1.15, 1.15]}>
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

      {/* arms */}
      <mesh position={[-0.16, 0.02, 0]}>
        <boxGeometry args={[0.06, 0.14, 0.06]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.2} roughness={0.4} />
      </mesh>
      <mesh position={[0.16, 0.02, 0]}>
        <boxGeometry args={[0.06, 0.14, 0.06]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.2} roughness={0.4} />
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

      {/* antenna */}
      <mesh position={[0, 0.30, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.08, 10]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.4} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.34, 0]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.6} />
      </mesh>

      {/* visor */}
      <mesh position={[0, 0.19, 0.08]}>
        <boxGeometry args={[0.14, 0.06, 0.02]} />
        <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.7} />
      </mesh>
    </group>
  )
})

function useLetterTexture(ch) {
  return useMemo(() => {
    const size = 96
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    if (!ctx) return null

    ctx.clearRect(0, 0, size, size)
    ctx.font = '700 56px Inter, system-ui, -apple-system, Segoe UI, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // glow
    ctx.shadowColor = 'rgba(139,92,246,0.55)'
    ctx.shadowBlur = 14
    ctx.fillStyle = '#ffffff'
    ctx.fillText(ch, size / 2, size / 2 + 2)

    const tex = new THREE.CanvasTexture(canvas)
    tex.anisotropy = 1
    tex.needsUpdate = true
    return tex
  }, [ch])
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

  const robotRef = useRef()

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
    if (robotRef.current) {
      robotRef.current.position.x = robotX
      // bob while walking
      robotRef.current.position.y = -0.06 + Math.sin(t * 10) * 0.01

      // acrobatic flip after collecting
      if (local >= 5.6 && local <= 7.2) {
        const p = easeInOut(clamp01((local - 5.6) / 1.6))
        robotRef.current.rotation.z = p * Math.PI * 2
        robotRef.current.rotation.x = Math.sin(p * Math.PI) * 0.35
      } else {
        robotRef.current.rotation.z = 0
        robotRef.current.rotation.x = 0
      }
    }
  })

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={140} />
      <ambientLight intensity={1.0} />
      <directionalLight position={[2, 3, 4]} intensity={1.1} />

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

      <Robot ref={robotRef} />
    </>
  )
}

function Letter({ ch, x, index, total, startX, endX, scatter }) {
  const ref = useRef()
  const tex = useLetterTexture(ch)

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
    if (ref.current.material) {
      ref.current.material.opacity = opacity
      ref.current.material.transparent = true
    }
  })

  return (
    <sprite ref={ref} scale={[0.22, 0.22, 1]}>
      <spriteMaterial
        map={tex || undefined}
        transparent
        opacity={1}
        depthWrite={false}
      />
    </sprite>
  )
}

const MobileRobotLetterAnim = ({ text = 'Mohamed Ezzat', className = '' }) => {
  return (
    <div className={`sm:hidden w-full h-[92px] ${className}`} style={{ pointerEvents: 'none' }}>
      <Canvas
        dpr={[1, 1.25]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <Scene text={text} />
      </Canvas>
    </div>
  )
}

export default MobileRobotLetterAnim


