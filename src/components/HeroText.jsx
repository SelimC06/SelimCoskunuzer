const HeroText = () => {
    return (
        <div className="z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <p className="node-label text-ember mb-3">Node 01 &mdash; Profile</p>
            <h1
                className="font-display font-bold text-maroon-bright tracking-tight text-glow"
                style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, var(--text-hero))", lineHeight: 1.05 }}
            >
                Selim Coskunuzer
            </h1>
            <div className="flex flex-col items-center md:items-start mt-4 gap-1">
                <p className="font-mono uppercase text-ember font-medium" style={{ fontSize: "var(--text-label)", letterSpacing: "0.2em" }}>
                    Machine Learning Engineer
                </p>
                <p className="font-mono uppercase text-ink-soft" style={{ fontSize: "var(--text-label)", letterSpacing: "0.2em" }}>
                    Texas A&amp;M University
                </p>
            </div>
            <p className="mt-6 font-serif text-ink leading-relaxed max-w-md" style={{ fontSize: "var(--text-lede)" }}>
                I research how graph neural networks fail and recover, and ship
                the production ML that runs on top of them.
            </p>
        </div>
    );
};

export default HeroText;
