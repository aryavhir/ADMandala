import React from 'react';
import { TrendingUp, Shield, Network, BarChart3 } from 'lucide-react';

const WhyPublishers: React.FC = () => {
    return (
        <section className="section dsp-why-section-minimal">
            <div className="content-wrapper">
                <div className="why-minimal-header animate-on-scroll">
                    <h2>Why Publishers Choose<br />Ad Mandala</h2>
                    <p className="why-subtitle">Ad Mandala is designed to help publishers monetize efficiently while maintaining control over quality and performance.</p>
                </div>

                <div className="why-minimal-list">
                    <div className="why-list-item animate-on-scroll">
                        <div className="why-item-icon">
                            <TrendingUp size={24} />
                        </div>
                        <div className="why-item-content">
                            <h3>Programmatic Demand Access</h3>
                            <p>Connect to quality DSPs and advertisers seeking premium inventory. Maximize yield through competitive bidding and strong demand partnerships.</p>
                        </div>
                    </div>

                    <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <div className="why-item-icon">
                            <Shield size={24} />
                        </div>
                        <div className="why-item-content">
                            <h3>Centralized Traffic Quality Enforcement</h3>
                            <p>Built-in IVT filtering protects your reputation and maintains advertiser trust. Quality controls ensure sustainable, long-term demand partnerships.</p>
                        </div>
                    </div>

                    <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <div className="why-item-icon">
                            <Network size={24} />
                        </div>
                        <div className="why-item-content">
                            <h3>Brand-Safe Buying Environments</h3>
                            <p>Contextual suitability scoring ensures your inventory meets advertiser standards. Protect your brand while maximizing monetization opportunities.</p>
                        </div>
                    </div>

                    <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                        <div className="why-item-icon">
                            <BarChart3 size={24} />
                        </div>
                        <div className="why-item-content">
                            <h3>Reliable Reporting and Payouts</h3>
                            <p>Clear performance visibility with standard programmatic workflows. No experimental infrastructure or forced changes to your existing stack.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyPublishers;
