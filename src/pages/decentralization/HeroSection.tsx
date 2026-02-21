import { CircleDot, ArrowRight, Network, Shield, Eye, Globe, Layers, Lock, Activity, Cpu } from 'lucide-react';

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

                {/* Hero Visual — 3D Cube + Constellation */}
                <div className="dec-hero-visual animate-on-scroll delay-3" aria-hidden="true">
                    <div className="dec-vis">
                        {/* Scan line */}
                        <div className="dec-scanline" />

                        {/* Constellation star field */}
                        <svg className="dec-constellation" viewBox="0 0 500 500" fill="none">
                            {/* Network connection lines */}
                            <line x1="80" y1="60" x2="180" y2="130" className="dec-con-line dec-cl-1" />
                            <line x1="180" y1="130" x2="250" y2="80" className="dec-con-line dec-cl-2" />
                            <line x1="250" y1="80" x2="400" y2="110" className="dec-con-line dec-cl-3" />
                            <line x1="400" y1="110" x2="440" y2="200" className="dec-con-line dec-cl-4" />
                            <line x1="440" y1="200" x2="420" y2="340" className="dec-con-line dec-cl-5" />
                            <line x1="420" y1="340" x2="350" y2="420" className="dec-con-line dec-cl-6" />
                            <line x1="350" y1="420" x2="200" y2="440" className="dec-con-line dec-cl-7" />
                            <line x1="200" y1="440" x2="90" y2="380" className="dec-con-line dec-cl-8" />
                            <line x1="90" y1="380" x2="60" y2="250" className="dec-con-line dec-cl-9" />
                            <line x1="60" y1="250" x2="80" y2="60" className="dec-con-line dec-cl-10" />
                            {/* Inner cross-links */}
                            <line x1="180" y1="130" x2="350" y2="420" className="dec-con-line dec-cl-cross" />
                            <line x1="400" y1="110" x2="90" y2="380" className="dec-con-line dec-cl-cross" />
                            <line x1="440" y1="200" x2="80" y2="60" className="dec-con-line dec-cl-cross" />
                            <line x1="250" y1="80" x2="200" y2="440" className="dec-con-line dec-cl-cross" />
                            <line x1="420" y1="340" x2="60" y2="250" className="dec-con-line dec-cl-cross" />

                            {/* Animated signal pulses along lines */}
                            <circle r="3" fill="#1a7a7a" className="dec-signal">
                                <animateMotion dur="2.5s" repeatCount="indefinite" path="M80,60 L180,130 L250,80 L400,110" />
                            </circle>
                            <circle r="3" fill="#0f4a4a" className="dec-signal">
                                <animateMotion dur="3s" repeatCount="indefinite" path="M440,200 L420,340 L350,420 L200,440" />
                            </circle>
                            <circle r="2" fill="#1a7a7a" className="dec-signal" opacity="0.7">
                                <animateMotion dur="4s" repeatCount="indefinite" path="M200,440 L90,380 L60,250 L80,60" />
                            </circle>
                            <circle r="2.5" fill="#0f4a4a" className="dec-signal" opacity="0.8">
                                <animateMotion dur="3.5s" repeatCount="indefinite" path="M180,130 L350,420" />
                            </circle>
                            <circle r="2" fill="#1a7a7a" className="dec-signal" opacity="0.6">
                                <animateMotion dur="5s" repeatCount="indefinite" path="M400,110 L90,380" />
                            </circle>

                            {/* Constellation dots (nodes) */}
                            <circle cx="80" cy="60" r="4" fill="#0f4a4a" opacity="0.8" />
                            <circle cx="180" cy="130" r="5" fill="#0f4a4a" opacity="0.9" />
                            <circle cx="250" cy="80" r="3.5" fill="#1a7a7a" opacity="0.7" />
                            <circle cx="400" cy="110" r="5" fill="#0f4a4a" opacity="0.85" />
                            <circle cx="440" cy="200" r="4" fill="#1a7a7a" opacity="0.75" />
                            <circle cx="420" cy="340" r="5" fill="#0f4a4a" opacity="0.9" />
                            <circle cx="350" cy="420" r="4" fill="#1a7a7a" opacity="0.8" />
                            <circle cx="200" cy="440" r="5" fill="#0f4a4a" opacity="0.85" />
                            <circle cx="90" cy="380" r="4.5" fill="#1a7a7a" opacity="0.8" />
                            <circle cx="60" cy="250" r="3.5" fill="#0f4a4a" opacity="0.7" />

                            {/* Glow halos on key nodes */}
                            <circle cx="180" cy="130" r="14" fill="none" stroke="rgba(15,74,74,0.15)" strokeWidth="1" className="dec-node-halo" />
                            <circle cx="400" cy="110" r="14" fill="none" stroke="rgba(15,74,74,0.15)" strokeWidth="1" className="dec-node-halo" />
                            <circle cx="420" cy="340" r="14" fill="none" stroke="rgba(15,74,74,0.15)" strokeWidth="1" className="dec-node-halo" />
                            <circle cx="200" cy="440" r="14" fill="none" stroke="rgba(15,74,74,0.15)" strokeWidth="1" className="dec-node-halo" />

                            {/* Tiny ambient stars */}
                            {[
                                [45, 150], [130, 30], [320, 50], [460, 160], [470, 300],
                                [380, 470], [120, 460], [30, 320], [160, 250], [340, 250],
                                [250, 350], [310, 160], [140, 350], [390, 250], [220, 170],
                            ].map(([cx, cy], i) => (
                                <circle key={i} cx={cx} cy={cy} r="1.5" fill="#0f4a4a" opacity="0.3" className={`dec-twinkle dec-tw-${(i % 5) + 1}`} />
                            ))}
                        </svg>

                        {/* 3D Rotating Cube */}
                        <div className="dec-cube-wrapper">
                            <div className="dec-cube-glow" />
                            <div className="dec-cube-scene">
                                <div className="dec-cube">
                                    <div className="dec-cube-face dec-face-front">
                                        <Network size={24} />
                                        <span>Protocol</span>
                                    </div>
                                    <div className="dec-cube-face dec-face-back">
                                        <Shield size={24} />
                                        <span>Trust</span>
                                    </div>
                                    <div className="dec-cube-face dec-face-right">
                                        <Eye size={24} />
                                        <span>Verify</span>
                                    </div>
                                    <div className="dec-cube-face dec-face-left">
                                        <Globe size={24} />
                                        <span>Open</span>
                                    </div>
                                    <div className="dec-cube-face dec-face-top">
                                        <Layers size={24} />
                                        <span>Layers</span>
                                    </div>
                                    <div className="dec-cube-face dec-face-bottom">
                                        <Lock size={24} />
                                        <span>Secure</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating glass data cards */}
                        <div className="dec-datacard dec-dc-1">
                            <div className="dec-dc-row">
                                <Activity size={12} />
                                <span className="dec-dc-label">Throughput</span>
                            </div>
                            <span className="dec-dc-value">1.2M <small>req/s</small></span>
                            <div className="dec-dc-bar"><div className="dec-dc-fill" style={{ width: '78%' }} /></div>
                        </div>
                        <div className="dec-datacard dec-dc-2">
                            <div className="dec-dc-row">
                                <Shield size={12} />
                                <span className="dec-dc-label">Verified</span>
                            </div>
                            <span className="dec-dc-value">99.97%</span>
                            <div className="dec-dc-bar"><div className="dec-dc-fill" style={{ width: '99%' }} /></div>
                        </div>
                        <div className="dec-datacard dec-dc-3">
                            <div className="dec-dc-row">
                                <Cpu size={12} />
                                <span className="dec-dc-label">Nodes</span>
                            </div>
                            <span className="dec-dc-value">248</span>
                            <div className="dec-dc-spark">
                                {[4, 7, 5, 9, 6, 8, 10, 7, 9, 8, 6, 10].map((h, i) => (
                                    <div key={i} className="dec-dc-spark-bar" style={{ height: `${h * 10}%` }} />
                                ))}
                            </div>
                        </div>

                        {/* Orbit energy ring */}
                        <div className="dec-energy-ring">
                            <svg viewBox="0 0 400 400" fill="none">
                                <circle cx="200" cy="200" r="190" stroke="url(#dec-energy-grad)" strokeWidth="1" strokeDasharray="8 12" className="dec-energy-path" />
                                <circle cx="200" cy="200" r="165" stroke="url(#dec-energy-grad2)" strokeWidth="0.5" strokeDasharray="4 16" className="dec-energy-path-r" />
                                <defs>
                                    <linearGradient id="dec-energy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0f4a4a" stopOpacity="0" />
                                        <stop offset="30%" stopColor="#1a7a7a" stopOpacity="0.5" />
                                        <stop offset="70%" stopColor="#0f4a4a" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#1a7a7a" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="dec-energy-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#1a7a7a" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#0f4a4a" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#1a7a7a" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
