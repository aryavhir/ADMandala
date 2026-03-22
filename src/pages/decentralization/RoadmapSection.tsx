import { CheckCircle2, Zap, Eye, Network } from 'lucide-react';
import Expandable from '../../components/animata/carousel/expandable';

const RoadmapSection = () => {
    const phases = [
        {
            color: "#0a0b10", // Glossy Black/Slate
            title: "Centralized Exchange",
            subtitle: "Programmatic Ad Exchange",
            badge: { text: "Live", className: "bg-white/10 text-white border border-white/30" },
            icon: <Zap size={24} />,
            progress: 100,
            description: (
                <div className="space-y-6 text-white/80">
                    <p>AdMandala operates today as a centralized programmatic exchange to ensure reliability and real-world validation.</p>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" /> <span>Seamless SSP & DSP integration</span></li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" /> <span>Traffic quality enforcement</span></li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" /> <span>Reliable performance</span></li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" /> <span>Real-world revenue</span></li>
                    </ul>
                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold italic text-white/40">
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
            badge: { text: "In Progress", className: "bg-white/10 text-white border border-white/30" },
            icon: <Eye size={24} />,
            progress: 35,
            description: (
                <div className="space-y-6 text-white/80">
                    <p>Independent verification is introduced — shifting trust away from a single operator to a network of nodes.</p>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-sky-400 flex-shrink-0 mt-0.5" /> <span>Event validation by nodes</span></li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-sky-400 flex-shrink-0 mt-0.5" /> <span>Distributed fraud detection</span></li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-sky-400 flex-shrink-0 mt-0.5" /> <span>Verifiable performance metrics</span></li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-sky-400 flex-shrink-0 mt-0.5" /> <span>Multi-node consensus</span></li>
                    </ul>
                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold italic text-white/40">
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
            badge: { text: "Upcoming", className: "bg-white/10 text-white border border-white/30" },
            icon: <Network size={24} />,
            progress: 0,
            description: (
                <div className="space-y-6">
                    <p>AdMandala becomes a trust-minimized protocol — resilient, community-governed, and immutable.</p>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-indigo-400 flex-shrink-0 mt-0.5" /> <span>Deterministic settlement</span></li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-indigo-400 flex-shrink-0 mt-0.5" /> <span>Immutable event records</span></li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-indigo-400 flex-shrink-0 mt-0.5" /> <span>Distributed governance</span></li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-indigo-400 flex-shrink-0 mt-0.5" /> <span>Infinite resilience</span></li>
                    </ul>
                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold italic text-white/50">
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
