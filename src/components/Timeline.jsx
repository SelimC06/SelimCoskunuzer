"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="c-space pt-10 pb-4 md:pb-6" ref={containerRef}>
            <h2 className="text-heading relative md:top-4 text-[rgba(71,68,72,1)]">My Work Experience</h2>
            <div ref={ref} className="relative pb-10">
                {data.map((item, index) => (
                    <div key={index} className="relative flex items-start pt-6 md:pt-16">
                        <div className="relative flex w-10 justify-center">
                            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full left-1/2 -translate-x-1/2 bg-midnight">
                                <div className="w-4 h-4 border rounded-full bg-neutral-800 border-neutral-700" />
                            </div>
                        </div>

                        <div className="w-full pl-6 md:pl-8 flex flex-col lg:flex-row items-start gap-10">
                            <div className="flex-1 min-w-0">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-3xl md:text-3xl font-bold text-white text-outline-black">{item.date}</h3>
                                <div className="flex items-center gap-3">
                                <h3 className="text-xl md:text-2xl font-bold text-black text-outline-white">
                                    {item.title}</h3>
                                    <div className="flex items-center rounded-xl border border-gray-300 bg-white px-1 py-1 shadow-sm w-fit">
                                    <img
                                        src={item.image}
                                        alt="vtech"
                                        className="h-8 w-8 object-contain"
                                    />
                                    </div>
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-black text-outline-white">
                                    {item.job}
                                </h3>
                            </div>

                            <div className="mt-6 ml-2 md:ml-4 max-w-xl">
                                {item.contents.map((content, i) => (
                                    <p className="mb-4 text-white font-bold text-lg text-outline-black" key={i}>
                                        {content}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-[560px] xl:w-[650px] shrink-0 mt-4 lg:mt-0">
                            <ArtifactViewer artifact={item.artifact} />
                        </div>
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-4.5 left-0 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-black via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

const ArtifactViewer = ({ artifact }) => {
  if (!artifact) return null;

  if (artifact.type === "pdf") {
    return (
      <div className="rounded-2xl border border-black/10 bg-[rgba(111,26,7,0.9)] shadow-sm overflow-hidden">
        <div className="px-4 py-2 text-sm font-semibold text-black">
          {artifact.whatIsIt}
        </div>
        <iframe
          src={`${artifact.src}#toolbar=0&navpanes=0&scrollbar=0`}
          className="w-full h-[280px] lg:h-[300px] flex-1"
        />
        {/* <div className="p-3">
          <a
            href={artifact.src}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold underline"
          >
            Open PDF ↗
          </a>
        </div> */}
      </div>
    );
  }

  if (artifact.type === "website") {
    return (
      <div className="rounded-2xl border border-black/10 bg-[rgba(111,26,7,0.9)] shadow-sm overflow-hidden">
        <div className="px-4 py-2 text-sm font-semibold text-black">
          {artifact.whatIsIt}
        </div>
        <iframe
          src={artifact.src}
          className="w-full h-[280px] lg:h-[300px] flex-1"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
        {/* <div className="p-3">
          <a
            href={artifact.src}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold underline"
          >
            Visit site ↗
          </a>
        </div> */}
      </div>
    );
    }

  return null;
};
