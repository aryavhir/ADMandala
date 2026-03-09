import React from 'react';
import { AnimatedBeamDemo } from '../../components/home/AnimatedBeamDemo';
import { Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhySection: React.FC = () => {
    return (
        <section className="prem-split-section why-split-section">
            <div className="content-wrapper">
                <div className="prem-split-layout why-split">

                    {/* LEFT: visual (AnimatedBeam) — reversed order so visual comes first */}
                    <div className="why-visual-panel animate-on-scroll">
                        <AnimatedBeamDemo />
                    </div>

                    {/* RIGHT: Text */}
                    <div className="prem-split-content animate-on-scroll">
                        <span className="prem-badge">The Tension In Ad Tech</span>
                        <h2 className="section-title">Why AdMandala<br />Exists</h2>
                        <p className="prem-subtext">
                            Advertising needs reliability <em>and</em> trust. Today's ecosystem forces a choice between them. We're building the infrastructure that refuses that tradeoff.
                        </p>
                        <ul className="prem-split-features">
                            <li><Zap size={16} /><span><strong>Performance first</strong> — real-time auctions with zero compromise on speed</span></li>
                            <li><ShieldCheck size={16} /><span><strong>Trust built in</strong> — cryptographic verification, not just promises</span></li>
                        </ul>
                        <div style={{ marginTop: '1.5rem' }}>
                            <Link to="/decentralization" className="prem-hero-cta-ghost">
                                See the roadmap <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhySection;
