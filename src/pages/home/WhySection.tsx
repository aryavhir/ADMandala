import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wifi, Signal, Battery, RotateCw, MoreVertical, Lock, Home } from 'lucide-react';
import showreelAnimation from '../../assets/Showreel.json';
import '../../styles/Mockups.css';

gsap.registerPlugin(ScrollTrigger);

const WhySection: React.FC = () => {
    const [isIncognito] = useState(false);

    const sectionRef = useRef<HTMLDivElement>(null);
    const whyTextRef = useRef<HTMLDivElement>(null);
    const phoneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entry animation for text
            gsap.fromTo(whyTextRef.current,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Removed scroll-based transform for phone to keep it static as per user request
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Dynamic theme
    const dark = isIncognito;
    const bg = dark ? '#202124' : '#f8f9fa';
    const textPrimary = dark ? '#e8eaed' : '#202124';
    const textSecondary = dark ? '#9aa0a6' : '#5f6368';
    const barBg = dark ? '#202124' : '#fff';
    const barBorder = dark ? '#3c4043' : '#e8eaed';

    return (
        <section ref={sectionRef} id="why-exists" className="prem-split-section why-split-section" style={{ overflow: 'visible', minHeight: '40vh', background: 'white', display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 5, padding: '0 2rem' }}>
            <div className="content-wrapper">
                <div className="prem-split-layout why-split" style={{ position: 'relative', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>

                    {/* LEFT: Text Stack */}
                    <div ref={whyTextRef} className="prem-split-content" style={{ transform: 'translateY(40px)', paddingTop: '0px', gap: '0px' }} >
                        <span className="prem-badge animate-premium">Strategic Mission</span>
                        <h2 className="section-title animate-premium">Why <span className="dec-approach-word dec-approach-word-em">Admandala</span> Exists</h2>
                        <p className="prem-subtext animate-premium">
                            Advertising needs reliability <em>and</em> trust. Today's ecosystem forces a choice between them. We're building the infrastructure that refuses that tradeoff.
                            <br />     <br />  AdMandala bridges this gap by delivering production-grade programmatic infrastructure now, while methodically decentralizing the layers that matter most — verification, settlement, and governance.
                        </p>
                    </div>

                    {/* RIGHT: Phone Mockup (Lower part) */}
                    <div className="why-visual-panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '400px', position: 'relative' }}>
                        <div ref={phoneRef} className="mockup-phone" style={{ transform: 'translate3d(0px, -493.895px, 0px)', opacity: 1, position: 'absolute', top: 0 }}>
                            <div className="mockup-phone-camera"></div>
                            <div className="mockup-phone-display" style={{ background: bg }}>

                                {/* ── Status Bar ── */}
                                <div className="mockup-phone-status-bar" style={{ color: dark ? '#e8eaed' : '#000' }}>
                                    <div className="status-time" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        00:04
                                    </div>
                                    <div className="status-icons">
                                        <Signal size={12} strokeWidth={2.5} />
                                        <Wifi size={12} strokeWidth={2.5} />
                                        <Battery size={12} strokeWidth={2.5} />
                                    </div>
                                </div>

                                {/* ── Chrome Toolbar ── */}
                                <div className="mockup-chrome-bar" style={{ background: barBg, borderBottom: `1px solid ${barBorder}` }}>
                                    <div className="chrome-controls-left" style={{ color: textSecondary }}>
                                        <Home size={18} />
                                    </div>
                                    <div className="chrome-address-bar" style={{ background: dark ? '#303134' : '#f1f3f4', flex: 1 }}>
                                        <div className="address-url-wrap" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <Lock size={12} style={{ color: textSecondary }} />
                                            <span className="domain-text" style={{ color: textPrimary }}>admandala.com</span>
                                        </div>
                                        <RotateCw size={14} style={{ color: textSecondary }} />
                                    </div>
                                    <div className="chrome-controls-right" style={{ color: textSecondary }}>
                                        <MoreVertical size={18} />
                                    </div>
                                </div>

                                {/* ── Content Area ── */}
                                <div className="chrome-content-area" style={{ background: bg, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                    <Lottie
                                        animationData={showreelAnimation}
                                        loop={true}
                                        autoplay={true}
                                        style={{ width: '100%' }}
                                        rendererSettings={{
                                            preserveAspectRatio: 'xMidYBottom meet'
                                        }}
                                    />
                                </div>

                                {/* ── Android Navigation Bar ── */}
                                <div className="mockup-phone-nav-bar" style={{
                                    height: '40px',
                                    background: barBg,
                                    borderTop: `1px solid ${barBorder}`,
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    color: textSecondary,
                                    paddingBottom: '4px'
                                }}>
                                    <div style={{ cursor: 'pointer' }}><RotateCw size={16} style={{ transform: 'rotate(-90deg)' }} /></div> {/* Simple Back-ish icon */}
                                    <div style={{ cursor: 'pointer' }}><div style={{ width: '12px', height: '12px', borderRadius: '50%', border: `2px solid ${textSecondary}` }} /></div> {/* Home Circle */}
                                    <div style={{ cursor: 'pointer' }}><div style={{ width: '11px', height: '11px', border: `2px solid ${textSecondary}`, borderRadius: '2px' }} /></div> {/* Recents Square */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhySection;
