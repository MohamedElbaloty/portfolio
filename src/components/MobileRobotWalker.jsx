import React, { useMemo, useRef } from 'react'
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

function PixarBot() {
  const root = useRef()
  const leftLeg = useRef()
  const rightLeg = useRef()
  const leftArm = useRef()
  const rightArm = useRef()
  const head = useRef()

  const materials = useMemo(() => {
    return {
      shell: new THREE.MeshToonMaterial({ color: '#f3f4f6' }),
      joint: new THREE.MeshToonMaterial({ color: '#9ca3af' }),
      visor: new THREE.MeshToonMaterial({ color: '#60a5fa', emissive: new THREE.Color('#60a5fa') }),
      backpack: new THREE.MeshToonMaterial({ color: '#111827' }),
      accent: new THREE.MeshToonMaterial({ color: '#ec4899', emissive: new THREE.Color('#ec4899') }),
    }
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // walk cycle
    const step = Math.sin(t * 7.0) // -1..1
    const swing = step * 0.55
    const bounce = Math.abs(Math.sin(t * 7.0)) * 0.03

    if (leftLeg.current) leftLeg.current.rotation.x = swing
    if (rightLeg.current) rightLeg.current.rotation.x = -swing
    if (leftArm.current) leftArm.current.rotation.x = -swing * 0.65
    if (rightArm.current) rightArm.current.rotation.x = swing * 0.65
    if (head.current) head.current.rotation.z = Math.sin(t * 3.0) * 0.06

    if (root.current) {
      root.current.position.y = -0.06 + bounce
      root.current.rotation.z = Math.sin(t * 1.8) * 0.03
    }
  })

  return (
    <group ref={root} scale={[1.25, 1.25, 1.25]}>
      {/* body */}
      <mesh position={[0, 0.02, 0]} material={materials.shell}>
        <capsuleGeometry args={[0.10, 0.18, 6, 12]} />
      </mesh>

      {/* backpack */}
      <mesh position={[-0.16, 0.02, -0.02]} material={materials.backpack}>
        <boxGeometry args={[0.10, 0.16, 0.10]} />
      </mesh>

      {/* head */}
      <group ref={head} position={[0, 0.22, 0]}>
        <mesh material={materials.shell}>
          <sphereGeometry args={[0.11, 18, 18]} />
        </mesh>
        {/* visor */}
        <mesh position={[0, 0.0, 0.09]} material={materials.visor}>
          <boxGeometry args={[0.16, 0.06, 0.02]} />
        </mesh>
        {/* antenna */}
        <mesh position={[0.0, 0.14, 0.0]} material={materials.joint}>
          <cylinderGeometry args={[0.01, 0.01, 0.08, 10]} />
        </mesh>
        <mesh position={[0.0, 0.19, 0.0]} material={materials.accent}>
          <sphereGeometry args={[0.02, 16, 16]} />
        </mesh>
      </group>

      {/* arms */}
      <group ref={leftArm} position={[-0.16, 0.06, 0]}>
        <mesh material={materials.shell}>
          <capsuleGeometry args={[0.03, 0.10, 6, 10]} />
        </mesh>
      </group>
      <group ref={rightArm} position={[0.16, 0.06, 0]}>
        <mesh material={materials.shell}>
          <capsuleGeometry args={[0.03, 0.10, 6, 10]} />
        </mesh>
      </group>

      {/* legs */}
      <group ref={leftLeg} position={[-0.06, -0.14, 0]}>
        <mesh material={materials.joint}>
          <capsuleGeometry args={[0.035, 0.11, 6, 10]} />
        </mesh>
      </group>
      <group ref={rightLeg} position={[0.06, -0.14, 0]}>
        <mesh material={materials.joint}>
          <capsuleGeometry args={[0.035, 0.11, 6, 10]} />
        </mesh>
      </group>
    </group>
  )
}

function Scene() {
  const bot = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    // loop across the name area
    const cycle = 6.5
    const p = easeInOut((t % cycle) / cycle)
    const x = lerp(-1.35, 1.35, p)
    if (bot.current) {
      bot.current.position.x = x
      // face movement direction slightly
      bot.current.rotation.y = Math.sin(p * Math.PI) * 0.08
    }
  })

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={145} />
      <ambientLight intensity={1.05} />
      <directionalLight position={[2, 3, 4]} intensity={1.2} />
      <directionalLight position={[-2, 2, 1]} intensity={0.6} color="#a78bfa" />

      <group ref={bot} position={[-1.35, 0.08, 0]}>
        <PixarBot />
      </group>
    </>
  )
}

/**
 * Mobile-only overlay robot walker that moves above the name.
 * IMPORTANT: It does not draw/modify the name text.
 */
const MobileRobotWalker = ({ className = '' }) => {
  return (
    <div className={`sm:hidden w-full h-[96px] ${className}`} style={{ pointerEvents: 'none' }}>
      <Canvas dpr={[1, 1.25]} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default MobileRobotWalker


