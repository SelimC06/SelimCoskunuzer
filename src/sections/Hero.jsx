import HeroText from "../components/HeroText";
import HeroGraph from "../components/HeroGraph";

const Hero = () => {
    return (
        <section id="home" className="relative flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between min-h-screen c-space gap-10 pt-28 md:pt-0">
            <HeroText />
            <div className="w-full max-w-lg md:max-w-2xl flex justify-center md:justify-end shrink-0">
                <HeroGraph />
            </div>
        </section>
    )
}

export default Hero;
