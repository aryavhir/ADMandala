import React from 'react';
import { TrendingUp, Shield, Network, BarChart3 } from 'lucide-react';
import './WhyPublishers.css';

const WhyPublishers: React.FC = () => {
    return (
        <section className="pub-why-section">
            <div className="who-tabs-header animate-on-scroll">
                <div className="who-tabs-badge">Why AdMandala</div>
                <h2>
                    Why Publishers Choose<br />Ad Mandala
                </h2>
            </div>

            <div className="pub-why-grid">
                <div className="pub-why-card animate-on-scroll">
                    <div className="pub-why-icon-wrap">
                        <TrendingUp size={24} />
                    </div>
                    <div className="pub-why-content">
                        <h3>Programmatic Demand Access</h3>
                        <p>Connect to quality DSPs and advertisers seeking premium inventory. Maximize yield through competitive bidding.</p>
                    </div>
                </div>

                <div className="pub-why-card animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                    <div className="pub-why-icon-wrap">
                        <Shield size={24} />
                    </div>
                    <div className="pub-why-content">
                        <h3>Traffic Quality Enforcement</h3>
                        <p>Built-in IVT filtering protects your reputation and maintains advertiser trust with automated quality controls.</p>
                    </div>
                </div>

                <div className="pub-why-card animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                    <div className="pub-why-icon-wrap">
                        <Network size={24} />
                    </div>
                    <div className="pub-why-content">
                        <h3>Brand-Safe Environments</h3>
                        <p>Contextual suitability scoring ensures your inventory meets advertiser standards while maximizing opportunities.</p>
                    </div>
                </div>

                <div className="pub-why-card animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                    <div className="pub-why-icon-wrap">
                        <BarChart3 size={24} />
                    </div>
                    <div className="pub-why-content">
                        <h3>Reliable Reporting & Payouts</h3>
                        <p>Clear performance visibility with standard programmatic workflows. No forced changes to your existing stack.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyPublishers;
