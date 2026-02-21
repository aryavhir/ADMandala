import React from 'react';
import { Network, Users, Shield, BarChart3 } from 'lucide-react';
import CardSwap, { Card } from '../../components/Live today/CardSwap';

const WhatsLiveSection: React.FC = () => {
    return (
        <section className="section whats-live whats-live-dark">
            <div className="dsp-future-bg">
                <div className="dsp-future-orb orb-1"></div>
                <div className="dsp-future-orb orb-2"></div>
                <div className="dsp-future-grid-lines"></div>
            </div>
            <div className="content-wrapper">
                <div className="live-split-layout">
                    <div className="live-left-content animate-on-scroll">
                        <div className="live-indicator"><span className="blink"></span> SYSTEM OPERATIONAL</div>
                        <h2 className="live-title-large">What's Live Today</h2>
                        <p className="live-description-text">
                            Our centralized exchange is processing real programmatic trades right now — building the operational foundation that will inform every layer of future decentralization.
                        </p>
                        <p className="live-description-sub">
                            Each component represents a live system actively serving the programmatic advertising ecosystem.
                        </p>
                    </div>

                    <div className="live-right-animation animate-on-scroll delay-1">
                        <div className="card-swap-wrapper">
                            <CardSwap
                                width={420}
                                height={520}
                                cardDistance={55}
                                verticalDistance={65}
                                delay={5000}
                                pauseOnHover={true}
                                skewAmount={3}
                                easing="elastic"
                            >
                                <Card>
                                    <div className="system-card-inner">
                                        <div className="card-icon-wrapper">
                                            <Network size={44} className="card-main-icon" strokeWidth={1.5} />
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
                                            <Users size={44} className="card-main-icon" strokeWidth={1.5} />
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
                                            <Shield size={44} className="card-main-icon" strokeWidth={1.5} />
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
                                            <BarChart3 size={44} className="card-main-icon" strokeWidth={1.5} />
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
