import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import FAQs from '../components/FAQs';

// Sub-components
import HeroSection from './dsp/HeroSection';
import WhySection from './dsp/WhySection';
import FeatureSplits from './dsp/FeatureSplits';
import WhoIsItFor from './dsp/WhoIsItFor';
import LookingAhead from '../components/LookingAhead';
import RegisterCTA from './dsp/RegisterCTA';

function DSPs() {
  useScrollAnimation();
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="landing-page advertisers-page">
      <Helmet>
        <title>Buy Media You Can Trust | AdMandala</title>
        <meta
          name="description"
          content="Access premium publisher inventory and scale campaigns with performance-driven optimization."
        />
      </Helmet>

      <Navbar />

      <HeroSection onRegisterClick={() => setShowContactModal(true)} />
      <WhySection />
      <FeatureSplits />
      <WhoIsItFor />
      <LookingAhead
        id="future-view"
        description="Ad Mandala is evolving into a verifiable advertising protocol. See how our roadmap leads to a future where every impression and click is independently validated."
      />
      <FAQs />
      <RegisterCTA onRegisterClick={() => setShowContactModal(true)} />

      <Footer />

      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContactModal(false)} aria-label="Close">×</button>
            <h3 style={{ marginTop: 0 }}>Register as a DSP / Advertiser</h3>
            <ContactForm onSuccess={() => setShowContactModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DSPs;

