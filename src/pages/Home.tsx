import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Sub-components
import HeroSection from './home/HeroSection';
import WhatIsSection from './home/WhatIsSection';
import WhySection from './home/WhySection';
import WhatsLiveSection from './home/WhatsLiveSection';
import RoadmapSection from './home/RoadmapSection';
import AudiencePanels from './home/AudiencePanels';
import LookingAhead from '../components/LookingAhead';

function Home() {
  useScrollAnimation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isIntroActive, setIsIntroActive] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setIsIntroActive(false);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = window.scrollY;
          const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalScroll / (windowHeight || 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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

      {!isIntroActive && <Navbar />}
      <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }}></div>

      <HeroSection onIntroComplete={handleIntroComplete} />

      <div className="content-wrapper" style={{ marginBlock: '2rem', textAlign: 'center' }}>
        <h2 className="prem-hero-h1" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#101010', maxWidth: '1000px', margin: '0 auto' }}>
          Programmatic Advertising.<br />
          Built to Evolve.
        </h2>
      </div>

      <WhatIsSection />
      <WhySection />
      <WhatsLiveSection />
      <RoadmapSection />
      <LookingAhead />
      <AudiencePanels />


      <Footer />
    </div>
  );
}

export default Home;

