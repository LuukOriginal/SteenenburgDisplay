/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 o&o test.gltf --transform 
Files: o&o test.gltf [18.5KB] > C:\Users\LuukO\Downloads\o&o test-transformed.glb [4.44KB] (76%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Hotel(props) {
  const { nodes, materials } = useGLTF('/hoteltransformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.room_1_1.geometry} material={materials.room_1_1} />
      <mesh geometry={nodes.room_1_2.geometry} material={materials.room_1_2} />
    </group>
  )
}

useGLTF.preload('/o&o test-transformed.glb')
