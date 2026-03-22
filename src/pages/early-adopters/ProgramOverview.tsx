import React from 'react';
import { ClipboardList, ShieldCheck, Rocket, Award } from 'lucide-react';

const steps = [
    {
        num: '01',
        icon: <ClipboardList size={28} />,
        title: 'Register',
        desc: 'Register and submit your website for review.',
    },
    {
        num: '02',
        icon: <ShieldCheck size={28} />,
        title: 'Get Verified',
        desc: 'Complete our verification and quality checks.',
    },
    {
        num: '03',
        icon: <Rocket size={28} />,
        title: 'Join EAP',
        desc: 'Enter the Early Adopter Program and start monetizing.',
    },
    {
        num: '04',
        icon: <Award size={28} />,
        title: 'Earn FPG Status',
        desc: 'Qualify for the Founding Publisher Partners group.',
    },
];

const ProgramOverview: React.FC = () => {
    return (
        <section id="program-overview" className="eap-section eap-combined-overview">
            <div className="content-wrapper">
                {/* PART 1: OVERVIEW & PRICING */}
                <div className="eap-overview-header animate-on-scroll">
                    <span className="prem-badge animate-premium">Program</span>
                    <h2 className="section-title animate-premium">Early Adopter Program</h2>
                    <p className="eap-overview-intro animate-premium">
                        AdMandala is launching a structured onboarding program to build a high-quality publisher ecosystem during the early phase of the platform.
                    </p>
                </div>

                <div className="eap-programs-grid eap-pricing-grid">
                    <div className="eap-pricing-card animate-on-scroll">
                        <h3 className="eap-pricing-title">Early Adopter Program (EAP)</h3>
                        <p className="eap-pricing-desc">
                            The Early Adopter Program will run for approximately 6–9 months following the launch of the AdMandala Exchange Layer.
                        </p>
                        <p className="eap-pricing-desc">
                            Publishers who register during this phase and successfully pass the platform&apos;s verification and operational requirements will be admitted into the Early Adopter Program.
                        </p>
                        <div className="eap-pricing-benefits-label">Benefits</div>
                        <ul className="eap-pricing-features">
                            <li>Fee Advantage during the phase</li>
                            <li>Early Access to Demand</li>
                            <li>Dedicated Support</li>
                            <li>Pathway to Founding Publisher Status</li>
                        </ul>
                    </div>

                    <div className="eap-pricing-card eap-pricing-card--featured animate-on-scroll">
                        <h3 className="eap-pricing-title">Founding Publisher Partners (FPG)</h3>
                        <p className="eap-pricing-desc">
                            Founding Publisher Partners are the early builders of the AdMandala ecosystem — publishers who believed in the platform early and helped shape its foundation.
                        </p>
                        <p className="eap-pricing-desc">
                            This recognition is reserved for a select group of publishers who demonstrated consistent traffic quality and strong marketplace performance from the early stages.
                        </p>
                        <div className="eap-pricing-benefits-label">Benefits</div>
                        <ul className="eap-pricing-features">
                            <li>Priority Access to Demand</li>
                            <li>Early Access to New Features</li>
                            <li>Priority Support</li>
                            <li>Influence on Platform Evolution</li>
                            <li>Recognition as Early Marketplace Partners</li>
                        </ul>
                    </div>
                </div>

                {/* VISUAL DIVIDER */}
                <div className="eap-section-divider animate-on-scroll">
                    <div className="divider-line"></div>
                </div>

                {/* PART 2: HOW IT WORKS */}
                <div className="eap-integrated-flow">
                    <div className="eap-how-header animate-on-scroll">
                        <span className="prem-badge animate-premium">Process</span>
                        <h2 className="section-title animate-premium">How It Works</h2>
                        <p className="eap-how-subtitle animate-premium">
                            A clear path from registration to founding partner status.
                        </p>
                    </div>

                    <div className="eap-flow-track">
                        {steps.map((step, i) => (
                            <React.Fragment key={step.num}>
                                <div className="eap-flow-step animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                                    <div className="eap-step-num">{step.num}</div>
                                    <div className="eap-step-icon-wrap">
                                        {step.icon}
                                    </div>
                                    <h3 className="eap-step-title">{step.title}</h3>
                                    <p className="eap-step-desc">{step.desc}</p>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="eap-flow-connector animate-on-scroll" style={{ transitionDelay: `${i * 100 + 50}ms` }}>
                                        <div className="eap-connector-line"></div>
                                        <div className="eap-connector-arrow"></div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Flow Summary Bar */}
                    <div className="eap-flow-summary animate-on-scroll">
                        <div className="eap-flow-summary-inner">
                            <span>Register a website</span>
                            <span className="eap-flow-arrow">→</span>
                            <span>Verified Publishers</span>
                            <span className="eap-flow-arrow">→</span>
                            <span>Early Adopter Program</span>
                            <span className="eap-flow-arrow">→</span>
                            <span className="eap-flow-highlight">Founding Publisher Partners</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramOverview;
