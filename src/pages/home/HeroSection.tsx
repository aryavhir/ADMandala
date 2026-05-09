import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Mic } from 'lucide-react';
import ScrollingFeatures from './ScrollingFeatures';
import '../../styles/premium-buttons.css';
import '../../styles/PremiumLayouts.css'; // Import premium layouts

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
    onIntroComplete?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onIntroComplete }) => {
    const [isIntroActive, setIsIntroActive] = useState(false); // Set to true to bypass animation
    const contentRef = useRef<HTMLDivElement>(null);
    const googleRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLSpanElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isIntroActive) {
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



            onIntroComplete?.();

            return () => {
                ScrollTrigger.getAll().forEach(st => st.kill());
            };
        }

        if (!contentRef.current) return;

        // Initial states: Content is clipped and starts behind mockup visually (until reveal starts)
        gsap.set(contentRef.current, {
            clipPath: 'circle(0% at 50% 50%)',
            opacity: 1
        });
        gsap.set('.animate-premium', { opacity: 0, y: 30 });

        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => {
                    setIsIntroActive(false);
                    onIntroComplete?.();
                }, 300);
            }
        });

        // 1. Initial State
        if (inputRef.current) inputRef.current.innerText = "|"; // Start with cursor

        // 2. Reveal Google and Cursor
        if (googleRef.current) tl.to(googleRef.current, { opacity: 1, duration: 0.8, delay: 0.5 });

        // Blink cursor a few times before typing
        tl.to({}, {
            duration: 1.2,
            onUpdate: function () {
                if (inputRef.current) {
                    // Blinking effect based on time
                    inputRef.current.innerText = Math.floor(this.time() * 3) % 2 === 0 ? "|" : "";
                }
            }
        });

        // 4. Simulate Typing: admandala.com
        const textToType = "admandala.com";
        textToType.split("").forEach((_, i) => {
            tl.to({}, {
                duration: 0.08,
                onStart: () => {
                    if (inputRef.current) {
                        inputRef.current.innerText = textToType.substring(0, i + 1) + "|";
                    }
                }
            });
        });

        // 5. Short pause after typing, keeping cursor solid
        tl.to({}, {
            duration: 0.6,
            onStart: () => {
                if (inputRef.current) inputRef.current.innerText = "admandala.com"; // Remove cursor
            }
        });

        // 6. Fast zoom towards the button, centering it completely
        tl.addLabel("zoomToButton");

        if (googleRef.current) {
            // Precise coordinates to center the "Google Search" button
            // Given the button's layout, shifting X to ~110 and Y to ~170 usually centers the left button
            // To bring the button to center: 
            // - The button is naturally in the middle horizontally, slightly to the left.
            //   So X needs to shift right.
            // - The button is naturally lower half of the screen.
            //   So Y needs to shift significantly UP.
            tl.to(googleRef.current, { scale: 3.8, x: 230, y: -420, duration: 1.2, ease: "power3.inOut" }, "zoomToButton");
        }

        // 7. Click effect (Simulate auto-click on center)
        tl.to(".google-btn-mock:first-child", { backgroundColor: "#e8eaed", borderColor: "#dadce0", duration: 0.1 }, "+=0.2");
        tl.to(".google-btn-mock:first-child", { backgroundColor: "#f8f9fa", borderColor: "#f8f9fa", duration: 0.1 }, "+=0.1");

        // Short pause to register the click before reveal
        tl.to({}, { duration: 0.2 });

        // 8. Cinematic Mask Reveal (The "Ripple" brings the site)
        tl.addLabel("reveal");

        // The actual site content expands with it
        tl.to(contentRef.current, {
            clipPath: 'circle(150% at 50% 50%)',
            opacity: 1,
            // 👇 THIS CONTROLS THE REVEAL SPEED (higher value = slower expansion, 2.4 is half the speed of 1.2)
            duration: 1.4,
            ease: "power4.in"
        }, "reveal");

        // 9. Fade out Google layer as site reveal completes - REMOVED for persistent BG

        // 10. Staggered reveal of interior elements
        if (contentRef.current) {
            const elements = contentRef.current.querySelectorAll('.animate-premium');
            if (elements.length > 0) {
                tl.to(elements, {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.12,
                    ease: 'power3.out'
                }, "-=1.5");
            }
        }



        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
            if (tl) tl.kill();
        };
    }, []);

    // 11. Expanding Circle Animation (Matches subpages)
    // Run independently of intro logic
    useEffect(() => {
        if (!circleRef.current) return;

        gsap.to(circleRef.current, {
            scale: 2.5,
            opacity: 0.1,
            ease: 'none',
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "top -40%",
                scrub: 1,
            }
        });
    }, []);

    return (
        <header className="hero-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            <div className="hero-background">
                <div className="tech-grid"></div>
            </div>

            {/* Intro Animation Overlay (Google Layer) */}
            {isIntroActive && (
                <div className="hero-intro-container active">
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
                            <div className="google-btn-mock" style={{ transition: 'background-color 0.1s, border-color 0.1s' }}>Google Search</div>
                            <div className="google-btn-mock">I'm Feeling Lucky</div>
                        </div>
                    </div>
                </div>
            )}

            <div
                className="home-hero"
                ref={contentRef}
                style={{
                    position: 'relative',
                    zIndex: 3000, // Above Google layer (2500)
                    width: '100%',
                    background: '#ffffff',
                    paddingBottom: '2rem'
                }}
            >
                <div className="prem-hero-circle-wrap" style={{ zIndex: 1 }}>
                    <div
                        className="prem-hero-circle"
                        ref={circleRef}
                        style={{ backgroundColor: 'rgba(45, 189, 189, 0.15)' }}
                    ></div>
                </div>
                <div className="content-wrapper" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="prem-hero-content">
                        <h1 className="prem-hero-h1 animate-premium">
                            Programmatic Advertising.<br />
                            <span>Built to Evolve.</span>
                        </h1>
                        <p className="prem-hero-desc animate-premium">
                            AdMandala is a live, centralized programmatic advertising exchange — designed from day one to transition into a decentralized, verifiable protocol.
                        </p>

                        <div className="prem-hero-actions animate-premium">
                            <Link to="/publishers" className="btn-premium-primary">
                                <div className="btn-premium-inner">
                                    <span className="btn-premium-text">Publisher Access</span>
                                    <span className="btn-premium-text-hover">Publisher Access</span>
                                </div>
                            </Link>
                            <Link to="/advertisers" className="btn-premium-black">
                                <div className="btn-premium-inner">
                                    <span className="btn-premium-text">Advertiser Access</span>
                                    <span className="btn-premium-text-hover">Advertiser Access</span>
                                </div>
                            </Link>
                        </div>

                        <div className="early-adopters-wrapper animate-premium">
                            <Link to="/early-adopters" className="early-adopters-btn">
                                <span className="icon-wrapper" aria-hidden="true">
                                    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={12} className="arrow-svg">
                                        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                    </svg>
                                    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={12} className="arrow-svg arrow-svg--copy">
                                        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span className="label">Join our early adopters program</span>
                            </Link>
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
