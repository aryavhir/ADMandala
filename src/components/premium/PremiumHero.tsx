import React, { useEffect, useRef, useState } from 'react';
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
    mockupImage?: string;
    mockupAlt?: string;
    mockupContent?: React.ReactNode;
    accentColor?: string;
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
    mockupAlt,
    mockupContent,
    accentColor
}) => {
    const mockupRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!circleRef.current || !mockupRef.current) return;

        const textElements = document.querySelectorAll('.prem-hero-content > *');
        gsap.fromTo(textElements,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
        );

        if (!isMobile) {
            gsap.fromTo(mockupRef.current,
                { rotateX: 30, y: -120, scale: 0.8 },
                {
                    rotateX: 0, y: 0, scale: 1,
                    scrollTrigger: {
                        trigger: ".prem-hero",
                        start: "top top",
                        end: "top -80%",
                        scrub: 1,
                    }
                }
            );
        } else {
            gsap.set(mockupRef.current, { rotateX: 0, y: 0, scale: 1 });
        }

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [isMobile]);

    return (
        <header className="prem-hero">
            <div className="prem-hero-circle-wrap">
                <div
                    className="prem-hero-circle"
                    ref={circleRef}
                    style={accentColor ? { backgroundColor: accentColor } : {}}
                ></div>
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
                    {primaryCtaHref ? (
                        <a href={primaryCtaHref} className="btn-premium-primary">
                            <div className="btn-premium-inner">
                                <span className="btn-premium-text">{primaryCtaText}</span>
                                <span className="btn-premium-text-hover">{primaryCtaText}</span>
                            </div>
                        </a>
                    ) : (
                        <button className="btn-premium-primary" onClick={onPrimaryCtaClick}>
                            <div className="btn-premium-inner">
                                <span className="btn-premium-text">{primaryCtaText}</span>
                                <span className="btn-premium-text-hover">{primaryCtaText}</span>
                            </div>
                        </button>
                    )}
                    <a href={secondaryCtaHref} className="btn-premium-black">
                        <div className="btn-premium-inner">
                            <span className="btn-premium-text">{secondaryCtaText}</span>
                            <span className="btn-premium-text-hover">{secondaryCtaText}</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="prem-hero-mockup-wrap">
                <div className="prem-hero-mockup" ref={mockupRef}>
                    <div className="prem-mockup-inner">
                        {mockupContent ? mockupContent : (
                            <div className="prem-mockup-img-container">
                                <img src={mockupImage} alt={mockupAlt} className="prem-mockup-img" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PremiumHero;
