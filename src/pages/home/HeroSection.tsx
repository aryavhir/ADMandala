import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/premium-buttons.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;

        const elements = contentRef.current.querySelectorAll('.animate-premium');
        gsap.fromTo(elements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power2.out',
                delay: 0.2
            }
        );
    }, []);

    return (
        <header className="hero-section">
            <div className="hero-background">
                <div className="tech-grid"></div>
            </div>
            <div className="content-wrapper" ref={contentRef}>
                <h1 className="hero-headline animate-premium">
                    <span className="gradient-text">Programmatic Advertising.</span><br />
                    Built to Evolve.
                </h1>
                <p className="hero-subheadline animate-premium">
                    Ad Mandala is a live, centralized programmatic advertising exchange — designed from day one to transition into a decentralized, verifiable protocol.
                </p>
                <div className="decentralization-link-wrapper animate-premium">
                    <Link to="/decentralization" className="btn-premium-primary">
                        <div className="btn-premium-inner">
                            <span className="btn-premium-text">Explore the decentralization roadmap</span>
                            <span className="btn-premium-text-hover">Explore the decentralization roadmap</span>
                        </div>
                    </Link>
                </div>

                <div className="hero-split-container animate-premium">
                    {/* Left Pane: Publishers */}
                    <div className="split-pane pane-left">
                        <div className="pane-content">
                            <div className="pane-label">FOR PUBLISHERS / SSPS</div>
                            <h3 className="pane-title">Monetize Inventory Responsibly</h3>
                            <p className="pane-desc">Maximize yield through a reliable programmatic exchange today — and secure your place in a transparent future.</p>
                            <Link to="/publishers" className="btn-premium-primary">
                                <div className="btn-premium-inner">
                                    <span className="btn-premium-text">Publisher Access</span>
                                    <span className="btn-premium-text-hover">Publisher Access</span>
                                </div>
                            </Link>
                        </div>
                        <div className="pane-visual visual-light">
                            {/* ... mockup omitted for brevity in replace, but keeping structure ... */}
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
                            <Link to="/advertisers" className="btn-premium-primary">
                                <div className="btn-premium-inner">
                                    <span className="btn-premium-text">Advertiser Access</span>
                                    <span className="btn-premium-text-hover">Advertiser Access</span>
                                </div>
                            </Link>
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
