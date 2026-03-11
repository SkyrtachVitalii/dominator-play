import { cn } from "../../../utils/cn";
import styles from "./PartnerCard.module.scss";

interface PartnerCardProps {
  src: string;
  alt?: string;
}

export const PartnerCard = ({ src, alt = "Partner Logo" }: PartnerCardProps) => {
  return (
    <div className={cn("flex items-center justify-center w-50 h-20 rounded-lg shrink-0 overflow-hidden", styles.cardBg)}>
      <img 
        src={src} 
        alt={alt} 
        className="max-w-[80%] max-h-[60%] object-contain pointer-events-none" 
      />
    </div>
  );
};