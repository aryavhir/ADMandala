import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Sub-components
import HeroSection from './early-adopters/HeroSection';
import ProgramOverview from './early-adopters/ProgramOverview';
import HowItWorks from './early-adopters/HowItWorks';
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
                    content="Join AdMandala's Early Adopter Program. Be part of a select group of publishers shaping a high-quality advertising marketplace."
                />
            </Helmet>

            <Navbar />
            <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }}></div>

            <HeroSection />
            <ProgramOverview />
            <HowItWorks />
            <LimitedOpportunity />

            <Footer />
        </div>
    );
}

export default EarlyAdopters;
