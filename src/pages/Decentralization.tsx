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
import LookingAhead from './decentralization/LookingAhead';
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
        <title>Decentralized Advertising Infrastructure | AdMandala</title>
        <meta
          name="description"
          content="Learn how AdMandala leverages decentralized systems to improve transparency and efficiency in digital advertising."
        />
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
      <LookingAhead />
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
