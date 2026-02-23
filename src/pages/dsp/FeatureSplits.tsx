import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeatureSplits.css';
import l7 from '../../assets/l7.png';
import l6 from '../../assets/l6.png';
import l5 from '../../assets/l5.png';

gsap.registerPlugin(ScrollTrigger);

const FeatureSplits: React.FC = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        sectionRefs.current.forEach((section, index) => {
            if (!section) return;

            const image = section.querySelector('.dsp-split-visual-inner');
            if (!image) return;

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
        <div className="dsp-features-container">
            {/* Split 1: Quality */}
            <section id="quality-control" className="dsp-split-section" ref={(el) => { sectionRefs.current[0] = el as HTMLDivElement; }}>
                <div className="dsp-split-layout">
                    <div className="dsp-split-content">
                        <h2>Quality-Controlled Supply</h2>
                        <p className="dsp-split-description">Performance over volume. Ad Mandala prioritizes traffic quality and advertiser outcomes.</p>
                        <ul className="dsp-split-features">
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Enforcing centralized quality checks</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Actively filtering invalid traffic</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Monitoring performance signals across the exchange</span>
                            </li>
                        </ul>
                    </div>
                    <div className="dsp-split-visual" style={{ backgroundColor: 'rgb(230, 230, 250)' }}>
                        <div className="dsp-split-visual-inner">
                            <div className="dsp-split-image-wrapper">
                                <img src={l7} alt="Quality Dashboard" className="dsp-split-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Split 2: Experience */}
            <section id="familiar-ui" className="dsp-split-section" ref={(el) => { sectionRefs.current[1] = el as HTMLDivElement; }}>

                <div className="dsp-split-layout">
                    <div className="dsp-split-content">
                        <h2>Familiar Buying Experience</h2>
                        <p className="dsp-split-description">No learning curve required. Integrate using standard programmatic mechanisms.</p>
                        <ul className="dsp-split-features">
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Quick onboarding through RTB</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Existing optimization strategies apply</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Seamless campaign execution</span>
                            </li>
                        </ul>
                    </div>
                    <div className="dsp-split-visual" style={{ backgroundColor: 'rgb(250, 240, 230)' }}>
                        <div className="dsp-split-visual-inner">
                            <div className="dsp-split-image-wrapper">
                                <img src={l6} alt="API Integration" className="dsp-split-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Split 3: Transparency */}
            <section className="dsp-split-section" ref={(el) => { sectionRefs.current[2] = el as HTMLDivElement; }}>
                <div className="dsp-split-layout">
                    <div className="dsp-split-content">
                        <h2>Progressive Transparency</h2>
                        <p className="dsp-split-description">While the exchange operates centrally today, Ad Mandala is designed to progressively reduce trust assumptions.</p>
                        <ul className="dsp-split-features">
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Independently verifiable ad events</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Increased confidence in delivery and performance</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Greater clarity in how value is created and settled</span>
                            </li>
                        </ul>
                    </div>
                    <div className="dsp-split-visual" style={{ backgroundColor: 'rgb(230, 245, 255)' }}>
                        <div className="dsp-split-visual-inner">
                            <div className="dsp-split-image-wrapper">
                                <img src={l5} alt="Transparency Roadmap" className="dsp-split-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSplits;
