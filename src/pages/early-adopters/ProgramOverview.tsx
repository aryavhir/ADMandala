import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ChevronDown,
    Check,
    TrendingUp,
    Zap,
    Clock,
    Gem,
    Settings,
    HelpCircle,
    MessageSquare
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
        ]
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

const STEPS = [
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

const BenefitAccordion = ({ benefit }: { benefit: typeof FPP_BENEFITS[0] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fpp-benefit-card">
            <button
                className="fpp-benefit-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="fpp-benefit-title-wrap">
                    <div className="fpp-benefit-icon">
                        <benefit.icon size={20} />
                    </div>
                    <span className="fpp-benefit-title">{benefit.title}</span>
                </div>
                <ChevronDown
                    size={20}
                    className="fpp-benefit-arrow"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="fpp-benefit-content">
                            <p className="fpp-benefit-text">{benefit.description}</p>
                            {benefit.subFeatures && (
                                <ul className="fpp-sub-features">
                                    {benefit.subFeatures.map((feat, i) => (
                                        <li key={i} className="fpp-sub-feature">
                                            <div className="fpp-sub-feature-dot" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProgramOverview: React.FC = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!timelineRef.current || !progressRef.current) return;

        const items = timelineRef.current.querySelectorAll('.timeline-item');

        items.forEach((item) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top center+=100",
                onEnter: () => item.classList.add('active'),
                onLeaveBack: () => item.classList.remove('active')
            });
        });

        gsap.to(progressRef.current, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
                trigger: timelineRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section id="program-overview" className="eap-section eap-combined-overview">
            <div className="content-wrapper">
                {/* 1. OVERVIEW */}
                <div className="eap-overview-header mt-12 mb-20 text-center">
                    <span className="prem-badge mb-4">Foundation</span>
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-6 font-sans">Program Overview</h2>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                        AdMandala is launching a structured onboarding program to build a high-quality publisher ecosystem during the early phase of the platform.
                    </p>
                </div>

                {/* 2. EAP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-32">
                    <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-white rounded-lg border border-zinc-200 shadow-sm">
                                <Clock size={24} className="text-zinc-900" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 font-sans">Early Adopter Program (EAP)</h3>
                        </div>
                        <div className="space-y-4 mb-8">
                            <p className="text-zinc-600 leading-relaxed">
                                The Early Adopter Program will run for approximately 6–9 months following the launch of the AdMandala Exchange Layer.
                            </p>
                            <p className="text-zinc-600 leading-relaxed">
                                Publishers who register during this phase and successfully pass the platform’s verification and operational requirements will be admitted into the Early Adopter Program.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Benefits</h4>
                            <ul className="space-y-3">
                                {EAP_BENEFITS.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-900 font-medium">
                                        <div className="h-5 w-5 rounded-full bg-zinc-900 flex items-center justify-center">
                                            <Check size={12} className="text-white" />
                                        </div>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-zinc-900 rounded-lg shadow-sm">
                                <Gem size={24} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 font-sans">Founding Publisher Partners (FPP)</h3>
                        </div>
                        <div className="space-y-4 mb-6">
                            <p className="text-zinc-600 leading-relaxed">
                                Founding Publisher Partners are the early builders of the AdMandala ecosystem — publishers who believed in the platform early and helped shape its foundation.
                            </p>
                            <p className="text-zinc-600 leading-relaxed">
                                This recognition is reserved for a select group of publishers who demonstrated consistent traffic quality and strong marketplace performance from the early stages.
                            </p>
                        </div>

                        <div className="mt-auto">
                            <div className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Founding Benefits</div>
                            <div className="fpp-benefits-container !mt-0 !max-w-none">
                                {FPP_BENEFITS.map((benefit, i) => (
                                    <BenefitAccordion key={i} benefit={benefit} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. HOW IT WORKS */}
                <div className="mt-40 mb-20 text-center">
                    <span className="prem-badge mb-4">The Journey</span>
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-6 font-sans">How It Works</h2>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                        A clear path from registration to founding partner status.
                    </p>

                    <div ref={timelineRef} className="modern-timeline text-left">
                        <div className="timeline-track">
                            <div ref={progressRef} className="timeline-progress" />
                        </div>
                        {STEPS.map((step, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-dot-wrap">
                                    <div className="timeline-dot" />
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-step-num">Step {i + 1}</div>
                                    <h4 className="timeline-step-title">{step.title}</h4>
                                    <p className="timeline-step-desc">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramOverview;
