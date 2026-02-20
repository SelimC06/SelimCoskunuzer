import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import {Canvas} from "@react-three/fiber";
import { Car } from "../components/Car";
import { OrbitControls, Environment } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import Loader from "../components/Loader";
import { Suspense } from "react";
import { useScrollProgressRef } from "../hook/useScrollProgress";

const Hero = () => {
    const isMobile =useMediaQuery({maxWidth: 853});
    const scrollRef = useScrollProgressRef();
    const ease = scrollRef * scrollRef * (3 - 3 * scrollRef);
    const blurPx= 0+(2-0)*ease;
    return (
        <section id="home" className="relative flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-x-hidden">\
            <HeroText />
            {/*<ParallaxBackground />*/}
            <figure className="absolute inset-0" style={{width: "100vw", height: "100vh"}}>
                <div className="fixed inset-0 -z-5 pointer-events-none" style={{filter: `blur(${blurPx}px)`, transform: "translateZ(0)"}}>
                    <Canvas camera={{position:[0,1,3]}} gl={{ toneMappingExposure: 0.85 }} dpr={[1, 1.5]} shadows={false}>
                        <Suspense fallback={<Loader />}>
                        <ambientLight intensity={0.2} />
                        <directionalLight
                            position={[-4, 6, 3]}
                            intensity={0.6}
                        />
                        <directionalLight
                            position={[4, 2, -5]}
                            intensity={0.4}
                        />
                        <Environment preset="warehouse" intensity={0.45} /> {/* Studio also works */}
                        <Car isMobile={isMobile} enableZoom={false} scrollRef={scrollRef} />
                        </Suspense>
                    </Canvas>
                </div>
            </figure>
        </section>
    )
}

export default Hero;