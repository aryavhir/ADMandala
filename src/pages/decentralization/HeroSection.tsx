import { CircleDot, ArrowRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <header className="dec-hero">
            <div className="dec-hero-mesh" aria-hidden="true">
                <div className="dec-mesh-line dec-ml-1" />
                <div className="dec-mesh-line dec-ml-2" />
                <div className="dec-mesh-line dec-ml-3" />
                <div className="dec-mesh-line dec-ml-4" />
            </div>
            <div className="dec-hero-radial" aria-hidden="true" />

            <div className="content-wrapper dec-hero-layout">
                <div className="dec-hero-copy">
                    <div className="dec-hero-eyebrow animate-on-scroll">
                        <CircleDot size={14} />
                        <span>The Decentralization Roadmap</span>
                    </div>
                    <h1 className="dec-hero-h1 animate-on-scroll">
                        From <span className="dec-h1-em">Platform</span><br />to Protocol
                    </h1>
                    <p className="dec-hero-sub animate-on-scroll delay-1">
                        Ad Mandala is evolving from a centralized programmatic exchange into a decentralized advertising network&nbsp;— without compromising performance or usability.
                    </p>
                    <div className="dec-hero-actions animate-on-scroll delay-2">
                        <a href="#evolution" className="btn btn-primary">
                            Explore the Journey <ArrowRight size={16} />
                        </a>
                        <a href="#architecture" className="btn btn-ghost">View Architecture</a>
                    </div>
                </div>

                {/* Hero Visual — 3-Step Curved Line */}
                <div className="dec-hero-visual animate-on-scroll delay-3" aria-hidden="true">
                    <div className="dec-step-visual">
                        <svg className="dec-step-svg" viewBox="0 0 1000 400" fill="none" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <linearGradient id="dec-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#5ba3cf" />
                                    <stop offset="50%" stopColor="#38b2ac" />
                                    <stop offset="100%" stopColor="#48bb78" />
                                </linearGradient>
                            </defs>
                            {/* Base grey path (Wavy) */}
                            <path
                                d="M 0 350 C 100 350, 150 240, 250 240 S 400 340, 550 180 S 700 280, 850 100 L 1000 80"
                                className="dec-step-base-path"
                            />
                            {/* Animated colour stroke (Wavy) */}
                            <path
                                d="M 0 350 C 100 350, 150 240, 250 240 S 400 340, 550 180 S 700 280, 850 100 L 1000 80"
                                className="dec-step-anim-path"
                                stroke="url(#dec-line-grad)"
                            />
                        </svg>

                        {/* Step 1 Peak at roughly x=250, y=240 */}
                        <div className="dec-step-group dec-step-1">
                            <span className="dec-step-number dec-sn-1">1</span>
                            <div className="dec-step-content">
                                <span className="dec-step-title">Step One</span>
                                <span className="dec-step-desc">The team should conduct a<br />proof of concept.</span>
                            </div>
                        </div>

                        {/* Step 2 Peak at roughly x=550, y=180 */}
                        <div className="dec-step-group dec-step-2">
                            <span className="dec-step-number dec-sn-2">2</span>
                            <div className="dec-step-content">
                                <span className="dec-step-title">Step Two</span>
                                <span className="dec-step-desc">The team should start by outlining<br />the milestones.</span>
                            </div>
                        </div>

                        {/* Step 3 Peak at roughly x=850, y=100 */}
                        <div className="dec-step-group dec-step-3">
                            <span className="dec-step-number dec-sn-3">3</span>
                            <div className="dec-step-content">
                                <span className="dec-step-title">Step Three</span>
                                <span className="dec-step-desc">The team should monitor the<br />process efficiency.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
