import { Box, Zap, Shield, Activity } from 'lucide-react';

const ApproachSection = () => {
    return (
        <section className="dec-section dec-approach">
            {/* Ambient background */}
            <div className="dec-approach-bg" aria-hidden="true">
                <div className="dec-approach-orb dec-approach-orb-1" />
                <div className="dec-approach-orb dec-approach-orb-2" />
                <div className="dec-approach-dots" />
            </div>

            <div className="content-wrapper">
                {/* Section header */}
                <div className="dec-approach-header animate-on-scroll">
                    <span className="dec-eyebrow"><Box size={14} /> The Mandala Approach</span>
                    <h2 className="dec-approach-title">
                        A Mandala Represents<br />
                        <span className="dec-approach-title-words">
                            <span className="dec-approach-word">Balance.</span>{' '}
                            <span className="dec-approach-word">Structure.</span>{' '}
                            <span className="dec-approach-word dec-approach-word-em">Interconnection.</span>
                        </span>
                    </h2>
                </div>

                {/* Main content: visual + description side-by-side */}
                <div className="dec-approach-main">
                    {/* Left side — Large animated Mandala */}
                    <div className="dec-approach-visual animate-on-scroll delay-1" aria-hidden="true">
                        <div className="dec-mandala-container">
                            {/* Outer glow ring */}
                            <div className="dec-mandala-glow" />

                            <svg viewBox="0 0 400 400" className="dec-mandala-svg-new" fill="none">
                                {/* Outermost ring */}
                                <circle cx="200" cy="200" r="190" stroke="rgba(15,74,74,0.06)" strokeWidth="1" />
                                {/* Dashed orbit rings */}
                                <circle cx="200" cy="200" r="160" stroke="rgba(15,74,74,0.1)" strokeWidth="1" strokeDasharray="8 6" className="dec-svg-spin" />
                                <circle cx="200" cy="200" r="120" stroke="rgba(15,74,74,0.14)" strokeWidth="1.5" strokeDasharray="5 8" className="dec-svg-spin-r" />
                                <circle cx="200" cy="200" r="80" stroke="rgba(15,74,74,0.18)" strokeWidth="1" strokeDasharray="4 6" className="dec-svg-spin" style={{ animationDuration: '80s' }} />

                                {/* Core */}
                                <circle cx="200" cy="200" r="42" fill="rgba(15,74,74,0.04)" stroke="rgba(15,74,74,0.2)" strokeWidth="1.5" />
                                <circle cx="200" cy="200" r="24" fill="#0f4a4a" />
                                <text x="200" y="197" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" letterSpacing="1.5">AD</text>
                                <text x="200" y="208" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="6" fontWeight="600" letterSpacing="0.8">MANDALA</text>

                                {/* Layer labels on rings */}
                                {/* Top — Verification */}
                                <circle cx="200" cy="40" r="18" fill="white" stroke="rgba(15,74,74,0.15)" strokeWidth="1" />
                                <text x="200" y="38" textAnchor="middle" fill="#0f4a4a" fontSize="5.5" fontWeight="700">VERIFY</text>
                                <text x="200" y="47" textAnchor="middle" fill="#0f4a4a" fontSize="4" opacity="0.5">Layer</text>

                                {/* Right — Settlement */}
                                <circle cx="360" cy="200" r="18" fill="white" stroke="rgba(15,74,74,0.15)" strokeWidth="1" />
                                <text x="360" y="198" textAnchor="middle" fill="#0f4a4a" fontSize="5.5" fontWeight="700">SETTLE</text>
                                <text x="360" y="207" textAnchor="middle" fill="#0f4a4a" fontSize="4" opacity="0.5">Layer</text>

                                {/* Bottom — Governance */}
                                <circle cx="200" cy="360" r="18" fill="white" stroke="rgba(15,74,74,0.15)" strokeWidth="1" />
                                <text x="200" y="358" textAnchor="middle" fill="#0f4a4a" fontSize="5.5" fontWeight="700">GOVERN</text>
                                <text x="200" y="367" textAnchor="middle" fill="#0f4a4a" fontSize="4" opacity="0.5">Layer</text>

                                {/* Left — Participants */}
                                <circle cx="40" cy="200" r="18" fill="white" stroke="rgba(15,74,74,0.15)" strokeWidth="1" />
                                <text x="40" y="198" textAnchor="middle" fill="#0f4a4a" fontSize="5.5" fontWeight="700">OPEN</text>
                                <text x="40" y="207" textAnchor="middle" fill="#0f4a4a" fontSize="4" opacity="0.5">Layer</text>

                                {/* Connection lines from core to outer nodes */}
                                <line x1="200" y1="58" x2="200" y2="158" stroke="rgba(15,74,74,0.08)" strokeWidth="1" />
                                <line x1="342" y1="200" x2="242" y2="200" stroke="rgba(15,74,74,0.08)" strokeWidth="1" />
                                <line x1="200" y1="342" x2="200" y2="242" stroke="rgba(15,74,74,0.08)" strokeWidth="1" />
                                <line x1="58" y1="200" x2="158" y2="200" stroke="rgba(15,74,74,0.08)" strokeWidth="1" />

                                {/* Diagonal cross connections */}
                                <line x1="260" y1="80" x2="310" y2="130" stroke="rgba(15,74,74,0.05)" strokeWidth="1" strokeDasharray="3 6" />
                                <line x1="310" y1="270" x2="260" y2="320" stroke="rgba(15,74,74,0.05)" strokeWidth="1" strokeDasharray="3 6" />
                                <line x1="140" y1="320" x2="90" y2="270" stroke="rgba(15,74,74,0.05)" strokeWidth="1" strokeDasharray="3 6" />
                                <line x1="90" y1="130" x2="140" y2="80" stroke="rgba(15,74,74,0.05)" strokeWidth="1" strokeDasharray="3 6" />

                                {/* Small dots on intersection rings */}
                                <circle cx="260" cy="80" r="3" fill="#0f4a4a" opacity="0.25" />
                                <circle cx="320" cy="140" r="3" fill="#1a7a7a" opacity="0.2" />
                                <circle cx="320" cy="260" r="3" fill="#0f4a4a" opacity="0.25" />
                                <circle cx="260" cy="320" r="3" fill="#1a7a7a" opacity="0.2" />
                                <circle cx="140" cy="320" r="3" fill="#0f4a4a" opacity="0.25" />
                                <circle cx="80" cy="260" r="3" fill="#1a7a7a" opacity="0.2" />
                                <circle cx="80" cy="140" r="3" fill="#0f4a4a" opacity="0.25" />
                                <circle cx="140" cy="80" r="3" fill="#1a7a7a" opacity="0.2" />

                                {/* Animated signal pulses */}
                                <circle r="3" fill="#0f4a4a" opacity="0.6">
                                    <animateMotion dur="5s" repeatCount="indefinite" path="M200,58 L200,158" />
                                </circle>
                                <circle r="2.5" fill="#1a7a7a" opacity="0.5">
                                    <animateMotion dur="4s" repeatCount="indefinite" path="M342,200 L242,200" />
                                </circle>
                                <circle r="3" fill="#0f4a4a" opacity="0.6">
                                    <animateMotion dur="6s" repeatCount="indefinite" path="M200,342 L200,242" />
                                </circle>
                                <circle r="2.5" fill="#1a7a7a" opacity="0.5">
                                    <animateMotion dur="4.5s" repeatCount="indefinite" path="M58,200 L158,200" />
                                </circle>
                            </svg>

                            {/* Floating status badges around mandala */}
                            <div className="dec-mandala-badge dec-mandala-badge-1">
                                <Zap size={12} /> Scalable
                            </div>
                            <div className="dec-mandala-badge dec-mandala-badge-2">
                                <Shield size={12} /> Reliable
                            </div>
                            <div className="dec-mandala-badge dec-mandala-badge-3">
                                <Activity size={12} /> Usable
                            </div>
                        </div>
                    </div>

                    {/* Right side — Description + features */}
                    <div className="dec-approach-copy animate-on-scroll delay-2">
                        <p className="dec-approach-desc">
                            Ad Mandala applies this principle by decentralizing <strong>only the layers that benefit from it</strong> — while keeping the system usable, scalable, and reliable at every stage of growth.
                        </p>
                        <p className="dec-approach-desc-sub">
                            Rather than forcing everything onto a decentralized stack, we selectively layer trust-minimized components where they matter most — verification, settlement, and governance — while the performance-critical exchange layer remains optimized for speed and scale.
                        </p>

                        {/* Three pillars — vertical cards */}
                        <div className="dec-approach-pillars">
                            <div className="dec-approach-pillar">
                                <div className="dec-approach-pillar-num">01</div>
                                <div className="dec-approach-pillar-body">
                                    <h4>Additive, Never Disruptive</h4>
                                    <p>Decentralized features are layered on top of working infrastructure — never at the cost of existing functionality.</p>
                                </div>
                            </div>
                            <div className="dec-approach-pillar">
                                <div className="dec-approach-pillar-num">02</div>
                                <div className="dec-approach-pillar-body">
                                    <h4>Every Stage Is Production-Ready</h4>
                                    <p>The system works fully at each phase. No "future promises" — every release is usable, stable, and live.</p>
                                </div>
                            </div>
                            <div className="dec-approach-pillar">
                                <div className="dec-approach-pillar-num">03</div>
                                <div className="dec-approach-pillar-body">
                                    <h4>Layers Improve Independently</h4>
                                    <p>Each concentric layer evolves on its own schedule. Upgrades to one never break another.</p>
                                </div>
                            </div>
                        </div>

                        <div className="dec-approach-closing">
                            <div className="dec-approach-closing-bar" />
                            <p>The system grows stronger — each stage building on the last.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproachSection;
