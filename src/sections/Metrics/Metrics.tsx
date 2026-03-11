import { cn } from "../../utils/cn";
import styles from "./Metrics.module.scss";

export const Metrics = () => {
  return (
    <section className={cn("main-container", styles.wrapper)}>
      <h2 className={cn("typo-section-title text-snow uppercase text-center", styles.title)}>
        Metrics That Say More
      </h2>

      <div className="w-full max-w-[761px] mx-auto lg:h-[384px]">
        <div className="grid grid-cols-1 h-full sm:grid-cols-2 lg:grid-cols-[207fr_326fr_210fr] gap-[7px]">
          
          <div className="bg-plum rounded-[8px] flex flex-col items-center justify-center p-8 sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[200px] lg:min-h-full w-full h-full">
            <span className="typo-big-title text-snow">24/7</span>
            <span className="typo-card-title-sm text-snow font-normal! lowercase">support</span>
          </div>

          <div className="bg-plum rounded-[8px] flex flex-col items-center justify-center p-8 min-h-[160px] lg:min-h-[163px] w-full h-full">
            <h3 className="typo-small-title text-snow uppercase text-center">
              All Major<br />Crypto
            </h3>
          </div>

          <div className="bg-plum rounded-[8px] flex flex-col items-center justify-center p-8 min-h-[160px] lg:min-h-[163px] w-full h-full">
            <span className="typo-big-title text-snow">16+</span>
            <span className="typo-card-title-sm text-snow font-normal! lowercase">languages</span>
          </div>

          <div className="bg-plum rounded-[8px] flex flex-col items-center justify-center p-8 min-h-[160px] lg:min-h-[163px] w-full h-full">
            <h3 className="typo-small-title text-snow uppercase text-center">
              Global Fiat<br />Coverage
            </h3>
          </div>

          <div className="bg-plum rounded-[8px] flex flex-col items-center justify-center p-8 min-h-[160px] lg:min-h-[163px] w-full h-full">
            <h3 className="typo-small-title text-snow uppercase text-center">
              Mobile<br />First
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};