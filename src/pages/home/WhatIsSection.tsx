import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wifi, Signal, Battery, RotateCw, MoreVertical, Lock, Home, Search, Ghost, Share2 } from 'lucide-react';
import showreelAnimation from '../../assets/Showreel.json';
import admandalaLogo from '../../assets/fixed-logo.png';
import gmailLogo from '../../assets/new/jg.png';
import '../../styles/Mockups.css';

gsap.registerPlugin(ScrollTrigger);

const WhatIsSection: React.FC = () => {
    const [browserPage, setBrowserPage] = useState<'app' | 'google'>('app');
    const [isIncognito, setIsIncognito] = useState(false);

    const sectionRef = useRef<HTMLDivElement>(null);
    const whatTextRef = useRef<HTMLDivElement>(null);

    // Scroll to top of page helper
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle clicking "admandala.com" link in search bar or shortcut
    const handleAdMandalaTap = () => {
        setBrowserPage('app');
        scrollToTop();
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simplified entry animation for WhatIs text
            gsap.fromTo(whatTextRef.current,
                { opacity: 0, x: -50 },
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Dynamic theme
    const dark = isIncognito;
    const bg = dark ? '#202124' : '#f8f9fa';
    const cardBg = dark ? '#303134' : '#fff';
    const textPrimary = dark ? '#e8eaed' : '#202124';
    const textSecondary = dark ? '#9aa0a6' : '#5f6368';
    const pillBg = dark ? '#303134' : '#fff';
    const pillBorder = dark ? '#5f6368' : '#dfe1e5';
    const circBg = dark ? '#3c4043' : '#f8f9fa';
    const barBg = dark ? '#202124' : '#fff';
    const barBorder = dark ? '#3c4043' : '#e8eaed';

    return (
        <section ref={sectionRef} id="what-is" className="prem-split-section" style={{ overflow: 'visible', minHeight: '60vh', background: 'white', display: 'flex', alignItems: 'flex-end', position: 'relative', zIndex: 5, padding: '0 2rem' }}>
            <div className="content-wrapper">
                <div className="prem-split-layout what-is-split" style={{ position: 'relative', width: '100%' }}>

                    {/* LEFT: Text Stack */}
                    <div className="prem-split-content" style={{ position: 'relative', minHeight: '300px', display: 'flex', alignItems: 'center', transform: 'translateY(-30px)' }}>

                        {/* FIRST TEXT: What Is */}
                        <div ref={whatTextRef} style={{ width: '100%' }}>
                            <span className="prem-badge animate-premium">Context</span>
                            <h2 className="section-title animate-premium">What Is  <span className="dec-approach-word dec-approach-word-em">Admandala</span> ?</h2>
                            <p className="prem-subtext animate-premium">
                                AdMandala is a programmatic advertising exchange that connects publishers and demand partners through a reliable, centralized system — while preparing the foundation for a more transparent, decentralized future.
                                <br />     <br /> The platform enables efficient monetization and performance today, without forcing the ecosystem to adopt unproven infrastructure prematurely.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Phone Mockup (Upper part visible) */}
                    <div className="what-is-visual-panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', position: 'relative' }}>
                        <div className="mockup-phone" style={{ transform: 'translateY(2px)', position: 'absolute', top: 0 }}>
                            <div className="mockup-phone-camera"></div>
                            <div className="mockup-phone-display" style={{ background: bg }}>

                                {/* ── Status Bar ── */}
                                <div className="mockup-phone-status-bar" style={{ color: dark ? '#e8eaed' : '#000' }}>
                                    <div className="status-time" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        00:04
                                        <div style={{ display: 'flex', gap: '2px', opacity: 0.8 }}>

                                        </div>
                                    </div>
                                    <div className="status-icons">
                                        <Signal size={12} strokeWidth={2.5} />
                                        <Wifi size={12} strokeWidth={2.5} />
                                        <Battery size={12} strokeWidth={2.5} />
                                    </div>
                                </div>

                                {/* ── Chrome Toolbar ── */}
                                <div className="mockup-chrome-bar" style={{ background: barBg, borderBottom: `1px solid ${barBorder}` }}>

                                    {/* Home Button */}
                                    <div
                                        className="chrome-controls-left"
                                        onClick={() => setBrowserPage(browserPage === 'app' ? 'google' : 'app')}
                                        style={{ cursor: 'pointer', color: textSecondary, flexShrink: 0 }}
                                    >
                                        <Home size={18} />
                                    </div>

                                    {/* Address bar — shown when browsing the app */}
                                    {browserPage === 'app' && (
                                        <div className="chrome-address-bar" style={{ background: dark ? '#303134' : '#f1f3f4', flex: 1 }}>
                                            <div className="address-url-wrap" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <Lock size={12} style={{ color: textSecondary, flexShrink: 0 }} />
                                                <span className="domain-text" style={{ color: textPrimary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>admandala.com</span>
                                            </div>
                                            <RotateCw size={14} style={{ color: textSecondary, flexShrink: 0 }} />
                                        </div>
                                    )}

                                    {/* NTP address bar — shown on the Google home page */}
                                    {browserPage === 'google' && (
                                        <div className="chrome-address-bar ntp-address-bar" style={{ background: dark ? '#303134' : '#f1f3f4', flex: 1 }} onClick={handleAdMandalaTap}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Search size={14} style={{ color: textSecondary, flexShrink: 0 }} />
                                                <span style={{ color: textSecondary, fontSize: '14px' }}>Search or type URL</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Right controls */}
                                    <div className="chrome-controls-right" style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, color: textSecondary }}>
                                        <div className="tabs-count-box" style={{ borderColor: textSecondary }}>
                                            <span style={{ color: textSecondary }}>1</span>
                                        </div>
                                        <MoreVertical size={18} style={{ color: textSecondary }} />
                                    </div>
                                </div>

                                {/* ── Content Area ── */}
                                <div className="chrome-content-area" style={{ background: bg }}>
                                    {browserPage === 'app' ? (
                                        <Lottie
                                            animationData={showreelAnimation}
                                            loop={true}
                                            autoplay={true}
                                            style={{ width: '100%' }}
                                            rendererSettings={{
                                                preserveAspectRatio: 'xMidYTop meet'
                                            }}
                                        />
                                    ) : (
                                        <div className="chrome-ntp" style={{ background: bg }}>

                                            {/* Google Logo / Incognito Heading */}
                                            <div className="ntp-google-logo" style={{ color: textPrimary }}>
                                                {dark ? (
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                                        <Ghost size={36} />
                                                        <span style={{ fontSize: '18px', fontWeight: '400', letterSpacing: '0.5px' }}>You've gone incognito</span>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <span className="g-blue">G</span>
                                                        <span className="g-red">o</span>
                                                        <span className="g-yellow">o</span>
                                                        <span className="g-blue">g</span>
                                                        <span className="g-green">l</span>
                                                        <span className="g-red">e</span>
                                                    </>
                                                )}
                                            </div>

                                            {/* Search Pill — shows admandala.com, clicks → scroll to top */}
                                            <div className="ntp-search-pill" style={{ background: pillBg, border: `1px solid ${pillBorder}` }} onClick={handleAdMandalaTap}>
                                                <Search size={18} color={textSecondary} style={{ flexShrink: 0 }} />
                                                <span className="ntp-search-placeholder" style={{ color: textSecondary }}>admandala.com</span>
                                            </div>

                                            {/* AI & Incognito Buttons */}
                                            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', width: '90%' }}>
                                                <div className="ntp-extra-btn" style={{ flex: 1, background: dark ? '#303134' : '#f1f3f4', borderRadius: '18px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '13px', color: textPrimary, fontWeight: '500', cursor: 'pointer' }}>
                                                    <Search size={14} />
                                                    AI Mode
                                                </div>
                                                <div
                                                    className="ntp-extra-btn"
                                                    style={{ flex: 1, background: dark ? '#8ab4f8' : '#f1f3f4', borderRadius: '18px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '13px', color: dark ? '#202124' : '#202124', fontWeight: '500', cursor: 'pointer' }}
                                                    onClick={() => setIsIncognito(!isIncognito)}
                                                >
                                                    <Ghost size={14} />
                                                    {dark ? 'Exit Incognito' : 'Incognito'}
                                                </div>
                                            </div>

                                            {/* Shortcuts Card */}
                                            <div style={{ background: cardBg, width: '92%', borderRadius: '24px', padding: '16px', marginBottom: '20px', boxShadow: dark ? 'none' : '0 1px 3px rgba(0,0,0,0.08)' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                                                    {/* AdMandala shortcut */}
                                                    <div className="ntp-shortcut" onClick={handleAdMandalaTap} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', width: '60px' }}>
                                                        <div className="ntp-shortcut-circle" style={{ background: circBg, width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <img src={admandalaLogo} alt="AdMandala" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                                                        </div>
                                                        <span style={{ marginTop: '8px', fontSize: '11px', color: textPrimary, textAlign: 'center' }}>AdMandala</span>
                                                    </div>

                                                    {/* Gmail shortcut — uses jg.png */}
                                                    <div className="ntp-shortcut" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', width: '60px' }}>
                                                        <div className="ntp-shortcut-circle" style={{ background: circBg, width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <img src={gmailLogo} alt="Gmail" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                                                        </div>
                                                        <span style={{ marginTop: '8px', fontSize: '11px', color: textPrimary, textAlign: 'center' }}>Gmail</span>
                                                    </div>

                                                    {/* Add shortcut */}
                                                    <div className="ntp-shortcut" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', width: '60px' }}>
                                                        <div style={{ background: circBg, width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: dark ? '1px solid #5f6368' : '1px dashed #dadce0' }}>
                                                            <span style={{ fontSize: '24px', color: textSecondary, lineHeight: 1 }}>+</span>
                                                        </div>
                                                        <span style={{ marginTop: '8px', fontSize: '11px', color: textPrimary, textAlign: 'center' }}>Add</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Discover Feed — hidden in Incognito */}
                                            {!dark && (
                                                <div style={{ width: '100%', padding: '0 16px' }}>
                                                    <div style={{ background: '#fff', borderRadius: '24px', padding: '16px', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                                <div style={{ width: '16px', height: '16px', background: '#EA4335', borderRadius: '4px' }}></div>
                                                                <span style={{ fontSize: '12px', fontWeight: '500', color: '#5f6368' }}>INSIGHTS IAS · 1d</span>
                                                            </div>
                                                            <div style={{ display: 'flex', gap: '12px', color: '#5f6368' }}>
                                                                <Share2 size={16} />
                                                                <MoreVertical size={16} />
                                                            </div>
                                                        </div>
                                                        <div style={{ display: 'flex', gap: '12px' }}>
                                                            <div style={{ flex: 1 }}>
                                                                <span style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.4', color: '#202124', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>UPSC Editorial Analysis: Reimagining India's Air Pollution Policy</span>
                                                            </div>
                                                            <div style={{ width: '80px', height: '60px', background: 'linear-gradient(45deg, #e8f0fe, #f1f3f4)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#5f6368', flexShrink: 0 }}>NEWS</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatIsSection;
