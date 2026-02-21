import { CheckCircle2 } from 'lucide-react';
import imgY from '../../assets/l6.png';

const FamiliarExperience = () => {
    return (
        <section className="section dsp-split-section">
            <div className="content-wrapper">
                <div className="split-layout split-right animate-on-scroll">
                    <div className="split-visual blue-accent">
                        <img src={imgY} alt="API Integration" className="split-visual-image" />
                    </div>
                    <div className="split-content">
                        <h2>Familiar Buying Experience</h2>
                        <p className="split-subtitle">No learning curve required</p>
                        <p className="split-description">DSPs and advertisers integrate using standard programmatic mechanisms, enabling:</p>
                        <ul className="split-features">
                            <li>
                                <CheckCircle2 size={20} />
                                <span>Quick onboarding</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} />
                                <span>Existing optimization strategies</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} />
                                <span>Seamless campaign execution</span>
                            </li>
                        </ul>
                        <p className="split-closing">Ad Mandala fits into your current media buying stack.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FamiliarExperience;
