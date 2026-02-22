import React from 'react';
import './RegisterCTA.css';
import '../../styles/premium-buttons.css';

interface RegisterCTAProps {
    registrationUrl: string;
}

const RegisterCTA: React.FC<RegisterCTAProps> = ({ registrationUrl }) => {
    return (
        <section className="pub-cta-section">
            <div className="pub-cta-container animate-on-scroll">
                <div className="pub-cta-inner-bg"></div>
                <div className="pub-cta-content">
                    <div className="pub-cta-badge">Join Other Publishers</div>
                    <h2>Start Monetizing Today</h2>
                    <p className="pub-cta-desc">
                        Publishers with Ad Mandala's
                        transparency and unified demand reporting—focus on your content.
                    </p>
                    <a
                        href={registrationUrl}
                        className="btn-premium-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="btn-premium-inner">
                            <span className="btn-premium-text">Register as a Publisher</span>
                            <span className="btn-premium-text-hover">Register as a Publisher</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RegisterCTA;
