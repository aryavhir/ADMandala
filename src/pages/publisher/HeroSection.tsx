import React from 'react';

interface HeroSectionProps {
    registrationUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ registrationUrl }) => {
    return (
        <header className="hero-section advertisers-hero">
            <div className="content-wrapper adv-hero-grid">
                <div className="adv-hero-copy">
                    <h1 className="hero-headline-new animate-on-scroll">
                        Monetize<br />With Confidence
                    </h1>
                    <p className="hero-subheadline animate-on-scroll delay-1">
                        Connect your inventory to a programmatic exchange built for performance today — and transparency tomorrow.
                    </p>
                    <div className="adv-cta-row animate-on-scroll delay-2">
                        <a href={registrationUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Register as a Publisher</a>
                        <a href="mailto:publisher@admandala.com" className="btn btn-ghost">Talk to our team / SSP inquiries</a>
                    </div>
                </div>
                <div className="pub-hero-visual animate-on-scroll delay-2" aria-hidden="true">
                    <div className="pub-visual-shell">
                        <div className="pub-visual-header">
                            <div className="pub-visual-title">Publisher Console</div>
                            <div className="pub-visual-badge">Live</div>
                        </div>

                        <div className="mockup-window light-window pub-mockup">
                            <div className="mockup-sidebar">
                                <div className="sidebar-item active"></div>
                                <div className="sidebar-item"></div>
                                <div className="sidebar-item"></div>
                            </div>
                            <div className="mockup-main">
                                <div className="pub-filters-row">
                                    <div className="pub-filter">
                                        <span className="pub-filter-label">Start Date</span>
                                        <span className="pub-filter-value">01/01/2024</span>
                                    </div>
                                    <div className="pub-filter">
                                        <span className="pub-filter-label">End Date</span>
                                        <span className="pub-filter-value">01/02/2025</span>
                                    </div>
                                    <button className="pub-apply-btn">Apply</button>
                                </div>

                                <div className="pub-summary-row">
                                    <div className="pub-summary-card revenue">
                                        <div className="pub-summary-label">Total Revenue</div>
                                        <div className="pub-summary-value">$88.9</div>
                                        <div className="pub-summary-sub">1 active site</div>
                                    </div>
                                    <div className="pub-summary-card">
                                        <div className="pub-summary-label">Total Impressions</div>
                                        <div className="pub-summary-value">3,300</div>
                                        <div className="pub-summary-sub">Last 764 days</div>
                                    </div>
                                    <div className="pub-summary-card">
                                        <div className="pub-summary-label">Total Clicks</div>
                                        <div className="pub-summary-value">255</div>
                                        <div className="pub-summary-sub">Performance snapshot</div>
                                    </div>
                                    <div className="pub-summary-card">
                                        <div className="pub-summary-label">Active Sites</div>
                                        <div className="pub-summary-value">1</div>
                                        <div className="pub-summary-sub">out of 2 total</div>
                                    </div>
                                </div>

                                <div className="pub-traffic-row">
                                    <div className="pub-traffic-card">
                                        <div className="pub-traffic-header">
                                            <span className="pub-traffic-title">Traffic by Country</span>
                                            <span className="pub-traffic-subtitle">Geographic distribution</span>
                                        </div>
                                        <div className="pub-traffic-table">
                                            <div className="pub-traffic-row-item">
                                                <span className="pub-traffic-label">CA</span>
                                                <span className="pub-traffic-pill">200 • 9.1%</span>
                                            </div>
                                            <div className="pub-traffic-row-item">
                                                <span className="pub-traffic-label">UK</span>
                                                <span className="pub-traffic-pill">500 • 22.7%</span>
                                            </div>
                                            <div className="pub-traffic-row-item">
                                                <span className="pub-traffic-label">US</span>
                                                <span className="pub-traffic-pill">1,500 • 68.2%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pub-traffic-card">
                                        <div className="pub-traffic-header">
                                            <span className="pub-traffic-title">Traffic by Device</span>
                                            <span className="pub-traffic-subtitle">Impressions by device</span>
                                        </div>
                                        <div className="pub-traffic-table">
                                            <div className="pub-traffic-row-item">
                                                <span className="pub-traffic-label">Mobile</span>
                                                <span className="pub-traffic-pill">800 • 36.4%</span>
                                            </div>
                                            <div className="pub-traffic-row-item">
                                                <span className="pub-traffic-label">Tablet</span>
                                                <span className="pub-traffic-pill">100 • 4.5%</span>
                                            </div>
                                            <div className="pub-traffic-row-item">
                                                <span className="pub-traffic-label">Desktop</span>
                                                <span className="pub-traffic-pill">1,300 • 59.1%</span>
                                            </div>
                                        </div>
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
