import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import p1 from '../../assets/pub1.png';
import p2 from '../../assets/pub2.png';
import p3 from '../../assets/pub3.png';
import '../../styles/PremiumLayouts.css';

gsap.registerPlugin(ScrollTrigger);

const EcosystemSection = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const roles = [
        {
            id: "publishers",
            title: "For Publishers",
            description: "Monetization that becomes independently verifiable. Reduced dependency on opaque intermediaries while increasing take-home revenue.",
            listItems: [
                "Revenue Trust",
                "Performance Audits",
                "Direct Demand Access"
            ],
            image: p1,
            imageAlt: "Publisher Dashboard",
            bgColor: "rgba(15, 74, 74, 0.03)"
        },
        {
            id: "advertisers",
            title: "For Advertisers",
            description: "Greater confidence in delivery and performance. Transparent measurement at every level through protocol-enforced verification.",
            listItems: [
                "Verified Delivery",
                "Auditable Spend",
                "Fraud Prevention"
            ],
            image: p2,
            imageAlt: "Advertiser Dashboard",
            bgColor: "rgba(255, 255, 255, 0.03)"
        },
        {
            id: "infrastructure",
            title: "For Infrastructure",
            description: "Operate verification nodes and participate in securing the network. Earn rewards for maintaining the decentralized ledger and validating events across the ecosystem.",
            listItems: [
                "Node Rewards",
                "Active Governance",
                "System Security"
            ],
            image: p3,
            imageAlt: "Infrastructure Node",
            bgColor: "rgba(15, 74, 74, 0.03)"
        }
    ];

    useEffect(() => {
        sectionRefs.current.forEach((section, index) => {
            if (!section) return;

            const image = section.querySelector('.prem-split-visual-inner');
            if (!image) return;

            const isMirrored = index % 2 !== 0;

            gsap.fromTo(image,
                {
                    x: isMirrored ? -80 : 80,
                    y: 80,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section id="ecosystem" className="dec-section dec-ecosystem-premium">
            <div className="content-wrapper">
                <div className="dec-section-hdr">
                    <span className="prem-badge animate-premium">Participation Map</span>
                    <h2 className="section-title animate-premium">What This Means for You</h2>
                    <p className="dec-sub-refined animate-premium">
                        Direct value distribution across the decentralized advertising landscape.
                    </p>
                </div>

                <div className="premium-features-container" style={{ marginTop: '4rem' }}>
                    {roles.map((role, index) => (
                        <div
                            key={role.id}
                            id={role.id}
                            className="prem-split-section"
                            ref={(el) => { sectionRefs.current[index] = el as HTMLDivElement; }}
                            style={{ padding: '60px 0', background: 'transparent' }}
                        >
                            <div className="prem-split-layout">
                                <div className="prem-split-content">
                                    <h2>{role.title}</h2>
                                    <p className="prem-split-desc">{role.description}</p>
                                    <ul className="prem-split-features">
                                        {role.listItems.map((item, i) => (
                                            <li key={i}>
                                                <CheckCircle2 size={18} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="prem-split-visual" style={{ backgroundColor: role.bgColor }}>
                                    <div className="prem-split-visual-inner">
                                        <div className="prem-split-img-wrapper">
                                            <img src={role.image} alt={role.imageAlt} className="prem-split-img" />
                                        </div>
                                    </div>
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


