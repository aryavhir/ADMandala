import img1 from '../../assets/img1.png';

interface HeroSectionProps {
    onRegisterClick: () => void;
}

const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
    return (
        <header className="hero-section advertisers-hero">
            <div className="content-wrapper adv-hero-grid">
                <div className="adv-hero-copy">
                    <h1 className="hero-headline-new animate-on-scroll">
                        Buy Media<br />You Can Trust
                    </h1>
                    <p className="hero-subheadline animate-on-scroll delay-1">
                        Access programmatic supply through a centralized exchange with strong quality controls — and a clear path toward verifiable delivery.
                    </p>
                    <div className="adv-cta-row animate-on-scroll delay-2">
                        <button className="btn btn-primary" onClick={onRegisterClick}>Register as a DSP / Advertiser</button>
                        <a href="mailto:partners@admandala.com" className="btn btn-ghost">Contact our partnerships team</a>
                    </div>
                </div>
                <div className="adv-hero-visual-new animate-on-scroll delay-2" aria-hidden="true">
                    <img src={img1} alt="Dashboard preview" className="hero-dashboard-image" />
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
