import React, { useRef } from 'react';


const ScrollingFeatures: React.FC = () => {
    const track1Ref = useRef<HTMLDivElement>(null);
    const track2Ref = useRef<HTMLDivElement>(null);

    const featurePills = [
        'Transparency First',
        'Zero-Knowledge Proofs',
        'Real-time Settlement',
        'Decentralized Identity',
        'Verifiable Ad Tech',
        'Fraud Prevention',
        'Direct Integration',
        'Audit Trait',
    ];

    const secondRowPills = [
        'Centralized Performance',
        'Verified Delivery',
        'Traffic Quality',
        'Reliable Payouts',
        'Contextual Suitability',
        'Yield Optimization',
        'Secure Payment',
        'Live Tracking',
    ];

    // No GSAP needed - handling perfectly with pure CSS keyframes instead for zero-gap infinite scrolling.

    const renderPills = (items: string[], reverse: boolean) => (
        <div className={`simple-marquee-track ${reverse ? 'reverse' : ''}`}>
            {[...items, ...items, ...items].map((item, i) => (
                <React.Fragment key={i}>
                    <span className={`marquee-item ${i % 2 === 0 ? 'solid-dark' : 'solid-green'}`}>
                        {item}
                    </span>
                    <span className="marquee-separator">✦</span>
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <div className="simple-marquee-section">
            <div className="simple-marquee-container">
                <div className="simple-marquee-row" ref={track1Ref}>
                    {renderPills(featurePills, false)}
                </div>
                <div className="simple-marquee-row" ref={track2Ref} style={{ marginTop: '24px' }}>
                    {renderPills(secondRowPills, true)}
                </div>
            </div>
        </div>
    );
};

export default ScrollingFeatures;
