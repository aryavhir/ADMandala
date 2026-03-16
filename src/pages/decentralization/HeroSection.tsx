import React from 'react';
import PremiumHero from '../../components/premium/PremiumHero';
import img1 from '../../assets/12.png';

interface HeroSectionProps {
    onRegisterClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onRegisterClick }) => {
    return (
        <PremiumHero
            title={<>Buy Media</>}
            subtitle={<>You Can Trust</>}
            description="Access programmatic supply through a centralized exchange with strong quality controls — and a clear path toward verifiable delivery."
            primaryCtaText="Register as a DSP / Advertiser"
            onPrimaryCtaClick={onRegisterClick}
            secondaryCtaText="Contact our partnerships team"
            secondaryCtaHref="mailto:partners@admandala.com"
            mockupImage={img1}
            mockupAlt="Advertiser Dashboard"
            accentColor="rgba(30, 41, 150, 0.15)"
        />
    );
};

export default HeroSection;
