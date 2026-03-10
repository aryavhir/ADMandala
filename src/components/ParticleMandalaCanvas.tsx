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
            const arrowStart = containerRef.current!.querySelector('.arrow-start') as SVGElement;
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
            gsap.set(arrowStart, { opacity: 0, scale: 0, transformOrigin: '50% 50%' });
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

            // Stage 3: Arrow enters from bottom-left
            tl.to(arrowStart, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'back.out(2)',
            }, '-=0.2');

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
        'M 85 290',       // start: bottom-left outside circle
        'Q 95 275 105 250', // curve into circle
        'L 130 165',      // up to first peak
        'Q 135 150 140 165', // smooth peak
        'L 170 310',      // down to valley
        'Q 175 330 180 310', // smooth valley
        'L 210 120',      // up to second peak  
        'Q 215 105 220 120', // smooth peak
        'L 250 280',      // down to second valley
        'Q 255 295 260 280', // smooth valley
        'L 290 155',      // up toward exit
        'Q 300 130 315 110', // curve out of circle top-right
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

                    {/* Arrow start (bottom-left, pointing into the waveform entry) */}
                    <g className="arrow-start">
                        <line x1="78" y1="298" x2="88" y2="286" stroke="white" strokeWidth="4" strokeLinecap="round" />
                        <polyline
                            points="75,288 78,298 89,296"
                            fill="none"
                            stroke="white"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>

                    {/* Waveform path — THE signature line */}
                    <path
                        className="waveform-path"
                        d={waveformD}
                        fill="none"
                        stroke="white"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Arrow end (top-right, pointing out from exit) */}
                    <g className="arrow-end">
                        <line x1="310" y1="115" x2="320" y2="105" stroke="white" strokeWidth="4" strokeLinecap="round" />
                        <polyline
                            points="312,103 320,105 318,114"
                            fill="none"
                            stroke="white"
                            strokeWidth="3.5"
                            strokeLinecap="round"
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
