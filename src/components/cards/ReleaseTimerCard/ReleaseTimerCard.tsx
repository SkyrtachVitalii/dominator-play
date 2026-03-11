import { cn } from "../../../utils/cn";
import { CountdownTimer } from "../../CountdownTimer/CountdownTimer";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import type { ReleaseTimingProps } from "../../../types/types";
import styles from "./ReleaseTimerCard.module.scss";

interface Props extends ReleaseTimingProps {
  bgImageUrl: string;
}

export const ReleaseTimerCard = ({ startDate, targetDate, bgImageUrl }: Props) => {
  return (
    <div className={cn(styles.cardBase, styles.timerCard)}>
      <img src={bgImageUrl} alt="Background blur" className={styles.bgImage} />
      
      <div className={cn("gap-20 2xl:gap-30", styles.content)}>
        <CountdownTimer targetDate={targetDate} />
        <ProgressBar startDate={startDate} targetDate={targetDate} />
      </div>
    </div>
  );
};