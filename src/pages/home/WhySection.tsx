import React from 'react';
import { Lock, Globe, Sparkles, CheckCircle2, Shield, TrendingUp, Users } from 'lucide-react';

const WhySection: React.FC = () => {
    return (
        <section className="section why-section">
            <div className="why-section-deco">
                <div className="why-deco-circle c1"></div>
                <div className="why-deco-circle c2"></div>
            </div>

            <div className="content-wrapper">
                <div className="why-heading-block animate-on-scroll">
                    <span className="why-chip">THE TENSION IN AD TECH</span>
                    <h2 className="why-main-title">
                        Why Ad Mandala Exists
                    </h2>
                    <p className="why-tagline">
                        Advertising needs reliability <em>and</em> trust. Today's ecosystem forces a choice between them.
                    </p>
                </div>

                <div className="why-scale animate-on-scroll">
                    <div className="scale-pillar pillar-left">
                        <div className="pillar-top">
                            <div className="pillar-glyph glyph-perf">
                                <Lock size={24} />
                            </div>
                            <h3 className="pillar-label">Centralized Performance</h3>
                        </div>
                        <div className="pillar-body">
                            <p>Scale and speed depend on centralized systems — walled gardens, black-box auctions, and opaque intermediaries that prioritize throughput over accountability.</p>
                        </div>
                        <div className="pillar-traits">
                            <span className="trait"><CheckCircle2 size={13} /> Low latency bidding</span>
                            <span className="trait"><CheckCircle2 size={13} /> Massive scale</span>
                            <span className="trait"><CheckCircle2 size={13} /> Proven infrastructure</span>
                        </div>
                        <div className="pillar-verdict verdict-warn">
                            <span>But —</span> opacity erodes trust
                        </div>
                    </div>

                    <div className="scale-fulcrum">
                        <div className="fulcrum-bar"></div>
                        <div className="fulcrum-center">
                            <Sparkles size={16} />
                        </div>
                        <div className="fulcrum-bar"></div>
                    </div>

                    <div className="scale-pillar pillar-right">
                        <div className="pillar-top">
                            <div className="pillar-glyph glyph-trust">
                                <Globe size={24} />
                            </div>
                            <h3 className="pillar-label">Decentralized Trust</h3>
                        </div>
                        <div className="pillar-body">
                            <p>Transparency and verification demand open protocols — but raw decentralization can't yet match the millisecond speed programmatic advertising requires.</p>
                        </div>
                        <div className="pillar-traits">
                            <span className="trait"><CheckCircle2 size={13} /> Full transparency</span>
                            <span className="trait"><CheckCircle2 size={13} /> Verifiable delivery</span>
                            <span className="trait"><CheckCircle2 size={13} /> No single point of failure</span>
                        </div>
                        <div className="pillar-verdict verdict-warn">
                            <span>But —</span> speed gaps remain
                        </div>
                    </div>
                </div>

                <div className="why-resolution-strip animate-on-scroll delay-1">
                    <div className="resolution-icon-row">
                        <div className="res-icon-pip"><Shield size={18} /></div>
                        <div className="res-connector"></div>
                        <div className="res-icon-pip"><TrendingUp size={18} /></div>
                        <div className="res-connector"></div>
                        <div className="res-icon-pip"><Users size={18} /></div>
                    </div>
                    <h3 className="resolution-headline">Ad Mandala bridges this gap</h3>
                    <p className="resolution-body">
                        Delivering production-grade programmatic infrastructure <strong>now</strong>, while methodically decentralizing the layers that matter most — <strong>verification</strong>, <strong>settlement</strong>, and <strong>governance</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhySection;
