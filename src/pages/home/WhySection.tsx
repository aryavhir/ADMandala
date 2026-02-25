import React from 'react';
import { AnimatedBeamDemo } from '../../components/home/AnimatedBeamDemo';

const WhySection: React.FC = () => {
    return (
        <section className="section why-section">

            <div className="content-wrapper">
                <div className="why-heading-block">
                    <span className="prem-badge animate-premium">THE TENSION IN AD TECH</span>
                    <h2 className="section-title animate-premium">
                        Why Ad Mandala Exists
                    </h2>
                    <p className="prem-subtext animate-premium">
                        Advertising needs reliability <em>and</em> trust. Today's ecosystem forces a choice between them.
                    </p>
                </div>

                <div className="why-visual-container animate-on-scroll delay-1" style={{ marginTop: '2rem' }}>
                    <AnimatedBeamDemo />
                </div>
            </div>
        </section>
    );
};

export default WhySection;
