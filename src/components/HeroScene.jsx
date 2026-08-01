import { Canvas } from "@react-three/fiber";
import { Environment, AdaptiveDpr } from "@react-three/drei";
import { Suspense } from "react";
import { Car } from "./Car";
import Loader from "./Loader";

// Three.js/fiber/drei/the GLTF model are all heavy — kept in their own
// lazy-loaded chunk (see Hero.jsx) so the initial bundle a visitor has to
// download and parse before anything renders stays small.
const HeroScene = ({ isMobile, scrollRef }) => {
    return (
        <Canvas camera={{position:[0,1,3]}} gl={{ toneMappingExposure: 0.8,  antialias: false, powerPreference: "high-performance" }} dpr={[1, 1.5]} shadows={false}>
            <AdaptiveDpr pixelated />
            <Suspense fallback={<Loader />}>
                <ambientLight intensity={0.7} />
                <directionalLight
                    position={[-4, 6, 3]}
                    intensity={0.6}
                />
                <directionalLight
                    position={[4, 2, -5]}
                    intensity={0.4}
                />
                <Environment preset="city" intensity={0.45} /> {/* Studio also works */}
                <Car isMobile={isMobile} enableZoom={false} scrollRef={scrollRef} />
            </Suspense>
        </Canvas>
    );
};

export default HeroScene;
