import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import LookingAhead from '../components/LookingAhead';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Premium Components

import PremiumWhyGrid from '../components/premium/PremiumWhyGrid';
import PremiumFeatureSplits from '../components/premium/PremiumFeatureSplits';
import PremiumWhoIsItFor from '../components/premium/PremiumWhoIsItFor';
import PremiumCTA from '../components/premium/PremiumCTA';

// Assets

import l7 from '../assets/new/ChatGPT Image Mar 21, 2026, 05_25_31 PM.png';
import l6 from '../assets/new/familiar.png';
import l5 from '../assets/new/progressive.png';
import l1 from '../assets/new/dsp.png';
import l2 from '../assets/new/perform.png';
import l4 from '../assets/new/media.png';

// Icons
import { Users, BarChart, Layout } from 'lucide-react';

function DSPs() {
  useScrollAnimation();
  const [showContactModal, setShowContactModal] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!circleRef.current) return;

    gsap.to(circleRef.current, {
      scale: 2.5,
      opacity: 0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: ".prem-hero",
        start: "top top",
        end: "top -40%",
        scrub: 1,
      }
    });
  }, []);

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
      description: "Performance over volume. AdMandala prioritizes traffic quality and advertiser outcomes.",
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
      description: "While the exchange operates centrally today, AdMandala is designed to progressively reduce trust assumptions.",
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
        <title>Buy Media You Can Trust | AdMandala for DSPs & Advertisers</title>
        <meta
          name="description"
          content="Access curated, quality-controlled publisher inventory through AdMandala's programmatic exchange. Standard RTB workflows, IVT filtering, brand safety scoring, and a path toward verifiable ad delivery for DSPs, trading desks, and performance advertisers."
        />
        <meta name="keywords" content="DSP integration, programmatic demand, OpenRTB SSP, buy website traffic, advertiser ad exchange, programmatic ad inventory, brand safe traffic, media buying" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://admandala.com/advertisers" />
        <meta property="og:title" content="Buy Media You Can Trust | AdMandala for DSPs & Advertisers" />
        <meta property="og:description" content="Access programmatic supply through a centralized exchange with strong quality controls — and a clear path toward verifiable delivery." />
        <meta property="og:site_name" content="AdMandala" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy Media You Can Trust | AdMandala for DSPs & Advertisers" />
        <meta name="twitter:description" content="Access programmatic supply through a centralized exchange with strong quality controls — and a clear path toward verifiable delivery." />
        <link rel="canonical" href="https://admandala.com/advertisers" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AdMandala Programmatic Demand Integration & Traffic Supply",
            "url": "https://admandala.com/advertisers",
            "description": "Programmatic ad exchange offering DSP integration via OpenRTB to buy website traffic from quality-controlled, brand-safe publishers.",
            "provider": {
              "@type": "Organization",
              "name": "AdMandala",
              "url": "https://admandala.com"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "DSPs, Trading Desks, Agency Media Buyers, Direct Advertisers"
            },
            "serviceType": "Programmatic Traffic Supply & DSP Access"
          }
        `}</script>
      </Helmet>

      <Navbar />

      <header className="prem-hero" style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '5rem' }}>
        <div className="prem-hero-circle-wrap">
          <div
            className="prem-hero-circle"
            ref={circleRef}
            style={{ backgroundColor: "rgba(30, 41, 150, 0.15)" }}
          ></div>
        </div>

        <div className="prem-hero-content" style={{ opacity: 1, transform: 'none' }}>
          <h1 className="prem-hero-h1">
            Buy Media<br />
            <span>You Can Trust</span>
          </h1>

          <p className="prem-hero-desc">
            Access programmatic supply through a centralized exchange with strong quality controls — and a clear path toward verifiable delivery.
          </p>

          <div className="prem-hero-actions">
            <button
              className="btn-premium-primary"
              onClick={() => setShowContactModal(true)}
            >
              <div className="btn-premium-inner">
                <span className="btn-premium-text">Register as a DSP / Advertiser</span>
                <span className="btn-premium-text-hover">Register as a DSP / Advertiser</span>
              </div>
            </button>
            <a href="mailto:partners@admandala.com" className="btn-premium-black">
              <div className="btn-premium-inner">
                <span className="btn-premium-text">Contact our partnerships team</span>
                <span className="btn-premium-text-hover">Contact our partnerships team</span>
              </div>
            </a>
          </div>

          <div className="early-adopters-wrapper animate-premium" style={{ marginTop: '1.2rem' }}>
            <Link to="/decentralization" className="early-adopters-btn">
              <span className="icon-wrapper" aria-hidden="true">
                <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={12} className="arrow-svg">
                  <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={12} className="arrow-svg arrow-svg--copy">
                  <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                </svg>
              </span>
              <span className="label">Explore our decentralization roadmap</span>
            </Link>
          </div>
        </div>
      </header>

      <PremiumWhyGrid
        id="why-advertisers"
        badge="Why AdMandala"
        title={<>Why DSPs Choose <span className="text-teal">AdMandala</span></>}
        subtitle="AdMandala is built for demand partners who care about performance today — and trust tomorrow."
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
        description="AdMandala is evolving into a verifiable advertising protocol. See how our roadmap leads to a future where every impression and click is independently validated."
      />

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


