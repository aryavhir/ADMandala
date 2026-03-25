import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';
import {
    ChevronDown,
    Diamond,
    TrendingUp,
    Zap,
    Settings,
    LifeBuoy,
    Layers,
    UserPlus,
    ClipboardCheck,
    Rocket
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import '../components/premium/EarlyAdopters.css';

const AccordionItem = ({ title, icon: Icon, children, isOpen, onClick }: any) => {
    return (
        <div className="fpp-accordion-item">
            <button className="fpp-accordion-trigger" onClick={onClick}>
                <div className="trigger-left">
                    <div className="icon-circle">
                        <Icon size={18} />
                    </div>
                    <span className="trigger-title">{title}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <ChevronDown size={20} className="fpp-chevron" style={{ color: '#94a3b8' }} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="fpp-accordion-body">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

function EarlyAdopters() {
    useScrollAnimation();
    const registrationUrl = (import.meta as any).env.VITE_PUBLISHER_REGISTRATION_URL ?? '#';
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="landing-page eap-page">
            <Helmet>
                <title>Program Overview | AdMandala</title>
                <meta
                    name="description"
                    content="Experience the operational path from registration to founding partner status at AdMandala."
                />
            </Helmet>

            {/* NAV */}
            <nav className="top-nav">
                <div className="content-wrapper-narrow nav-flex">
                    <Link to="/" className="back-link">&larr; Back Home</Link>
                </div>
            </nav>

            {/* Decorative Background Elements */}
            <div className="decorative-blob-1"></div>
            <div className="decorative-blob-2"></div>

            <div className="eap-precision-section">

                <div className="content-wrapper-narrow">
                    {/* Header */}


                    {/* ── 01. PROGRAM OVERVIEW (BLACK CARD) ── */}
                    <section className="program-overview-section animate-on-scroll">
                        <h2 className="section-title-alt">Early Adapters Program</h2>
                        <p className="section-subtitle-alt" style={{ maxWidth: '800px', margin: '0 auto 34px', fontSize: '18px', color: '#64748b' }}>
                            AdMandala is launching a structured onboarding program to build a high-quality publisher ecosystem during the early phase of the platform.
                        </p>

                        <div className="black-overview-card">
                            <div className="overview-left">
                                <h3 className="eap-card-title">Early Adopter Program (EAP)</h3>
                                <p className="eap-card-desc">
                                    The Early Adopter Program will run for approximately 6–9 months following the launch of the AdMandala Exchange Layer.
                                    Publishers who register during this phase and successfully pass the platform’s verification and operational requirements will be admitted into the Early Adopter Program.
                                </p>

                            </div>

                            <div className="overview-right">
                                <div className="benefits-label">PROGRAM BENEFITS</div>
                                <ul className="benefits-list">
                                    <li><div className="benefit-dot"></div> Fee Advantage during the phase</li>
                                    <li><div className="benefit-dot"></div> Early Access to Demand</li>
                                    <li><div className="benefit-dot"></div> Dedicated Support</li>
                                    <li><div className="benefit-dot"></div> Pathway to Founding Publisher Status</li>
                                </ul>
                                <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="lo-button" style={{ marginTop: '40px', marginLeft: '100px' }}>
                                    Register Me For EAP
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* ── 02. FOUNDING PUBLISHER PARTNERS ── */}
                    <section className="fpp-main-section animate-on-scroll">
                        <div className="white-fpp-card">
                            <div className="fpp-header-row">
                                <div className="fpp-icon-box">
                                    <Diamond size={24} />
                                </div>
                                <h2 className="fpp-title">Founding Publisher Partners (FPP)</h2>
                            </div>
                            <p className="fpp-intro-text">
                                Founding Publisher Partners are the early builders of the AdMandala ecosystem — publishers who believed in the platform early and helped shape its foundation.
                                This recognition is reserved for a select group of publishers who demonstrated consistent traffic quality and strong marketplace performance from the early stages.
                            </p>

                            <div className="privileges-label">FOUNDING PARTNER PRIVILEGES</div>

                            <div className="fpp-accordion-group">
                                <AccordionItem
                                    title="Better Revenue Share for Life"
                                    icon={TrendingUp}
                                    isOpen={openIndex === 0}
                                    onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                                >
                                    Founding Publishers receive a permanently improved revenue share, up to 7% higher than standard publishers.
                                </AccordionItem>
                                <AccordionItem
                                    title="Priority Access to Demand"
                                    icon={Zap}
                                    isOpen={openIndex === 1}
                                    onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                                >
                                    Founding Publishers receive priority access to selected demand opportunities, including participation in private demand pools and early demand integrations as the marketplace expands.
                                </AccordionItem>
                                <AccordionItem
                                    title="Early Access to New Platform Features"
                                    icon={Settings}
                                    isOpen={openIndex === 2}
                                    onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                                >
                                    Founding Publishers gain early access to new capabilities on the platform, including:
                                    <ul style={{ marginTop: '12px', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <li style={{ listStyleType: 'disc' }}>Advanced optimization tools</li>
                                        <li style={{ listStyleType: 'disc' }}>Enhanced analytics features</li>
                                        <li style={{ listStyleType: 'disc' }}>New monetization opportunities</li>
                                        <li style={{ listStyleType: 'disc' }}>Beta access to our phase 2, decentralised revolution.</li>
                                    </ul>
                                    This allows founding partners to benefit from innovations before broader rollout.
                                </AccordionItem>
                                <AccordionItem
                                    title="Priority Support"
                                    icon={LifeBuoy}
                                    isOpen={openIndex === 3}
                                    onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
                                >
                                    Founding Publishers receive priority operational support, including faster assistance, optimization guidance, and closer collaboration with the AdMandala team to improve monetization performance
                                </AccordionItem>
                                <AccordionItem
                                    title="Influence on Platform Evolution"
                                    icon={Layers}
                                    isOpen={openIndex === 4}
                                    onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
                                >
                                    As long-term partners, Founding Publishers may be invited to participate in discussions that help shape the future direction of the ecosystem, particularly as AdMandala evolves towards the Open Trust Ads Infrastructure.
                                </AccordionItem>
                            </div>
                        </div>
                    </section>

                    {/* ── 03. THE OPERATIONAL PATH ── */}
                    <section className="operational-path-section animate-on-scroll">
                        <h2 className="section-title-alt">The Operational Path</h2>
                        <p className="section-subtitle-alt">A clear path from registration to founding partner status.</p>

                        <div className="operational-cards-grid">
                            <div className="op-card">
                                <div className="op-card-num">01</div>
                                <h3 className="op-card-title">Register and submit your website</h3>
                                <p className="op-card-desc">Start your journey by creating an account and submitting your primary publishing platforms.</p>
                            </div>
                            <div className="op-card">
                                <div className="op-card-num">02</div>
                                <h3 className="op-card-title">Manual Verification</h3>
                                <p className="op-card-desc">Our team will manually review your traffic quality and operational compliance to ensure ecosystem integrity.</p>
                            </div>
                            <div className="op-card">
                                <div className="op-card-num">03</div>
                                <h3 className="op-card-title">Join Early Adopter Program</h3>
                                <p className="op-card-desc">Once admitted, you'll start benefiting from EAP advantages and immediate monetization.</p>
                            </div>
                            <div className="op-card">
                                <div className="op-card-num">04</div>
                                <h3 className="op-card-title">Qualify for Founding Publisher Partners</h3>
                                <p className="op-card-desc">Consistent performance and high quality during the EAP phase will lead to FPP status.</p>
                            </div>
                        </div>

                        <div className="operational-flow-bar">
                            <span className="flow-item"><UserPlus size={16} /> Register a website</span>
                            <span className="flow-arrow">→</span>
                            <span className="flow-item"><ClipboardCheck size={16} /> Verified Publishers</span>
                            <span className="flow-arrow">→</span>
                            <span className="flow-item"><Layers size={16} /> Early Adopter Program</span>
                            <span className="flow-arrow">→</span>
                            <span className="flow-item"><Rocket size={16} /> Founding Publisher Partners</span>
                        </div>
                    </section>
                    {/* ── 04. LIMITED OPPORTUNITY ── */}
                    <section className="limited-opportunity-section">
                        <div className="lo-card">
                            <div className="lo-circle-overlay"></div>
                            <div className="lo-content">
                                <div className="lo-chip">Limited Opportunity</div>
                                <h2 className="lo-title">Don't Miss the Window</h2>
                                <p className="lo-desc">
                                    The Early Adopter Program is available for a limited time, and the Founding Publisher Partners group is selective and capped. Secure your position early.
                                </p>
                                <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="lo-button">
                                    Apply as a Publisher
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default EarlyAdopters;
