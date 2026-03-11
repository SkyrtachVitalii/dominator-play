import { cn } from "../../utils/cn";
import { InfiniteRow } from "../../components/InfiniteRow/InfiniteRow";
import styles from "./PartnerNetwork.module.scss";

const DUMMY_LOGOS = [
  "/partnersLogos/evoplay.svg",
  "/partnersLogos/quickspin.svg",
  "/partnersLogos/vizard.svg",
  "/partnersLogos/justplay.svg",
  "/partnersLogos/truelab.svg",
  "/partnersLogos/quickspin.svg",
  "/partnersLogos/evoplay.svg",
  "/partnersLogos/vizard.svg",
  "/partnersLogos/justplay.svg",
  "/partnersLogos/truelab.svg",
];

export const PartnerNetwork = () => {
  return (
    <section className={cn("relative z-10 w-full bg-dark-purple", styles.wrapper)}>
      <h2 className={cn("typo-section-title text-snow uppercase text-center", styles.title)}>
        Partner Network
      </h2>

      <div className="w-full max-w-[1920px] mx-auto flex flex-col gap-4 sm:gap-8">
        <InfiniteRow images={DUMMY_LOGOS} direction="left" speed={40} />
        
        <InfiniteRow images={DUMMY_LOGOS} direction="right" speed={45} />
        
        <InfiniteRow images={DUMMY_LOGOS} direction="left" speed={35} />
      </div>
    </section>
  );
};