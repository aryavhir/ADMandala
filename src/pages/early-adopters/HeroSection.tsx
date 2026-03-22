import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollingFeatures from '../home/ScrollingFeatures';
import '../../styles/PremiumLayouts.css';
import '../../styles/premium-buttons.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
    const circleRef = useRef<HTMLDivElement>(null);
    const registrationUrl = import.meta.env.VITE_PUBLISHER_REGISTRATION_URL ?? '#';

    useEffect(() => {
        if (!circleRef.current) return;

        const textElements = document.querySelectorAll('.home-hero .animate-premium');
        gsap.fromTo(textElements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power2.out',
                delay: 0.2
            }
        );

        gsap.to(circleRef.current, {
            scale: 2.5,
            opacity: 0.1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'top -40%',
                scrub: 1,
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <header className="hero-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            <div
                className="home-hero"
                style={{
                    position: 'relative',
                    zIndex: 3000,
                    width: '100%',
                    background: '#ffffff',
                    paddingBottom: '2rem'
                }}
            >
                <div className="prem-hero-circle-wrap" style={{ zIndex: 1 }}>
                    <div
                        className="prem-hero-circle"
                        ref={circleRef}
                        style={{ backgroundColor: 'rgb(14 139 194 / 20%)' }}
                    ></div>
                </div>

                <div className="content-wrapper" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="prem-hero-content">
                        <h1 className="prem-hero-h1 animate-premium">
                            Build with us.<br />
                            <span>Grow with us.</span>
                        </h1>

                        <p className="prem-hero-desc animate-premium">
                            Join AdMandala during its early phase and become <br />part of a select  group of publishers shaping a <br />high-quality advertising marketplace.
                        </p>

                        <div className="prem-hero-actions animate-premium">
                            <a
                                href={registrationUrl}
                                className="btn-premium-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="btn-premium-inner">
                                    <span className="btn-premium-text">Apply as a Publisher</span>
                                    <span className="btn-premium-text-hover">Apply as a Publisher</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-scroll-features-wrapper" style={{ width: '100%', marginTop: '4rem' }}>
                    <ScrollingFeatures />
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
