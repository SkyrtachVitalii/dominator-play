import { motion, type Variants } from "framer-motion";
import { cn } from "../../utils/cn";
import styles from "./Metrics.module.scss";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export const Metrics = () => {
  return (
    <section className={cn("main-container", styles.wrapper)}>
      
      <motion.h2 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} 
        className={cn("typo-section-title text-snow uppercase text-center", styles.title)}
      >
        Metrics That Say More
      </motion.h2>

      <div className="w-full max-w-[761px] mx-auto lg:h-[384px]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          className="grid grid-cols-1 h-full sm:grid-cols-2 lg:grid-cols-[207fr_326fr_210fr] gap-[7px]"
        >
          
          <motion.div variants={itemVariants} className="bg-plum rounded-[8px] flex flex-col items-center justify-center p-8 sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[200px] lg:min-h-full w-full h-full">
            <span className="typo-big-title text-snow">24/7</span>
            <span className="typo-card-title-sm text-snow font-normal! lowercase">support</span>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-plum rounded-[8px] flex flex-col items-center justify-center p-8 min-h-[160px] lg:min-h-[163px] w-full h-full">
            <h3 className="typo-small-title text-snow uppercase text-center">
              All Major<br />Crypto
            </h3>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-plum rounded-[8px] flex flex-col items-center justify-center p-8 min-h-[160px] lg:min-h-[163px] w-full h-full">
            <span className="typo-big-title text-snow">16+</span>
            <span className="typo-card-title-sm text-snow font-normal! lowercase">languages</span>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-plum rounded-[8px] flex flex-col items-center justify-center p-8 min-h-[160px] lg:min-h-[209px] w-full h-full">
            <h3 className="typo-small-title text-snow uppercase text-center">
              Global Fiat<br />Coverage
            </h3>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-plum rounded-[8px] flex flex-col items-center justify-center p-8 min-h-[160px] lg:min-h-[209px] w-full h-full">
            <h3 className="typo-small-title text-snow uppercase text-center">
              Mobile<br />First
            </h3>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};