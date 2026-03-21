import React, { useState } from 'react';
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
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="prem-cta-section">
            <div className="prem-cta-container animate-on-scroll">
                <div className={`prem-cta-inner-bg ${isHovered ? 'is-hovered' : ''}`}></div>
                <div className="prem-cta-content">
                    <div className="prem-cta-badge">{badge}</div>
                    <h2>{title}</h2>
                    <p className="prem-cta-desc">
                        {description}
                    </p>
                    <button
                        className="btn-premium-primary"
                        onClick={onButtonClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
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
