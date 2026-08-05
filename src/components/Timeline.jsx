"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ArtifactViewer from "./ArtifactViewer";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="c-space mt-24 md:mt-32 pt-20 pb-4 md:pb-6" ref={containerRef}>
            <div id="experience-heading-block">
                <p className="node-label text-ember relative md:top-4">Node 04 &mdash; Experience</p>
                <h2 className="text-heading text-ink text-glow relative md:top-4 mt-3">Experience</h2>
            </div>
            <div ref={ref} className="relative pb-10 mt-6">
                {data.map((item) => (
                    <div key={`${item.title}-${item.date}`} className="relative flex items-start pt-6 md:pt-16">
                        <div className="relative flex w-10 justify-center">
                            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full left-1/2 -translate-x-1/2 bg-paper border-2 border-maroon/25">
                                <div className="w-3 h-3 rounded-full bg-ember" />
                            </div>
                        </div>

                        <div className="w-full pl-6 md:pl-8 flex flex-col lg:flex-row lg:items-center gap-10">
                            <div className="flex-1 min-w-0">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-display text-3xl font-bold text-ink text-glow">{item.date}</h3>
                                <div className="flex items-center gap-3">
                                <h3 className="font-display text-xl md:text-2xl font-bold text-ink text-glow">
                                    {item.title}</h3>
                                    <div className="flex items-center border border-maroon/15 bg-paper px-1 py-1 w-fit" style={{ borderRadius: "var(--radius-md)" }}>
                                    <img
                                        src={item.image}
                                        alt={`${item.title} logo`}
                                        className={`object-contain ${item.title === "Microsoft" ? "h-6 w-6" : "h-8 w-8"}`}
                                    />
                                    </div>
                                </div>
                                <h4 className="font-mono text-xs md:text-sm uppercase tracking-[0.15em] text-ember text-glow">
                                    {item.job}
                                </h4>
                            </div>

                            <div className="mt-6 ml-2 md:ml-4 max-w-[60ch] border border-maroon/15 bg-paper/90 px-5 py-4" style={{ borderRadius: "var(--radius-lg)" }}>
                                {item.contents.map((content, i) => (
                                    <p className="mb-3 last:mb-0 font-serif text-ink" style={{ fontSize: "var(--text-body)", lineHeight: 1.6 }} key={i}>
                                        {content}
                                    </p>
                                ))}
                            </div>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {item.tags?.map((tag) => (
                              <span
                                key={`${item.title}-${item.date}-${tag}`}
                                className="rounded-full bg-paper px-3 py-1 font-mono text-[11px] tracking-wide uppercase text-ember border border-ember/25"
                              >
                                {tag}
                              </span>
                              ))}
                            </div>
                        </div>
                        {item.artifact && (
                            <div className="w-full lg:w-[560px] xl:w-[650px] shrink-0 mt-4 lg:mt-0">
                                <ArtifactViewer artifact={item.artifact} />
                            </div>
                        )}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-4.5 left-0 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-maroon/30 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-maroon-dark via-ember to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
