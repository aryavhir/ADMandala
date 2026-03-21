import React from 'react';


const PhilosophySection = () => {
    return (
        <section id="philosophy" className="dec-section dec-philosophy-modern">
            <div className="dec-phil-bg" aria-hidden="true" />

            <div className="content-wrapper">
                {/* Section header - Centered as requested */}
                <div className="dec-phil-header-centered">
                    <span className="prem-badge animate-premium">Philosophy</span>
                    <h2 className="section-title animate-premium">
                        The Philosophy Behind Ad Mandala
                    </h2>
                    <p className="dec-sub-refined animate-premium">
                        Why decentralization matters — and why <em>timing</em> matters more.
                    </p>
                </div>

                {/* Guarantees — Premium Simplistic Layout */}
                <div className="dec-phil-guarantees-simple">
                    <div className="dec-phil-item animate-on-scroll">
                        <div className="dec-phil-item-num">01.</div>
                        <h3>Independent verification</h3>
                        <p>Guaranteed validation by an autonomous network of nodes.</p>
                    </div>

                    <div className="dec-phil-item animate-on-scroll">
                        <div className="dec-phil-item-num">02.</div>
                        <h3>Reduced trust in intermediaries</h3>
                        <p>Minimizing reliance on third parties through protocol-level guarantees.</p>
                    </div>

                    <div className="dec-phil-item animate-on-scroll">
                        <div className="dec-phil-item-num">03.</div>
                        <h3>Transparent settlement</h3>
                        <p>Real-time, auditable records of every transaction and verification.</p>
                    </div>
                </div>

                {/* The Warning — Stripped of icons, focused on text */}
                <div className="dec-phil-warning-clean animate-on-scroll">
                    <p>
                        But decentralization done <span>prematurely</span> introduces friction, complexity, and fragility.
                    </p>
                </div>


                {/* Principle Statement */}
                <div className="dec-phil-principle-final animate-on-scroll">
                    <div className="dec-phil-principle-box">
                        <span className="dec-principle-eyebrow">The Ad Mandala Principle</span>
                        <blockquote className="dec-principle-text">
                            "Decentralization should <span>emerge</span> from proven infrastructure — not replace it overnight."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
