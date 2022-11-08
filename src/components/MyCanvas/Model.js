import React, { useRef } from "react";
import { useSnapshot } from "valtio";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from '../../assets/this-loma.glb'

function Model({ top, bott, legs, state, ...props }) {
    const group = useRef()
    const snap = useSnapshot(state)
    const { nodes, materials } = useLoader(GLTFLoader, model)

    return (
        <>
            <group
                ref={group} {...props}
                dispose={null}
                onPointerMissed={(e) => (state.current = null)}
                // eslint-disable-next-line 
                onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
            >
                <group
                    position={[-0.17, -9.41, -0.38]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.07}>
                    <mesh
                        geometry={nodes.PlasticTop.geometry}
                        material={nodes.PlasticTop.material}
                        material-color={snap.items.Top}
                        visible={top === 'PLASTIC'}
                    />
                    <mesh
                        geometry={nodes.MeshTop.geometry}
                        material={nodes.MeshTop.material}
                        material-color={snap.items.Top}
                        visible={top === 'MESH'}
                    />
                </group>

                <group
                    position={[-0.17, -9.48, -0.38]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.07}>
                    <mesh
                        geometry={nodes.PlasticBottom.geometry}
                        material={nodes.PlasticBottom.material}
                        material-color={snap.items.Bottom}
                        visible={bott === 'PLASTIC'}
                    />
                    <mesh
                        geometry={nodes.MeshBottom.geometry}
                        material={nodes.MeshBottom.material}
                        material-color={snap.items.Bottom}
                        visible={bott === 'MESH'}
                    />
                </group>

                <group
                    position={[-0.14, -9.35, -0.38]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.07}>
                    <mesh
                        geometry={nodes.FlatTop.geometry}
                        material={nodes.FlatTop.material}
                        material-color={snap.items.Top}
                        visible={top === 'FLAT'}
                    />
                </group>

                <group
                    position={[-0.17, -9.49, -0.38]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.07}>
                    <mesh
                        geometry={nodes.FlatBottom.geometry}
                        material={nodes.FlatBottom.material}
                        material-color={snap.items.Bottom}
                        visible={bott === 'FLAT'}
                    />
                    <mesh
                        geometry={nodes.ShortChair.geometry}
                        material={nodes.ShortChair.material}
                        material-color={snap.items.ShortChair}
                        visible={legs === 'CHAIR'}
                    />
                    <mesh
                        geometry={nodes.TextileTop.geometry}
                        material={nodes.TextileTop.material}
                        material-color={snap.items.Top}
                        visible={top === 'SOFT'}
                    />
                    <mesh
                        geometry={nodes.TextileBottom.geometry}
                        material={nodes.TextileBottom.material}
                        material-color={snap.items.Bottom}
                        visible={bott === 'SOFT'}
                    />
                    <mesh
                        geometry={nodes.TallChair.geometry}
                        material={nodes.TallChair.material}
                        material-color={snap.items.Legs}
                        visible={legs === 'TALL'}
                    />
                </group>
            </group>
            <group
                position={[-0.17, -9.49, -0.38]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.07}>
                <mesh
                    geometry={nodes.Base.geometry}
                    material={materials.Floor}
                    material-color={snap.items.Floor}
                    visible={legs === 'CHAIR'}
                />
            </group>
        </>
    )
}

export default Model;