import { motion, useReducedMotion } from "framer-motion";

const HeroContent = () => {
    const prefersReducedMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            className="max-w-5xl text-center text-white"
            variants={containerVariants}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="show"
        >
            <motion.p
                variants={itemVariants}
                className="mb-5 text-sm sm:text-base md:text-lg font-medium tracking-[0.28em] uppercase text-purple-300/90"
            >
                Digital Design & Development Studio
            </motion.p>

            <motion.h1
                id="hero-title"
                variants={itemVariants}
                className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-balance"
            >
                We design and build websites that feel{" "}
                <span className="bg-linear-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    simple, fast, and human.
                </span>
            </motion.h1>

            <motion.p
                variants={itemVariants}
                className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 text-slate-200/90"
            >
                SIRA Digital helps startups and small businesses create clean,
                scalable websites that support growth, build trust, and convert better.
            </motion.p>

            <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
                <a
                    href="#Contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                    Start a Project
                </a>

                <a
                    href="#OurWork"
                    className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                    See our work
                </a>
            </motion.div>

            <motion.p
                variants={itemVariants}
                className="mt-8 text-xs sm:text-sm text-slate-300/80"
            >
                Trusted by startups, local businesses, and growing brands.
            </motion.p>
        </motion.div>
    );
};

export default HeroContent;