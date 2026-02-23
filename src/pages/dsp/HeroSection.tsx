import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DSPHero.css';
import '../../styles/premium-buttons.css';
import img1 from '../../assets/img1.png';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
    onRegisterClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onRegisterClick }) => {
    const mockupRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!circleRef.current || !mockupRef.current) return;

        const transitionEnd = "top -80%";

        const textElements = document.querySelectorAll('.dsp-hero-content > *');
        gsap.fromTo(textElements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.2
            }
        );

        ScrollTrigger.create({
            trigger: ".dsp-hero",
            start: "top top",
            end: transitionEnd,
            pin: ".dsp-hero-content",
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
                const heroContent = document.querySelector(".dsp-hero-content");
                if (heroContent) {
                    gsap.set(heroContent, {
                        opacity: 1 - self.progress
                    });
                }
            }
        });

        gsap.fromTo(mockupRef.current,
            {
                rotateX: 30,
                y: -120,
                scale: 0.8,
            },
            {
                rotateX: 0,
                y: 0,
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: ".dsp-hero",
                    start: "top top",
                    end: transitionEnd,
                    scrub: 1,
                }
            }
        );

        gsap.to(circleRef.current, {
            scale: 2.5,
            opacity: 0.1,
            ease: 'none',
            scrollTrigger: {
                trigger: ".dsp-hero",
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
        <header className="dsp-hero">
            <div className="dsp-hero-circle-wrap">
                <div className="dsp-hero-circle" ref={circleRef}></div>
            </div>

            <div className="dsp-hero-content">
                <h1 className="dsp-hero-h1">
                    Buy Media<br />
                    <span>You Can Trust</span>
                </h1>

                <p className="dsp-hero-desc">
                    Access programmatic supply through a centralized exchange with strong quality controls — and a clear path toward verifiable delivery.
                </p>

                <div className="dsp-hero-actions">
                    <button
                        className="btn-premium-primary"
                        onClick={onRegisterClick}
                    >
                        <div className="btn-premium-inner">
                            <span className="btn-premium-text">Register as a DSP / Advertiser</span>
                            <span className="btn-premium-text-hover">Register as a DSP / Advertiser</span>
                        </div>
                    </button>
                    <a href="mailto:partners@admandala.com" className="dsp-hero-cta-ghost">
                        Contact our partnerships team
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            <div className="dsp-hero-mockup-wrap">
                <div className="dsp-hero-mockup" ref={mockupRef}>
                    <div className="dsp-mockup-inner">
                        <div className="dsp-mockup-image-container">
                            <img
                                src={img1}
                                alt="Advertiser Dashboard"
                                className="dsp-mockup-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;

