import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const TestimonialCard = ({ data }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="relative bg-white rounded-2xl p-10 border border-gray-100 shadow-lg 
      transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
        >
            {/* Gradient Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-gray-100 via-white to-gray-100 opacity-0 group-hover:opacity-100 transition duration-500 -z-10 blur-xl"></div>

            {/* Quote Icon */}
            <div className="text-6xl font-bold text-gray-200 absolute top-6 right-8 select-none">
                “
            </div>

            {/* Stars */}
            <div className="flex mb-6 text-black tracking-wider">
                ★★★★★
            </div>

            {/* Review */}
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {data.review}
            </p>

            {/* Divider */}
            <div className="h-px bg-gray-100 mb-6"></div>

            {/* Client Info */}
            <div>
                <h4 className="font-semibold text-lg text-slate-800">
                    {data.name}
                </h4>
                <p className="text-sm text-gray-500">
                    {data.role}
                </p>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
