import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Search, Mic } from 'lucide-react';
import ScrollingFeatures from './ScrollingFeatures';
import '../../styles/premium-buttons.css';
import '../../styles/PremiumLayouts.css'; // Import premium layouts

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
    onIntroComplete?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onIntroComplete }) => {
    const [isIntroActive, setIsIntroActive] = useState(false); // Set to false to bypass animation
    const contentRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const googleRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLSpanElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        /* 
        // TEMPORARILY COMMENTED OUT GOOGLE ANIMATION
        if (!contentRef.current || !introRef.current) return;

        // 0. Lock scroll
        document.body.style.overflow = 'hidden';

        // Initial states: Content is clipped and starts behind mockup visually (until reveal starts)
        gsap.set(contentRef.current, {
            clipPath: 'circle(0% at 50% 44%)',
            scale: 0.9,
            opacity: 1
        });
        gsap.set('.animate-premium', { opacity: 0, y: 30 });
        gsap.set(rippleRef.current, { scale: 0, opacity: 1 });

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = '';
                setTimeout(() => {
                    setIsIntroActive(false);
                    onIntroComplete?.();
                }, 300);
            }
        });

        // 1. Initial State
        tl.set(cursorRef.current, { x: 0, y: 100, opacity: 0 });
        if (inputRef.current) inputRef.current.innerText = ""; // Ensure it's empty

        // 2. Reveal Google and Cursor
        tl.to(googleRef.current, { opacity: 1, duration: 0.8, delay: 0.5 });
        tl.to(cursorRef.current, { opacity: 1, duration: 0.4 }, "-=0.2");

        // 3. Move cursor to input
        tl.to(cursorRef.current, { x: -60, y: -45, duration: 1.2, ease: "power3.inOut" });

        // 4. Simulate Typing: admandala.com
        const textToType = "admandala.com";
        textToType.split("").forEach((_, i) => {
            tl.to({}, {
                duration: 0.08,
                onStart: () => {
                    if (inputRef.current) {
                        inputRef.current.innerText = textToType.substring(0, i + 1);
                    }
                }
            });
        });

        // 5. Short pause after typing
        tl.to({}, { duration: 0.6 });

        // 6. Move cursor to button
        tl.to(cursorRef.current, { x: -70, y: 65, duration: 0.8, ease: "power3.inOut" });

        // 7. Click effect
        tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
        tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

        // 8. Cinematic Mask Reveal (The "Ripple" brings the site)
        tl.addLabel("reveal");

        // The green ripple expands
        tl.to(rippleRef.current, {
            scale: 850,
            duration: 2.5,
            ease: "expo.inOut",
            onStart: () => {
                gsap.to(cursorRef.current, { opacity: 0, duration: 0.2 });
            }
        }, "reveal");

        // The actual site content expands with it
        tl.to(contentRef.current, {
            clipPath: 'circle(150% at 50% 44%)',
            scale: 1,
            duration: 2.5,
            ease: "expo.inOut"
        }, "reveal");

        // 9. Fade out Google layer as site reveal completes
        tl.to(introRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=1.5");

        // 10. Staggered reveal of interior elements
        const elements = contentRef.current.querySelectorAll('.animate-premium');
        tl.to(elements, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: 'power3.out'
        }, "-=1.5");

        // Cleanup
        return () => {
            document.body.style.overflow = '';
        };
        */

        // Ensure home content is visible and scroll is unlocked
        document.body.style.overflow = '';
        if (contentRef.current) {
            gsap.set(contentRef.current, {
                clipPath: 'none',
                scale: 1,
                opacity: 1
            });
            gsap.set('.animate-premium', { opacity: 1, y: 0 });
        }

        // Circle expanding effect on scroll
        if (circleRef.current && contentRef.current) {
            gsap.to(circleRef.current, {
                scale: 2.5,
                opacity: 0.1,
                ease: 'none',
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top top",
                    end: "top -40%",
                    scrub: 1,
                }
            });
        }

        onIntroComplete?.();

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [onIntroComplete]);

    return (
        <header className="hero-section">
            <div className="hero-background">
                <div className="tech-grid"></div>
            </div>

            {/* Intro Animation Overlay (Google Layer) */}
            {isIntroActive && (
                <div className="hero-intro-container active" ref={introRef}>
                    <div className="google-mockup" ref={googleRef} style={{ opacity: 0 }}>
                        <div className="google-logo-text">
                            <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
                        </div>
                        <div className="google-search-bar">
                            <Search className="search-icon-mock" size={18} />
                            <span className="search-input-mock" ref={inputRef}></span>
                            <Mic className="search-mic-mock" size={18} />
                        </div>
                        <div className="google-buttons-mock">
                            <div className="google-btn-mock">Google Search</div>
                            <div className="google-btn-mock">I'm Feeling Lucky</div>
                        </div>
                    </div>
                </div>
            )}

            <header
                className="prem-hero"
                ref={contentRef}
                style={{
                    position: 'relative',
                    zIndex: 100, // Lowered to stay below Navbar (2000)
                    width: '100%',
                    background: '#ffffff',
                    paddingBottom: '2rem'
                }}
            >
                <div className="prem-hero-circle-wrap">
                    <div
                        className="prem-hero-circle"
                        ref={circleRef}
                        style={{ backgroundColor: "rgba(13, 148, 136, 0.15)" }}
                    ></div>
                </div>

                <div className="content-wrapper">
                    <div className="prem-hero-content">
                        <h1 className="prem-hero-h1 animate-premium">
                            <span className="gradient-text">Programmatic Advertising.</span><br />
                            Built to Evolve.
                        </h1>
                        <p className="prem-hero-desc animate-premium">
                            Ad Mandala is a live, centralized programmatic advertising exchange — designed from day one to transition into a decentralized, verifiable protocol.
                        </p>

                        <div className="prem-hero-actions animate-premium">
                            <Link to="/publishers" className="btn-premium-primary">
                                <div className="btn-premium-inner">
                                    <span className="btn-premium-text">Publisher Access</span>
                                    <span className="btn-premium-text-hover">Publisher Access</span>
                                </div>
                            </Link>
                            <Link to="/advertisers" className="btn-premium-primary">
                                <div className="btn-premium-inner">
                                    <span className="btn-premium-text">Advertiser Access</span>
                                    <span className="btn-premium-text-hover">Advertiser Access</span>
                                </div>
                            </Link>
                        </div>

                        <div className="decentralization-link-wrapper animate-premium" style={{ marginTop: '0.5rem' }}>
                            <Link to="/decentralization" className="prem-hero-cta-ghost">
                                Explore the decentralization roadmap
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hero-scroll-features-wrapper" style={{ width: '100%', marginTop: '4rem' }}>
                    <ScrollingFeatures />
                </div>
            </header>
            {isIntroActive && <div className="fake-cursor" ref={cursorRef}></div>}
        </header>
    );
};

export default HeroSection;
