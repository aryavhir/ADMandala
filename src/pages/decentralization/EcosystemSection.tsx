import { BarChart3, Shield, RadioTower } from 'lucide-react';

const EcosystemSection = () => {
    const roles = [
        {
            title: "For Publishers",
            desc: "Monetization that becomes independently verifiable. Reduced dependency on opaque intermediaries while increasing take-home revenue.",
            icon: <BarChart3 size={24} />,
            tags: ["Revenue Trust", "Performance Audits"],
            size: "span-2"
        },
        {
            title: "For Advertisers",
            desc: "Greater confidence in delivery and performance. Transparent measurement at every level.",
            icon: <Shield size={24} />,
            tags: ["Verified Delivery", "Auditable Spend"],
            size: "span-1"
        },
        {
            title: "For Infrastructure",
            desc: "Operate verification nodes and participate in securing the network. Earn rewards for maintaining the decentralized ledger and validating events across the ecosystem.",
            icon: <RadioTower size={24} />,
            tags: ["Node Rewards", "Active Governance"],
            size: "span-3"
        }
    ];

    return (
        <section id="ecosystem" className="dec-section dec-ecosystem">
            <div className="dec-compat-mesh"></div>
            <div className="content-wrapper">
                <div className="dec-section-hdr">
                    <span className="prem-badge animate-premium">Participation Map</span>
                    <h2 className="section-title">What This Means for You</h2>
                    <p className="dec-section-sub">
                        Direct value distribution across the decentralized advertising landscape.
                    </p>
                </div>

                <div className="dec-bento-grid">
                    {roles.map((role, i) => (
                        <div key={i} className={`dec-bento-card ${role.size} animate-on-scroll`} style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="dec-bento-icon-box">
                                {role.icon}
                            </div>
                            <div className="dec-bento-content">
                                <h3>{role.title}</h3>
                                <p>{role.desc}</p>
                                <div className="dec-blueprint-tags" style={{ marginTop: '1.25rem' }}>
                                    {role.tags.map((tag, ti) => (
                                        <span key={ti} className="dec-blueprint-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;
