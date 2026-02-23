import React from 'react';
import './WhySection.css';

const WhySection: React.FC = () => {
    const reasons = [
        {
            title: "Quality Publisher Inventory",
            content: "Access curated, continuously-ranked supply from verified publishers. Every impression is vetted for quality—no remnant inventory.",
            bgColor: "rgb(230, 230, 250)", // Lavender
        },
        {
            title: "Fraud & Quality Enforcement",
            content: "Sophisticated IVT filtering protects every bid request before it reaches your DSP. Reduce wasted spend and improve performance.",
            bgColor: "rgb(250, 240, 230)", // Peach
        },
        {
            title: "Brand-Safe Environments",
            content: "Advanced inventory suitability scoring ensures your campaigns run only in contextually appropriate, brand-safe environments.",
            bgColor: "rgb(230, 245, 255)", // Sky
        },
        {
            title: "Standard Buying Workflows",
            content: "No experimental models. Plug into standard RTB workflows and optimize with your existing tools and strategies.",
            bgColor: "rgb(230, 250, 240)", // Mint
        }
    ];

    return (
        <section id="why-advertisers" className="dsp-why-section">
            <div className="who-tabs-header animate-on-scroll">
                <div className="who-tabs-badge">Why AdMandala</div>
                <h2>
                    Why DSPs Choose <span className="text-teal">AdMandala</span>
                </h2>
                <p className="who-header-subtitle" style={{ marginTop: '16px' }}>
                    Ad Mandala is built for demand partners who care about performance today — and trust tomorrow.
                </p>
            </div>

            <div className="dsp-why-grid">
                {reasons.map((reason, idx) => (
                    <div
                        key={idx}
                        className="dsp-why-card animate-on-scroll"
                        style={{
                            transitionDelay: `${idx * 100}ms`,
                            backgroundColor: reason.bgColor
                        }}
                    >
                        <div className="dsp-why-border" />
                        <div className="dsp-why-card-content">
                            <h3 className="dsp-why-card-title">{reason.title}</h3>
                            <div className="dsp-why-reveal-zone">
                                <p className="dsp-why-desc">{reason.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhySection;

