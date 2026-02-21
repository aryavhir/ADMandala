import { Shield, Lock, Target, BarChart3 } from 'lucide-react';

const WhySection = () => {
    return (
        <section className="section dsp-why-section-minimal">
            <div className="content-wrapper">
                <div className="why-minimal-header animate-on-scroll">
                    <h2>Why DSPs Choose<br />Ad Mandala</h2>
                    <p className="why-subtitle">Ad Mandala is built for advertisers and demand partners who care about performance today — and trust tomorrow.</p>
                </div>

                <div className="why-minimal-list">
                    <div className="why-list-item animate-on-scroll">
                        <div className="why-item-icon">
                            <Shield size={24} />
                        </div>
                        <div className="why-item-content">
                            <h3>Quality Publisher Inventory</h3>
                            <p>Access curated, continuously-ranked supply from verified publishers. Every impression is vetted for quality—no remnant inventory.</p>
                        </div>
                    </div>

                    <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <div className="why-item-icon">
                            <Lock size={24} />
                        </div>
                        <div className="why-item-content">
                            <h3>Centralized Fraud & Traffic Quality Enforcement</h3>
                            <p>Sophisticated IVT filtering protects every bid request before it reaches your DSP. Reduce wasted spend and improve campaign performance.</p>
                        </div>
                    </div>

                    <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <div className="why-item-icon">
                            <Target size={24} />
                        </div>
                        <div className="why-item-content">
                            <h3>Brand-Safe Environments</h3>
                            <p>Advanced inventory suitability scoring ensures your campaigns run only in contextually appropriate, brand-safe environments.</p>
                        </div>
                    </div>

                    <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                        <div className="why-item-icon">
                            <BarChart3 size={24} />
                        </div>
                        <div className="why-item-content">
                            <h3>Familiar Programmatic Buying Workflows</h3>
                            <p>No experimental models. No workflow disruption. Plug into standard RTB workflows and optimize with your existing tools and strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySection;
