import { Activity, CheckCircle2, Zap, Eye, Network } from 'lucide-react';

const RoadmapSection = () => {
    return (
        <section className="dec-section dec-evolution" id="evolution">
            <div className="content-wrapper">
                <div className="dec-section-hdr animate-on-scroll">
                    <span className="dec-eyebrow"><Activity size={14} /> Roadmap</span>
                    <h2>The Evolution of the Network</h2>
                    <p className="dec-section-sub">Three carefully planned phases — each introduced only when it strengthens the whole.</p>
                </div>

                <div className="dec-phases">
                    {/* Phase 1 */}
                    <div className="dec-phase-card animate-on-scroll">
                        <div className="dec-phase-border" />
                        <div className="dec-phase-content">
                            <div className="dec-phase-logo">
                                <div className="dec-phase-icon">
                                    <span className="dec-phase-number">01</span>
                                </div>
                                <div className="dec-phase-title-reveal">
                                    <h3>Centralized Exchange</h3>
                                    <div className="dec-phase-badge live">
                                        <span className="dec-badge-pulse" />
                                        Live
                                    </div>
                                </div>
                                <span className="dec-phase-trail" />
                            </div>
                            <span className="dec-phase-subtitle">Programmatic Ad Exchange</span>
                        </div>
                        <div className="dec-phase-details">
                            <p>Ad Mandala operates today as a centralized programmatic exchange to ensure reliability and real-world validation.</p>
                            <ul className="dec-check-list compact">
                                <li><CheckCircle2 size={16} /> Seamless SSP &amp; DSP integration</li>
                                <li><CheckCircle2 size={16} /> Strong traffic quality enforcement</li>
                                <li><CheckCircle2 size={16} /> Reliable performance &amp; uptime</li>
                                <li><CheckCircle2 size={16} /> Real-world data &amp; revenue</li>
                            </ul>
                            <div className="dec-phase-quote">
                                <Zap size={14} />
                                This phase grounds the protocol in operational reality.
                            </div>
                        </div>
                        <span className="dec-phase-bottom-label">Phase 1 — Centralized Exchange</span>
                        <div className="dec-phase-progress">
                            <div className="dec-progress-fill" style={{ width: '100%' }} />
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="dec-phase-card animate-on-scroll" style={{ transitionDelay: '120ms' }}>
                        <div className="dec-phase-border" />
                        <div className="dec-phase-content">
                            <div className="dec-phase-logo">
                                <div className="dec-phase-icon">
                                    <span className="dec-phase-number">02</span>
                                </div>
                                <div className="dec-phase-title-reveal">
                                    <h3>Decentralized Verification</h3>
                                    <div className="dec-phase-badge progress">
                                        In Progress
                                    </div>
                                </div>
                                <span className="dec-phase-trail" />
                            </div>
                            <span className="dec-phase-subtitle">Independent Node Validation</span>
                        </div>
                        <div className="dec-phase-details">
                            <p>Independent verification is introduced — shifting trust away from a single operator.</p>
                            <ul className="dec-check-list compact">
                                <li><CheckCircle2 size={16} /> Impressions &amp; clicks validated by nodes</li>
                                <li><CheckCircle2 size={16} /> Distributed fraud detection</li>
                                <li><CheckCircle2 size={16} /> Reduced reliance on self-reported metrics</li>
                            </ul>
                            <div className="dec-phase-quote">
                                <Eye size={14} />
                                Trust begins shifting from platform to protocol.
                            </div>
                        </div>
                        <span className="dec-phase-bottom-label">Phase 2 — Decentralized Verification</span>
                        <div className="dec-phase-progress">
                            <div className="dec-progress-fill" style={{ width: '35%' }} />
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="dec-phase-card animate-on-scroll" style={{ transitionDelay: '240ms' }}>
                        <div className="dec-phase-border" />
                        <div className="dec-phase-content">
                            <div className="dec-phase-logo">
                                <div className="dec-phase-icon">
                                    <span className="dec-phase-number">03</span>
                                </div>
                                <div className="dec-phase-title-reveal">
                                    <h3>Settlement &amp; Governance</h3>
                                    <div className="dec-phase-badge future">
                                        Upcoming
                                    </div>
                                </div>
                                <span className="dec-phase-trail" />
                            </div>
                            <span className="dec-phase-subtitle">Trust-Minimized Protocol</span>
                        </div>
                        <div className="dec-phase-details">
                            <p>Ad Mandala becomes a trust-minimized protocol — resilient and community-governed.</p>
                            <ul className="dec-check-list compact">
                                <li><CheckCircle2 size={16} /> Deterministic pricing &amp; settlement</li>
                                <li><CheckCircle2 size={16} /> Transparent, auditable event records</li>
                                <li><CheckCircle2 size={16} /> Distributed governance</li>
                                <li><CheckCircle2 size={16} /> Network resilience — no single point of failure</li>
                            </ul>
                            <div className="dec-phase-quote">
                                <Network size={14} />
                                If Ad Mandala disappears, the protocol continues.
                            </div>
                        </div>
                        <span className="dec-phase-bottom-label">Phase 3 — Protocol Settlement</span>
                        <div className="dec-phase-progress">
                            <div className="dec-progress-fill" style={{ width: '0%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
