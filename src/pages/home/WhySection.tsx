import React from 'react';
import { AnimatedBeamDemo } from '../../components/home/AnimatedBeamDemo';

const WhySection: React.FC = () => {
    return (
        <section className="prem-split-section why-split-section">
            <div className="content-wrapper">
                <div className="prem-split-layout why-split">

                    {/* LEFT: visual (AnimatedBeam) — reversed order so visual comes first */}
                    <div className="why-visual-panel animate-on-scroll">
                        <AnimatedBeamDemo />
                    </div>

                    {/* RIGHT: Text */}
                    <div className="prem-split-content animate-on-scroll">
                        <span className="prem-badge">The Tension In Ad Tech</span>
                        <h2 className="section-title">Why AdMandala Exists</h2>
                        <p className="prem-subtext">
                            Advertising needs reliability <em>and</em> trust. Today's ecosystem forces a choice between them. We're building the infrastructure that refuses that tradeoff.
                            <br />     <br />  Ad Mandala bridges this gap by delivering production-grade programmatic infrastructure now, while methodically decentralizing the layers that matter most — verification, settlement, and governance.
                        </p>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhySection;
