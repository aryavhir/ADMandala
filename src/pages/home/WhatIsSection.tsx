import React from 'react';
import { MonitorPlay, Target, Shield, BarChart3, Network, TrendingUp, Users, Globe, Sparkles } from 'lucide-react';

const WhatIsSection: React.FC = () => {
    return (
        <section className="section what-is animate-on-scroll">
            <div className="content-wrapper">
                <div className="what-is-layout">
                    <div className="what-is-text">
                        <h2 className="what-is-heading">What Is Ad Mandala?</h2>
                        <p className="what-is-body">
                            Ad Mandala is a programmatic advertising exchange that connects publishers and demand partners through a reliable, centralized system — while preparing the foundation for a more transparent, decentralized future.
                        </p>
                        <p className="what-is-body what-is-emphasis">
                            The platform enables efficient monetization and performance today, without forcing the ecosystem to adopt unproven infrastructure prematurely.
                        </p>
                        <div className="what-is-tags">
                            <span className="what-is-tag"><Shield size={14} /> Centralized Today</span>
                            <span className="what-is-tag"><Shield size={14} /> Verifiable Tomorrow</span>
                            <span className="what-is-tag"><TrendingUp size={14} /> Built to Scale</span>
                        </div>
                    </div>

                    <div className="mandala-visual animate-on-scroll delay-1">
                        <div className="mandala-orbit-system">
                            {/* Outer ring */}
                            <div className="orbit-ring ring-outer">
                                <div className="orbit-node node-pub" title="Publishers"><MonitorPlay size={16} /></div>
                                <div className="orbit-node node-dsp" title="DSPs"><Target size={16} /></div>
                                <div className="orbit-node node-verify" title="Verification"><Shield size={16} /></div>
                                <div className="orbit-node node-data" title="Analytics"><BarChart3 size={16} /></div>
                            </div>
                            {/* Middle ring */}
                            <div className="orbit-ring ring-mid">
                                <div className="orbit-node node-net" title="Network"><Network size={14} /></div>
                                <div className="orbit-node node-growth" title="Growth"><TrendingUp size={14} /></div>
                                <div className="orbit-node node-users" title="Partners"><Users size={14} /></div>
                            </div>
                            {/* Inner ring */}
                            <div className="orbit-ring ring-inner">
                                <div className="orbit-node node-globe" title="Global"><Globe size={14} /></div>
                            </div>
                            {/* Core */}
                            <div className="mandala-core">
                                <Sparkles size={22} />
                                <div className="core-pulse"></div>
                                <div className="core-pulse pulse-2"></div>
                            </div>
                            {/* Data flow lines */}
                            <svg className="mandala-connections" viewBox="0 0 400 400">
                                <circle cx="200" cy="200" r="170" className="connection-ring" />
                                <circle cx="200" cy="200" r="120" className="connection-ring ring-delay-1" />
                                <circle cx="200" cy="200" r="65" className="connection-ring ring-delay-2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsSection;
