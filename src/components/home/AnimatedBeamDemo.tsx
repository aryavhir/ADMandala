import React, { forwardRef, useRef } from "react";
import { cn } from "../../lib/utils";
import { AnimatedBeam } from "../ui/AnimatedBeam";
import { Target, Building2, Globe, MonitorPlay, Layout, Users } from "lucide-react";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const dsp1Ref = useRef<HTMLDivElement>(null);
    const dsp2Ref = useRef<HTMLDivElement>(null);
    const dsp3Ref = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const pub1Ref = useRef<HTMLDivElement>(null);
    const pub2Ref = useRef<HTMLDivElement>(null);
    const pub3Ref = useRef<HTMLDivElement>(null);

    const gradientColors = [
        "#FF66CC",
        "#FFDC18",
        "#41FFD7",
        "#38bdf8",
        "#8338EC",
        "#F72585",
        "#3A86FF",
        "#FF66CC",
    ];

    return (
        <div
            className="relative flex h-full w-full items-center justify-center overflow-hidden p-6"
            ref={containerRef}
        >
            <div className="flex size-full max-w-2xl flex-row items-stretch justify-between gap-10">
                {/* Left Column: DSPs */}
                <div className="flex flex-col justify-center gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <Circle ref={dsp1Ref} className="border-gray-200">
                            <Target className="text-gray-600" />
                        </Circle>
                        <span className="text-[10px] font-medium text-gray-500">DSP A</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Circle ref={dsp2Ref} className="border-gray-200">
                            <Building2 className="text-gray-600" />
                        </Circle>
                        <span className="text-[10px] font-medium text-gray-500">DSP B</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Circle ref={dsp3Ref} className="border-gray-200">
                            <Globe className="text-gray-600" />
                        </Circle>
                        <span className="text-[10px] font-medium text-gray-500">Global DSP</span>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div ref={centerRef} className="z-10 flex size-24 items-center justify-center rounded-full border-2 border-gray-100 bg-white p-2 shadow-lg">
                        <span className="text-sm font-bold tracking-tight text-[#0f4a4a]">
                            AdMandala
                        </span>
                    </div>
                </div>

                {/* Right Column: Publishers */}
                <div className="flex flex-col justify-center gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <Circle ref={pub1Ref} className="border-gray-200">
                            <MonitorPlay className="text-gray-600" />
                        </Circle>
                        <span className="text-[10px] font-medium text-gray-500">Site A</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Circle ref={pub2Ref} className="border-gray-200">
                            <Layout className="text-gray-600" />
                        </Circle>
                        <span className="text-[10px] font-medium text-gray-500">App B</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Circle ref={pub3Ref} className="border-gray-200">
                            <Users className="text-gray-600" />
                        </Circle>
                        <span className="text-[10px] font-medium text-gray-500">Platform C</span>
                    </div>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={dsp1Ref}
                toRef={centerRef}
                curvature={-50}
                endYOffset={-10}
                pathColor="#e5e7eb"
                gradientColors={gradientColors}
                duration={7}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={dsp2Ref}
                toRef={centerRef}
                pathColor="#e5e7eb"
                gradientColors={gradientColors}
                duration={6}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={dsp3Ref}
                toRef={centerRef}
                curvature={50}
                endYOffset={10}
                pathColor="#e5e7eb"
                gradientColors={gradientColors}
                duration={8}
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={pub1Ref}
                curvature={-50}
                endYOffset={-10}
                pathColor="#e5e7eb"
                gradientColors={gradientColors}
                duration={7}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={pub2Ref}
                pathColor="#e5e7eb"
                gradientColors={gradientColors}
                duration={6}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={pub3Ref}
                curvature={50}
                endYOffset={10}
                pathColor="#e5e7eb"
                gradientColors={gradientColors}
                duration={8}
            />
        </div>
    );
}
