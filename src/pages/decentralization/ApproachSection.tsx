import React from 'react';

const ApproachSection = () => {
    return (
        <section id="approach" className="dec-section dec-approach-blueprint">
            <div className="dec-approach-bg" aria-hidden="true">
                <div className="dec-blueprint-grid-infinite" />
            </div>

            <div className="content-wrapper">
                <div className="dec-approach-grid-v2">
                    {/* Left: Content */}
                    <div className="dec-approach-info animate-on-scroll">
                        <span className="prem-badge animate-premium">Approach</span>
                        <h2 className="section-title animate-premium">
                            The Mandala Approach
                        </h2>
                        <p className="dec-sub-refined animate-premium">
                            A mandala represents balance, structure, and interconnected systems.
                        </p>
                        <div className="dec-approach-description animate-premium">
                            <p>
                                Ad Mandala applies this principle by decentralizing only the layers that benefit from it — while keeping the system usable, scalable, and reliable at every stage.
                            </p>
                        </div>
                    </div>

                    {/* Right: Simplistic Blueprint Animation */}
                    <div className="dec-approach-blueprint-minimal animate-on-scroll">
                        <div className="dec-blueprint-system-v2">
                            {/* Technical Rings */}
                            <div className="dec-bp-ring v2-ring-1" />
                            <div className="dec-bp-ring v2-ring-2" />
                            <div className="dec-bp-ring v2-ring-3" />

                            {/* Center Core - Neutralized */}
                            <div className="dec-bp-core-v2">
                                <div className="dec-bp-core-pulse-v2" />
                            </div>

                            {/* Subtle Floating Nodes */}
                            <div className="dec-bp-nodes-v2">
                                {[0, 90, 180, 270].map((angle) => (
                                    <div 
                                        key={angle} 
                                        className="dec-bp-node-v2" 
                                        style={{ transform: `rotate(${angle}deg) translateY(-140px)` }}
                                    >
                                        <div className="dec-bp-dot-v2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ApproachSection;
