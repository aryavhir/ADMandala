import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HexagonBackground } from '../../components/animate-ui/components/backgrounds/hexagon';
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

            <HexagonBackground
                className="absolute inset-0 z-0 opacity-40 dark:opacity-20"
                hexagonSize={60}
                hexagonMargin={2}
            />

            <div className="dec-hero-radial" aria-hidden="true" />

            <div className="content-wrapper dec-hero-layout relative z-10">
                <div className="dec-hero-copy" ref={copyRef}>
                    <h1 className="dec-hero-h1 animate-premium">
                        From <span className="dec-h1-em">Platform</span><br />
                        <span>to Protocol</span>
                    </h1>
                    <p className="dec-hero-sub animate-premium">
                        AdMandala is evolving from a centralized programmatic exchange into a decentralized advertising network&nbsp;— without compromising performance or usability.
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
