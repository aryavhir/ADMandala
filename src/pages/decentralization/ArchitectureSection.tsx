import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import roadmapAnimation from '../../assets/new/4-5.json';
import '../../styles/Mockups.css';

const ArchitectureSection: React.FC = () => {
    return (
        <section id="architecture" className="dec-section dec-archi-consistent">
            <div className="content-wrapper">
                <div className="dec-archi-layout-refined">
                    {/* LEFT: Consistent Typography */}
                    <motion.div 
                        className="dec-archi-content-refined"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <span className="prem-badge">System Protocol</span>
                        <h2 className="section-title">The Mandala Protocol Architecture</h2>
                        
                        <p className="dec-sub-refined text-left ml-0">
                            At the core of the protocol lies an immutable record of verified ad events.
                        </p>

                        <div className="dec-archi-points">
                            <div className="dec-archi-point">
                                <div className="point-marker" />
                                <div className="point-text">
                                    <h3>Protocol logic</h3>
                                    <p>Governs pricing and settlement with deterministic precision.</p>
                                </div>
                            </div>
                            
                            <div className="dec-archi-point">
                                <div className="point-marker" />
                                <div className="point-text">
                                    <h3>Decentralized verification</h3>
                                    <p>Nodes validate events and detect fraud through multi-party consensus.</p>
                                </div>
                            </div>
                            
                            <div className="dec-archi-point">
                                <div className="point-marker" />
                                <div className="point-text">
                                    <h3>Open participants</h3>
                                    <p>Connect without centralized gatekeeping while maintaining system integrity.</p>
                                </div>
                            </div>
                        </div>

                        <div className="dec-archi-footer-quote">
                            <p>Together, these layers form a balanced, self-correcting system.</p>
                        </div>
                    </motion.div>

                    {/* RIGHT: Phone Mockup with Lottie */}
                    <div className="dec-archi-visual-large">
                        <div className="mockup-phone" style={{ transform: 'none', maxWidth: '380px' }}>
                            <div className="mockup-phone-display" style={{ background: 'linear-gradient(135deg, #f8fafb 0%, #ffffff 100%)' }}>
                                <Lottie 
                                    animationData={roadmapAnimation} 
                                    loop={true} 
                                    className="archi-lottie-main"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureSection;
