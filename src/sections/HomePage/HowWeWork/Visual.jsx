import { motion, AnimatePresence } from "framer-motion"

// 🔹 images import
import step1 from "../../../assets/images/how-we-work/temp.png";
import step2 from "../../../assets/images/how-we-work/temp2.png";
import step3 from "../../../assets/images/how-we-work/temp3.png";
import step4 from "../../../assets/images/how-we-work/temp4.png";



// 🔹 array
const visuals = [step1, step2, step3, step4]

const Visual = ({ activeStep }) => {
  return (
    <div className="relative w-full h-80 sm:h-105 lg:h-130 rounded-2xl border border-gray-200 overflow-hidden bg-white mt-6 lg:mt-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeStep}
          src={visuals[activeStep]}   // 🔥 yahin image change ho rahi hai
          alt="How we work visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full object-contain"
        />
      </AnimatePresence>
    </div>
  )
}

export default Visual
