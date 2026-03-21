import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/PremiumLayouts.css';
import '../../styles/premium-buttons.css';

const AudiencePanels: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="who-it-is-for" className="prem-cta-section">
            <div className="prem-cta-container animate-on-scroll">
                <div className={`prem-cta-inner-bg ${isHovered ? 'is-hovered' : ''}`}></div>
                <div className="prem-cta-content">
                    <div className="prem-cta-badge">Ecosystem Partners</div>
                    <h2 className="prem-cta-content h2" >
                        Who AdMandala Is For
                    </h2>

                    <p className="prem-cta-desc">
                        Monetize inventory through a reliable programmatic exchange or access quality supply with centralized enforcement today—and verifiable delivery tomorrow. We've got you covered.
                    </p>

                    <div className="prem-cta-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link
                            to="/publishers"
                            className="btn-premium-primary"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="btn-premium-inner">
                                <span className="btn-premium-text">Monetize Now</span>
                                <span className="btn-premium-text-hover">Monetize Now</span>
                            </div>
                        </Link>
                        <Link
                            to="/advertisers"
                            className="btn-premium-black"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="btn-premium-inner">
                                <span className="btn-premium-text">Start Buying</span>
                                <span className="btn-premium-text-hover">Start Buying</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudiencePanels;


