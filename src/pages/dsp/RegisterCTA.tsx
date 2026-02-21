interface RegisterCTAProps {
    onRegisterClick: () => void;
}

const RegisterCTA = ({ onRegisterClick }: RegisterCTAProps) => {
    return (
        <section className="section dsp-cta-section">
            <div className="content-wrapper">
                <div className="dsp-cta-box animate-on-scroll">
                    <h2 className="dsp-cta-headline">Access Quality Supply Today</h2>
                    <p className="dsp-cta-sub">Join as a DSP or Advertiser and grow with verifiable delivery.</p>
                    <button className="dsp-cta-button" onClick={onRegisterClick}>Register as a DSP / Advertiser</button>
                </div>
            </div>
        </section>
    );
};

export default RegisterCTA;
