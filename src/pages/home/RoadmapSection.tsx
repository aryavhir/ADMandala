import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Eye, Vote, Network, Lock, Globe, CheckCircle2, Users, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const RoadmapSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const lineFillRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const mm = gsap.matchMedia();

        const ctx = gsap.context(() => {
            // ── Progress Line Animation (To Phase 1 Only) ──
            mm.add("(min-width: 901px)", () => {
                gsap.fromTo(lineFillRef.current,
                    { width: '0%', height: '100%' },
                    {
                        width: '26%', // Stop just past the first phase
                        height: '100%',
                        duration: 2.5,
                        ease: 'expo.out',
                        scrollTrigger: {
                            trigger: trackRef.current,
                            start: 'top 80%',
                        }
                    }
                );
            });

            mm.add("(max-width: 900px)", () => {
                gsap.fromTo(lineFillRef.current,
                    { height: '0%', width: '100%' },
                    {
                        height: '24%', // Stop vertically just past the first phase
                        width: '100%',
                        duration: 2.5,
                        ease: 'expo.out',
                        scrollTrigger: {
                            trigger: trackRef.current,
                            start: 'top 80%',
                        }
                    }
                );
            });

            // ── Phase Cards Entrance ──
            const phases = gsap.utils.toArray('.journey-phase');
            phases.forEach((phase: any) => {
                const card = phase.querySelector('.phase-card');
                const beacon = phase.querySelector('.beacon-dot');

                // Initial state
                gsap.set(card, { y: 60, opacity: 0 });
                gsap.set(beacon, { scale: 0.2, opacity: 0 });

                // Entrance animation
                gsap.to(card, {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: phase,
                        start: 'top 85%',
                    }
                });

                gsap.to(beacon, {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: phase,
                        start: 'top 85%',
                    }
                });

                // Active State Transformation (while scrolling past)
                gsap.to(phase, {
                    scrollTrigger: {
                        trigger: phase,
                        start: 'top 50%',
                        end: 'bottom 50%',
                        onEnter: () => phase.classList.add('phase-scrolled-active'),
                        onLeaveBack: () => phase.classList.remove('phase-scrolled-active'),
                        scrub: true,
                    }
                });
            });

            // ── Background Parallax Shapes ──
            gsap.to('.rm-shape-1', {
                y: -100,
                scrollTrigger: { scrub: 2 }
            });
            gsap.to('.rm-shape-2', {
                y: 100,
                scrollTrigger: { scrub: 2 }
            });

        }, sectionRef);

        return () => {
            mm.revert();
            ctx.revert();
        };
    }, []);

    return (
        <section className="section roadmap-section">
            <div className="roadmap-bg-shapes">
                <div className="rm-shape rm-shape-1"></div>
                <div className="rm-shape rm-shape-2"></div>
                <div className="rm-shape rm-shape-3"></div>
            </div>

            <div className="content-wrapper">
                <div className="roadmap-header">
                    <span className="roadmap-chip animate-premium">Strategic Vision</span>
                    <h2 className="section-title animate-premium">Built for the Long Term</h2>
                    <p className="roadmap-subtitle animate-premium">
                        A deliberate path to decentralization. Ad Mandala is not decentralizing for ideology — but for outcomes.
                    </p>
                </div>

                <div className="journey-track animate-on-scroll" ref={trackRef}>
                    <div className="track-line">
                        <div className="track-line-fill" ref={lineFillRef}></div>
                    </div>

                    <div className="journey-phase phase-active">
                        <div className="phase-beacon">
                            <div className="beacon-ring"></div>
                            <div className="beacon-dot"><Zap size={18} /></div>
                        </div>
                        <div className="phase-card">
                            <div className="phase-tag tag-live"><span className="tag-dot"></span> Phase 1: Foundation</div>
                            <h3 className="phase-name">Strategic Centralization</h3>
                            <p className="phase-desc">Starting centralized allows the network to prioritize performance and building trust.</p>
                            <div className="phase-features">
                                <div className="pf-item"><Network size={14} /><span>Seamless SSP/DSP Workflow</span></div>
                                <div className="pf-item"><Zap size={14} /><span>Consistent Uptime & UX</span></div>
                                <div className="pf-item"><Users size={14} /><span>Publisher & Buyer Trust</span></div>
                                <div className="pf-item"><Lock size={14} /><span>Adoptable Complexity</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="journey-arrow"><ArrowRight size={16} /></div>

                    <div className="journey-phase phase-next">
                        <div className="phase-beacon">
                            <div className="beacon-dot"><Eye size={18} /></div>
                        </div>
                        <div className="phase-card">
                            <div className="phase-tag tag-next">Up Next</div>
                            <h3 className="phase-name">On-Chain Verification</h3>
                            <p className="phase-desc">
                                Posting cryptographic proofs of ad impressions to a public ledger for transparency — without slowing down bidding.
                            </p>
                            <div className="phase-features">
                                <div className="pf-item"><Lock size={14} /><span>Cryptographic proofs</span></div>
                                <div className="pf-item"><Globe size={14} /><span>Public ledger</span></div>
                                <div className="pf-item"><CheckCircle2 size={14} /><span>Verifiable delivery</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="journey-arrow"><ArrowRight size={16} /></div>

                    <div className="journey-phase phase-future">
                        <div className="phase-beacon">
                            <div className="beacon-dot"><Vote size={18} /></div>
                        </div>
                        <div className="phase-card">
                            <div className="phase-tag tag-future">Horizon</div>
                            <h3 className="phase-name">Decentralized Settlement</h3>
                            <p className="phase-desc">
                                Gradually moving payment layers and governance to smart contracts as the ecosystem matures.
                            </p>
                            <div className="phase-features">
                                <div className="pf-item"><TrendingUp size={14} /><span>Smart contract payments</span></div>
                                <div className="pf-item"><Users size={14} /><span>Community governance</span></div>
                                <div className="pf-item"><Sparkles size={14} /><span>Token incentives</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="roadmap-principle animate-on-scroll delay-1">
                    <div className="principle-line"></div>
                    <p className="principle-text">
                        Decentralization is introduced <strong>only where it improves trust</strong> without degrading performance.
                    </p>
                    <div className="principle-line"></div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
