import React from 'react';
import { Zap, Eye, Vote, Network, BarChart3, Shield, Lock, Globe, CheckCircle2, TrendingUp, Users, Sparkles, ArrowRight } from 'lucide-react';

const RoadmapSection: React.FC = () => {
    return (
        <section className="section roadmap-section">
            <div className="roadmap-bg-shapes">
                <div className="rm-shape rm-shape-1"></div>
                <div className="rm-shape rm-shape-2"></div>
                <div className="rm-shape rm-shape-3"></div>
            </div>

            <div className="content-wrapper">
                <div className="roadmap-header animate-on-scroll">
                    <span className="roadmap-chip">OUR APPROACH</span>
                    <h2 className="roadmap-title">Built for the Long Term</h2>
                    <p className="roadmap-subtitle">
                        Ad Mandala is not decentralizing for ideology — but for outcomes.<br />
                        A deliberate, phased path where each layer earns its place.
                    </p>
                </div>

                <div className="journey-track animate-on-scroll">
                    <div className="track-line">
                        <div className="track-line-fill"></div>
                    </div>

                    <div className="journey-phase phase-active">
                        <div className="phase-beacon">
                            <div className="beacon-ring"></div>
                            <div className="beacon-dot"><Zap size={18} /></div>
                        </div>
                        <div className="phase-card">
                            <div className="phase-tag tag-live"><span className="tag-dot"></span> Live Now</div>
                            <h3 className="phase-name">Centralized Performance</h3>
                            <p className="phase-desc">
                                Integrating seamlessly with existing SSPs and DSPs to ensure high-speed, reliable programmatic trading.
                            </p>
                            <div className="phase-features">
                                <div className="pf-item"><Network size={14} /><span>Real-time bidding</span></div>
                                <div className="pf-item"><BarChart3 size={14} /><span>Analytics & reporting</span></div>
                                <div className="pf-item"><Shield size={14} /><span>Fraud prevention</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="journey-arrow"><ArrowRight size={16} /></div>

                    <div className="journey-phase phase-next">
                        <div className="phase-beacon">
                            <div className="beacon-dot"><Eye size={18} /></div>
                        </div>
                        <div className="phase-card">
                            <div className="phase-tag tag-next">Up Next</div>
                            <h3 className="phase-name">On-Chain Verification</h3>
                            <p className="phase-desc">
                                Posting cryptographic proofs of ad impressions to a public ledger for transparency — without slowing down bidding.
                            </p>
                            <div className="phase-features">
                                <div className="pf-item"><Lock size={14} /><span>Cryptographic proofs</span></div>
                                <div className="pf-item"><Globe size={14} /><span>Public ledger</span></div>
                                <div className="pf-item"><CheckCircle2 size={14} /><span>Verifiable delivery</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="journey-arrow"><ArrowRight size={16} /></div>

                    <div className="journey-phase phase-future">
                        <div className="phase-beacon">
                            <div className="beacon-dot"><Vote size={18} /></div>
                        </div>
                        <div className="phase-card">
                            <div className="phase-tag tag-future">Horizon</div>
                            <h3 className="phase-name">Decentralized Settlement</h3>
                            <p className="phase-desc">
                                Gradually moving payment layers and governance to smart contracts as the ecosystem matures.
                            </p>
                            <div className="phase-features">
                                <div className="pf-item"><TrendingUp size={14} /><span>Smart contract payments</span></div>
                                <div className="pf-item"><Users size={14} /><span>Community governance</span></div>
                                <div className="pf-item"><Sparkles size={14} /><span>Token incentives</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="roadmap-principle animate-on-scroll delay-1">
                    <div className="principle-line"></div>
                    <p className="principle-text">
                        Decentralization is introduced only where it <strong>improves trust</strong> without degrading <strong>performance</strong>.
                    </p>
                    <div className="principle-line"></div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
