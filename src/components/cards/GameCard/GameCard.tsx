import { cn } from "../../../utils/cn";
import styles from "./GameCard.module.scss";

export const GameCard = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => {
  return (
    <div className={cn(styles.cardBase, styles.gameCard)}>
      <img src={imageUrl} alt={alt} className={styles.gameImage} />
    </div>
  );
};