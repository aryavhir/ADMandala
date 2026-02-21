import { CheckCircle2 } from 'lucide-react';
import imgX from '../../assets/l5.png';

const ProgressiveTransparency = () => {
    return (
        <section className="section dsp-split-section">
            <div className="content-wrapper">
                <div className="split-layout split-left animate-on-scroll">
                    <div className="split-content">
                        <h2>Transparency That Increases Over Time</h2>
                        <p className="split-description">While the exchange operates centrally today, Ad Mandala is designed to progressively reduce trust assumptions.</p>
                        <p className="split-subheading">What this means for advertisers:</p>
                        <ul className="split-features">
                            <li>
                                <CheckCircle2 size={20} />
                                <span>Moving from self-reported metrics to independently verifiable ad events</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} />
                                <span>Increased confidence in delivery and performance</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} />
                                <span>Greater clarity in how value is created and settled</span>
                            </li>
                        </ul>
                    </div>
                    <div className="split-visual green-accent">
                        <img src={imgX} alt="Transparency Roadmap" className="split-visual-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgressiveTransparency;
