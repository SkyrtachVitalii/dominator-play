import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import type { ReleaseTimingProps } from "../../types/types";
import styles from "./CountdownTimer.module.scss";

export const CountdownTimer = ({
  targetDate,
}: Pick<ReleaseTimingProps, "targetDate">) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num: number) => num.toString().padStart(2, "0");

  const timeBlocksRaw = [
    { label: "day", value: timeLeft.days, showColon: false },
    { label: "hour", value: timeLeft.hours, showColon: true },
    { label: "minutes", value: timeLeft.minutes, showColon: true },
    { label: "seconds", value: timeLeft.seconds, showColon: true },
  ];

  let hasStarted = false;
  const timeBlocks = timeBlocksRaw.map((block) => {
    if (block.value > 0) {
      hasStarted = true;
    }
    return {
      ...block,
      isActive: hasStarted,
    };
  });

  return (
    <div className="flex items-start justify-center gap-1">
      {timeBlocks.map((block) => {
        const strValue = pad(block.value);

        const numberColorClass = block.isActive
          ? "text-neon-pink"
          : "text-[#1A1A1A] drop-shadow-md";

        const labelColorClass = block.isActive
          ? "text-[#ffffff]"
          : "text-[#1A1A1A] font-bold";

        return (
          <div key={block.label} className="flex items-start">
            {block.showColon && (
              <span className={cn("text-snow/70 drop-shadow-md mr-1", styles.fluidNumber)}>
                :
              </span>
            )}
            <div className="flex flex-col items-center">
              <span
                className={cn("font-bold", numberColorClass, styles.fluidNumber)}
              >
                {strValue}
              </span>
              <span
                className={cn(
                  "typo-timer-label lowercase mt-1 md:mt-2",
                  labelColorClass,
                  styles.fluidSubtitle,
                )}
              >
                {block.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
