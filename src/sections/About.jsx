import React from "react";

const About = () => {
    return (
        <section id="about" className="c-space section-spacing pt-20">
            <h2 className="text-heading text-[rgba(71,68,72,1)] mb-8">About Me</h2>
            <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-1">
            <p className="mt-6 text-body max-w-3xl leading-relaxed font-bold text-[rgba(71,68,72,1)]">
                Hi! I’m Selim, a Computer Science student at Texas A&M with a strong
                interest in technology, problem-solving, and continuous learning.
                I enjoy exploring how software and data can be used to build meaningful
                and impactful tools.
            </p>

            <p className="mt-4 text-body max-w-4xl leading-relaxed font-bold text-[rgba(71,68,72,1)]">
                I’m especially interested in machine learning, artificial intelligence,
                and software development, and I love learning how systems work behind
                the scenes. Outside of coding, I enjoy staying active, learning new
                skills, and finding creative ways to improve both personally and
                professionally.
            </p>

            <p className="mt-4 text-body max-w-3xl leading-relaxed font-bold text-[rgba(71,68,72,1)]">
                I’m always curious, motivated, and excited to take on new challenges
                that help me grow as a developer and as a person.
            </p>

            <div className="flex gap-6 items-start mt-8">
                {/* Microsoft Badge */}
                <div className="flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-5 py-3 shadow-sm w-fit">

                <img
                    src="/assets/microsoft.png"
                    alt="Microsoft"
                    className="h-6 w-6 object-contain"
                />

                <span className="text-gray-800 font-bold">
                    Microsoft
                </span>
                </div>
                {/* Microsoft Badge */}
                <div className="flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-5 py-3 shadow-sm w-fit">

                <img
                    src="/assets/A&M.png"
                    alt="A&M"
                    className="h-6 w-6 object-contain"
                />

                <span className="text-gray-800 font-bold">
                    Texas A&M University
                </span>
                </div>
            </div>

            </div>
            <div className="flex-1 flex justify-center lg:justify-end border-10 rounded-3xl border-[rgba(111,26,7,0.9)] shadow-lg object-cover">

                <img
                    src="/assets/me.jpg"
                    alt="About me"
                    className="
                    w-full
                    max-w-xl
                    rounded-xl
                    "
                />

            </div>
            </div>
        </section>
    )
}

export default About;