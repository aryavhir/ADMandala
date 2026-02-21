import { CheckCircle2 } from 'lucide-react';
import imgZ from '../../assets/l7.png';

const QualityControlled = () => {
    return (
        <section className="section dsp-split-section">
            <div className="content-wrapper">
                <div className="split-layout split-left animate-on-scroll">
                    <div className="split-content">
                        <h2>Quality-Controlled Supply</h2>
                        <p className="split-subtitle">Performance over volume</p>
                        <p className="split-description">Ad Mandala prioritizes traffic quality and advertiser outcomes by:</p>
                        <ul className="split-features">
                            <li>
                                <CheckCircle2 size={20} />
                                <span>Enforcing centralized quality checks</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} />
                                <span>Actively filtering invalid traffic</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} />
                                <span>Monitoring performance signals across the exchange</span>
                            </li>
                        </ul>
                        <p className="split-closing">This reduces wasted spend and protects campaign integrity.</p>
                    </div>
                    <div className="split-visual purple-accent">
                        <img src={imgZ} alt="Quality Dashboard" className="split-visual-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityControlled;
