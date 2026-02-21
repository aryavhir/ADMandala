import { Lock, CheckCircle2 } from 'lucide-react';

const CompatibilitySection = () => {
    return (
        <section className="dec-section dec-compat">
            {/* Animated background */}
            <div className="dec-compat-bg" aria-hidden="true">
                <div className="dec-compat-orb dec-compat-orb-1" />
                <div className="dec-compat-orb dec-compat-orb-2" />
                <div className="dec-compat-grid" />
            </div>

            <div className="content-wrapper">
                {/* Header */}
                <div className="dec-compat-header animate-on-scroll">
                    <span className="dec-eyebrow"><Lock size={14} /> Compatibility</span>
                    <h2 className="dec-compat-title">
                        What Decentralization
                        <span className="dec-compat-title-em"> Does Not Change</span>
                    </h2>
                </div>

                {/* Minimal feature cards */}
                <div className="dec-compat-features animate-on-scroll">
                    <div className="dec-compat-feature">
                        <div className="dec-compat-feature-icon">
                            <CheckCircle2 size={24} />
                        </div>
                        <span>Existing SSP and DSP workflows</span>
                    </div>
                    <div className="dec-compat-feature">
                        <div className="dec-compat-feature-icon">
                            <CheckCircle2 size={24} />
                        </div>
                        <span>Integration methods</span>
                    </div>
                    <div className="dec-compat-feature">
                        <div className="dec-compat-feature-icon">
                            <CheckCircle2 size={24} />
                        </div>
                        <span>Day-to-day buying and selling experience</span>
                    </div>
                </div>

                {/* Bottom statement */}
                <div className="dec-compat-statement animate-on-scroll">
                    <div className="dec-compat-statement-line" />
                    <p>Decentralization <strong>improves trust</strong> without <strong>breaking usability</strong>.</p>
                    <div className="dec-compat-statement-line" />
                </div>
            </div>
        </section>
    );
};

export default CompatibilitySection;
