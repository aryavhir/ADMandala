import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import FAQs from '../components/FAQs';
import LookingAhead from '../components/LookingAhead';

// Premium Components
import PremiumHero from '../components/premium/PremiumHero';
import PremiumWhyGrid from '../components/premium/PremiumWhyGrid';
import PremiumFeatureSplits from '../components/premium/PremiumFeatureSplits';
import PremiumWhoIsItFor from '../components/premium/PremiumWhoIsItFor';
import PremiumCTA from '../components/premium/PremiumCTA';

// Assets
import img1 from '../assets/12.png';
import l7 from '../assets/pub1.png';
import l6 from '../assets/pub2.png';
import l5 from '../assets/pub3.png';
import l1 from '../assets/pub1.png';
import l2 from '../assets/pub2.png';
import l4 from '../assets/pub1.png';

// Icons
import { Users, BarChart, Layout } from 'lucide-react';

function DSPs() {
  useScrollAnimation();
  const [showContactModal, setShowContactModal] = useState(false);

  const whyReasons = [
    {
      title: "Quality Publisher Inventory",
      content: "Access curated, continuously-ranked supply from verified publishers. Every impression is vetted for quality—no remnant inventory.",
      bgColor: "rgb(230, 230, 250)", // Lavender
    },
    {
      title: "Fraud & Quality Enforcement",
      content: "Sophisticated IVT filtering protects every bid request before it reaches your DSP. Reduce wasted spend and improve performance.",
      bgColor: "rgb(250, 240, 230)", // Peach
    },
    {
      title: "Brand-Safe Environments",
      content: "Advanced inventory suitability scoring ensures your campaigns run only in contextually appropriate, brand-safe environments.",
      bgColor: "rgb(230, 245, 255)", // Sky
    },
    {
      title: "Standard Buying Workflows",
      content: "No experimental models. Plug into standard RTB workflows and optimize with your existing tools and strategies.",
      bgColor: "rgb(230, 250, 240)", // Mint
    }
  ];

  const features = [
    {
      id: "quality-control",
      title: "Quality-Controlled Supply",
      description: "Performance over volume. Ad Mandala prioritizes traffic quality and advertiser outcomes.",
      listItems: [
        "Enforcing centralized quality checks",
        "Actively filtering invalid traffic",
        "Monitoring performance signals across the exchange"
      ],
      image: l7,
      imageAlt: "Quality Dashboard",
      bgColor: 'rgb(230, 230, 250)'
    },
    {
      id: "familiar-ui",
      title: "Familiar Buying Experience",
      description: "No learning curve required. Integrate using standard programmatic mechanisms.",
      listItems: [
        "Quick onboarding through RTB",
        "Existing optimization strategies apply",
        "Seamless campaign execution"
      ],
      image: l6,
      imageAlt: "API Integration",
      bgColor: 'rgb(250, 240, 230)'
    },
    {
      id: "transparency",
      title: "Progressive Transparency",
      description: "While the exchange operates centrally today, Ad Mandala is designed to progressively reduce trust assumptions.",
      listItems: [
        "Independently verifiable ad events",
        "Increased confidence in delivery and performance",
        "Greater clarity in how value is created and settled"
      ],
      image: l5,
      imageAlt: "Transparency Roadmap",
      bgColor: 'rgb(230, 245, 255)'
    }
  ];

  const categories = [
    {
      id: 0,
      title: "DSPs & Trading Desks",
      description: "Seeking quality-focused supply with transparent bidding, low fraud rates, and access to premium publisher inventory.",
      image: l1,
      icon: <Layout size={22} />,
      bgColor: "rgb(230, 230, 250)"
    },
    {
      id: 1,
      title: "Performance Advertisers",
      description: "Tired of opaque delivery and wasted spend. Get clear reporting, verifiable metrics, and a path toward independently validated ad delivery.",
      image: l2,
      icon: <BarChart size={22} />,
      bgColor: "rgb(250, 240, 230)"
    },

    {
      id: 3,
      title: "Media Buyers & Agencies",
      description: "Value stability, clear reporting, and a future-proof supply path. Leverage production-grade infrastructure today.",
      image: l4,
      icon: <Users size={22} />,
      bgColor: "rgb(230, 250, 240)"
    }
  ];

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

      <PremiumHero
        title={<>Buy Media You</>}
        subtitle={<>Can Trust</>}
        description="Access programmatic supply through a centralized exchange with strong quality controls — and a clear path toward verifiable delivery."
        primaryCtaText="Register as a DSP / Advertiser"
        onPrimaryCtaClick={() => setShowContactModal(true)}
        secondaryCtaText="Contact our partnerships team"
        secondaryCtaHref="mailto:partners@admandala.com"
        mockupImage={img1}
        mockupAlt="Advertiser Dashboard"
        accentColor="rgba(30, 41, 150, 0.15)"
      />

      <PremiumWhyGrid
        id="why-advertisers"
        badge="Why AdMandala"
        title={<>Why DSPs Choose <span className="text-teal">AdMandala</span></>}
        subtitle="Ad Mandala is built for demand partners who care about performance today — and trust tomorrow."
        reasons={whyReasons}
      />

      <PremiumFeatureSplits features={features} />

      <PremiumWhoIsItFor
        id="target-audience"
        badge="Audience"
        title="Who This Is For"
        subtitle="Built for demand partners who prioritize quality, transparency, and measurable outcomes."
        categories={categories}
      />

      <LookingAhead
        id="future-view"
        description="Ad Mandala is evolving into a verifiable advertising protocol. See how our roadmap leads to a future where every impression and click is independently validated."
      />
      <FAQs />

      <PremiumCTA
        badge="Join Other Demand Partners"
        title="Access Quality Supply Today"
        description="Join as a DSP or Advertiser and grow with verifiable delivery and premium publisher inventory."
        buttonText="Register as a DSP / Advertiser"
        onButtonClick={() => setShowContactModal(true)}
      />

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


