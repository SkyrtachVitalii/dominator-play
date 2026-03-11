// src/components/PerformanceSection/PerformanceSection.tsx
import { cn } from "../../utils/cn";
import { FeatureCard } from "../../components/cards/FeatureCard/FeatureCard";
import styles from "./PerformanceSection.module.scss";

// Виносимо дані карток у масив, щоб рендер був чистішим
const featuresData = [
  {
    title: "Full Customization:",
    description: "RTP, Volatility & Branding",
  },
  {
    title: "Mobile-First",
    description: "Development Powered by Product Analytics",
  },
  {
    title: "Progression",
    description: "Gamification Built for Retention & LTV",
  },
  {
    title: "Operator Growth",
    description: "Support Through Content & Promotions",
  },
];

export const PerformanceSection = () => {
  return (
    <section className="main-container">
      <div className={styles.sectionWrapper}>
        
        {/* Текстовий заголовок */}
        <div className={styles.header}>
          <h2 className="typo-section-title text-snow m-0">
            DOMINATOR PLAY:<br />
            PATH TO PERFORMANCE
          </h2>
          <p className={cn(
            "typo-p-large text-snow m-0",
            styles.description
          )}>
            We empower operators with customizable, scalable games
            built to earn placement, sustain retention, and drive long-
            term revenue growth.
          </p>
        </div>

        {/* Сітка карток */}
        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};