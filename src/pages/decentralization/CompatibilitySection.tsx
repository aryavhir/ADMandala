import { CheckCircle2, Zap, Settings } from 'lucide-react';

const CompatibilitySection = () => {
    const features = [
        {
            title: "Legacy Workflows",
            desc: "Existing SSP and DSP integrations remain fully supported without modification.",
            icon: <Settings size={20} />,
            tags: ["Standardized", "Oasis", "VAST/RTB"]
        },
        {
            title: "Integration Methods",
            desc: "No new complex SDKs or proprietary APIs required for existing participants.",
            icon: <Zap size={20} />,
            tags: ["Plug & Play", "REST", "Low-Level"]
        },
        {
            title: "User Experience",
            desc: "The day-to-day buying and selling experience remains intuitive and familiar.",
            icon: <CheckCircle2 size={20} />,
            tags: ["Seamless", "Familiar", "High-Sync"]
        }
    ];

    return (
        <section className="dec-section dec-compat-refined">
            <div className="dec-compat-mesh"></div>
            <div className="content-wrapper">
                <div className="dec-section-hdr">
                    <span className="prem-badge animate-premium">Stability Suite</span>
                    <h2 className="section-title">What Decentralization Does Not Change</h2>
                    <p className="dec-section-sub">
                        Decentralization improves trust without breaking the tools you already use.
                    </p>
                </div>

                <div className="dec-architectural-grid">
                    {features.map((f, i) => (
                        <div key={i} className="dec-blueprint-card animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="dec-blueprint-icon-box">
                                {f.icon}
                            </div>
                            <div className="dec-blueprint-info">
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </div>
                            <div className="dec-blueprint-tags">
                                {f.tags.map((tag, ti) => (
                                    <span key={ti} className="dec-blueprint-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="dec-compat-footer animate-on-scroll">
                    <div className="dec-compat-footer-bar"></div>
                    <p>Built for performance, designed for stability.</p>
                </div>
            </div>
        </section>
    );
};

export default CompatibilitySection;
