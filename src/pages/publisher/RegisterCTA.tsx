import React from 'react';

interface RegisterCTAProps {
    registrationUrl: string;
}

const RegisterCTA: React.FC<RegisterCTAProps> = ({ registrationUrl }) => {
    return (
        <section className="section dsp-cta-section">
            <div className="content-wrapper">
                <div className="dsp-cta-box animate-on-scroll">
                    <h2 className="dsp-cta-headline">Start Monetizing Today</h2>
                    <p className="dsp-cta-sub">Join as a Publisher or SSP and grow with verifiable revenue.</p>
                    <a href={registrationUrl} className="dsp-cta-button" target="_blank" rel="noopener noreferrer">Register as a Publisher</a>
                </div>
            </div>
        </section>
    );
};

export default RegisterCTA;
