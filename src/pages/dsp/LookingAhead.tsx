import { Link } from 'react-router-dom';

const LookingAhead = () => {
    return (
        <section className="section dsp-future-section">
            <div className="dsp-future-bg">
                <div className="dsp-future-orb orb-1"></div>
                <div className="dsp-future-orb orb-2"></div>
                <div className="dsp-future-grid-lines"></div>
            </div>
            <div className="content-wrapper">
                <div className="dsp-future-content animate-on-scroll">
                    <h2 className="dsp-future-title">Looking Ahead</h2>
                    <p className="dsp-future-desc">Ad Mandala is evolving from a centralized exchange into a verifiable advertising protocol. See how verification and settlement decentralize — without disrupting your buying workflows.</p>
                    <div className="decentralization-link-wrapper animate-on-scroll delay-2">
                        <Link to="/decentralization" className="explore-button">
                            <span className="explore-button__icon-wrapper" aria-hidden="true">
                                <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="explore-button__icon-svg" width={12}>
                                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                </svg>
                                <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="explore-button__icon-svg explore-button__icon-svg--copy" width={12}>
                                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                </svg>
                            </span>
                            <span className="explore-button__label">Explore the decentralization roadmap</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LookingAhead;
