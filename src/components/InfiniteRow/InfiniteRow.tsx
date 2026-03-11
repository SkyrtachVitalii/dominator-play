import { motion } from "framer-motion";
import { PartnerCard } from "../cards/PartnerCard/PartnerCard";

interface InfiniteRowProps {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}

export const InfiniteRow = ({ images, direction = "left", speed = 35 }: InfiniteRowProps) => {
  return (
    <div className="flex overflow-hidden w-full group">
      <motion.div
        className="flex w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
          {images.map((src, idx) => (
            <PartnerCard key={`set1-${idx}`} src={src} />
          ))}
        </div>
        
        <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
          {images.map((src, idx) => (
            <PartnerCard key={`set2-${idx}`} src={src} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};