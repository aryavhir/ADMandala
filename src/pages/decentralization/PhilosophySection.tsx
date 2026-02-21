import { GitBranch, Eye, Users, BarChart3, Shield } from 'lucide-react';

const PhilosophySection = () => {
    return (
        <section className="dec-section dec-philosophy">
            {/* Ambient background elements */}
            <div className="dec-phil-bg" aria-hidden="true">
                <div className="dec-phil-glow dec-phil-glow-1" />
                <div className="dec-phil-glow dec-phil-glow-2" />
                <div className="dec-phil-grid-lines" />
            </div>

            <div className="content-wrapper">
                {/* Section header — large & cinematic */}
                <div className="dec-phil-header animate-on-scroll">
                    <span className="dec-eyebrow"><GitBranch size={14} /> Philosophy</span>
                    <h2 className="dec-phil-title">
                        The Philosophy Behind<br />
                        <span className="dec-phil-title-em">Ad Mandala</span>
                    </h2>
                    <p className="dec-phil-subtitle">
                        Why decentralization matters — and why <em>timing</em> matters more.
                    </p>
                </div>

                {/* Guarantees — Three animated cards */}
                <div className="dec-phil-intro animate-on-scroll delay-1">
                    <p className="dec-phil-lead">Decentralization offers powerful guarantees:</p>
                </div>

                <div className="dec-phil-guarantees">
                    <div className="dec-phil-guarantee animate-on-scroll delay-1">
                        <div className="dec-phil-guarantee-icon">
                            <Eye size={28} />
                            <div className="dec-phil-guarantee-ring" />
                        </div>
                        <h3>Independent Verification</h3>
                        <p>Every impression, click, and conversion can be validated by multiple independent parties — no single entity controls truth.</p>
                        <div className="dec-phil-guarantee-shine" />
                    </div>

                    <div className="dec-phil-guarantee animate-on-scroll delay-2">
                        <div className="dec-phil-guarantee-icon">
                            <Users size={28} />
                            <div className="dec-phil-guarantee-ring" />
                        </div>
                        <h3>Reduced Trust in Intermediaries</h3>
                        <p>Participants verify outcomes directly. No reliance on opaque middlemen or self-reported metrics that can't be audited.</p>
                        <div className="dec-phil-guarantee-shine" />
                    </div>

                    <div className="dec-phil-guarantee animate-on-scroll delay-3">
                        <div className="dec-phil-guarantee-icon">
                            <BarChart3 size={28} />
                            <div className="dec-phil-guarantee-ring" />
                        </div>
                        <h3>Transparent Settlement</h3>
                        <p>Every transaction is recorded, auditable, and deterministic — creating a financial layer built on proof, not promises.</p>
                        <div className="dec-phil-guarantee-shine" />
                    </div>
                </div>

                {/* The "But" — dramatic transition */}
                <div className="dec-phil-but animate-on-scroll">
                    <div className="dec-phil-but-line" />
                    <div className="dec-phil-but-content">
                        <div className="dec-phil-but-icon">
                            <Shield size={24} />
                        </div>
                        <div className="dec-phil-but-text">
                            <h3>But premature decentralization breaks things.</h3>
                            <p>When systems decentralize before they're ready, they introduce friction, complexity, and fragility — solving theoretical problems while creating real ones. Every step must be <strong>earned</strong>, not rushed.</p>
                        </div>
                    </div>
                    <div className="dec-phil-but-line" />
                </div>

                {/* Principle — cinematic statement */}
                <div className="dec-phil-principle animate-on-scroll">
                    <div className="dec-phil-principle-inner">
                        <div className="dec-phil-principle-accent" />
                        <div className="dec-phil-principle-body">
                            <span className="dec-phil-principle-label">Ad Mandala is built on a simple principle</span>
                            <blockquote className="dec-phil-principle-quote">
                                Decentralization should <span className="dec-phil-quote-em">emerge</span> from proven infrastructure — not replace it overnight.
                            </blockquote>
                        </div>
                        <div className="dec-phil-principle-visual" aria-hidden="true">
                            <svg viewBox="0 0 120 120" fill="none" className="dec-phil-principle-svg">
                                <circle cx="60" cy="60" r="50" stroke="rgba(15,74,74,0.12)" strokeWidth="1" strokeDasharray="4 6" className="dec-svg-spin" />
                                <circle cx="60" cy="60" r="35" stroke="rgba(15,74,74,0.18)" strokeWidth="1" strokeDasharray="3 5" className="dec-svg-spin-r" />
                                <circle cx="60" cy="60" r="18" fill="rgba(15,74,74,0.06)" stroke="rgba(15,74,74,0.2)" strokeWidth="1" />
                                <circle cx="60" cy="60" r="5" fill="#0f4a4a" opacity="0.7" />
                                {/* Orbiting dots */}
                                <circle r="3" fill="#0f4a4a" opacity="0.5">
                                    <animateMotion dur="6s" repeatCount="indefinite" path="M60,10 A50,50 0 1,1 59.9,10" />
                                </circle>
                                <circle r="2" fill="#1a7a7a" opacity="0.4">
                                    <animateMotion dur="4s" repeatCount="indefinite" path="M60,25 A35,35 0 1,0 60.1,25" />
                                </circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
