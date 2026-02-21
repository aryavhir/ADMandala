import React from 'react';
import p4 from '../../assets/r4.png';
import p5 from '../../assets/r5.png';
import p6 from '../../assets/r6.png';
import p7 from '../../assets/r1.png';

const WhoIsItFor: React.FC = () => {
    return (
        <section className="section dsp-who-section">
            <div className="content-wrapper">
                <div className="who-header animate-on-scroll">
                    <h2>Who This Is For</h2>
                    <p className="who-header-subtitle">Built for supply-side partners who prioritize quality, transparency, and sustainable monetization.</p>
                </div>
                <div className="who-cards-grid">
                    <div className="who-card-pro animate-on-scroll">
                        <div className="who-card-visual">
                            <img src={p4} alt="Independent Publishers" className="who-visual-image" />
                        </div>
                        <div className="who-card-content">
                            <h3>Independent Publishers</h3>
                            <p>Seeking quality-focused demand with transparent reporting, reliable payouts, and access to premium advertisers. Connect your inventory and start monetizing within minutes.</p>
                            <div className="who-card-meta">
                                <span>Premium Demand</span>
                                <span>Quick Setup</span>
                            </div>
                        </div>
                    </div>

                    <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <div className="who-card-visual">
                            <img src={p5} alt="Media Networks" className="who-visual-image" />
                        </div>
                        <div className="who-card-content">
                            <h3>Media Networks</h3>
                            <p>Managing multiple properties and seeking centralized quality enforcement. Get consistent traffic filtering, unified reporting, and scalable monetization infrastructure.</p>
                            <div className="who-card-meta">
                                <span>Scale Ready</span>
                                <span>Unified Reporting</span>
                            </div>
                        </div>
                    </div>

                    <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <div className="who-card-visual">
                            <img src={p6} alt="Programmatic-First Properties" className="who-visual-image" />
                        </div>
                        <div className="who-card-content">
                            <h3>Programmatic-First Properties</h3>
                            <p>Prioritizing efficient yield optimization and automated monetization. Leverage production-grade infrastructure with comprehensive performance visibility and demand diversity.</p>
                            <div className="who-card-meta">
                                <span>Yield Optimization</span>
                                <span>Automation</span>
                            </div>
                        </div>
                    </div>

                    <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                        <div className="who-card-visual">
                            <img src={p7} alt="SSPs & Supply Partners" className="who-visual-image" />
                        </div>
                        <div className="who-card-content">
                            <h3>SSPs & Supply Partners</h3>
                            <p>Who value stability, clear demand relationships, and future-proof infrastructure. Access quality-focused advertisers today with a clear roadmap toward decentralized verification.</p>
                            <div className="who-card-meta">
                                <span>Clear Roadmap</span>
                                <span>Stable Infrastructure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoIsItFor;
