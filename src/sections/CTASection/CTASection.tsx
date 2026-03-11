import { motion, type Variants } from "framer-motion";
import { cn } from "../../utils/cn";
import { Button } from "../../components/Buttons/Button";
import styles from "./CTASection.module.scss";

// Варіанти для контейнера (запускаємо каскад)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Затримка між появою заголовка, тексту та кнопки
    },
  },
};

// Варіанти для елементів (плавний виїзд знизу)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export const CTASection = () => {
  return (
    <section className={cn("main-container", styles.containerCta)}>
      {/* Робимо внутрішній врапер motion.div і вішаємо тригер скролу */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Анімація почнеться, коли блок буде видно на 30%
        className={cn(
          "w-full flex flex-col items-center gap-[32px] lg:gap-[40px] text-center rounded-[8px] mx-auto", 
          styles.wrapper
        )}
      >
        <motion.h2 variants={itemVariants} className="typo-section-title text-snow uppercase">
          Dominate the next stage
        </motion.h2>
        
        <motion.p variants={itemVariants} className="typo-p-regular text-snow max-w-[1151px]">
          Partner with Dominator Play to launch high-impact casino games that command operator 
          performance, own the lobby, and seize the competitive edge.
        </motion.p>

        {/* Обгортаємо кастомну кнопку в motion.div для безпечної анімації */}
        <motion.div variants={itemVariants}>
          <Button variant="solid" className="bg-neon-pink! text-snow w-[272px] h-17 xl:h-20.5">
            Dominate Your Market
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};