import { Zap, Eye, Users, ArrowRight } from 'lucide-react';

interface CtaSectionProps {
    registrationUrl: string;
    onRegisterClick: () => void;
}

const CtaSection = ({ registrationUrl, onRegisterClick }: CtaSectionProps) => {
    return (
        <section className="dec-section dec-cta">
            {/* Animated background */}
            <div className="dec-cta-bg" aria-hidden="true">
                <div className="dec-cta-orb dec-cta-orb-1" />
                <div className="dec-cta-orb dec-cta-orb-2" />
                <div className="dec-cta-orb dec-cta-orb-3" />
                <div className="dec-cta-grid" />
            </div>

            <div className="content-wrapper">
                <div className="dec-cta-container">
                    <span className="prem-badge animate-premium">Join the Network</span>

                    <h2 className="section-title animate-premium" style={{ color: 'white' }}>
                        Be Early.
                        <span className="dec-cta-title-em"> Be Aligned.</span>
                    </h2>
                    <p className="prem-subtext animate-premium" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 auto 2.5rem' }}>
                        Ad Mandala is decentralizing in phases — early participants help shape the network.
                    </p>

                    {/* Benefits in a sleek grid */}
                    <div className="dec-cta-benefit-grid">
                        <div className="dec-cta-benefit">
                            <div className="dec-cta-benefit-icon">
                                <Zap size={18} />
                            </div>
                            <div className="dec-cta-benefit-text">
                                <strong>Priority Access</strong>
                                <span>First to use new protocol features</span>
                            </div>
                        </div>
                        <div className="dec-cta-benefit">
                            <div className="dec-cta-benefit-icon">
                                <Eye size={18} />
                            </div>
                            <div className="dec-cta-benefit-text">
                                <strong>Early Verification</strong>
                                <span>Integrate into decentralized validation</span>
                            </div>
                        </div>
                        <div className="dec-cta-benefit">
                            <div className="dec-cta-benefit-icon">
                                <Users size={18} />
                            </div>
                            <div className="dec-cta-benefit-text">
                                <strong>Shape Governance</strong>
                                <span>Influence network standards &amp; rules</span>
                            </div>
                        </div>
                        <div className="dec-cta-benefit">
                            <div className="dec-cta-benefit-icon">
                                <ArrowRight size={18} />
                            </div>
                            <div className="dec-cta-benefit-text">
                                <strong>Head Start</strong>
                                <span>Lead as the exchange becomes a protocol</span>
                            </div>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="dec-cta-actions animate-premium">
                        <a href={registrationUrl} className="btn-premium-primary" target="_blank" rel="noopener noreferrer">
                            <div className="btn-premium-inner">
                                <span className="btn-premium-text">Register as a Publisher</span>
                                <span className="btn-premium-text-hover">Register as a Publisher</span>
                            </div>
                        </a>
                        <button
                            className="btn-premium-primary"
                            type="button"
                            onClick={onRegisterClick}
                        >
                            <div className="btn-premium-inner">
                                <span className="btn-premium-text">Register as a DSP / Advertiser</span>
                                <span className="btn-premium-text-hover">Register as a DSP / Advertiser</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
