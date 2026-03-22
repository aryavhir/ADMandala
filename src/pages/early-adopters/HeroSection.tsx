import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/PremiumLayouts.css';
import '../../styles/premium-buttons.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
    const circleRef = useRef<HTMLDivElement>(null);
    const registrationUrl = import.meta.env.VITE_PUBLISHER_REGISTRATION_URL ?? '#';

    useEffect(() => {
        if (!circleRef.current) return;

        const textElements = document.querySelectorAll('.eap-hero .animate-premium');
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
                trigger: ".eap-hero",
                start: "top top",
                end: "top -40%",
                scrub: 1,
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <header className="eap-hero">
            <div className="prem-hero-circle-wrap">
                <div
                    className="prem-hero-circle"
                    ref={circleRef}
                    style={{ backgroundColor: 'rgba(15, 74, 74, 0.2)' }}
                ></div>
            </div>

            <div className="eap-hero-content">
                <div className="eap-hero-eyebrow animate-premium">
                    <span className="eap-eyebrow-dot"></span>
                    Limited Program
                </div>

                <h1 className="prem-hero-h1 animate-premium">
                    Build with us.<br />
                    <span>Grow with us.</span>
                </h1>

                <p className="prem-hero-desc animate-premium">
                    Join AdMandala during its early phase and become part of a select group of publishers shaping a high-quality advertising marketplace.
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
        </header>
    );
};

export default HeroSection;
