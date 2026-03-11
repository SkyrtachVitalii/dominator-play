import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { cn } from "../../utils/cn";
import { Button } from "../../components/Buttons/Button";
import styles from "./Hero.module.scss";

// Варіанти для батьківського контейнера (налаштовуємо затримку між дочірніми елементами)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Затримка 0.2с між появою кожного елемента
      delayChildren: 0.1,
    },
  },
};

// Варіанти для кожного окремого елемента (виїзд знизу)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export const Hero = () => {
  return (
    <section className={cn("main-container")}>
      <div className={cn("main-container rounded-lg", styles.heroWrapper)}>
        {/* Додаємо motion.div та передаємо йому варіанти */}
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Заголовок */}
          <motion.h1 variants={itemVariants} className="typo-section-title text-snow m-0">
            MAKE CONTROL.
            <br />
            DOMINATE.
            <br />
            SCALE REVENUE.
          </motion.h1>

          {/* Опис */}
          <motion.p variants={itemVariants} className={cn("typo-p-large text-snow m-0", styles.description)}>
            Dominator Play is a performance-focused game studio that builds
            scalable games to help operators boost engagement, retention, and
            revenue.
          </motion.p>

          {/* Кнопка. Обгортаємо у motion.div, щоб безпечно анімувати кастомний компонент */}
          <motion.div variants={itemVariants} className="d-block w-full d-flex justify-center sm:justify-start">
            <Button
              variant="solid"
              className={cn(
                "bg-neon-pink! text-white hover:bg-neon-pink/80 border-none! rounded-lg",
                "w-68 block mx-auto! sm:mx-0!",
                "h-12 sm:h-15 md:h-20.5",
                "mt-2 md:mt-4",
              )}
            >
              Dominate Now
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};