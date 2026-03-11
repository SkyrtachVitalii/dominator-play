// src/components/PerformanceSection/PerformanceSection.tsx
import { motion, type Variants } from "framer-motion";
import { cn } from "../../utils/cn";
import { FeatureCard } from "../../components/cards/FeatureCard/FeatureCard";
import styles from "./PerformanceSection.module.scss";

// Виносимо дані карток у масив
const featuresData = [
  {
    title: "Full Customization:",
    description: "RTP, Volatility & Branding",
  },
  {
    title: "Mobile-First",
    description: "Development Powered by Product Analytics",
  },
  {
    title: "Progression",
    description: "Gamification Built for Retention & LTV",
  },
  {
    title: "Operator Growth",
    description: "Support Through Content & Promotions",
  },
];

// Варіанти для контейнерів (налаштовуємо каскад)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

// Варіанти для елементів (виїзд знизу)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export const PerformanceSection = () => {
  return (
    <section className="main-container">
      {/* Головний врапер тепер звичайний div, він не запускає анімацію всієї секції */}
      <div className={styles.sectionWrapper}>
        
        {/* 1. Вкладений каскад для заголовка */}
        <motion.div 
          className={styles.header}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }} // Текст анімується, коли видно 40% блоку
        >
          <motion.h2 variants={itemVariants} className="typo-section-title text-snow m-0">
            DOMINATOR PLAY:<br />
            PATH TO PERFORMANCE
          </motion.h2>
          <motion.p variants={itemVariants} className={cn(
            "typo-p-large text-snow mt-10",
            styles.description
          )}>
            We empower operators with customizable, scalable games
            built to earn placement, sustain retention, and drive long-
            term revenue growth.
          </motion.p>
        </motion.div>

        {/* 2. Вкладений каскад для сітки карток */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Картки починають з'являтись, щойно видно 10% сітки
        >
          {featuresData.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard 
                title={feature.title} 
                description={feature.description} 
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};