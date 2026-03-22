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

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="eap-section eap-how-it-works">
            <div className="content-wrapper">
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
        </section>
    );
};

export default HowItWorks;
