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

// Варіанти для контейнера з рядами (каскадна поява)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Кожен наступний ряд з'являтиметься з невеликою затримкою
    },
  },
};

// Варіанти для заголовка та окремих рядів (виїзд знизу)
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
      
      {/* 1. Незалежний тригер для заголовка */}
      <motion.h2 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Спрацює, коли заголовок буде наполовину на екрані
        className={cn("typo-section-title text-snow uppercase text-center", styles.title)}
      >
        Partner Network
      </motion.h2>

      {/* 2. Незалежний тригер та каскад для рядів */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Каскад почнеться, коли юзер побачить початок блоку з рядами
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