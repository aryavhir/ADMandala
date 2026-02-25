import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const ScrollingFeatures: React.FC = () => {
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

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

    const CylinderMarquee = ({
        items,
        radius = 600,
        speed = 0.5,
        rowRef,
        reverse = false
    }: {
        items: string[],
        radius?: number,
        speed?: number,
        rowRef: React.RefObject<HTMLDivElement | null>,
        reverse?: boolean
    }) => {
        const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
        const rotationRef = useRef(0);
        const velocityRef = useRef(speed * (reverse ? -1 : 1));
        const lastMouseXRef = useRef(0);

        useEffect(() => {
            if (!rowRef.current) return;

            const totalItems = items.length;
            const step = (Math.PI * 2) / totalItems;

            const update = () => {
                velocityRef.current *= 0.98;
                const baseSpeed = speed * (reverse ? -1 : 1);
                if (Math.abs(velocityRef.current) < Math.abs(baseSpeed)) {
                    velocityRef.current = gsap.utils.interpolate(velocityRef.current, baseSpeed, 0.05);
                }

                rotationRef.current += velocityRef.current * 0.01;

                itemRefs.current.forEach((pill, i) => {
                    if (!pill) return;

                    const angle = rotationRef.current + (i * step);
                    const x = Math.sin(angle) * (radius * 1.2);
                    const z = Math.cos(angle) * radius;

                    const normalizedZ = (z + radius) / (radius * 2);
                    const scale = 0.6 + (normalizedZ * 0.5);
                    const opacity = 0.1 + (normalizedZ * 0.9);
                    const blur = (1 - normalizedZ) * 6;

                    gsap.set(pill, {
                        x: x,
                        z: z,
                        scale: scale,
                        opacity: opacity,
                        filter: `blur(${blur}px)`,
                        zIndex: Math.round(normalizedZ * 100),
                        rotationY: -Math.atan2(x, z + radius * 0.5) * (180 / Math.PI) * 0.2
                    });
                });
            };

            gsap.ticker.add(update);

            const handleMouseMove = (e: MouseEvent) => {
                const deltaX = e.clientX - lastMouseXRef.current;
                lastMouseXRef.current = e.clientX;
                velocityRef.current += deltaX * 0.02;
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                gsap.ticker.remove(update);
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }, [items, radius, speed, reverse, rowRef]);

        return (
            <div className="scrolling-features" ref={rowRef}>
                <div className="scrolling-features-row">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            ref={el => { itemRefs.current[i] = el; }}
                            className="feature-pill"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="scrolling-features-container">
            <CylinderMarquee
                items={featurePills}
                rowRef={row1Ref}
                speed={0.4}
                radius={500}
            />
            <div style={{ height: '20px' }} />
            <CylinderMarquee
                items={secondRowPills}
                rowRef={row2Ref}
                speed={0.4}
                radius={500}
                reverse={true}
            />
        </div>
    );
};

export default ScrollingFeatures;
