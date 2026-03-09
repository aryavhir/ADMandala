import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

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

    useEffect(() => {
        if (!track1Ref.current || !track2Ref.current) return;

        const createMarquee = (track: HTMLElement, duration: number, reverse: boolean) => {
            const totalWidth = track.scrollWidth / 2;

            return gsap.to(track, {
                x: reverse ? totalWidth : -totalWidth,
                duration: duration,
                ease: 'none',
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(x => {
                        const val = parseFloat(x);
                        return reverse
                            ? (val <= 0 ? val + totalWidth : val) % totalWidth
                            : (val <= -totalWidth ? val + totalWidth : val) % totalWidth;
                    })
                }
            });
        };

        const anim1 = createMarquee(track1Ref.current, 40, false);
        const anim2 = createMarquee(track2Ref.current, 45, true);

        return () => {
            anim1.kill();
            anim2.kill();
        };
    }, []);

    const renderPills = (items: string[]) => (
        <div className="simple-marquee-track">
            {[...items, ...items].map((item, i) => (
                <div key={i} className="simple-pill">
                    {item}
                </div>
            ))}
        </div>
    );

    return (
        <div className="simple-marquee-section">
            <div className="simple-marquee-container">
                <div className="simple-marquee-row" ref={track1Ref}>
                    {renderPills(featurePills)}
                </div>
                <div className="simple-marquee-row" ref={track2Ref} style={{ marginTop: '16px' }}>
                    {renderPills(secondRowPills)}
                </div>
            </div>
        </div>
    );
};

export default ScrollingFeatures;
