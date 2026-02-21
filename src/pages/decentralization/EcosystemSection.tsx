import { Users, BarChart3, CheckCircle2, Shield, RadioTower } from 'lucide-react';

const EcosystemSection = () => {
    return (
        <section className="dec-section dec-ecosystem">
            <div className="content-wrapper">
                <div className="dec-section-hdr animate-on-scroll">
                    <span className="dec-eyebrow"><Users size={14} /> Ecosystem</span>
                    <h2>What This Means for You</h2>
                </div>

                <div className="dec-eco-cards">
                    <div className="dec-eco-card animate-on-scroll">
                        <div className="dec-eco-icon"><BarChart3 size={24} /></div>
                        <h3>For Publishers</h3>
                        <p>Monetization that becomes independently verifiable. Reduced dependency on opaque intermediaries.</p>
                        <ul className="dec-check-list compact">
                            <li><CheckCircle2 size={14} /> Transparent revenue tracking</li>
                            <li><CheckCircle2 size={14} /> Independent performance verification</li>
                        </ul>
                    </div>
                    <div className="dec-eco-card animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <div className="dec-eco-icon"><Shield size={24} /></div>
                        <h3>For Advertisers</h3>
                        <p>Greater confidence in delivery and performance. Transparent measurement and settlement at every level.</p>
                        <ul className="dec-check-list compact">
                            <li><CheckCircle2 size={14} /> Verified ad delivery</li>
                            <li><CheckCircle2 size={14} /> Auditable spend reporting</li>
                        </ul>
                    </div>
                    <div className="dec-eco-card animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <div className="dec-eco-icon"><RadioTower size={24} /></div>
                        <h3>For Infrastructure Partners</h3>
                        <p>Opportunity to operate verification nodes and participate in securing and governing the network.</p>
                        <ul className="dec-check-list compact">
                            <li><CheckCircle2 size={14} /> Node operator incentives</li>
                            <li><CheckCircle2 size={14} /> Governance participation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;
