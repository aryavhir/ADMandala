import React from 'react';
import PremiumHero from '../../components/premium/PremiumHero';

const HeroSection: React.FC = () => {
    const registrationUrl = import.meta.env.VITE_PUBLISHER_REGISTRATION_URL ?? '#';

    return (
        <PremiumHero
            title="Early Adopter"
            subtitle="Program"
            description="Accelerating a high-quality publisher ecosystem. Join the Founding Publisher Partners group and shape the future of decentralized advertising."
            primaryCtaText="Apply Now"
            primaryCtaHref={registrationUrl}
            secondaryCtaText="View Benefits"
            secondaryCtaHref="#program-overview"
            accentColor="rgba(15, 74, 74, 0.4)"
            mockupAlt="AdMandala Early Access Dashboard"
        />
    );
};

export default HeroSection;
