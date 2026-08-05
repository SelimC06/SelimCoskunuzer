import RegMarks from "../components/RegMarks";

const About = () => {
    return (
        <section id="about" className="c-space section-spacing pt-20 pb-24 md:pb-32">
            <div id="about-heading-block">
                <p className="node-label text-ember mb-3">Node 02 &mdash; About</p>
                <h2 className="text-heading text-maroon-bright text-glow mb-8">About</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-1 max-w-[65ch]">
                    <p className="font-serif text-ink text-glow leading-relaxed" style={{ fontSize: "var(--text-lede)" }}>
                        I split my time between two things that turn out to be the same
                        problem: understanding why graph neural networks fail, and shipping
                        the production ML that isn't allowed to.
                    </p>

                    <p className="mt-4 font-serif text-ink text-glow leading-relaxed" style={{ fontSize: "var(--text-body)" }}>
                        At Microsoft, I work on the ML infrastructure and knowledge graph
                        systems behind MS Teams, at a scale (300M+ monthly active users)
                        where a model that's 99% correct still fails constantly. At Georgia
                        Tech, I study how student networks lose information during knowledge
                        distillation and what actually prevents it. Before that, at Virginia
                        Tech, that same question turned into a published result.
                    </p>

                    <p className="mt-4 font-serif text-ink text-glow leading-relaxed" style={{ fontSize: "var(--text-body)" }}>
                        I'm a CS student at Texas A&amp;M. Most of what I know about
                        machine learning came from watching it break in specific,
                        explainable ways, then fixing the specific thing.
                    </p>

                    <div className="relative flex gap-10 items-center mt-10 w-fit">
                        {/* connecting line between the two affiliations */}
                        <div className="absolute left-[2.6rem] right-[2.6rem] top-1/2 -translate-y-1/2 border-t border-dashed border-ember/50 -z-10" />

                        <div className="flex items-center gap-3 border border-maroon/15 bg-paper px-5 py-3 w-fit" style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}>
                            <img
                                src="/assets/microsoft.png"
                                alt="Microsoft"
                                className="h-6 w-6 object-contain"
                            />
                            <span className="text-ink font-medium font-serif">
                                Microsoft
                            </span>
                        </div>

                        <div className="flex items-center gap-3 border border-maroon/15 bg-paper px-5 py-3 w-fit" style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}>
                            <img
                                src="/assets/A&M.png"
                                alt="Texas A&M"
                                className="h-6 w-6 object-contain"
                            />
                            <span className="text-ink font-medium font-serif">
                                Texas A&amp;M University
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                    <div id="about-photo" className="reg-marks">
                        <RegMarks />
                        <img
                            src="/assets/me.jpg"
                            alt="Selim Coskunuzer"
                            className="w-full max-w-xl border-8 border-maroon object-cover"
                            style={{ borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-card)" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
