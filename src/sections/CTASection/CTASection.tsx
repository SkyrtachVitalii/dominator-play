import { cn } from "../../utils/cn";
import { Button } from "../../components/Buttons/Button";
import styles from "./CTASection.module.scss";

export const CTASection = () => {
  return (
    <section className={cn("main-container", styles.containerCta)}>
      <div 
        className={cn(
          "w-full flex flex-col items-center gap-[32px] lg:gap-[40px] text-center rounded-[8px] mx-auto", 
          styles.wrapper
        )}
      >
        <h2 className="typo-section-title text-snow uppercase">
          Dominate the next stage
        </h2>
        
        <p className="typo-p-regular text-snow max-w-[1151px]">
          Partner with Dominator Play to launch high-impact casino games that command operator 
          performance, own the lobby, and seize the competitive edge.
        </p>

        <Button variant="solid" className="bg-neon-pink! text-snow w-[272px] h-17 xl:h-20.5">
          Dominate Your Market
        </Button>
      </div>
    </section>
  );
};