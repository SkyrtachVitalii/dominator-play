// src/components/Cards/FeatureCard/FeatureCard.tsx
import { cn } from "../../../utils/cn";
import styles from "./FeatureCard.module.scss";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({ title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.cardContent}>
        <h3 className="typo-card-title-lg text-snow">
          {title}
        </h3>
        <p className="typo-card-desc text-snow/80">
          {description}
        </p>
      </div>
    </div>
  );
};