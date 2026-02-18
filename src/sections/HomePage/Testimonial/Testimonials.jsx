import { motion } from "framer-motion";
import TestimonialCard from "../../../components/Testimonial/TestimonialCard";

const testimonialsData = [
    {
        name: "Rahul Sharma",
        role: "Founder, Local Brand",
        review:
            "SIRA Digital completely transformed our online presence. The website looks premium and performs smoothly. Highly professional execution.",
    },
    {
        name: "Anjali Verma",
        role: "Content Creator",
        review:
            "Working with SIRA Digital was seamless. Clean design, clear communication, and strong attention to detail.",
    },
    {
        name: "Aman Gupta",
        role: "Startup Owner",
        review:
            "From strategy to final execution, everything was handled perfectly. The team truly understands digital growth.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Testimonials = () => {
    return (
        <section className="bg-[#f8f8f8] py-28 px-6 lg:px-16 overflow-hidden reveal-up">
            <div className="max-w-7xl mx-auto text-center">

                <p className="text-sm uppercase tracking-widest text-purple-900 font-semibold mb-4">
                    Testimonials
                </p>

                <h2 className="text-4xl text-slate-900 lg:text-5xl font-bold mb-20 leading-tight">
                    Trusted by Growing Brands
                </h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {testimonialsData.map((item, index) => (
                        <TestimonialCard key={index} data={item} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonials;
