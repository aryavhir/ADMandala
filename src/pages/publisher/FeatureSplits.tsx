import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeatureSplits.css';
import p1 from '../../assets/pub1.png';
import p2 from '../../assets/pub2.png';
import p3 from '../../assets/pub3.png';

gsap.registerPlugin(ScrollTrigger);

const FeatureSplits: React.FC = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        sectionRefs.current.forEach((section, index) => {
            if (!section) return;

            const image = section.querySelector('.pub-split-visual-inner');
            if (!image) return;

            // Determine slide direction based on even/odd (mirroring)
            // Sections: 0 (even layout), 1 (odd layout - mirrored), 2 (even layout)
            // The CSS nth-child(even) targets the 2nd section (index 1)
            const isMirrored = index === 1;

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
        <div className="pub-features-container">
            {/* Split 1: Integration */}
            <section className="pub-split-section" ref={(el) => { sectionRefs.current[0] = el as HTMLDivElement; }}>
                <div className="pub-split-layout">
                    <div className="pub-split-content">
                        <h2>Simple Integration</h2>
                        <p className="pub-split-description">Works with your current setup using standard programmatic workflows.</p>
                        <ul className="pub-split-features">
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Compatible with existing SSP setups</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Standard ad serving and reporting flows</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Minimal technical overhead</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pub-split-visual">
                        <div className="pub-split-visual-inner">
                            <div className="pub-split-image-wrapper">
                                <img src={p1} alt="Integration Dashboard" className="pub-split-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Split 2: Quality */}
            <section className="pub-split-section" ref={(el) => { sectionRefs.current[1] = el as HTMLDivElement; }}>
                <div className="pub-split-layout">
                    <div className="pub-split-content">

                        <h2>Traffic Quality First</h2>
                        <p className="pub-split-description">Quality is enforced with centralized traffic controls.</p>
                        <ul className="pub-split-features">
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Detect and filter invalid traffic</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Protect advertiser trust automatically</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Improve long-term demand value</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pub-split-visual">
                        <div className="pub-split-visual-inner">
                            <div className="pub-split-image-wrapper">
                                <img src={p2} alt="Quality Controls" className="pub-split-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Split 3: Transparency */}
            <section className="pub-split-section" ref={(el) => { sectionRefs.current[2] = el as HTMLDivElement; }}>
                <div className="pub-split-layout">
                    <div className="pub-split-content">
                        <h2>Transparent Performance</h2>
                        <p className="pub-split-description">Get clear visibility into demand sources and CPM performance.</p>
                        <ul className="pub-split-features">
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Independently verifiable traffic data</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Confidence in revenue reporting</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Clear distribution of value</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pub-split-visual">
                        <div className="pub-split-visual-inner">
                            <div className="pub-split-image-wrapper">
                                <img src={p3} alt="Transparency Dashboard" className="pub-split-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSplits;
