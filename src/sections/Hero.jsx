import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import { Suspense, lazy } from "react";
import { useScrollProgressRef } from "../hook/useScrollProgress";

// Three.js and everything it pulls in are split into their own chunk so the
// rest of the page isn't stuck waiting behind that download/parse.
const HeroScene = lazy(() => import("../components/HeroScene"));

const Hero = () => {
    const isMobile =useMediaQuery({maxWidth: 853});
    const scrollRef = useScrollProgressRef();
    return (
        <section id="home" className="relative flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-x-hidden">
            <HeroText />
            <figure className="absolute inset-0" style={{width: "100vw", height: "100vh"}}>
                <div className="fixed inset-0 -z-5 pointer-events-none" style={{transform: "translateZ(0)"}}>
                    {/* fallback is null (not Loader) — Loader uses drei's <Html>, which
                        needs a mounted Canvas/R3F context; this boundary is just for the
                        HeroScene chunk itself downloading, before Canvas exists at all.
                        The real loading UI is HeroScene's own inner Suspense/Loader. */}
                    <Suspense fallback={null}>
                        <HeroScene isMobile={isMobile} scrollRef={scrollRef} />
                    </Suspense>
                </div>
            </figure>
        </section>
    )
}

export default Hero;
