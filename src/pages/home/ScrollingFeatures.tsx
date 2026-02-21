import React from 'react';

const ScrollingFeatures: React.FC = () => {
    const featurePills = [
        'Transparency First',
        'Zero-Knowledge Proofs',
        'Real-time Settlement',
        'Decentralized Identity',
        'Verifiable Ad Tech',
        'Fraud Prevention',
    ];

    const secondRowPills = [
        'Centralized Performance',
        'Verified Delivery',
        'Traffic Quality',
        'Reliable Payouts',
        'Contextual Suitability',
        'Yield Optimization',
    ];

    return (
        <>
            <div className="scrolling-features hidden-mobile">
                <div className="scrolling-features-row">
                    {[...featurePills, ...featurePills, ...featurePills].map((pill, index) => (
                        <div key={index} className="feature-pill">
                            {pill}
                        </div>
                    ))}
                </div>
            </div>

            <div className="scrolling-features hidden-mobile">
                <div className="scrolling-features-row" style={{ animationDirection: 'reverse' }}>
                    {[...secondRowPills, ...secondRowPills, ...secondRowPills].map((pill, index) => (
                        <div key={index} className="feature-pill">
                            {pill}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ScrollingFeatures;
