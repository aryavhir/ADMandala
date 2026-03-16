import roadmapBg from '../../assets/hero_roadmap_bg.png';

const StepJourney = () => {
    return (
        <div className="dec-browser-mockup animate-premium">
            <div className="dec-browser-header">
                <div className="dec-browser-dots">
                    <span className="dec-dot red"></span>
                    <span className="dec-dot yellow"></span>
                    <span className="dec-dot green"></span>
                </div>
                <div className="dec-browser-address">
                    <span className="dec-address-text">admandala.com/evolution_protocol</span>
                </div>
            </div>
            
            <div className="dec-browser-content">
                <div className="dec-roadmap-viewport">
                    {/* Roadmmap Image Only - No Lottie */}
                    <img 
                        src={roadmapBg} 
                        alt="AdMandala Evolutionary Roadmap" 
                        className="dec-roadmap-img-main" 
                    />
                </div>
                
                {/* Architectural Overlays */}
                <div className="dec-viewport-coords">
                    <span>X: 124.09</span>
                    <span>Y: 882.11</span>
                    <span>Z: 0.05</span>
                </div>
                <div className="dec-viewport-status">
                    <span className="dec-status-pulse"></span>
                    ACTIVE_PROTOCOL_MAP
                </div>
            </div>
        </div>
    );
};

export default StepJourney;
