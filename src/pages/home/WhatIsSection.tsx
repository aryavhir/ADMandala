import React from 'react';
import Lottie from 'lottie-react';
import showreelAnimation from '../../assets/Showreel.json';

const WhatIsSection: React.FC = () => {
    return (
        <section id="what-is" className="prem-split-section">
            <div className="content-wrapper">
                <div className="prem-split-layout what-is-split">

                    {/* LEFT: Text */}
                    <div className="prem-split-content">
                        <span className="prem-badge animate-premium">Context</span>
                        <h2 className="section-title animate-premium">What Is AdMandala?</h2>
                        <p className="prem-subtext animate-premium">
                            AdMandala is a programmatic advertising exchange that connects publishers and demand partners through a reliable, centralized system — while preparing the foundation for a more transparent, decentralized future.
                            <br />     <br /> The platform enables efficient monetization and performance today, without forcing the ecosystem to adopt unproven infrastructure prematurely.
                        </p>

                    </div>

                    {/* RIGHT: Lottie Animation */}
                    <div className="what-is-visual-panel animate-premium">
                        <div style={{ width: '100%', maxWidth: '500px' }}>
                            <Lottie
                                animationData={showreelAnimation}
                                loop={true}
                                autoplay={true}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatIsSection;
