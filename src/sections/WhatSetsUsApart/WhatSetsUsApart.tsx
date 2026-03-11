import { cn } from "../../utils/cn";
import styles from "./WhatSetsUsApart.module.scss";
import { AccordionItem } from "../../components/AccordionItem/AccordionItem";

const leftColumnData = [
  { title: "Flexible game customization", content: "We offer tailored mechanics and branding options to ensure the games perfectly align with your casino's unique style and audience preferences." },
  { title: "Gamification with advantage", content: "Engage players longer with built-in tournaments, missions, and achievements designed to boost retention." },
  { title: "Configurable game architecture", content: "Our flexible backend allows operators to adjust RTP, volatility, and bet limits dynamically." },
  { title: "Designed for lobby visibility", content: "Eye-catching thumbnails and high-performance loading times to maximize click-through rates from your lobby." },
];

const rightColumnData = [
  { title: "24/7 Technical support", content: "Our dedicated technical team is always online to ensure maximum uptime and rapid issue resolution." },
  { title: "Exclusive early access", content: "Partner with us to get first hands on our upcoming titles before they hit the general market." },
  { title: "Real-time analytics", content: "Access detailed dashboards to monitor player behavior, revenue spikes, and game performance in real-time." },
  { title: "Custom integration", content: "Seamless and fast API integration into any existing platform or aggregator with zero downtime." },
];

export const WhatSetsUsApart = () => {
  return (
    <section className="main-container">
      <div className={styles.wrapper}>
        
        <h2 className={cn("typo-section-title text-snow", styles.title)}>
          What sets us apart
        </h2>

        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className="typo-accordion-title text-snow m-0">
              What makes us different
            </h3>
            <div className={styles.accordionList}>
              {leftColumnData.map((item, idx) => (
                <AccordionItem 
                  key={`left-${idx}`} 
                  title={item.title} 
                  content={item.content} 
                />
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3 className="typo-accordion-title text-snow m-0">
              Partner benefits
            </h3>
            <div className={styles.accordionList}>
              {rightColumnData.map((item, idx) => (
                <AccordionItem 
                  key={`right-${idx}`} 
                  title={item.title} 
                  content={item.content} 
                />
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};