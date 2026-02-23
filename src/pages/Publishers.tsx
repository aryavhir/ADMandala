import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FAQs from '../components/FAQs';
import LookingAhead from '../components/LookingAhead';

// Premium Components
import PremiumHero from '../components/premium/PremiumHero';
import PremiumWhyGrid from '../components/premium/PremiumWhyGrid';
import PremiumFeatureSplits from '../components/premium/PremiumFeatureSplits';
import PremiumWhoIsItFor from '../components/premium/PremiumWhoIsItFor';
import PremiumCTA from '../components/premium/PremiumCTA';

// Assets
import dashboardImg from '../assets/Screenshot 2026-02-23 171204.png';
import p1 from '../assets/pub1.png';
import p2 from '../assets/pub2.png';
import p3 from '../assets/pub3.png';

// Icons
import { Users, Globe, Shield } from 'lucide-react';

function Publishers() {
  useScrollAnimation();
  const registrationUrl = import.meta.env.VITE_PUBLISHER_REGISTRATION_URL ?? '#';

  const whyReasons = [
    {
      title: "Programmatic Demand Access",
      content: "Connect to quality DSPs and advertisers seeking premium inventory. Maximize yield through competitive bidding.",
      bgColor: "rgb(230, 230, 250)", // Lavender
    },
    {
      title: "Traffic Quality Enforcement",
      content: "Built-in IVT filtering protects your reputation and maintains advertiser trust with automated quality controls.",
      bgColor: "rgb(250, 240, 230)", // Peach
    },
    {
      title: "Brand-Safe Environments",
      content: "Contextual suitability scoring ensures your inventory meets advertiser standards while maximizing opportunities.",
      bgColor: "rgb(230, 245, 255)", // Sky
    },
    {
      title: "Reliable Reporting & Payouts",
      content: "Clear performance visibility with standard programmatic workflows. No forced changes to your existing stack.",
      bgColor: "rgb(230, 250, 240)", // Mint
    }
  ];

  const features = [
    {
      id: "integration",
      title: "Simple Integration",
      description: "Works with your current setup using standard programmatic workflows.",
      listItems: [
        "Compatible with existing SSP setups",
        "Standard ad serving and reporting flows",
        "Minimal technical overhead"
      ],
      image: p1,
      imageAlt: "Integration Dashboard",
      bgColor: 'rgb(230, 230, 250)'
    },
    {
      id: "quality",
      title: "Traffic Quality First",
      description: "Quality is enforced with centralized traffic controls.",
      listItems: [
        "Detect and filter invalid traffic",
        "Protect advertiser trust automatically",
        "Improve long-term demand value"
      ],
      image: p2,
      imageAlt: "Quality Controls",
      bgColor: 'rgb(250, 240, 230)'
    },
    {
      id: "transparency",
      title: "Transparent Performance",
      description: "Get clear visibility into demand sources and CPM performance.",
      listItems: [
        "Independently verifiable traffic data",
        "Confidence in revenue reporting",
        "Clear distribution of value"
      ],
      image: p3,
      imageAlt: "Transparency Dashboard",
      bgColor: 'rgb(230, 245, 255)'
    }
  ];

  const categories = [
    {
      id: 0,
      title: "Independent Publishers",
      description: "Seeking quality-focused demand with transparent reporting, reliable payouts, and access to premium advertisers.",
      image: p1,
      icon: <Users size={22} />,
      bgColor: "rgb(230, 230, 250)"
    },
    {
      id: 1,
      title: "Media Networks",
      description: "Managing multiple properties and seeking centralized quality enforcement. Get consistent traffic filtering.",
      image: p2,
      icon: <Globe size={22} />,
      bgColor: "rgb(250, 240, 230)"
    },
    {
      id: 2,
      title: "SSPs & Supply Partners",
      description: "Who value stability, clear demand relationships, and future-proof infrastructure. Access quality-focused advertisers today.",
      image: p3,
      icon: <Shield size={22} />,
      bgColor: "rgb(230, 245, 255)"
    }
  ];

  return (
    <div className="landing-page publishers-page">
      <Helmet>
        <title>Monetize With Confidence | AdMandala</title>
        <meta
          name="description"
          content="Monetize your traffic with high performance demand partners and transparent revenue optimization."
        />
      </Helmet>

      <Navbar />

      <PremiumHero
        title={<>Monetize Your Website</>}
        subtitle={<>With Confidence</>}
        description="Connect your inventory to a programmatic exchange built for performance today — and transparency tomorrow."
        primaryCtaText="Register as a Publisher"
        primaryCtaHref={registrationUrl}
        secondaryCtaText="Talk to our team"
        secondaryCtaHref="mailto:publisher@admandala.com"
        mockupImage={dashboardImg}
        mockupAlt="Publisher Dashboard"
      />

      <PremiumWhyGrid
        id="why-publishers"
        badge="Why AdMandala"
        title={<>Why Publishers Choose <span className="text-teal">AdMandala</span></>}
        subtitle="Built for supply-side partners who care about performance and long-term demand growth."
        reasons={whyReasons}
      />

      <PremiumFeatureSplits features={features} />

      <PremiumWhoIsItFor
        id="target-audience"
        badge="Audience"
        title="Who This Is For"
        subtitle="Built for supply-side partners who prioritize quality and transparency."
        categories={categories}
      />

      <LookingAhead
        id="future-view"
        description="Ad Mandala is evolving from a centralized exchange into a verifiable advertising protocol. See how verification and settlement decentralize — without disrupting your monetization workflows."
      />
      <FAQs />

      <PremiumCTA
        badge="Join Other Publishers"
        title="Start Monetizing Today"
        description="Publishers with Ad Mandala's transparency and unified demand reporting—focus on your content."
        buttonText="Register as a Publisher"
        onButtonClick={() => window.open(registrationUrl, '_blank')}
      />

      <Footer />
    </div>
  );
}

export default Publishers;

