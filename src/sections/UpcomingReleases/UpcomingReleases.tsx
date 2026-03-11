import { cn } from "../../utils/cn";
import { ReleaseTimerCard } from "../../components/cards/ReleaseTimerCard/ReleaseTimerCard";
import { GameCard } from "../../components/cards/GameCard/GameCard";
import { CtaCard } from "../../components/cards/CtaCard/CtaCard";
import styles from "./UpcomingReleases.module.scss";

export const UpcomingReleases = () => {
  const now = new Date();
  const startDate = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
  const targetDate = new Date(
    now.getTime() + 5 * 60 * 60 * 1000 + 8 * 60 * 1000,
  );

  return (
    <section className="main-container">
      <div className={styles.sectionWrapper}>
        <h2
          className={cn("typo-section-title text-snow uppercase", styles.title)}
        >
          Upcoming Releases
        </h2>

        <div className={styles.grid}>
          <ReleaseTimerCard
            startDate={startDate}
            targetDate={targetDate}
            bgImageUrl="/src/assets/game_bg_2.png"
          />
          <GameCard imageUrl="/src/assets/game_bg_1.png" alt="Cowboy Canwaty" />
          <ReleaseTimerCard
            startDate={startDate}
            targetDate={targetDate}
            bgImageUrl="/src/assets/game_bg_2.png"
          />

          <ReleaseTimerCard
            startDate={startDate}
            targetDate={targetDate}
            bgImageUrl="/src/assets/game_bg_2.png"
          />
          <ReleaseTimerCard
            startDate={startDate}
            targetDate={targetDate}
            bgImageUrl="/src/assets/game_bg_2.png"
          />
          <CtaCard />
        </div>
      </div>
    </section>
  );
};
