import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Sub-components
import HeroSection from './early-adopters/HeroSection';
import ProgramOverview from './early-adopters/ProgramOverview';
import LimitedOpportunity from './early-adopters/LimitedOpportunity';

import './EarlyAdopters.css';

function EarlyAdopters() {
    useScrollAnimation();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrollProgress(totalScroll / (windowHeight || 1));
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="landing-page eap-page">
            <Helmet>
                <title>Early Adopters Program | AdMandala</title>
                <meta
                    name="description"
                    content="Join AdMandala's Early Adopter Program. Be part of a select group of publishers shaping a high-quality advertising marketplace with priority onboarding, dedicated support, and early access to new features."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://admandala.com/early-adopters" />
                <meta property="og:title" content="Early Adopters Program | AdMandala" />
                <meta property="og:description" content="Join a select group of publishers shaping a high-quality advertising marketplace with priority onboarding and dedicated support." />
                <meta property="og:site_name" content="AdMandala" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Early Adopters Program | AdMandala" />
                <meta name="twitter:description" content="Join a select group of publishers shaping a high-quality advertising marketplace with priority onboarding and dedicated support." />
                <link rel="canonical" href="https://admandala.com/early-adopters" />
                <script type="application/ld+json">{`
                  {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "AdMandala Early Adopters Program",
                    "url": "https://admandala.com/early-adopters",
                    "description": "A limited program for select publishers to join AdMandala early, shape the marketplace, and receive priority onboarding support.",
                    "isPartOf": {
                      "@type": "WebSite",
                      "name": "AdMandala",
                      "url": "https://admandala.com"
                    }
                  }
                `}</script>
            </Helmet>

            <Navbar />
            <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }}></div>

            <HeroSection />
            <ProgramOverview />
            <LimitedOpportunity />

            <Footer />
        </div>
    );
}

export default EarlyAdopters;
