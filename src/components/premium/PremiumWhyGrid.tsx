import React from 'react';
import '../../styles/PremiumLayouts.css';

interface WhyReason {
    title: string;
    content: string;
    bgColor: string;
}

interface PremiumWhyGridProps {
    id: string;
    badge: string;
    title: React.ReactNode;
    subtitle: string;
    reasons: WhyReason[];
}

const PremiumWhyGrid: React.FC<PremiumWhyGridProps> = ({
    id,
    badge,
    title,
    subtitle,
    reasons
}) => {
    return (
        <section id={id} className="prem-why-section">
            <div className="prem-tabs-header animate-on-scroll">
                <div className="prem-tabs-badge">{badge}</div>
                <h2>{title}</h2>
                <p className="prem-tabs-subtitle" style={{ marginTop: '16px' }}>
                    {subtitle}
                </p>
            </div>

            <div className="prem-why-grid">
                {reasons.map((reason, idx) => (
                    <div
                        key={idx}
                        className="prem-why-card animate-on-scroll"
                        style={{
                            transitionDelay: `${idx * 100}ms`,
                            backgroundColor: reason.bgColor
                        }}
                    >
                        <div className="prem-why-border" />
                        <div className="prem-why-card-content">
                            <h3 className="prem-why-card-title">{reason.title}</h3>
                            <div className="prem-why-reveal-zone">
                                <p className="prem-why-desc">{reason.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PremiumWhyGrid;
