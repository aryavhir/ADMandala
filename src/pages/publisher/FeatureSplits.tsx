import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import p1 from '../../assets/r7.png';
import p2 from '../../assets/r2.png';
import p3 from '../../assets/r3.png';

const FeatureSplits: React.FC = () => {
    return (
        <>
            {/* SECTION 2: INTEGRATION - Split Layout */}
            <section className="section dsp-split-section">
                <div className="content-wrapper">
                    <div className="split-layout split-left animate-on-scroll">
                        <div className="split-content">
                            <h2>Simple Integration</h2>
                            <p className="split-subtitle">Works with your current setup</p>
                            <p className="split-description">Ad Mandala integrates using standard programmatic workflows, enabling:</p>
                            <ul className="split-features">
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Compatible with existing SSP setups</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Standard ad serving and reporting flows</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Minimal technical overhead</span>
                                </li>
                            </ul>
                            <p className="split-closing">You stay focused on content — we handle the exchange layer.</p>
                        </div>
                        <div className="split-visual purple-accent">
                            <img src={p1} alt="Integration Dashboard" className="split-visual-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: QUALITY - Split Layout (Mirrored) */}
            <section className="section dsp-split-section">
                <div className="content-wrapper">
                    <div className="split-layout split-right animate-on-scroll">
                        <div className="split-visual blue-accent">
                            <img src={p2} alt="Quality Controls" className="split-visual-image" />
                        </div>
                        <div className="split-content">
                            <h2>Traffic Quality First</h2>
                            <p className="split-subtitle">Quality is enforced — not assumed</p>
                            <p className="split-description">Ad Mandala applies centralized traffic quality controls to:</p>
                            <ul className="split-features">
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Detect and filter invalid traffic</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Protect advertiser trust</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Improve long-term demand value</span>
                                </li>
                            </ul>
                            <p className="split-closing">This approach ensures sustainable monetization, not short-term arbitrage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: TRANSPARENCY - Split Layout */}
            <section className="section dsp-split-section">
                <div className="content-wrapper">
                    <div className="split-layout split-left animate-on-scroll">
                        <div className="split-content">
                            <h2>Transparent Performance</h2>
                            <p className="split-description">Publishers get clear visibility into demand sources, fill rates, CPM performance, and traffic quality signals.</p>
                            <p className="split-subheading">What this means for publishers:</p>
                            <ul className="split-features">
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Moving from opaque metrics to independently verifiable data</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Increased confidence in revenue reporting</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Greater clarity in how value is distributed</span>
                                </li>
                            </ul>
                        </div>
                        <div className="split-visual green-accent">
                            <img src={p3} alt="Transparency Dashboard" className="split-visual-image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureSplits;
