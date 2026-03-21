import React from 'react';
import { Network, Zap, Shield } from 'lucide-react';
import PremiumWhoIsItFor from '../../components/premium/PremiumWhoIsItFor';

// Assets
import p1 from '../../assets/pub1.png';
import p2 from '../../assets/pub2.png';
import p3 from '../../assets/pub3.png';

const RoadmapSection: React.FC = () => {
    const categories = [
        {
            id: 0,
            title: "Seamless Integration",
            description: "Integrate seamlessly with existing SSP and DSP workflows, ensuring minimal technical overhead and absolute reliability for production-grade traffic.",
            image: p1,
            icon: <Network size={22} />,
            bgColor: "rgb(230, 230, 250)"
        },
        {
            id: 1,
            title: "Reliable Performance",
            description: "Maintain uptime and UX standards while preparing for decentralized transparency. We decentralize for outcomes, not ideology.",
            image: p2,
            icon: <Zap size={22} />,
            bgColor: "rgb(250, 240, 230)"
        },
        {
            id: 2,
            title: "Strategic Evolution",
            description: "A deliberate path to decentralization where it improves trust — avoid premature complexity while building long-term value.",
            image: p3,
            icon: <Shield size={22} />,
            bgColor: "rgb(230, 245, 255)"
        }
    ];

    return (
        <PremiumWhoIsItFor
            id="roadmap-vision"
            badge="Strategic Vision"
            title="Built for the Long Term"
            subtitle="A deliberate path to decentralization, evolving from exchange to protocol."
            categories={categories}
        />
    );
};

export default RoadmapSection;

