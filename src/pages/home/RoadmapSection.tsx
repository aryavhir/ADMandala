import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Network, Zap, Users, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
    {
        icon: Network,
        title: 'Seamless Integration',
        desc: 'Integrate seamlessly with existing SSP and DSP workflows.',
    },
    {
        icon: Zap,
        title: 'Reliable Performance',
        desc: 'Maintain performance, uptime, and UX at production-grade standards.',
    },
    {
        icon: Users,
        title: 'Trust Building',
        desc: 'Build trust with publishers and buyers through proven reliability.',
    },
    {
        icon: Shield,
        title: 'Focused Adoption',
        desc: 'Avoid premature complexity that slows adoption and growth.',
    },
];

const RoadmapSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Thesis statement entrance
            gsap.fromTo(
                '.longterm-thesis',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: '.longterm-thesis',
                        start: 'top 85%',
                    },
                }
            );

            // Cards stagger entrance
            gsap.fromTo(
                '.longterm-card',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'expo.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: '.longterm-grid',
                        start: 'top 82%',
                    },
                }
            );

            // Bottom principle entrance
            gsap.fromTo(
                '.roadmap-principle',
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: '.roadmap-principle',
                        start: 'top 90%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="section roadmap-section" ref={sectionRef}>
            <div className="roadmap-bg-shapes">
                <div className="rm-shape rm-shape-1"></div>
                <div className="rm-shape rm-shape-2"></div>
                <div className="rm-shape rm-shape-3"></div>
            </div>

            <div className="content-wrapper">
                <div className="roadmap-header">
                    <span className="roadmap-chip animate-premium">Strategic Vision</span>
                    <h2 className="section-title animate-premium">Built for the <span className="dec-approach-word dec-approach-word-em">Long Term</span></h2>
                    <p className="roadmap-subtitle animate-premium">
                        A deliberate path to decentralization.
                    </p>
                </div>

                <div className="longterm-thesis animate-on-scroll">
                    <p>
                        Ad Mandala is not decentralizing for ideology — <em>but for outcomes.</em>
                    </p>
                </div>

                <div className="longterm-context animate-on-scroll">
                    <p>Starting centralized allows the network to:</p>
                </div>

                <div className="longterm-grid">
                    {benefits.map((b, i) => (
                        <div className="longterm-card" key={i}>
                            <div className="longterm-card-icon">
                                <b.icon size={22} />
                            </div>
                            <div className="longterm-card-body">
                                <h3 className="longterm-card-title">{b.title}</h3>
                                <p className="longterm-card-desc">{b.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="roadmap-principle animate-on-scroll delay-1">
                    <div className="principle-line"></div>
                    <p className="principle-text">
                        Decentralization is introduced <strong>only where it improves trust</strong> without degrading performance.
                    </p>
                    <div className="principle-line"></div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
