import { motion, type Variants } from "framer-motion";
import { cn } from "../../utils/cn";
import { ReleaseTimerCard } from "../../components/cards/ReleaseTimerCard/ReleaseTimerCard";
import { GameCard } from "../../components/cards/GameCard/GameCard";
import { CtaCard } from "../../components/cards/CtaCard/CtaCard";
import styles from "./UpcomingReleases.module.scss";

// Варіанти для контейнера сітки карток (каскад)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Кожна картка з'являється одна за одною
    },
  },
};

// Варіанти для карток і заголовка (виїзд знизу)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export const UpcomingReleases = () => {
  const now = new Date();
  const startDate = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
  const targetDate = new Date(
    now.getTime() + 5 * 60 * 60 * 1000 + 8 * 60 * 1000,
  );

  return (
    <section className="main-container">
      {/* Головний врапер тепер звичайний div, без загальної анімації */}
      <div className={styles.sectionWrapper}>
        
        {/* 1. Незалежний тригер для заголовка */}
        <motion.h2
          className={cn("typo-section-title text-snow uppercase", styles.title)}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }} // Спрацює, коли заголовок добре видно
        >
          Upcoming Releases
        </motion.h2>

        {/* 2. Незалежний тригер та каскад для сітки карток */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Каскад карток почнеться, щойно юзер доскролить до самої сітки
        >
          {/* Картки залишаються загорнутими в motion.div */}
          <motion.div variants={itemVariants}>
            <ReleaseTimerCard
              startDate={startDate}
              targetDate={targetDate}
              bgImageUrl="/assets/game_bg_2.png"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <GameCard imageUrl="/assets/game_bg_1.png" alt="Cowboy Canwaty" />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ReleaseTimerCard
              startDate={startDate}
              targetDate={targetDate}
              bgImageUrl="/assets/game_bg_2.png"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ReleaseTimerCard
              startDate={startDate}
              targetDate={targetDate}
              bgImageUrl="/assets/game_bg_2.png"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ReleaseTimerCard
              startDate={startDate}
              targetDate={targetDate}
              bgImageUrl="/assets/game_bg_2.png"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CtaCard />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};