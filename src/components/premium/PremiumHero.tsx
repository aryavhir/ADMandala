import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/PremiumLayouts.css';
import '../../styles/premium-buttons.css';

gsap.registerPlugin(ScrollTrigger);

interface PremiumHeroProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    description: string;
    primaryCtaText: string;
    onPrimaryCtaClick?: () => void;
    primaryCtaHref?: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
    mockupImage: string;
    mockupAlt: string;
}

const PremiumHero: React.FC<PremiumHeroProps> = ({
    title,
    subtitle,
    description,
    primaryCtaText,
    onPrimaryCtaClick,
    primaryCtaHref,
    secondaryCtaText,
    secondaryCtaHref,
    mockupImage,
    mockupAlt
}) => {
    const mockupRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!circleRef.current || !mockupRef.current) return;

        const transitionEnd = "top -80%";

        const textElements = document.querySelectorAll('.prem-hero-content > *');
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
            trigger: ".prem-hero",
            start: "top top",
            end: transitionEnd,
            pin: ".prem-hero-content",
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
                const heroContent = document.querySelector(".prem-hero-content");
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
                    trigger: ".prem-hero",
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
                trigger: ".prem-hero",
                start: "top top",
                end: "top -40%",
                scrub: 1,
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    const renderPrimaryCta = () => {
        if (primaryCtaHref) {
            return (
                <a
                    href={primaryCtaHref}
                    className="btn-premium-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="btn-premium-inner">
                        <span className="btn-premium-text">{primaryCtaText}</span>
                        <span className="btn-premium-text-hover">{primaryCtaText}</span>
                    </div>
                </a>
            );
        }
        return (
            <button
                className="btn-premium-primary"
                onClick={onPrimaryCtaClick}
            >
                <div className="btn-premium-inner">
                    <span className="btn-premium-text">{primaryCtaText}</span>
                    <span className="btn-premium-text-hover">{primaryCtaText}</span>
                </div>
            </button>
        );
    };

    return (
        <header className="prem-hero">
            <div className="prem-hero-circle-wrap">
                <div className="prem-hero-circle" ref={circleRef}></div>
            </div>

            <div className="prem-hero-content">
                <h1 className="prem-hero-h1">
                    {title}<br />
                    <span>{subtitle}</span>
                </h1>

                <p className="prem-hero-desc">
                    {description}
                </p>

                <div className="prem-hero-actions">
                    {renderPrimaryCta()}
                    <a href={secondaryCtaHref} className="prem-hero-cta-ghost">
                        {secondaryCtaText}
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            <div className="prem-hero-mockup-wrap">
                <div className="prem-hero-mockup" ref={mockupRef}>
                    <div className="prem-mockup-inner">
                        <div className="prem-mockup-img-container">
                            <img
                                src={mockupImage}
                                alt={mockupAlt}
                                className="prem-mockup-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PremiumHero;
