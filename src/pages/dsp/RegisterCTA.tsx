import React from 'react';
import './RegisterCTA.css';
import '../../styles/premium-buttons.css';

interface RegisterCTAProps {
    onRegisterClick: () => void;
}

const RegisterCTA: React.FC<RegisterCTAProps> = ({ onRegisterClick }) => {
    return (
        <section className="dsp-cta-section">
            <div className="dsp-cta-container animate-on-scroll">
                <div className="dsp-cta-inner-bg"></div>
                <div className="dsp-cta-content">
                    <div className="dsp-cta-badge">Join Other Demand Partners</div>
                    <h2>Access Quality Supply Today</h2>
                    <p className="dsp-cta-desc">
                        Join as a DSP or Advertiser and grow with verifiable delivery and premium publisher inventory.
                    </p>
                    <button
                        className="btn-premium-primary"
                        onClick={onRegisterClick}
                    >
                        <div className="btn-premium-inner">
                            <span className="btn-premium-text">Register as a DSP / Advertiser</span>
                            <span className="btn-premium-text-hover">Register as a DSP / Advertiser</span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RegisterCTA;
