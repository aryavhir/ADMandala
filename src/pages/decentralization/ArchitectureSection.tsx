import { Cpu, Globe, Users, ArrowRight, Eye, Shield, Activity, Zap, Layers, Lock, CheckCircle2, BarChart3 } from 'lucide-react';

const ArchitectureSection = () => {
    return (
        <section className="dec-section dec-architecture" id="architecture">
            {/* Ambient background */}
            <div className="dec-arch-bg" aria-hidden="true">
                <div className="dec-arch-glow dec-arch-glow-1" />
                <div className="dec-arch-glow dec-arch-glow-2" />
                <div className="dec-arch-grid-bg" />
            </div>

            <div className="content-wrapper">
                <div className="dec-section-hdr animate-on-scroll">
                    <span className="dec-eyebrow"><Cpu size={14} /> Architecture</span>
                    <h2>The Mandala Protocol Architecture</h2>
                    <p className="dec-section-sub">Four layers, one protocol — built from the ground up.</p>
                </div>

                {/* Protocol Stack — vertical layers with animated connectors */}
                <div className="dec-stack">

                    {/* Layer 4 — Open Participants (outermost) */}
                    <div className="dec-stack-layer animate-on-scroll">
                        <div className="dec-stack-indicator">
                            <span className="dec-stack-num">04</span>
                            <div className="dec-stack-line" />
                        </div>
                        <div className="dec-stack-card tier-4">
                            <div className="dec-stack-card-glow" />
                            <div className="dec-stack-left">
                                <div className="dec-stack-icon-wrap tier-4">
                                    <Globe size={24} />
                                </div>
                                <div className="dec-stack-info">
                                    <span className="dec-stack-tag">Access Layer</span>
                                    <h3>Open Participants</h3>
                                    <p>Publishers, advertisers, and DSPs connect directly — no centralized gatekeeping, no walled gardens.</p>
                                </div>
                            </div>
                            <div className="dec-stack-right">
                                <div className="dec-stack-stat">
                                    <Users size={14} />
                                    <span>SSPs, DSPs, Publishers</span>
                                </div>
                                <div className="dec-stack-stat">
                                    <ArrowRight size={14} />
                                    <span>Direct integration</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connector — animated data flow */}
                    <div className="dec-stack-connector animate-on-scroll" aria-hidden="true">
                        <div className="dec-stack-connector-line" />
                        <div className="dec-stack-packet dec-packet-1" />
                        <div className="dec-stack-packet dec-packet-2" />
                        <div className="dec-stack-packet dec-packet-3" />
                        <span className="dec-stack-connector-label">Events flow down ↓</span>
                    </div>

                    {/* Layer 3 — Verification Nodes */}
                    <div className="dec-stack-layer animate-on-scroll" style={{ transitionDelay: '80ms' }}>
                        <div className="dec-stack-indicator">
                            <span className="dec-stack-num">03</span>
                            <div className="dec-stack-line" />
                        </div>
                        <div className="dec-stack-card tier-3">
                            <div className="dec-stack-card-glow" />
                            <div className="dec-stack-left">
                                <div className="dec-stack-icon-wrap tier-3">
                                    <Eye size={24} />
                                </div>
                                <div className="dec-stack-info">
                                    <span className="dec-stack-tag">Validation Layer</span>
                                    <h3>Verification Nodes</h3>
                                    <p>Independent nodes validate impressions, clicks, and conversions — distributed fraud detection at scale.</p>
                                </div>
                            </div>
                            <div className="dec-stack-right">
                                <div className="dec-stack-stat">
                                    <Shield size={14} />
                                    <span>Fraud detection</span>
                                </div>
                                <div className="dec-stack-stat">
                                    <Activity size={14} />
                                    <span>Multi-node consensus</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="dec-stack-connector animate-on-scroll" aria-hidden="true">
                        <div className="dec-stack-connector-line" />
                        <div className="dec-stack-packet dec-packet-1" />
                        <div className="dec-stack-packet dec-packet-2" />
                        <span className="dec-stack-connector-label">Verified data ↓</span>
                    </div>

                    {/* Layer 2 — Protocol Logic */}
                    <div className="dec-stack-layer animate-on-scroll" style={{ transitionDelay: '160ms' }}>
                        <div className="dec-stack-indicator">
                            <span className="dec-stack-num">02</span>
                            <div className="dec-stack-line" />
                        </div>
                        <div className="dec-stack-card tier-2">
                            <div className="dec-stack-card-glow" />
                            <div className="dec-stack-left">
                                <div className="dec-stack-icon-wrap tier-2">
                                    <Cpu size={24} />
                                </div>
                                <div className="dec-stack-info">
                                    <span className="dec-stack-tag">Logic Layer</span>
                                    <h3>Protocol Logic</h3>
                                    <p>Deterministic rules for pricing, matching, and settlement — no human interpretation, no ambiguity.</p>
                                </div>
                            </div>
                            <div className="dec-stack-right">
                                <div className="dec-stack-stat">
                                    <Zap size={14} />
                                    <span>Deterministic pricing</span>
                                </div>
                                <div className="dec-stack-stat">
                                    <Layers size={14} />
                                    <span>Automated settlement</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connector */}
                    <div className="dec-stack-connector animate-on-scroll" aria-hidden="true">
                        <div className="dec-stack-connector-line" />
                        <div className="dec-stack-packet dec-packet-1" />
                        <span className="dec-stack-connector-label">Settlement records ↓</span>
                    </div>

                    {/* Layer 1 — Immutable Event Record (core) */}
                    <div className="dec-stack-layer animate-on-scroll" style={{ transitionDelay: '240ms' }}>
                        <div className="dec-stack-indicator">
                            <span className="dec-stack-num">01</span>
                        </div>
                        <div className="dec-stack-card tier-1">
                            <div className="dec-stack-card-glow" />
                            <div className="dec-stack-left">
                                <div className="dec-stack-icon-wrap tier-1">
                                    <Lock size={24} />
                                </div>
                                <div className="dec-stack-info">
                                    <span className="dec-stack-tag">Foundation</span>
                                    <h3>Immutable Event Record</h3>
                                    <p>The innermost core — a tamper-proof ledger of every verified ad event. The single source of truth.</p>
                                </div>
                            </div>
                            <div className="dec-stack-right">
                                <div className="dec-stack-stat">
                                    <CheckCircle2 size={14} />
                                    <span>Tamper-proof</span>
                                </div>
                                <div className="dec-stack-stat">
                                    <BarChart3 size={14} />
                                    <span>Fully auditable</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom statement */}
                <div className="dec-arch-statement animate-on-scroll">
                    <div className="dec-arch-statement-bar" />
                    <p>Together, these layers form a <strong>balanced, self-correcting system</strong> — where each layer evolves independently yet strengthens the whole.</p>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureSection;
