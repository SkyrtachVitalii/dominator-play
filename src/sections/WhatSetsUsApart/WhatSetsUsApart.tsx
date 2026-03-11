import { motion, type Variants } from "framer-motion";
import { cn } from "../../utils/cn";
import styles from "./WhatSetsUsApart.module.scss";
import { AccordionItem } from "../../components/AccordionItem/AccordionItem";

const leftColumnData = [
  { title: "Flexible game customization", content: "We offer tailored mechanics and branding options to ensure the games perfectly align with your casino's unique style and audience preferences." },
  { title: "Gamification with advantage", content: "Engage players longer with built-in tournaments, missions, and achievements designed to boost retention." },
  { title: "Configurable game architecture", content: "Our flexible backend allows operators to adjust RTP, volatility, and bet limits dynamically." },
  { title: "Designed for lobby visibility", content: "Eye-catching thumbnails and high-performance loading times to maximize click-through rates from your lobby." },
];

const rightColumnData = [
  { title: "24/7 Technical support", content: "Our dedicated technical team is always online to ensure maximum uptime and rapid issue resolution." },
  { title: "Exclusive early access", content: "Partner with us to get first hands on our upcoming titles before they hit the general market." },
  { title: "Real-time analytics", content: "Access detailed dashboards to monitor player behavior, revenue spikes, and game performance in real-time." },
  { title: "Custom integration", content: "Seamless and fast API integration into any existing platform or aggregator with zero downtime." },
];

// 1. Варіанти для всієї секції (запускає загальний каскад)
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Затримка між появою заголовка і колонок
    },
  },
};

// 2. Варіанти для окремої колонки (запускає каскад всередині колонки)
const columnVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Затримка між появою підзаголовка та кожним AccordionItem
    },
  },
};

// 3. Варіанти для кожного окремого елемента (виїзд знизу)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export const WhatSetsUsApart = () => {
  return (
    <section className="main-container">
      {/* Головний контейнер слухає скрол */}
      <motion.div 
        className={styles.wrapper}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Головний заголовок секції */}
        <motion.h2 
          variants={itemVariants}
          className={cn("typo-section-title text-snow", styles.title)}
        >
          What sets us apart
        </motion.h2>

        <div className={styles.grid}>
          
          {/* Ліва колонка (має власні columnVariants для каскаду всередині) */}
          <motion.div variants={columnVariants} className={styles.column}>
            <motion.h3 variants={itemVariants} className="typo-accordion-title text-snow m-0">
              What makes us different
            </motion.h3>
            <div className={styles.accordionList}>
              {leftColumnData.map((item, idx) => (
                <motion.div key={`left-${idx}`} variants={itemVariants}>
                  <AccordionItem 
                    title={item.title} 
                    content={item.content} 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Права колонка (теж запускає свій каскад) */}
          <motion.div variants={columnVariants} className={styles.column}>
            <motion.h3 variants={itemVariants} className="typo-accordion-title text-snow m-0">
              Partner benefits
            </motion.h3>
            <div className={styles.accordionList}>
              {rightColumnData.map((item, idx) => (
                <motion.div key={`right-${idx}`} variants={itemVariants}>
                  <AccordionItem 
                    title={item.title} 
                    content={item.content} 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};