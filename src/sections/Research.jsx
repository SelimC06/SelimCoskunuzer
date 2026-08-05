import { research } from "../constants";
import ArtifactViewer from "../components/ArtifactViewer";

const Research = () => {
    const [loud, ...quiet] = research;

    return (
        <section id="research" className="c-space section-spacing pt-20">
            <div id="research-heading-block">
                <p className="node-label text-ember mb-3">Node 03 &mdash; Research</p>
                <h2 className="text-heading text-maroon-bright text-glow mb-8">Research &amp; Selected Work</h2>
            </div>

            {/* The loud entry — full width, gets the room the others don't */}
            <article className="flex flex-col lg:flex-row gap-8 items-start border border-maroon/15 bg-paper/60 p-6 lg:p-8" style={{ borderRadius: "var(--radius-lg)" }}>
                <div className="flex-1 min-w-0">
                    <p className="font-mono uppercase text-ember tracking-[0.15em]" style={{ fontSize: "var(--text-label)" }}>{loud.venue}</p>
                    <h3 className="font-display font-bold text-ink mt-2" style={{ fontSize: "var(--text-h2)" }}>{loud.title}</h3>
                    <p className="mt-4 font-serif text-ink leading-relaxed max-w-[65ch]" style={{ fontSize: "var(--text-body)" }}>
                        {loud.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {loud.tags.map((tag) => (
                            <span
                                key={tag}
                                className="border border-ember/25 bg-paper text-ember font-mono uppercase tracking-wide px-3 py-1"
                                style={{ fontSize: "0.6875rem", borderRadius: "var(--radius-sm)" }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-[440px] shrink-0">
                    <ArtifactViewer artifact={loud.artifact} />
                </div>
            </article>

            {/* Quieter entries — same component, deliberately less space each */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
                {quiet.map((item) => (
                    <article key={item.id} className="flex flex-col border border-maroon/15 bg-paper/40 p-5" style={{ borderRadius: "var(--radius-lg)" }}>
                        <p className="font-mono uppercase text-ink-soft tracking-[0.15em]" style={{ fontSize: "var(--text-micro)" }}>{item.venue}</p>
                        <h4 className="font-display font-bold text-ink mt-1.5 text-lg">{item.title}</h4>
                        <p className="mt-3 font-serif text-ink-soft leading-relaxed text-sm">
                            {item.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="border border-maroon/15 bg-paper text-ink-soft font-mono uppercase tracking-wide px-2.5 py-1"
                                    style={{ fontSize: "0.625rem", borderRadius: "var(--radius-sm)" }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4">
                            <ArtifactViewer artifact={item.artifact} />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Research;
