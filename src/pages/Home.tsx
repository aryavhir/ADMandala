import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';

// Sub-components
import HeroSection from './home/HeroSection';
import ScrollingFeatures from './home/ScrollingFeatures';
import WhatIsSection from './home/WhatIsSection';
import WhySection from './home/WhySection';
import WhatsLiveSection from './home/WhatsLiveSection';
import RoadmapSection from './home/RoadmapSection';
import AudiencePanels from './home/AudiencePanels';
import LookingAhead from './home/LookingAhead';

function Home() {
  useScrollAnimation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / (windowHeight || 1);
      setScrollProgress(scroll);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <Helmet>
        <title>AdMandala | Programmatic Advertising. Built to Evolve.</title>
        <meta
          name="description"
          content="AdMandala aims to help publishers and advertisers maximize revenue through decentralized ad infrastructure."
        />
      </Helmet>

      <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }}></div>

      <HeroSection />
      <ScrollingFeatures />
      <WhatIsSection />
      <WhySection />
      <WhatsLiveSection />
      <RoadmapSection />
      <AudiencePanels />
      <LookingAhead />

      <Footer />
    </div>
  );
}

export default Home;

