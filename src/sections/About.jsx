const About = () => {
    return (
        <section id="about" className="c-space section-spacing pt-20">
            <h2 className="text-heading text-ink text-outline-white mb-8">About Me</h2>
            <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-1">
            <p className="mt-6 text-base md:text-lg max-w-3xl leading-relaxed font-semibold text-ink text-outline-white">
                Hi! I’m Selim, a Computer Science student at Texas A&M with a strong
                interest in technology, problem-solving, and continuous learning.
                I enjoy exploring how software and data can be used to build meaningful
                and impactful tools.
            </p>

            <p className="mt-4 text-base md:text-lg max-w-4xl leading-relaxed font-semibold text-ink text-outline-white">
                I’m especially interested in machine learning, artificial intelligence,
                and software development, and I love learning how systems work behind
                the scenes. Outside of coding, I enjoy staying active, learning new
                skills, and finding creative ways to improve both personally and
                professionally.
            </p>

            <p className="mt-4 text-base md:text-lg max-w-3xl leading-relaxed font-semibold text-ink text-outline-white">
                I’m always curious, motivated, and excited to take on new challenges
                that help me grow as a developer and as a person.
            </p>

            <div className="relative flex gap-10 items-center mt-10 w-fit">
                {/* connecting line between the two affiliations */}
                <div className="absolute left-[2.6rem] right-[2.6rem] top-1/2 -translate-y-1/2 border-t border-dashed border-sand/70 -z-10" />

                <div className="flex items-center gap-3 rounded-xl border border-maroon/15 bg-paper px-5 py-3 shadow-sm w-fit">
                    <img
                        src="/assets/microsoft.png"
                        alt="Microsoft"
                        className="h-6 w-6 object-contain"
                    />
                    <span className="text-ink font-medium">
                        Microsoft
                    </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-maroon/15 bg-paper px-5 py-3 shadow-sm w-fit">
                    <img
                        src="/assets/A&M.png"
                        alt="A&M"
                        className="h-6 w-6 object-contain"
                    />
                    <span className="text-ink font-medium">
                        Texas A&M University
                    </span>
                </div>
            </div>

            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-sand" />
                    <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-sand" />
                    <img
                        src="/assets/me.jpg"
                        alt="About me"
                        className="w-full max-w-xl rounded-2xl border-8 border-maroon shadow-lg object-cover"
                    />
                </div>
            </div>
            </div>
        </section>
    )
}

export default About;
