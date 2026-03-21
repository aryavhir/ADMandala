import React from 'react';
import PremiumHero from '../../components/premium/PremiumHero';
import roadmapImg from '../../assets/hero_roadmap_bg.png';

const HeroSection: React.FC = () => {
    return (
        <PremiumHero
            title={<>From <span className="dec-h1-em">Platform</span></>}
            subtitle={<>to Protocol</>}
            description="AdMandala is evolving from a centralized programmatic exchange into a decentralized advertising network — without compromising performance or usability."
            primaryCtaText="Explore the Journey"
            primaryCtaHref="#evolution"
            secondaryCtaText="View Architecture"
            secondaryCtaHref="#architecture"
            mockupImage={roadmapImg}
            mockupAlt="Evolutionary Roadmap Dashboard"
            accentColor="rgba(45, 189, 189, 0.15)"
        />
    );
};

export default HeroSection;
