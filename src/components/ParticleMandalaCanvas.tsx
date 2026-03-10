import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/*  ═══════════════════════════════════════════════════════════
    LOGO CONSTRUCTION ANIMATION
    ─────────────────────────────────────────────────────────
    Sequence:
    1. A small teal dot appears at center
    2. Dot expands/zooms-out into the full teal circle
    3. Arrow tip enters from bottom-left
    4. Waveform line draws across the circle (the "M" zigzag)
    5. Arrow exits at top-right
    6. Final frame = the complete AdMandala logo
    ═══════════════════════════════════════════════════════════ */

const LogoConstructionAnimation: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const waveformPath = containerRef.current!.querySelector('.waveform-path') as SVGPathElement;
            const arrowEnd = containerRef.current!.querySelector('.arrow-end') as SVGElement;

            // Measure waveform path length for draw animation
            let pathLen = 0;
            if (waveformPath) {
                pathLen = waveformPath.getTotalLength();
                gsap.set(waveformPath, {
                    strokeDasharray: pathLen,
                    strokeDashoffset: pathLen,
                });
            }

            // Initial states
            gsap.set('.logo-circle', { scale: 0, transformOrigin: '50% 50%' });
            gsap.set('.circle-shadow', { scale: 0, opacity: 0, transformOrigin: '50% 50%' });
            gsap.set(waveformPath, { opacity: 0 });
            gsap.set(arrowEnd, { opacity: 0, scale: 0, transformOrigin: '50% 50%' });
            gsap.set('.construction-label', { opacity: 0, y: 20 });
            gsap.set('.dot-origin', { scale: 1, opacity: 1 });

            // ── Master timeline ──
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            });

            // Stage 1: Origin dot pulses briefly
            tl.to('.dot-origin', {
                scale: 1.5,
                duration: 0.3,
                ease: 'power2.out',
            })
                .to('.dot-origin', {
                    scale: 0,
                    opacity: 0,
                    duration: 0.4,
                    ease: 'power2.in',
                });

            // Stage 2: Teal circle expands from center
            tl.to('.circle-shadow', {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
            }, '-=0.2')
                .to('.logo-circle', {
                    scale: 1,
                    duration: 1,
                    ease: 'elastic.out(1, 0.8)',
                }, '-=0.7');

            // Stage 4: Waveform draws across
            tl.to(waveformPath, {
                opacity: 1,
                duration: 0.1,
            }, '-=0.1')
                .to(waveformPath, {
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: 'power2.inOut',
                });

            // Stage 5: Arrow appears at the end
            tl.to(arrowEnd, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'back.out(2)',
            }, '-=0.3');

            // Stage 6: Label fades in
            tl.to('.construction-label', {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
            }, '-=0.2');

            // ── Continuous subtle animations after build ──
            // Gentle float
            gsap.to('.logo-construction-group', {
                y: -6,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 4,
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // ─── The waveform path that matches the logo's zigzag "M" shape ───
    // Coordinates are relative to a 400×400 viewBox, circle centered at 200,200 r=130
    // The waveform enters from bottom-left, goes up, zigzags, exits top-right
    const waveformD = [
        'M 70 320',         // Start bottom-left
        'C 80 300, 90 220, 110 240',  // First curve up
        'S 130 350, 150 280',         // Down to deep valley
        'C 170 180, 190 60, 210 120', // HIGH PEAK (The signature "M" peak)
        'S 240 330, 260 250',         // Down to medium valley
        'C 280 150, 310 130, 340 100'  // Final climb to arrow tip
    ].join(' ');

    return (
        <div className="logo-reveal-container" ref={containerRef}>
            <div className="logo-construction-group">
                <svg
                    viewBox="0 0 400 440"
                    className="logo-reveal-svg"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Shadow under circle */}
                    <ellipse
                        className="circle-shadow"
                        cx="200" cy="210"
                        rx="120" ry="12"
                        fill="rgba(15, 74, 74, 0.08)"
                        style={{ filter: 'blur(8px)' }}
                    />

                    {/* Origin dot — the starting point */}
                    <circle className="dot-origin" cx="200" cy="200" r="6" fill="#0f4a4a" />

                    {/* Main teal circle */}
                    <circle
                        className="logo-circle"
                        cx="200" cy="200" r="130"
                        fill="#2a7b7b"
                    />

                    {/* Subtle inner gradient overlay for depth */}
                    <defs>
                        <radialGradient id="circleDepth" cx="40%" cy="35%" r="60%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                            <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
                        </radialGradient>
                    </defs>
                    <circle cx="200" cy="200" r="130" fill="url(#circleDepth)" className="logo-circle" />

                    {/* Waveform path — THE signature line */}
                    <path
                        className="waveform-path"
                        d={waveformD}
                        fill="none"
                        stroke="white"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Arrow end (top-right, pointing out from exit) */}
                    <g className="arrow-end">
                        <path
                            d="M 325 115 L 345 95 L 335 125 Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinejoin="round"
                        />
                    </g>

                    {/* Label underneath */}
                    <text
                        className="construction-label"
                        x="200" y="400"
                        textAnchor="middle"
                        fill="#0f4a4a"
                        fontSize="16"
                        fontWeight="600"
                        fontFamily="'Inter', 'Poppins', sans-serif"
                        letterSpacing="-0.02em"
                    >
                        AdMandala
                    </text>
                    <text
                        className="construction-label"
                        x="200" y="422"
                        textAnchor="middle"
                        fill="#6b7280"
                        fontSize="11"
                        fontWeight="400"
                        fontFamily="'Inter', 'Poppins', sans-serif"
                        letterSpacing="0.08em"
                    >
                        THE AD EXCHANGE
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default LogoConstructionAnimation;
