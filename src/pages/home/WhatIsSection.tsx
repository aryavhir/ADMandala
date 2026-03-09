import React, { useEffect, useRef } from 'react';
import {
    MonitorPlay, Target, Shield, BarChart3,
    Network, TrendingUp, Users, Globe, CheckCircle2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoImg from '../../assets/fixed-logo.png';

gsap.registerPlugin(ScrollTrigger);

const WhatIsSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mandalaRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!containerRef.current || !mandalaRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(".orbit-ring", { scale: 0.8, opacity: 0 });
            gsap.set(".orbit-node", { opacity: 0, scale: 0 });
            gsap.set(logoRef.current, { scale: 0.5, opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.to(logoRef.current, { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.75)" })
                .to(".orbit-ring", { scale: 1, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" }, "-=0.8")
                .to(".orbit-node", { scale: 1, opacity: 1, duration: 0.8, stagger: 0.05, ease: "back.out(1.7)" }, "-=0.5");

            gsap.to(".ring-outer", { rotation: 360, duration: 60, repeat: -1, ease: "none" });
            gsap.to(".ring-mid", { rotation: -360, duration: 45, repeat: -1, ease: "none" });
            gsap.to(".ring-inner", { rotation: 360, duration: 30, repeat: -1, ease: "none" });
            gsap.to(".orbit-node", { rotation: -360, duration: 60, repeat: -1, ease: "none" });
            gsap.to(".ring-mid .orbit-node", { rotation: 360, duration: 45, repeat: -1, ease: "none" });

            gsap.to(mandalaRef.current, {
                y: -15, duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut"
            });

            gsap.to(".core-glow", {
                scale: 1.2, opacity: 0.6, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="what-is" className="prem-split-section" ref={containerRef}>
            <div className="content-wrapper">
                <div className="prem-split-layout what-is-split">

                    {/* LEFT: Text */}
                    <div className="prem-split-content">
                        <span className="prem-badge animate-premium">Context</span>
                        <h2 className="section-title animate-premium">What Is<br />AdMandala?</h2>
                        <p className="prem-subtext animate-premium">
                            AdMandala is a programmatic advertising exchange that connects publishers and demand partners through a reliable, centralized system — while preparing the foundation for a more transparent, decentralized future.
                        </p>
                        <ul className="prem-split-features animate-premium">
                            <li><Shield size={16} /><span>Centralized today — reliable, high-speed auctions running right now</span></li>
                            <li><CheckCircle2 size={16} /><span>Verifiable tomorrow — architected for on-chain proof and trust</span></li>
                            <li><TrendingUp size={16} /><span>Built to scale with every publisher and demand partner</span></li>
                        </ul>
                    </div>

                    {/* RIGHT: Mandala animation */}
                    <div className="what-is-visual-panel animate-premium">
                        <div className="mandala-visual-wrap" ref={mandalaRef}>
                            <div className="mandala-orbit-system">
                                <div className="orbit-ring ring-outer">
                                    <div className="orbit-node node-pub" title="Publishers"><MonitorPlay size={18} /></div>
                                    <div className="orbit-node node-dsp" title="DSPs"><Target size={18} /></div>
                                    <div className="orbit-node node-verify" title="Verification"><Shield size={18} /></div>
                                    <div className="orbit-node node-data" title="Analytics"><BarChart3 size={18} /></div>
                                </div>
                                <div className="orbit-ring ring-mid">
                                    <div className="orbit-node node-net" title="Network"><Network size={16} /></div>
                                    <div className="orbit-node node-growth" title="Growth"><TrendingUp size={16} /></div>
                                    <div className="orbit-node node-users" title="Partners"><Users size={16} /></div>
                                </div>
                                <div className="orbit-ring ring-inner">
                                    <div className="orbit-node node-globe" title="Global"><Globe size={16} /></div>
                                </div>
                                <div className="mandala-core-mechanism">
                                    <div className="core-glow"></div>
                                    <div className="logo-anchor">
                                        <img src={logoImg} alt="Mandala Core" className="mandala-logo-core" ref={logoRef} />
                                    </div>
                                    <div className="core-rotating-ring"></div>
                                </div>
                                <svg className="mandala-svg-lines" viewBox="0 0 400 400">
                                    <circle cx="200" cy="200" r="170" className="svg-ring ring-1" />
                                    <circle cx="200" cy="200" r="120" className="svg-ring ring-2" />
                                    <circle cx="200" cy="200" r="70" className="svg-ring ring-3" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatIsSection;
