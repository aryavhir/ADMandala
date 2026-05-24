import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

// Sub-components
import HeroSection from './decentralization/HeroSection';
import PhilosophySection from './decentralization/PhilosophySection';
import ApproachSection from './decentralization/ApproachSection';
import RoadmapSection from './decentralization/RoadmapSection';
import ArchitectureSection from './decentralization/ArchitectureSection';
import EcosystemSection from './decentralization/EcosystemSection';
import CompatibilitySection from './decentralization/CompatibilitySection';
import CtaSection from './decentralization/CtaSection';

import './Decentralization.css';

function Decentralization() {
  useScrollAnimation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const registrationUrl = import.meta.env.VITE_PUBLISHER_REGISTRATION_URL ?? '#';

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalScroll / (windowHeight || 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page dec-page">
      <Helmet>
        <title>Decentralization Roadmap | AdMandala Architectural Evolution Protocol</title>
        <meta
          name="description"
          content="Explore how AdMandala is evolving from a centralized programmatic exchange to a verifiable advertising protocol — with on-chain ad event logging, transparent settlement, and independently validated impressions and clicks."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://admandala.com/decentralization" />
        <meta property="og:title" content="Decentralization Roadmap | AdMandala" />
        <meta property="og:description" content="How AdMandala evolves from centralized exchange to verifiable advertising protocol with on-chain settlement and transparent ad delivery." />
        <meta property="og:site_name" content="AdMandala" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Decentralization Roadmap | AdMandala" />
        <meta name="twitter:description" content="How AdMandala evolves from centralized exchange to verifiable advertising protocol with on-chain settlement and transparent ad delivery." />
        <link rel="canonical" href="https://admandala.com/decentralization" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AdMandala Decentralization Roadmap",
            "url": "https://admandala.com/decentralization",
            "description": "AdMandala's architectural evolution from centralized programmatic exchange to a verifiable advertising protocol with on-chain ad event logging and transparent settlement.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "AdMandala",
              "url": "https://admandala.com"
            }
          }
        `}</script>
      </Helmet>

      <Navbar />
      <div className="dec-scroll-progress" style={{ width: `${scrollProgress * 100}%` }} />

      <HeroSection />
      <PhilosophySection />
      <ApproachSection />
      <RoadmapSection />
      <ArchitectureSection />
      <EcosystemSection />
      <CompatibilitySection />

      <CtaSection
        registrationUrl={registrationUrl}
        onRegisterClick={() => setShowContactModal(true)}
      />

      <Footer />

      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContactModal(false)} aria-label="Close">×</button>
            <h3 style={{ marginTop: 0 }}>Register as a DSP / Advertiser</h3>
            <ContactForm onSuccess={() => setShowContactModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Decentralization;

