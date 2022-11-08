import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from '@react-three/drei';
import Model from "./Model";

function myCanvas({ top, bott, legs, legsConfig, topConfig, botConfig, state }) {

    return (
        <>
            <Canvas orthographic camera={{ zoom: 28, position: [10, 10, 10] }} >
                <ambientLight intensity={0.4} />
                <spotLight intensity={0.4} position={[5, 40, 20]} />
                <spotLight intensity={0.75} position={[-15, 40, -60]} />
                <Suspense fallback={null}>
                    <Model
                        state={state}
                        top={top}
                        bott={bott}
                        legs={legs}
                        legsConfig={legsConfig}
                        topConfig={topConfig}
                        botConfig={botConfig} />
                    <ContactShadows rotation-x={Math.PI / 2} position={[0, 1, 0]} opacity={0.9} width={10} height={10} blur={1.5} far={4} />
                </Suspense>
                <OrbitControls 
                maxPolarAngle={Math.PI / 1.7} 
                enablePan={false} 
                enableRotate={true}
                minZoom={28}
                maxZoom={70}/>
            </Canvas>
        </>
    );
}


export default myCanvas;