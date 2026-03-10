import React from 'react';
import { Shield, CheckCircle2, TrendingUp } from 'lucide-react';
import LogoConstructionAnimation from '../../components/ParticleMandalaCanvas';

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
                        </p>
                        <ul className="prem-split-features animate-premium">
                            <li><Shield size={16} /><span>Centralized today — reliable, high-speed auctions running right now</span></li>
                            <li><CheckCircle2 size={16} /><span>Verifiable tomorrow — architected for on-chain proof and trust</span></li>
                            <li><TrendingUp size={16} /><span>Built to scale with every publisher and demand partner</span></li>
                        </ul>
                    </div>

                    {/* RIGHT: Logo Animation */}
                    <div className="what-is-visual-panel animate-premium">
                        <LogoConstructionAnimation />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatIsSection;
