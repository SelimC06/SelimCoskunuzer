import {motion} from "motion/react";

const HeroText = () => {
    const variants ={
        hidden:{opacity:0, x:-50},
        visible: {opacity:1, x:0},
    }
    return <div className="z-10
    mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-5xl font-medium text-[rgba(179,182,183,1)]" 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.8}}>Selim Coskunuzer</motion.h1>
            <div className="flex flex-col items-start">
                <motion.p className="text-6xl font-medium text-[rgba(111,26,7,1)] text-outline-white"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:2}}>Machine Learning Engineer</motion.p>
                <div></div>
                <motion.p className="text-5xl font-medium text-[rgba(179,182,183,1)]"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:2.2}}>Texas A&M University</motion.p>
                <motion.a
                href="#about"
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-[rgba(111,26,7,1)] px-5 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md hover:bg-[rgba(111,26,7,0.8)] transition"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:2.2}}
                >
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Scroll down
                <span className="text-lg leading-none">↓</span>
                </motion.a>
            </div>
        </div>
        <div className="flex flex-col space-y-6 md:hidden">
            <motion.p className="text-4xl font-medium text-[rgba(71,68,72,1)]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:.8}}>Selim Coskunuzer</motion.p>
            <div>
                <motion.p className="text-4xl font-black text-[rgba(71,68,72,1)]"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1}}>
                    Machine Learning Engineer
                </motion.p>
                <motion.p className="text-3xl font-black text-[rgba(71,68,72,1)]"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.2}}>
                    Texas A&M University
                </motion.p>
            </div>
        </div>
    </div>
};

export default HeroText;