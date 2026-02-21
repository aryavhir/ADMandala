import imgs1 from '../../assets/l1.png';
import img2 from '../../assets/l2.png';
import img3 from '../../assets/l3.png';
import img4 from '../../assets/l4.png';

const WhoIsItFor = () => {
    return (
        <section className="section dsp-who-section">
            <div className="content-wrapper">
                <div className="who-header animate-on-scroll">
                    <h2>Who This Is For</h2>
                    <p className="who-header-subtitle">Built for demand-side partners who prioritize quality, transparency, and measurable outcomes.</p>
                </div>
                <div className="who-cards-grid">
                    <div className="who-card-pro animate-on-scroll">
                        <div className="who-card-visual">
                            <img src={imgs1} alt="DSPs & Trading Desks" className="who-visual-image" />
                        </div>
                        <div className="who-card-content">
                            <h3>DSPs & Trading Desks</h3>
                            <p>Seeking quality-focused supply with transparent bidding, low fraud rates, and access to premium publisher inventory. Connect your existing seats and start buying within minutes.</p>
                            <div className="who-card-meta">
                                <span>Programmatic Buying</span>
                                <span>Quality Supply</span>
                            </div>
                        </div>
                    </div>

                    <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <div className="who-card-visual">
                            <img src={img2} alt="Performance Advertisers" className="who-visual-image" />
                        </div>
                        <div className="who-card-content">
                            <h3>Performance Advertisers</h3>
                            <p>Tired of opaque delivery and wasted spend on unverified impressions. Get clear reporting, verifiable metrics, and a path toward independently validated ad delivery.</p>
                            <div className="who-card-meta">
                                <span>ROAS Focus</span>
                                <span>Verified Metrics</span>
                            </div>
                        </div>
                    </div>

                    <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <div className="who-card-visual">
                            <img src={img3} alt="Brand Advertisers" className="who-visual-image" />
                        </div>
                        <div className="who-card-content">
                            <h3>Brand Advertisers</h3>
                            <p>Prioritizing long-term trust, brand safety, and accurate measurement. Ensure your campaigns run in appropriate environments with comprehensive suitability scoring.</p>
                            <div className="who-card-meta">
                                <span>Brand Safety</span>
                                <span>Trust & Transparency</span>
                            </div>
                        </div>
                    </div>

                    <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                        <div className="who-card-visual">
                            <img src={img4} alt="Media Buyers & Agencies" className="who-visual-image" />
                        </div>
                        <div className="who-card-content">
                            <h3>Media Buyers & Agencies</h3>
                            <p>Who value stability, clear reporting, and a future-proof supply path. Leverage production-grade infrastructure today with a clear roadmap toward decentralized verification.</p>
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
