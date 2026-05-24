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
          content="AdMandala is a programmatic advertising exchange connecting publishers and DSPs through quality-focused, centralized infrastructure — with a clear roadmap toward decentralized, verifiable ad delivery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://admandala.com/" />
        <meta property="og:title" content="AdMandala | Programmatic Advertising. Built to Evolve." />
        <meta property="og:description" content="A programmatic advertising exchange connecting publishers and DSPs with quality-focused infrastructure and a decentralization roadmap." />
        <meta property="og:site_name" content="AdMandala" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AdMandala | Programmatic Advertising. Built to Evolve." />
        <meta name="twitter:description" content="A programmatic advertising exchange connecting publishers and DSPs with quality-focused infrastructure and a decentralization roadmap." />
        <link rel="canonical" href="https://admandala.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AdMandala — Programmatic Advertising Exchange",
            "url": "https://admandala.com/",
            "description": "AdMandala is a programmatic advertising exchange that connects publishers and demand-side platforms (DSPs) through a centralized, quality-focused system while building the foundation for decentralized, verifiable ad infrastructure.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "AdMandala",
              "url": "https://admandala.com"
            }
          }
        `}</script>
      </Helmet>

      {!isIntroActive && <Navbar />}
      <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }}></div>

      <HeroSection onIntroComplete={handleIntroComplete} />

      <WhatIsSection />

      <WhatsLiveSection />

      <WhySection />

      <RoadmapSection />
      <AudiencePanels />

      <Footer />
    </div>
  );
}

export default Home;

