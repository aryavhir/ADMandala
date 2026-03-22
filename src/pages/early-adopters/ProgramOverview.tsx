import React from 'react';
import { CheckCircle2, Sparkles, Crown } from 'lucide-react';

const ProgramOverview: React.FC = () => {
    return (
        <section id="program-overview" className="eap-section eap-overview">
            <div className="content-wrapper">
                <div className="eap-overview-header animate-on-scroll">
                    <span className="prem-badge animate-premium">Program</span>
                    <h2 className="section-title animate-premium">Early Adopter Program</h2>
                    <p className="eap-overview-intro animate-premium">
                        AdMandala is launching a structured onboarding program to build a high-quality publisher ecosystem during the early phase of the platform.
                    </p>
                </div>

                <div className="eap-programs-grid">
                    {/* EAP Card */}
                    <div className="eap-program-card eap-card-primary animate-on-scroll">
                        <div className="eap-card-accent"></div>
                        <div className="eap-card-header">
                            <div className="eap-card-icon-wrap">
                                <Sparkles size={24} />
                            </div>
                            <div className="eap-card-badge">Phase 1</div>
                        </div>
                        <h3 className="eap-card-title">Early Adopter Program (EAP)</h3>
                        <p className="eap-card-desc">
                            The Early Adopter Program will run for approximately 6–9 months following the launch of the AdMandala Exchange Layer.
                        </p>
                        <p className="eap-card-desc">
                            Publishers who register during this phase and successfully pass the platform's verification and operational requirements will be admitted into the Early Adopter Program.
                        </p>

                        <div className="eap-benefits-label">Benefits</div>
                        <ul className="eap-benefits-list">
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Fee Advantage during the phase</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Early Access to Demand</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Dedicated Support</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Pathway to Founding Publisher Status</span>
                            </li>
                        </ul>
                    </div>

                    {/* FPG Card */}
                    <div className="eap-program-card eap-card-premium animate-on-scroll">
                        <div className="eap-card-accent premium"></div>
                        <div className="eap-card-header">
                            <div className="eap-card-icon-wrap premium">
                                <Crown size={24} />
                            </div>
                            <div className="eap-card-badge premium">Selective</div>
                        </div>
                        <h3 className="eap-card-title">Founding Publisher Partners (FPG)</h3>
                        <p className="eap-card-desc">
                            Founding Publisher Partners are the early builders of the AdMandala ecosystem — publishers who believed in the platform early and helped shape its foundation.
                        </p>
                        <p className="eap-card-desc">
                            This recognition is reserved for a select group of publishers who demonstrated consistent traffic quality and strong marketplace performance from the early stages.
                        </p>

                        <div className="eap-benefits-label">Benefits</div>
                        <ul className="eap-benefits-list">
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Priority Access to Demand</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Early Access to New Features</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Priority Support</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Influence on Platform Evolution</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} />
                                <span>Recognition as Early Marketplace Partners</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramOverview;
