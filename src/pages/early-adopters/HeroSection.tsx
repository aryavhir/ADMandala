import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollingFeatures from '../home/ScrollingFeatures';
import '../../styles/PremiumLayouts.css';
import '../../styles/premium-buttons.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
    const circleRef = useRef<HTMLDivElement>(null);
    const registrationUrl = import.meta.env.VITE_PUBLISHER_REGISTRATION_URL ?? '#';
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 900;

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

        if (!isMobile) {
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
        } else {
            gsap.set(circleRef.current, {
                scale: 1.5,
                opacity: 0.15
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [isMobile]);

    return (
        <header className="hero-section" style={{ position: 'relative', overflow: 'hidden', minHeight: isMobile ? 'auto' : '100vh', paddingTop: isMobile ? '4rem' : '0' }}>
            <div
                className="home-hero"
                style={{
                    position: 'relative',
                    zIndex: 3000,
                    width: '100%',
                    background: '#ffffff',
                    paddingBottom: isMobile ? '0.5rem' : '2rem'
                }}
            >
                <div className="prem-hero-circle-wrap" style={{ zIndex: 1 }}>
                    <div
                        className="prem-hero-circle"
                        ref={circleRef}
                        style={{ backgroundColor: 'rgb(14 139 / 20%)' }}
                    ></div>
                </div>

                <div className="content-wrapper" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="prem-hero-content" style={{ padding: isMobile ? '1.5rem 0' : 'inherit' }}>
                        <h1 className="prem-hero-h1 animate-premium" style={{ fontSize: isMobile ? '36px' : 'inherit' }}>
                            Build with us.<br />
                            <span>Grow with us.</span>
                        </h1>

                        <p className="prem-hero-desc animate-premium" style={{ fontSize: isMobile ? '18px' : 'inherit' }}>
                            Join AdMandala during its early phase and become part of a select group of publishers shaping a high-quality advertising marketplace.
                        </p>

                        <div className="prem-hero-actions animate-premium">
                            <a
                                href={registrationUrl}
                                className="btn-premium-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ width: isMobile ? '100%' : 'auto', maxWidth: isMobile ? '320px' : 'none' }}
                            >
                                <div className="btn-premium-inner">
                                    <span className="btn-premium-text">Apply as a Publisher</span>
                                    <span className="btn-premium-text-hover">Apply as a Publisher</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-scroll-features-wrapper" style={{ width: '100%', marginTop: isMobile ? '1rem' : '4rem' }}>
                    <ScrollingFeatures />
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
