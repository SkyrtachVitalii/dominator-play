import "./App.scss";
import { Header } from "./layout/Header/Header";
import { Hero } from "./sections/Hero/Hero";
import { PerformanceSection } from "./sections/PerformanceSection/PerformanceSection";
import { UpcomingReleases } from "./sections/UpcomingReleases/UpcomingReleases";
import { WhatSetsUsApart } from "./sections/WhatSetsUsApart/WhatSetsUsApart";
import { PartnerNetwork } from "./sections/PartnerNetwork/PartnerNetwork";
import { Metrics } from "./sections/Metrics/Metrics";
import { CTASection } from "./sections/CTASection/CTASection";
import { Footer } from "./layout/Footer/Footer";

function App() {
  return (
    <div className="min-h-[50vh]">
      <Header />
      <main>
        <Hero />
        <PerformanceSection />
        <UpcomingReleases />
        <WhatSetsUsApart />
        <PartnerNetwork />
        <Metrics />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
