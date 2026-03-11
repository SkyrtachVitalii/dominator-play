// src/components/Hero/Hero.tsx
import { cn } from "../../utils/cn";
import { Button } from "../../components/Buttons/Button";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={cn("main-container")}>
      <div className={cn("main-container rounded-lg", styles.heroWrapper)}>
        <div className={styles.content}>
          <h1 className="typo-section-title text-snow m-0">
            MAKE CONTROL.
            <br />
            DOMINATE.
            <br />
            SCALE REVENUE.
          </h1>

          <p className={cn("typo-p-large text-snow m-0", styles.description)}>
            Dominator Play is a performance-focused game studio that builds
            scalable games to help operators boost engagement, retention, and
            revenue.
          </p>

          <Button
            variant="solid"
            className={cn(
              "bg-neon-pink! text-white hover:bg-neon-pink/80 border-none! rounded-lg",
              "w-full sm:w-68",
              "h-12 sm:h-15 md:h-20.5",
              "mt-2 md:mt-4",
            )}
          >
            Dominate Now
          </Button>
        </div>
      </div>
    </section>
  );
};
