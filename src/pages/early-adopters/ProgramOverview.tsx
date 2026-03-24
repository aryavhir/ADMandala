import React from 'react';
import { Check, Zap, Award, Star } from 'lucide-react';
import './ProgramOverview.css';

const ProgramOverview: React.FC = () => {
    return (
        <section className="program-overview-section" id="program-overview">
            <div className="content-wrapper">
                <div className="overview-header">
                    <span className="overview-badge">PROGRAM OVERVIEW</span>
                    <h2 className="overview-title">Building a High-Quality Ecosystem</h2>
                    <p className="overview-desc">
                        AdMandala is launching a structured onboarding program to build a high-quality publisher ecosystem during the early phase of the platform.
                    </p>
                </div>

                <div className="program-grid">
                    {/* Early Adopter Program (EAP) */}
                    <div className="program-card eap-card">
                        <div className="card-header">
                            <div className="card-icon"><Zap size={24} /></div>
                            <h3>Early Adopter Program (EAP)</h3>
                        </div>
                        <p className="card-tagline">6–9 months following the launch of the AdMandala Exchange Layer.</p>
                        <div className="card-body">
                            <p>Publishers who register during this phase and successfully pass verification are admitted into the EAP.</p>
                            <ul className="benefit-list">
                                <li><Check size={18} /> Fee Advantage during the phase</li>
                                <li><Check size={18} /> Early Access to Demand</li>
                                <li><Check size={18} /> Dedicated Support</li>
                                <li><Check size={18} /> Pathway to Founding Publisher Status</li>
                            </ul>
                        </div>
                    </div>

                    {/* Founding Publisher Partners (FPP) */}
                    <div className="program-card fpp-card">
                        <div className="card-header">
                            <div className="card-icon"><Award size={24} /></div>
                            <h3>Founding Publisher Partners (FPP)</h3>
                        </div>
                        <p className="card-tagline">The early builders of the AdMandala ecosystem.</p>
                        <div className="card-body">
                            <p>Recognition reserved for a select group demonstrating consistent traffic quality and strong performance.</p>
                            <ul className="benefit-list">
                                <li><Star size={18} /> Better Revenue Share for Life</li>
                                <li><Star size={18} /> Founding Publisher Recognition</li>
                                <li><Star size={18} /> Direct Input on Protocol Evolution</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramOverview;
