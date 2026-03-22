import { CheckCircle2, Zap, Eye, Network } from 'lucide-react';
import Expandable from '../../components/animata/carousel/expandable';

const RoadmapSection = () => {
    const phases = [
        {
            color: "#0a0b10", // Glossy Black/Slate
            title: "Centralized Exchange",
            subtitle: "Programmatic Ad Exchange",
            badge: { text: "Live", className: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50" },
            icon: <Zap size={24} />,
            progress: 100,
            description: (
                <div className="space-y-4 text-white/80">
                    <p>AdMandala operates today as a centralized programmatic exchange to ensure reliability and real-world validation.</p>
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Seamless SSP & DSP integration</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Traffic quality enforcement</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Reliable performance</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Real-world revenue</li>
                    </ul>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold italic text-white/40">
                        <Zap size={12} />
                        This phase grounds the protocol in operational reality.
                    </div>
                </div>
            )
        },
        {
            color: "#091428", // Glossy Deep Blue
            title: "Decentralized Verification",
            subtitle: "Independent Node Validation",
            badge: { text: "In Progress", className: "bg-sky-500/20 text-sky-400 border border-sky-500/50" },
            icon: <Eye size={24} />,
            progress: 35,
            description: (
                <div className="space-y-4 text-white/80">
                    <p>Independent verification is introduced — shifting trust away from a single operator to a network of nodes.</p>
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-400" /> Event validation by nodes</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-400" /> Distributed fraud detection</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-400" /> Verifiable performance metrics</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-400" /> Multi-node consensus</li>
                    </ul>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold italic text-white/40">
                        <Eye size={12} />
                        Trust begins shifting from platform to protocol.
                    </div>
                </div>
            )
        },
        {
            color: "#160d2b", // Glossy Deep Purple/Indigo
            title: "Settlement & Governance",
            subtitle: "Trust-Minimized Protocol",
            badge: { text: "Upcoming", className: "bg-indigo-500/20 text-indigo-400 border border-indigo-500/50" },
            icon: <Network size={24} />,
            progress: 0,
            description: (
                <div className="space-y-4">
                    <p>AdMandala becomes a trust-minimized protocol — resilient, community-governed, and immutable.</p>
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400" /> Deterministic settlement</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400" /> Immutable event records</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400" /> Distributed governance</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400" /> Infinite resilience</li>
                    </ul>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold italic text-white/50">
                        <Network size={12} />
                        If AdMandala disappears, the protocol continues.
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="dec-section dec-evolution" id="evolution">
            <div className="content-wrapper">
                <div className="dec-section-hdr">
                    <span className="prem-badge">Roadmap</span>
                    <h2 className="section-title">The Evolution of the Network</h2>
                    <p className="dec-sub-refined">Three carefully planned phases — each introduced only when it strengthens the whole.</p>
                </div>

                <div className="mt-12">
                     <Expandable list={phases} autoPlay={true} />
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
