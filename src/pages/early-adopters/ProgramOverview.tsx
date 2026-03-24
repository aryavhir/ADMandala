import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ChevronDown,
    TrendingUp,
    Zap,
    Gem,
    Settings,
    HelpCircle,
    MessageSquare,
    UserCircle,
    ShieldCheck,
    Unlock,
    Rocket,
    ArrowDown
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ── DATA DEFINITIONS ──

const EAP_BENEFITS = [
    "Fee Advantage during the phase",
    "Early Access to Demand",
    "Dedicated Support",
    "Pathway to Founding Publisher Status"
];

const FPP_BENEFITS = [
    {
        title: "Better Revenue Share for Life",
        icon: TrendingUp,
        description: "Founding Publishers receive a permanently improved revenue share, up to 7% higher than standard publishers."
    },
    {
        title: "Priority Access to Demand",
        icon: Zap,
        description: "Founding Publishers receive priority access to selected demand opportunities, including participation in private demand pools and early demand integrations as the marketplace expands."
    },
    {
        title: "Early Access to New Platform Features",
        icon: Settings,
        description: "Founding Publishers gain early access to new capabilities on the platform, including:",
        subFeatures: [
            "Advanced optimization tools",
            "Enhanced analytics features",
            "New monetization opportunities",
            "Beta access to our phase 2, decentralised revolution"
        ],
        extra: "This allows founding partners to benefit from innovations before broader rollout."
    },
    {
        title: "Priority Support",
        icon: HelpCircle,
        description: "Founding Publishers receive priority operational support, including faster assistance, optimization guidance, and closer collaboration with the AdMandala team to improve monetization performance."
    },
    {
        title: "Influence on Platform Evolution",
        icon: MessageSquare,
        description: "As long-term partners, Founding Publishers may be invited to participate in discussions that help shape the future direction of the ecosystem, particularly as AdMandala evolves towards the Open Trust Ads Infrastructure."
    }
];

const HOW_IT_WORKS_STEPS = [
    {
        title: "Register and submit your website",
        description: "Start your journey by creating an account and submitting your primary publishing platforms."
    },
    {
        title: "Complete verification",
        description: "Our team will review your traffic quality and operational compliance to ensure ecosystem integrity."
    },
    {
        title: "Join Early Adopter Program",
        description: "Once admitted, you'll start benefiting from EAP advantages and immediate monetization."
    },
    {
        title: "Qualify for Founding Publisher Partners",
        description: "Consistent performance and high quality during the EAP phase will lead to FPP status."
    }
];

// ── COMPONENTS ──

const BenefitAccordion = ({ benefit }: { benefit: typeof FPP_BENEFITS[0] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`fpp-tight-accordion ${isOpen ? 'active' : ''}`}>
            <button
                className="fpp-accordion-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4">
                    <div className="fpp-accordion-icon">
                        <benefit.icon size={18} />
                    </div>
                    <span className="fpp-accordion-title">{benefit.title}</span>
                </div>
                <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="fpp-accordion-content">
                            <p className="fpp-accordion-text">{benefit.description}</p>
                            {benefit.subFeatures && (
                                <ul className="fpp-accordion-sub-features">
                                    {benefit.subFeatures.map((feat, i) => (
                                        <li key={i}>
                                            <div className="fpp-sub-feature-dot" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {benefit.extra && <p className="fpp-accordion-text mt-4">{benefit.extra}</p>}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProgramOverview: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 900;

    useEffect(() => {
        const ctx = gsap.context(() => {
            // High-precision GSAP reveal
            gsap.from(".reveal-item", {
                y: 15,
                opacity: 0,
                duration: 0.7,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".reveal-item",
                    start: "top 95%",
                    once: true
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="program-overview" className="eap-precision-section">
            <div className="content-wrapper" style={{ padding: isMobile ? '0 1rem' : undefined }}>
                {/* 1. HEADER SECTION (Neutral High-Contrast) */}
                <div className="eap-header-refined-tight text-center mb-12 md:mb-24 reveal-item">
                    <span className="prem-badge mb-4">AdMandala Partnership</span>
                    <h2 className="section-title">Program Overview</h2>
                    <p className="prem-subtext mx-auto">
                        AdMandala is launching a structured onboarding program to build a high-quality publisher ecosystem during the early phase of the platform.
                    </p>
                </div>

                {/* 2. TIGHT MILESTONE TILES (High Contrast B&W) */}
                
                {/* EAP Tile (DARK - INVERTED) */}
                <div className="milestone-tile-precision dark mb-12 reveal-item" style={{ padding: isMobile ? '2rem' : undefined }}>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                        <div className="flex-1">
                            <h3 className="milestone-precision-title mb-8">Early Adopter Program (EAP)</h3>
                            <div className="milestone-precision-body space-y-6">
                                <p>
                                    The Early Adopter Program will run for approximately 6–9 months following the launch of the AdMandala Exchange Layer.
                                </p>
                                <p>
                                    Publishers who register during this phase and successfully pass the platform’s verification and operational requirements will be admitted into the Early Adopter Program.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-[380px]">
                            <div className="milestone-tag-tight mb-8">Program Benefits</div>
                            <ul className="milestone-checklist-tight">
                                {EAP_BENEFITS.map((benefit, i) => (
                                    <li key={i}>
                                        <div className="bullet-tight" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FPP Tile (LIGHT - INVERTED) */}
                <div className="milestone-tile-precision light mb-24 md:mb-48 reveal-item" style={{ padding: isMobile ? '2rem' : undefined }}>
                    <div className="fpp-hero-area mb-16">
                        <div className="flex items-center gap-5 mb-8">
                            <div className="fpp-icon-square">
                                <Gem size={24} />
                            </div>
                            <h3 className="milestone-precision-title !mb-0">Founding Publisher Partners (FPP)</h3>
                        </div>
                        <div className="milestone-precision-body">
                            <p className="mb-6 !max-w-[850px]">
                                Founding Publisher Partners are the early builders of the AdMandala ecosystem — publishers who believed in the platform early and helped shape its foundation.
                            </p>
                            <p className="!text-gray-500 !max-w-[850px]">
                                This recognition is reserved for a select group of publishers who demonstrated consistent traffic quality and strong marketplace performance from the early stages.
                            </p>
                        </div>
                    </div>

                    <div className="fpp-accordion-stack-tight pt-12 border-t border-gray-100">
                        <div className="milestone-tag-tight mb-8">Founding Partner Privileges</div>
                        <div className="fpp-accordions-group-tight">
                            {FPP_BENEFITS.map((benefit, i) => (
                                <BenefitAccordion key={i} benefit={benefit} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. ROADMAP SECTION (Preserved) */}
                <div className="roadmap-merged-summary pt-12 md:pt-24 border-t border-zinc-100 reveal-item">
                    <div className="text-center mb-12 md:mb-16">
                        <h4 className="section-title !text-3xl mb-4">The Operational Path</h4>
                        <p className="prem-subtext mx-auto">
                            A clear path from registration to founding partner status.
                        </p>
                    </div>

                    <div className="roadmap-steps-grid">
                        {HOW_IT_WORKS_STEPS.map((step, i) => (
                            <div key={i} className="roadmap-step-card" style={{ padding: isMobile ? '1.5rem' : undefined }}>
                                <div className="step-card-num">0{i + 1}</div>
                                <h5>{step.title}</h5>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="roadmap-flow-string mt-12 md:mt-16 text-center">
                        <div className="flow-string-inner" style={{ 
                            flexDirection: isMobile ? 'column' : 'row', 
                            borderRadius: isMobile ? '24px' : '100px',
                            gap: isMobile ? '12px' : '0',
                            padding: isMobile ? '2rem' : undefined
                        }}>
                            <div className="flex items-center gap-3">
                                <UserCircle size={18} className="text-black/70" />
                                <span className="text-black/90">Register a website</span>
                            </div>
                            
                            {isMobile ? <ArrowDown size={14} className="text-black/40 my-1" /> : <div className="flow-arrow px-4 text-black/40">→</div>}
                            
                            <div className="flex items-center gap-3">
                                <ShieldCheck size={18} className="text-black/70" />
                                <span className="text-black/90">Verified Publishers</span>
                            </div>
                            
                            {isMobile ? <ArrowDown size={14} className="text-black/40 my-1" /> : <div className="flow-arrow px-4 text-black/40">→</div>}
                            
                            <div className="flex items-center gap-3">
                                <Unlock size={18} className="text-black/70" />
                                <span className="text-black/90">Early Adopter Program</span>
                            </div>
                            
                            {isMobile ? <ArrowDown size={14} className="text-black/40 my-1" /> : <div className="flow-arrow px-4 text-black/40">→</div>}
                            
                            <div className="flex items-center gap-3">
                                <Rocket size={18} className="text-black/70" />
                                <span className="text-black/90">Founding Publisher Partners</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramOverview;
