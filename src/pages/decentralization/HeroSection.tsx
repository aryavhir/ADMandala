import React, { useEffect, useRef } from 'react';
import { CircleDot, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/premium-buttons.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
    const copyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!copyRef.current) return;

        const elements = copyRef.current.querySelectorAll('.animate-premium');
        gsap.fromTo(elements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power2.out',
                delay: 0.3,
                scrollTrigger: {
                    trigger: copyRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <header className="dec-hero">
            {/* Mesh background */}
            <div className="dec-hero-mesh" aria-hidden="true">
                <div className="dec-mesh-line dec-ml-1" />
                <div className="dec-mesh-line dec-ml-2" />
                <div className="dec-mesh-line dec-ml-3" />
                <div className="dec-mesh-line dec-ml-4" />
            </div>
            <div className="dec-hero-radial" aria-hidden="true" />

            {/* Hero Background Visual — Move to bg layer */}
            <div className="dec-hero-visual" aria-hidden="true">
                <div className="dec-step-visual">
                    <svg className="dec-step-svg" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <linearGradient id="dec-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#5ba3cf" />
                                <stop offset="50%" stopColor="#38b2ac" />
                                <stop offset="100%" stopColor="#48bb78" />
                            </linearGradient>
                        </defs>
                        {/* Base grey path (Wavy Journey) spanning 1200px */}
                        <path
                            d="M 0 350 C 120 350, 180 240, 300 240 S 480 340, 660 180 S 840 280, 1020 100 L 1200 80"
                            className="dec-step-base-path"
                        />
                        {/* Animated colour stroke */}
                        <path
                            d="M 0 350 C 120 350, 180 240, 300 240 S 480 340, 660 180 S 840 280, 1020 100 L 1200 80"
                            className="dec-step-anim-path"
                            stroke="url(#dec-line-grad)"
                        />
                    </svg>

                    {/* Step 1 Peak at roughly x=300 (25% of 1200) */}
                    <div className="dec-step-group dec-step-1">
                        <span className="dec-step-number dec-sn-1">1</span>
                        <div className="dec-step-content">
                            <span className="dec-step-title">Step One</span>
                            <span className="dec-step-desc">The team should conduct a<br />proof of concept.</span>
                        </div>
                    </div>

                    {/* Step 2 Peak at roughly x=660 (55% of 1200) */}
                    <div className="dec-step-group dec-step-2">
                        <span className="dec-step-number dec-sn-2">2</span>
                        <div className="dec-step-content">
                            <span className="dec-step-title">Step Two</span>
                            <span className="dec-step-desc">The team should start by outlining<br />the milestones.</span>
                        </div>
                    </div>

                    {/* Step 3 Peak at roughly x=1020 (85% of 1200) */}
                    <div className="dec-step-group dec-step-3">
                        <span className="dec-step-number dec-sn-3">3</span>
                        <div className="dec-step-content">
                            <span className="dec-step-title">Step Three</span>
                            <span className="dec-step-desc">The team should monitor the<br />process efficiency.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-wrapper dec-hero-layout">
                <div className="dec-hero-copy" ref={copyRef}>

                    <h1 className="dec-hero-h1 animate-premium">
                        From <span className="dec-h1-em">Platform</span><br />
                        <span>to Protocol</span>
                    </h1>
                    <p className="dec-hero-sub animate-premium">
                        Ad Mandala is evolving from a centralized programmatic exchange into a decentralized advertising network&nbsp;— without compromising performance or usability.
                    </p>
                    <div className="dec-hero-actions animate-premium">
                        <a href="#evolution" className="btn-premium-primary">
                            <div className="btn-premium-inner">
                                <span className="btn-premium-text">Explore the Journey</span>
                                <span className="btn-premium-text-hover">Explore the Journey</span>
                            </div>
                        </a>
                        <a href="#architecture" className="prem-hero-cta-ghost">
                            View Architecture
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
