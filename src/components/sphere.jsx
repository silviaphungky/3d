import { useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'
import texture from '../texture.jpeg'

const Sphere = () => {
  const colorMap = useLoader(TextureLoader, texture)
  return (
    <mesh rotation={[90, 0, 20]}>
      <sphereBufferGeometry attach={'geometry'} scale={10} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

export default Sphere
