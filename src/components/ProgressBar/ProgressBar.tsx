import { useEffect, useState } from "react";
import type { ReleaseTimingProps } from "../../types/types";

export const ProgressBar = ({ startDate, targetDate }: ReleaseTimingProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date().getTime();
      const start = startDate.getTime();
      const target = targetDate.getTime();
      
      const total = target - start;
      const current = now - start;
      
      // Обчислюємо відсоток від 0 до 100
      let percentage = (current / total) * 100;
      percentage = Math.min(100, Math.max(0, percentage));
      
      setProgress(percentage);
    };

    calculateProgress();
    const interval = setInterval(calculateProgress, 1000);
    return () => clearInterval(interval);
  }, [startDate, targetDate]);

  return (
    <div className="w-[80%] max-w-[384px]  h-3.75 bg-white/10 rounded-full border-2 border-bordeaux overflow-hidden">
      <div 
        className="h-full bg-neon-pink transition-all duration-1000 ease-linear rounded-full"
        style={{ width: `${progress}%`, boxShadow: "0 0 10px rgba(255, 79, 139, 0.5)" }}
      />
    </div>
  );
};