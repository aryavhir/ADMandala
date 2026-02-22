import React from 'react';
import './WhyPublishers.css';

const WhyPublishers: React.FC = () => {
    const reasons = [
        {
            title: "Programmatic Demand Access",
            content: "Connect to quality DSPs and advertisers seeking premium inventory. Maximize yield through competitive bidding.",
            bgColor: "rgb(230, 230, 250)", // Lavender
            visual: (
                <div className="pub-why-visual-wrap">
                    <svg viewBox="0 0 100 60" className="pub-svg-graph">
                        <path d="M10,50 L30,35 L50,45 L70,15 L90,25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="70" cy="15" r="4" fill="currentColor">
                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
            )
        },
        {
            title: "Traffic Quality Enforcement",
            content: "Built-in IVT filtering protects your reputation and maintains advertiser trust with automated quality controls.",
            bgColor: "rgb(250, 240, 230)", // Peach
            visual: (
                <div className="pub-why-visual-wrap">
                    <div className="pub-radar-base">
                        <div className="pub-radar-ring" />
                        <div className="pub-radar-sweep" />
                    </div>
                </div>
            )
        },
        {
            title: "Brand-Safe Environments",
            content: "Contextual suitability scoring ensures your inventory meets advertiser standards while maximizing opportunities.",
            bgColor: "rgb(230, 245, 255)", // Sky
            visual: (
                <div className="pub-why-visual-wrap">
                    <svg viewBox="0 0 100 100" className="pub-svg-mesh">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                        <circle cx="20" cy="20" r="3" fill="currentColor" />
                        <circle cx="80" cy="20" r="3" fill="currentColor" />
                        <circle cx="50" cy="80" r="3" fill="currentColor" />
                        <path d="M20,20 L50,50 M80,20 L50,50 M50,80 L50,50" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
                    </svg>
                </div>
            )
        },
        {
            title: "Reliable Reporting & Payouts",
            content: "Clear performance visibility with standard programmatic workflows. No forced changes to your existing stack.",
            bgColor: "rgb(230, 250, 240)", // Mint
            visual: (
                <div className="pub-why-visual-wrap">
                    <div className="pub-ticker-wrap">
                        <div className="pub-ticker-bar" style={{ height: '40%' }} />
                        <div className="pub-ticker-bar" style={{ height: '70%' }} />
                        <div className="pub-ticker-bar" style={{ height: '55%' }} />
                        <div className="pub-ticker-bar" style={{ height: '90%' }} />
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="pub-why-section">
            <div className="who-tabs-header animate-on-scroll">
                <div className="who-tabs-badge">Why AdMandala</div>
                <h2>
                    Why Publishers Choose Ad Mandala
                </h2>
            </div>

            <div className="pub-why-grid">
                {reasons.map((reason, idx) => (
                    <div
                        key={idx}
                        className="pub-why-card animate-on-scroll"
                        style={{
                            transitionDelay: `${idx * 100}ms`,
                            backgroundColor: reason.bgColor
                        }}
                    >
                        <div className="pub-why-border" />
                        <div className="pub-why-card-content">
                            <h3 className="pub-why-card-title">{reason.title}</h3>
                            <div className="pub-why-reveal-zone">

                                <p className="pub-why-desc">{reason.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyPublishers;
