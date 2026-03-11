import { cn } from "../../../utils/cn";
import { Button } from "../../Buttons/Button";
import styles from "./CtaCard.module.scss";

export const CtaCard = () => {
  return (
    <div className={cn(styles.cardBase, styles.ctaCard)}>
      <h3 className="typo-card-title-lg text-snow m-0 uppercase max-w-[80%]">
        Stay ahead of the curve
      </h3>
      <Button variant="solid" className="bg-neon-pink! text-white w-full max-w-68 h-17 xl:h-20.5">
        Summon us
      </Button>
    </div>
  );
};
