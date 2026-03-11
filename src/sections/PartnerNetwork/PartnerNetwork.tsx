import { motion, type Variants } from "framer-motion";
import { cn } from "../../utils/cn";
import { InfiniteRow } from "../../components/InfiniteRow/InfiniteRow";
import styles from "./PartnerNetwork.module.scss";

const DUMMY_LOGOS = [
  "/partnersLogos/evoplay.svg",
  "/partnersLogos/quickspin.svg",
  "/partnersLogos/vizard.svg",
  "/partnersLogos/justplay.svg",
  "/partnersLogos/truelab.svg",
  "/partnersLogos/quickspin.svg",
  "/partnersLogos/evoplay.svg",
  "/partnersLogos/vizard.svg",
  "/partnersLogos/justplay.svg",
  "/partnersLogos/truelab.svg",
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
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

export const PartnerNetwork = () => {
  return (
    <section className={cn("relative z-10 w-full bg-dark-purple", styles.wrapper)}>
      
      <motion.h2 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className={cn("typo-section-title text-snow uppercase text-center", styles.title)}
      >
        Partner Network
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-[1920px] mx-auto flex flex-col gap-4 sm:gap-8"
      >
        <motion.div variants={itemVariants}>
          <InfiniteRow images={DUMMY_LOGOS} direction="left" speed={40} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <InfiniteRow images={DUMMY_LOGOS} direction="right" speed={45} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <InfiniteRow images={DUMMY_LOGOS} direction="left" speed={35} />
        </motion.div>
      </motion.div>
      
    </section>
  );
};