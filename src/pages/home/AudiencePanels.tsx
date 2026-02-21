import React from 'react';
import { Link } from 'react-router-dom';
import { MonitorPlay, Target, TrendingUp, Shield, Sparkles, BarChart3, Lock, CheckCircle2 } from 'lucide-react';

const AudiencePanels: React.FC = () => {
    return (
        <section className="section target-audience">
            <div className="content-wrapper">
                <div className="audience-header animate-on-scroll">
                    <h2 className="section-title">Who Ad Mandala Is For</h2>
                </div>

                <div className="audience-panels">
                    {/* Publishers Panel */}
                    <Link to="/publishers" className="aud-panel panel-pub animate-on-scroll">
                        <div className="panel-accent"></div>
                        <div className="panel-number">01</div>
                        <div className="panel-body">
                            <div className="panel-icon-row">
                                <div className="panel-icon pub-icon"><MonitorPlay size={28} /></div>
                                <span className="panel-label">PUBLISHERS &amp; SSPs</span>
                            </div>
                            <h3 className="panel-title">Monetize inventory through a reliable programmatic exchange today — and participate early in a more transparent future.</h3>
                            <div className="panel-footer">
                                <span className="panel-link">
                                    Publishers / SSPs
                                    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={11} className="panel-arrow-svg">
                                        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                    </svg>
                                </span>
                                <div className="panel-tags">
                                    <span className="ptag"><TrendingUp size={13} /> Yield</span>
                                    <span className="ptag"><Shield size={13} /> Quality</span>
                                    <span className="ptag"><Sparkles size={13} /> Early Access</span>
                                </div>
                            </div>
                        </div>
                        <div className="panel-glow"></div>
                    </Link>

                    {/* Advertisers Panel */}
                    <Link to="/advertisers" className="aud-panel panel-adv animate-on-scroll delay-1">
                        <div className="panel-accent"></div>
                        <div className="panel-number">02</div>
                        <div className="panel-body">
                            <div className="panel-icon-row">
                                <div className="panel-icon adv-icon"><Target size={28} /></div>
                                <span className="panel-label">DSPs &amp; ADVERTISERS</span>
                            </div>
                            <h3 className="panel-title">Access quality supply with centralized enforcement today — and verifiable delivery tomorrow.</h3>
                            <div className="panel-footer">
                                <span className="panel-link">
                                    DSPs / Advertisers
                                    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={11} className="panel-arrow-svg">
                                        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                    </svg>
                                </span>
                                <div className="panel-tags">
                                    <span className="ptag"><BarChart3 size={13} /> Performance</span>
                                    <span className="ptag"><Lock size={13} /> Verified</span>
                                    <span className="ptag"><CheckCircle2 size={13} /> Transparent</span>
                                </div>
                            </div>
                        </div>
                        <div className="panel-glow"></div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AudiencePanels;
