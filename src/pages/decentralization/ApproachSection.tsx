import React from 'react';
import { AnimatedBeamDemo } from '../../components/home/AnimatedBeamDemo';

const ApproachSection: React.FC = () => {
    return (
        <section id="approach" className="dec-section dec-approach-premium">
            <div className="content-wrapper">
                <div className="dec-approach-layout">
                    <div className="dec-approach-content">
                        <span className="prem-badge">Philosophy</span>
                        <h2 className="section-title">The Mandala Approach</h2>
                        <p className="dec-sub-refined">
                            A mandala represents balance, structure, and interconnected systems.
                        </p>
                        
                        <div className="dec-approach-details">
                            <div className="dec-approach-point">
                                <p>Ad Mandala applies this principle by decentralizing only the layers that benefit from it — while keeping the system usable, scalable, and reliable at every stage.</p>
                            </div>
                        </div>
                    </div>

                    <div className="dec-approach-visual">
                        <div className="beam-container-wrapper">
                            <AnimatedBeamDemo />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproachSection;
