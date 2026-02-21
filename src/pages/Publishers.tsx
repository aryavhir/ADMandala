import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';
import FAQs from '../components/FAQs';

// Sub-components
import HeroSection from './publisher/HeroSection';
import WhyPublishers from './publisher/WhyPublishers';
import FeatureSplits from './publisher/FeatureSplits';
import WhoIsItFor from './publisher/WhoIsItFor';
import LookingAhead from './publisher/LookingAhead';
import RegisterCTA from './publisher/RegisterCTA';

function Publishers() {
  useScrollAnimation();
  const registrationUrl = import.meta.env.VITE_PUBLISHER_REGISTRATION_URL ?? '#';

  return (
    <div className="landing-page publishers-page">
      <Helmet>
        <title>Monetize With Confidence | AdMandala</title>
        <meta
          name="description"
          content="Monetize your traffic with high performance demand partners and transparent revenue optimization."
        />
      </Helmet>

      <nav className="top-nav">
        <div className="content-wrapper nav-flex">
          <Link to="/" className="back-link">&larr; Back Home</Link>
        </div>
      </nav>

      <HeroSection registrationUrl={registrationUrl} />
      <WhyPublishers />
      <FeatureSplits />
      <WhoIsItFor />
      <LookingAhead />
      <FAQs />
      <RegisterCTA registrationUrl={registrationUrl} />

      <Footer />
    </div>
  );
}

export default Publishers;
