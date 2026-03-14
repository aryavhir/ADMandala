import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StepJourney: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Path reveal animation
            gsap.fromTo('.dec-step-anim-path',
                { strokeDashoffset: 1500, strokeDasharray: 1500 },
                {
                    strokeDashoffset: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: ".prem-hero", // High-level trigger from parent
                        start: "top top",
                        end: "top -100%",
                        scrub: 1,
                    }
                }
            );

            // Step groups animation
            const steps = [".dec-step-1", ".dec-step-2", ".dec-step-3"];
            steps.forEach((step, i) => {
                gsap.fromTo(step,
                    { opacity: 0, x: -20 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".prem-hero",
                            start: `${15 + i * 25}% top`,
                            end: `${40 + i * 25}% top`,
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="dec-step-journey-container" ref={containerRef}>
            <div className="dec-tab-header">
                <div className="dec-tab-dots">
                    <span></span><span></span><span></span>
                </div>
                <div className="dec-tab-title">Journey to Decentralization</div>
            </div>
            <div className="dec-step-visual">
                <svg className="dec-step-svg" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="dec-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2dbdbd" />
                            <stop offset="100%" stopColor="#0f4a4a" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M 50 320 C 150 320, 250 180, 500 180 S 850 320, 1000 180 S 1100 100, 1150 60"
                        className="dec-step-base-path"
                    />
                    <path
                        d="M 50 320 C 150 320, 250 180, 500 180 S 850 320, 1000 180 S 1100 100, 1150 60"
                        className="dec-step-anim-path"
                        stroke="url(#dec-line-grad)"
                    />
                </svg>

                <div className="dec-step-group dec-step-1">
                    <span className="dec-step-number">1</span>
                    <div className="dec-step-content">
                        <span className="dec-step-title">Centralized Bootstrap</span>
                        <span className="dec-step-desc">Establish liquidity and performance norms.</span>
                    </div>
                </div>

                <div className="dec-step-group dec-step-2">
                    <span className="dec-step-number">2</span>
                    <div className="dec-step-content">
                        <span className="dec-step-title">Hybrid Verification</span>
                        <span className="dec-step-desc">Introduce transparent settlement layers.</span>
                    </div>
                </div>

                <div className="dec-step-group dec-step-3">
                    <span className="dec-step-number">3</span>
                    <div className="dec-step-content">
                        <span className="dec-step-title">Full Protocol Independence</span>
                        <span className="dec-step-desc">Governed by the network participants.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepJourney;
