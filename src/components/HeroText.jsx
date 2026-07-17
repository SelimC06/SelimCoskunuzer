import {motion} from "motion/react";

const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const HeroText = () => {
    return <div className="z-10 mt-20 text-center md:mt-40 md:text-left">
        <div className="flex-col hidden md:flex c-space">
            <motion.p className="node-label text-ember mb-3"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.6}}>Node 01 &mdash; Profile</motion.p>
            <motion.h1 className="font-display text-7xl font-bold text-maroon tracking-tight text-glow"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.8}}>Selim Coskunuzer</motion.h1>
            <div className="flex flex-col items-start mt-4 gap-1">
                <motion.p className="font-mono text-sm tracking-[0.2em] uppercase text-ember font-medium"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:2}}>Machine Learning Engineer</motion.p>
                <motion.p className="font-mono text-sm tracking-[0.2em] uppercase text-ink-soft"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:2.2}}>Texas A&amp;M University</motion.p>
            </div>
        </div>
        <div className="flex flex-col space-y-5 md:hidden">
            <motion.p className="node-label text-ember justify-center"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:.6}}>Node 01 &mdash; Profile</motion.p>
            <motion.p className="font-display text-4xl font-bold text-maroon tracking-tight text-glow"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:.8}}>Selim Coskunuzer</motion.p>
            <div className="flex flex-col items-center gap-1">
                <motion.p className="font-mono text-xs tracking-[0.2em] uppercase text-ember font-medium"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1}}>
                    Machine Learning Engineer
                </motion.p>
                <motion.p className="font-mono text-xs tracking-[0.2em] uppercase text-ink-soft"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.2}}>
                    Texas A&amp;M University
                </motion.p>
            </div>
        </div>
    </div>
};

export default HeroText;
