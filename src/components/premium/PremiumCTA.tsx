import React from 'react';
import '../../styles/PremiumLayouts.css';
import '../../styles/premium-buttons.css';

interface PremiumCTAProps {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void;
}

const PremiumCTA: React.FC<PremiumCTAProps> = ({
    badge,
    title,
    description,
    buttonText,
    onButtonClick
}) => {
    return (
        <section className="prem-cta-section">
            <div className="prem-cta-container animate-on-scroll">
                <div className="prem-cta-inner-bg"></div>
                <div className="prem-cta-content">
                    <div className="prem-cta-badge">{badge}</div>
                    <h2>{title}</h2>
                    <p className="prem-cta-desc">
                        {description}
                    </p>
                    <button
                        className="btn-premium-primary"
                        onClick={onButtonClick}
                    >
                        <div className="btn-premium-inner">
                            <span className="btn-premium-text">{buttonText}</span>
                            <span className="btn-premium-text-hover">{buttonText}</span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PremiumCTA;
