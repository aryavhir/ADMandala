import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PremiumCTA from '../components/premium/PremiumCTA';
import PremiumHero from '../components/premium/PremiumHero';
import mockupImg from '../assets/Screenshot 2026-05-09 111654.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Gift,
    DollarSign,
    TrendingUp,
    Percent,
    Sparkles,
    Layers,
    Unlock,
    Users,
    ArrowRight,
    ClipboardList,
    Globe,
    CheckCircle,
    Handshake,
    ArrowDown
} from 'lucide-react';

import '../styles/PremiumLayouts.css';
import '../styles/premium-buttons.css';
import './ReferralProgram.css';

import referralVideo from '../assets/new/refferal.webm';

gsap.registerPlugin(ScrollTrigger);

function ReferralProgram() {
    useScrollAnimation();
    const containerRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const dashboardUrl = 'https://publisher-dashboard.admandala.com/dashboard/referrals';

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 900;

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrollProgress(totalScroll / (windowHeight || 1));
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!circleRef.current) return;

        const textElements = document.querySelectorAll('.referral-hero-content .animate-premium');
        gsap.fromTo(textElements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power2.out',
                delay: 0.2
            }
        );

        if (!isMobile) {
            gsap.to(circleRef.current, {
                scale: 2.5,
                opacity: 0.1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.referral-hero-section',
                    start: 'top top',
                    end: 'top -40%',
                    scrub: 1,
                }
            });
        } else {
            gsap.set(circleRef.current, {
                scale: 1.5,
                opacity: 0.15
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [isMobile]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>('.reveal-item');
            items.forEach((item) => {
                gsap.from(item, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        once: true
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="landing-page eap-page" ref={containerRef}>
            <Helmet>
                <title>Referral Program | AdMandala</title>
                <meta
                    name="description"
                    content="Invite fellow publishers to AdMandala and earn recurring rewards while helping grow the network. The AdMandala Referral Program is now live."
                />
            </Helmet>

            <Navbar />
            <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }}></div>

            {/* ── HERO ── */}
            <PremiumHero
                title={<>Grow with AdMandala —</>}
                subtitle={<>Referral Program is Now Live</>}
                description="Invite fellow publishers to AdMandala and earn recurring rewards while helping grow the network."
                primaryCtaText="Open Referral Dashboard"
                primaryCtaHref={dashboardUrl}
                secondaryCtaText="Talk to our team"
                secondaryCtaHref="mailto:publisher@admandala.com"
                mockupImage={mockupImg}
                mockupAlt="Referral Dashboard Mockup"
                accentColor="rgba(15, 74, 74, 0.15)"
            />

            {/* ── INTRO NOTE ── */}
            <section className="referral-precision-section" style={{ paddingTop: isMobile ? '40px' : '80px', paddingBottom: '0' }}>
                <div className="content-wrapper" style={{ padding: isMobile ? '0 1rem' : undefined }}>
                    <div className="referral-note reveal-item" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
                        <p style={{ margin: 0, color: '#374151', fontSize: '16px' }}>
                            The AdMandala Referral Program is officially live and available directly from your publisher dashboard.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section className="referral-precision-section reveal-item">
                <div className="content-wrapper" style={{ padding: isMobile ? '0 1rem' : undefined }}>

                    <div className="referral-hiw-split" style={{ alignItems: 'flex-end' }}>
                        {/* Left — Steps */}
                        <div className="referral-hiw-left">
                            <div className="referral-header-refined mb-6 reveal-item" style={{ textAlign: isMobile ? 'center' : 'left' }}>
                                <span className="prem-badge mb-4">Getting Started</span>
                                <h2 className="section-title" style={{ textAlign: isMobile ? 'center' : 'left' }}>How It Works</h2>
                            </div>
                            <ol className="referral-steps-list">
                                <li className="referral-step-item">
                                    <div className="referral-step-num">1</div>
                                    <div className="referral-step-text">
                                        Go to your <a href={dashboardUrl} target="_blank" rel="noopener noreferrer">AdMandala Dashboard</a>
                                    </div>
                                </li>
                                <li className="referral-step-item">
                                    <div className="referral-step-num">2</div>
                                    <div className="referral-step-text">
                                        Open the "Referral" section
                                    </div>
                                </li>
                                <li className="referral-step-item">
                                    <div className="referral-step-num">3</div>
                                    <div className="referral-step-text">
                                        Generate your unique referral code
                                    </div>
                                </li>
                                <li className="referral-step-item">
                                    <div className="referral-step-num">4</div>
                                    <div className="referral-step-text">
                                        Share your referral link or code with publishers
                                    </div>
                                </li>
                                <li className="referral-step-item">
                                    <div className="referral-step-num">5</div>
                                    <div className="referral-step-text">
                                        Earn rewards when publishers activate and monetize traffic
                                    </div>
                                </li>
                            </ol>

                            <div className="referral-hiw-note">
                                Referral links automatically apply your referral code during signup, making onboarding simple and seamless.
                            </div>
                        </div>

                        {/* Right — Laptop Mockup with Video */}
                        <div className="referral-hiw-right">
                            <div className="laptop-mockup">
                                <div className="laptop-screen">
                                    <div className="laptop-notch"></div>
                                    <div className="laptop-screen-inner">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            src={referralVideo}
                                        />
                                    </div>
                                </div>
                                <div className="laptop-base"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── REFERRAL REWARDS ── */}
            <section className="referral-precision-section reveal-item" style={{ paddingTop: 0 }}>
                <div className="content-wrapper" style={{ padding: isMobile ? '0 1rem' : undefined }}>
                    <div className="referral-header-refined text-center mb-12 reveal-item">
                        <span className="prem-badge mb-4">Rewards</span>
                        <h2 className="section-title">Referral Rewards</h2>
                        <p className="prem-subtext mx-auto">
                            You earn when referred publishers become active on the platform.
                        </p>
                    </div>

                    <div className="referral-rewards-grid reveal-item">
                        <div className="referral-reward-card">
                            <DollarSign size={28} style={{ color: '#64748b', marginBottom: '1rem' }} />
                            <div className="referral-reward-amount">$2</div>
                            <div className="referral-reward-label">After publisher approval and onboarding</div>
                        </div>
                        <div className="referral-reward-card">
                            <TrendingUp size={28} style={{ color: '#64748b', marginBottom: '1rem' }} />
                            <div className="referral-reward-amount">$3</div>
                            <div className="referral-reward-label">After 7 days of active traffic</div>
                        </div>
                        <div className="referral-reward-card highlight">
                            <Percent size={28} style={{ color: '#71717a', marginBottom: '1rem' }} />
                            <div className="referral-reward-amount">2–5%</div>
                            <div className="referral-reward-label">Recurring revenue share from generated revenue for up to 1 year</div>
                        </div>
                    </div>

                    <p className="referral-rewards-note reveal-item">
                        Higher-quality publishers and stable traffic may qualify for additional incentives in the future.
                    </p>
                </div>
            </section>

            {/* ── BENEFITS FOR REFERRED PUBLISHERS ── */}
            <section className="referral-precision-section reveal-item" style={{ paddingTop: 0 }}>
                <div className="content-wrapper" style={{ padding: isMobile ? '0 1rem' : undefined }}>
                    <div className="referral-header-refined text-center mb-12 reveal-item">
                        <span className="prem-badge mb-4">Publisher Benefits</span>
                        <h2 className="section-title">Benefits for Referred Publishers</h2>
                        <p className="prem-subtext mx-auto">
                            Publishers joining through referral links receive:
                        </p>
                    </div>

                    <div className="referral-benefits-grid reveal-item">
                        <div className="referral-benefit-card">
                            <div className="referral-benefit-icon">
                                <Gift size={20} />
                            </div>
                            <div className="referral-benefit-content">
                                <h4>$5 activation bonus</h4>
                                <p>After website approval</p>
                            </div>
                        </div>
                        <div className="referral-benefit-card">
                            <div className="referral-benefit-icon">
                                <Sparkles size={20} />
                            </div>
                            <div className="referral-benefit-content">
                                <h4>Early Adopter Program</h4>
                                <p>Access to AdMandala's Early Adopter Program</p>
                            </div>
                        </div>
                        <div className="referral-benefit-card">
                            <div className="referral-benefit-icon">
                                <Layers size={20} />
                            </div>
                            <div className="referral-benefit-content">
                                <h4>Flexible monetization</h4>
                                <p>Flexible monetization options</p>
                            </div>
                        </div>
                        <div className="referral-benefit-card">
                            <div className="referral-benefit-icon">
                                <Globe size={20} />
                            </div>
                            <div className="referral-benefit-content">
                                <h4>Use other providers</h4>
                                <p>Ability to use other monetization providers in parallel</p>
                            </div>
                        </div>
                        <div className="referral-benefit-card">
                            <div className="referral-benefit-icon">
                                <Unlock size={20} />
                            </div>
                            <div className="referral-benefit-content">
                                <h4>No lock-in agreements</h4>
                                <p>Freedom to manage your inventory</p>
                            </div>
                        </div>
                        <div className="referral-benefit-card">
                            <div className="referral-benefit-icon">
                                <Users size={20} />
                            </div>
                            <div className="referral-benefit-content">
                                <h4>Dedicated onboarding support</h4>
                                <p>Personal guidance through setup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PUBLISHER QUALIFICATION PROCESS ── */}
            <section className="referral-precision-section reveal-item" style={{ paddingTop: 0 }}>
                <div className="content-wrapper" style={{ padding: isMobile ? '0 1rem' : undefined }}>
                    <div className="referral-header-refined text-center mb-12 reveal-item">
                        <span className="prem-badge mb-4">Quality Assurance</span>
                        <h2 className="section-title">Publisher Qualification Process</h2>
                        <p className="prem-subtext mx-auto">
                            To maintain marketplace quality, all referred publishers go through a standard review process:
                        </p>
                    </div>

                    <div className="referral-qualification-flow reveal-item">
                        <div className="referral-qual-step">
                            <div className="referral-qual-icon step-1">
                                <ClipboardList size={24} />
                            </div>
                            <div className="referral-qual-title">Registration</div>
                        </div>

                        {isMobile ? (
                            <ArrowDown size={18} className="referral-qual-arrow" style={{ transform: 'none' }} />
                        ) : (
                            <ArrowRight size={18} className="referral-qual-arrow" />
                        )}

                        <div className="referral-qual-step">
                            <div className="referral-qual-icon step-2">
                                <Globe size={24} />
                            </div>
                            <div className="referral-qual-title">Website Added</div>
                        </div>

                        {isMobile ? (
                            <ArrowDown size={18} className="referral-qual-arrow" style={{ transform: 'none' }} />
                        ) : (
                            <ArrowRight size={18} className="referral-qual-arrow" />
                        )}

                        <div className="referral-qual-step">
                            <div className="referral-qual-icon step-3">
                                <CheckCircle size={24} />
                            </div>
                            <div className="referral-qual-title">Website Qualified / Activated</div>
                        </div>
                    </div>

                    <p className="referral-qual-note reveal-item">
                        Only validated publishers with acceptable traffic quality become eligible for rewards.
                    </p>
                </div>
            </section>

            {/* ── BUILT FOR LONG-TERM PARTNERSHIPS ── */}
            <section className="referral-precision-section reveal-item" style={{ paddingTop: 0 }}>
                <div className="content-wrapper" style={{ padding: isMobile ? '0 1rem' : undefined }}>
                    <div className="referral-partnership-split reveal-item">
                        <div className="referral-partnership-left">
                            <Handshake size={32} style={{ color: '#0f4a4a', marginBottom: '1rem' }} />
                            <h3>Built for Long-Term Partnerships</h3>
                        </div>
                        <div className="referral-partnership-right">
                            <p>
                                Our goal is to create a scalable and transparent publisher ecosystem where both publishers and referral partners benefit from long-term growth.
                            </p>
                            <p>
                                The referral system is already live and accessible through your AdMandala dashboard.
                            </p>
                            <p className="referral-contact-text">
                                For questions or partnership inquiries, feel free to contact our team anytime.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <PremiumCTA
                badge="Start Referring"
                title="Grow the Network Together"
                description="Open your referral dashboard, generate your unique code, and start earning rewards today."
                buttonText="Open Referral Dashboard"
                onButtonClick={() => window.open(dashboardUrl, '_blank')}
            />

            <Footer />
        </div>
    );
}

export default ReferralProgram;
