import HeroText from "../components/HeroText";
import {Canvas} from "@react-three/fiber";
import { Car } from "../components/Car";
import { Environment, AdaptiveDpr } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import Loader from "../components/Loader";
import { Suspense } from "react";
import { useScrollProgressRef } from "../hook/useScrollProgress";

const Hero = () => {
    const isMobile =useMediaQuery({maxWidth: 853});
    const scrollRef = useScrollProgressRef();
    return (
        <section id="home" className="relative flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-x-hidden">
            <HeroText />
            <figure className="absolute inset-0" style={{width: "100vw", height: "100vh"}}>
                <div className="fixed inset-0 -z-5 pointer-events-none" style={{transform: "translateZ(0)"}}>
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
                </div>
            </figure>
        </section>
    )
}

export default Hero;