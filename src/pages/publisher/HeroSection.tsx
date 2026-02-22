import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PublisherHero.css';
import '../../styles/premium-buttons.css';
import dashboardImg from '../../assets/12.png';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
    registrationUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ registrationUrl }) => {
    const mockupRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!circleRef.current || !mockupRef.current) return;

        // Shared duration for the transition
        const transitionEnd = "top -80%";

        // Entrance animation for hero text (replaces animate-on-scroll for reliability)
        const textElements = document.querySelectorAll('.pub-hero-content > *');
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

        // Pin the text content and fade its opacity
        ScrollTrigger.create({
            trigger: ".pub-hero",
            start: "top top",
            end: transitionEnd,
            pin: ".pub-hero-content",
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
                // Manually handle opacity for smoother "fading away" effect
                // Check if the element exists before setting properties
                const heroContent = document.querySelector(".pub-hero-content");
                if (heroContent) {
                    gsap.set(heroContent, {
                        opacity: 1 - self.progress
                    });
                }
            }
        });

        // Mockup tilt and lift: exact transition provided by user
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
                    trigger: ".pub-hero",
                    start: "top top",
                    end: transitionEnd, // Fast expansion to cover the pinned text
                    scrub: 1,
                }
            }
        );

        // Circle expansion: Scales to cover the background with its nice feathered mask
        gsap.to(circleRef.current, {
            scale: 2.5,
            opacity: 0.1,
            ease: 'none',
            scrollTrigger: {
                trigger: ".pub-hero",
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
        <header className="pub-hero">
            <div className="pub-hero-circle-wrap">
                <div className="pub-hero-circle" ref={circleRef}></div>
            </div>

            <div className="pub-hero-content">
                <h1 className="pub-hero-h1">
                    Monetize Your Website<br />
                    <span>With Confidence</span>
                </h1>

                <p className="pub-hero-desc">
                    Connect your inventory to a programmatic exchange
                    built for performance today — and transparency tomorrow.
                </p>

                <div className="pub-hero-actions">
                    <a
                        href={registrationUrl}
                        className="btn-premium-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="btn-premium-inner">
                            <span className="btn-premium-text">Register as a Publisher</span>
                            <span className="btn-premium-text-hover">Register as a Publisher</span>
                        </div>
                    </a>
                    <a href="mailto:publisher@admandala.com" className="pub-hero-cta-ghost">
                        Talk to our team
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            <div className="pub-hero-mockup-wrap">
                <div className="pub-hero-mockup" ref={mockupRef}>
                    <div className="pub-mockup-inner">
                        <div className="pub-mockup-image-container">
                            <img
                                src={dashboardImg}
                                alt="Publisher Dashboard"
                                className="pub-mockup-img"
                            />
                        </div>
                    </div>
                </div>
            </div>



        </header>
    );
};

export default HeroSection;
