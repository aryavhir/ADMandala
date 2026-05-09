import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/PremiumLayouts.css';

gsap.registerPlugin(ScrollTrigger);

interface FeatureSplit {
    id: string;
    title: string;
    description: string;
    listItems: string[];
    image: string;
    imageAlt: string;
    bgColor: string;
}

interface PremiumFeatureSplitsProps {
    features: FeatureSplit[];
}

const PremiumFeatureSplits: React.FC<PremiumFeatureSplitsProps> = ({ features }) => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    }, [features]);

    return (
        <div className="premium-features-container">
            {features.map((feature, index) => (
                <section
                    key={feature.id}
                    id={feature.id}
                    className="prem-split-section"
                    ref={(el) => { sectionRefs.current[index] = el as HTMLDivElement; }}
                >
                    <div className="prem-split-layout">
                        <div className="prem-split-content">
                            <h2>{feature.title}</h2>
                            <p className="prem-split-desc">{feature.description}</p>
                            <ul className="prem-split-features">
                                {feature.listItems.map((item, i) => (
                                    <li key={i}>
                                        <CheckCircle2 size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="prem-split-visual" style={{ backgroundColor: feature.bgColor }}>
                            <div className="prem-split-visual-inner">
                                <div className="prem-split-img-wrapper">
                                    <img src={feature.image} alt={feature.imageAlt} className="prem-split-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default PremiumFeatureSplits;
