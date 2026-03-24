import React, { useState, useEffect } from 'react';
import { Network, Users, Shield, BarChart3 } from 'lucide-react';
import CardSwap, { Card } from '../../components/Live today/CardSwap';

const WhatsLiveSection: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 768;
    // Make cards take almost full screen width on mobile, and increase height.
    const cardWidth = isMobile ? Math.min(windowWidth - 40, 360) : 420;
    const cardHeight = isMobile ? 500 : 520;

    return (
        <section className="section whats-live whats-live-dark" style={{ position: 'relative', zIndex: 10, padding: isMobile ? '40px 0' : '20px 0' }}>
            <div className="dsp-future-bg">
                <div className="dsp-future-orb orb-1"></div>
                <div className="dsp-future-orb orb-2"></div>
                <div className="dsp-future-grid-lines"></div>
            </div>
            <div className="content-wrapper">
                <div className="live-split-layout whats-live-split-root" style={{ minHeight: isMobile ? 'auto' : '450px', maxWidth: '1100px', padding: isMobile ? '0 1rem' : '0' }}>
                    <div className="live-left-content animate-on-scroll">
                        <div className="live-indicator"><span className="blink"></span> SYSTEM OPERATIONAL</div>
                        <h2 className="section-title animate-premium" style={{ color: "white " }}>What's Live Today</h2>
                        <p className="prem-subtext" style={{ color: "white", textAlign: "left" }}>
                            Our centralized exchange is processing real programmatic trades right now — building the operational foundation that will inform every layer of future decentralization.
                        </p>
                        <p className="prem-subtext" style={{ color: "white", textAlign: "left" }}>
                            Each component represents a live system actively serving the programmatic advertising ecosystem.
                        </p>
                    </div>

                    <div className="live-right-animation animate-on-scroll delay-1" style={{ height: isMobile ? '550px' : '500px', marginTop: isMobile ? '20px' : '0' }}>
                        <div className="card-swap-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <CardSwap
                                width={cardWidth}
                                height={cardHeight}
                                cardDistance={isMobile ? 30 : 55}
                                verticalDistance={isMobile ? 40 : 65}
                                delay={5000}
                                pauseOnHover={true}
                                skewAmount={isMobile ? 1 : 3}
                                easing="elastic"
                            >
                                <Card>
                                    <div className="system-card-inner">
                                        <div className="card-icon-wrapper">
                                            <Network size={isMobile ? 36 : 44} className="card-main-icon" strokeWidth={1.5} />
                                        </div>
                                        <div className="card-text-content">
                                            <h3 className="card-title">Centralized Programmatic Exchange</h3>
                                            <p className="card-description">Real-time bidding infrastructure processing live programmatic trades</p>
                                        </div>
                                        <div className="card-status-badge">
                                            <span className="status-dot-mini" />
                                            <span>Live</span>
                                        </div>
                                    </div>
                                </Card>

                                <Card>
                                    <div className="system-card-inner">
                                        <div className="card-icon-wrapper">
                                            <Users size={isMobile ? 36 : 44} className="card-main-icon" strokeWidth={1.5} />
                                        </div>
                                        <div className="card-text-content">
                                            <h3 className="card-title">Publisher &amp; Demand-Side Integrations</h3>
                                            <p className="card-description">Seamless connections with SSPs, DSPs, and advertising partners</p>
                                        </div>
                                        <div className="card-status-badge">
                                            <span className="status-dot-mini" />
                                            <span>Active</span>
                                        </div>
                                    </div>
                                </Card>

                                <Card>
                                    <div className="system-card-inner">
                                        <div className="card-icon-wrapper">
                                            <Shield size={isMobile ? 36 : 44} className="card-main-icon" strokeWidth={1.5} />
                                        </div>
                                        <div className="card-text-content">
                                            <h3 className="card-title">Traffic Quality Enforcement</h3>
                                            <p className="card-description">Advanced fraud detection and invalid traffic prevention</p>
                                        </div>
                                        <div className="card-status-badge">
                                            <span className="status-dot-mini" />
                                            <span>Enforcing</span>
                                        </div>
                                    </div>
                                </Card>

                                <Card>
                                    <div className="system-card-inner">
                                        <div className="card-icon-wrapper">
                                            <BarChart3 size={isMobile ? 36 : 44} className="card-main-icon" strokeWidth={1.5} />
                                        </div>
                                        <div className="card-text-content">
                                            <h3 className="card-title">Performance Reporting &amp; Monetization</h3>
                                            <p className="card-description">Real-time analytics and revenue optimization tools</p>
                                        </div>
                                        <div className="card-status-badge">
                                            <span className="status-dot-mini" />
                                            <span>Tracking</span>
                                        </div>
                                    </div>
                                </Card>
                            </CardSwap>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatsLiveSection;
