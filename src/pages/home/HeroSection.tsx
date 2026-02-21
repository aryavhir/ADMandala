import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    return (
        <header className="hero-section">
            <div className="hero-background">
                <div className="tech-grid"></div>
            </div>
            <div className="content-wrapper">
                <h1 className="hero-headline animate-on-scroll">
                    <span className="gradient-text">Programmatic Advertising.</span><br />
                    Built to Evolve.
                </h1>
                <p className="hero-subheadline animate-on-scroll delay-1">
                    Ad Mandala is a live, centralized programmatic advertising exchange — designed from day one to transition into a decentralized, verifiable protocol.
                </p>
                <div className="decentralization-link-wrapper animate-on-scroll delay-2">
                    <Link to="/decentralization" className="explore-button">
                        <span className="explore-button__icon-wrapper" aria-hidden="true">
                            <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="explore-button__icon-svg" width={12}>
                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                            </svg>
                            <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="explore-button__icon-svg explore-button__icon-svg--copy" width={12}>
                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                            </svg>
                        </span>
                        <span className="explore-button__label">Explore the decentralization roadmap</span>
                    </Link>
                </div>

                <div className="hero-split-container animate-on-scroll delay-3">
                    {/* Left Pane: Publishers */}
                    <div className="split-pane pane-left">
                        <div className="pane-content">
                            <div className="pane-label">FOR PUBLISHERS / SSPS</div>
                            <h3 className="pane-title">Monetize Inventory Responsibly</h3>
                            <p className="pane-desc">Maximize yield through a reliable programmatic exchange today — and secure your place in a transparent future.</p>
                            <Link to="/publishers" className="pane-btn btn-blue">Publisher Access</Link>
                        </div>
                        <div className="pane-visual visual-light">
                            <div className="mockup-window light-window">
                                <div className="mockup-sidebar">
                                    <div className="sidebar-item active"></div>
                                    <div className="sidebar-item"></div>
                                    <div className="sidebar-item"></div>
                                </div>
                                <div className="mockup-main">
                                    <div className="mockup-header-row">
                                        <div className="header-title-blob"></div>
                                    </div>
                                    <div className="dashboard-grid">
                                        <div className="dash-card big-chart">
                                            <div className="chart-line-svg">
                                                <svg viewBox="0 0 100 40" className="trend-line">
                                                    <path d="M0,35 Q20,35 25,20 T50,25 T75,10 T100,5" fill="none" stroke="#2b6cb0" strokeWidth="3" />
                                                    <path d="M0,35 Q20,35 25,20 T50,25 T75,10 T100,5 V40 H0 Z" fill="rgba(43, 108, 176, 0.1)" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="dash-card small-metric"></div>
                                        <div className="dash-card small-metric"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Pane: Advertisers */}
                    <div className="split-pane pane-right">
                        <div className="pane-content">
                            <div className="pane-label">FOR DSPS / ADVERTISERS</div>
                            <h3 className="pane-title">Access Verified Quality Supply</h3>
                            <p className="pane-desc">Target premium audiences with centralized enforcement today — and verifiable delivery on-chain tomorrow.</p>
                            <Link to="/advertisers" className="pane-btn btn-white">Advertiser Access</Link>
                        </div>
                        <div className="pane-visual visual-dark">
                            <div className="mockup-window dark-window">
                                <div className="analytics-panel">
                                    <div className="metrics-row">
                                        <div className="metric-box">
                                            <div className="metric-label"></div>
                                            <div className="metric-value large"></div>
                                        </div>
                                        <div className="metric-box">
                                            <div className="metric-label"></div>
                                            <div className="metric-value"></div>
                                        </div>
                                    </div>
                                    <div className="chart-area">
                                        <div className="bar-chart">
                                            <div className="bar" style={{ "--height": "60%" } as React.CSSProperties}></div>
                                            <div className="bar" style={{ "--height": "85%" } as React.CSSProperties}></div>
                                            <div className="bar" style={{ "--height": "45%" } as React.CSSProperties}></div>
                                            <div className="bar" style={{ "--height": "75%" } as React.CSSProperties}></div>
                                            <div className="bar" style={{ "--height": "95%" } as React.CSSProperties}></div>
                                            <div className="bar" style={{ "--height": "50%" } as React.CSSProperties}></div>
                                        </div>
                                    </div>
                                    <div className="geo-map">
                                        <div className="map-dot" style={{ "left": "30%", "top": "40%" }}></div>
                                        <div className="map-dot" style={{ "left": "60%", "top": "25%" }}></div>
                                        <div className="map-dot" style={{ "left": "75%", "top": "55%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
