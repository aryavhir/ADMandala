import React from 'react';
import { Network, Shield, Users } from 'lucide-react';
import PremiumWhoIsItFor from '../../components/premium/PremiumWhoIsItFor';
// Assets
import r1 from '../../assets/new/production.png';
import r2 from '../../assets/new/network.png';
import r4 from '../../assets/new/scaleing.png';

const RoadmapSection: React.FC = () => {
    const categories = [
        {
            id: 0,
            title: "Production Integration",
            description: "Integrate seamlessly with existing SSP and DSP workflows to ensure production-grade reliability.",
            image: r1,
            icon: <Network size={22} />,
            bgColor: "rgb(230, 230, 250)"
        },

        {
            id: 1,
            title: "Network Trust",
            description: "Build trust with publishers and buyers by delivering consistent, fraud-free results from day one.",
            image: r2,
            icon: <Users size={22} />,
            bgColor: "rgb(230, 245, 255)"
        },
        {
            id: 2,
            title: "Pragmatic Scaling",
            description: "Avoid premature complexity. Decentralization is introduced only where it improves trust without degrading performance.",
            image: r4,
            icon: <Shield size={22} />,
            bgColor: "rgb(240, 255, 240)"
        }
    ];

    return (
        <PremiumWhoIsItFor
            id="roadmap-vision"
            badge="Strategic Vision"
            title="Built for the Long Term"
            subtitle="Ad Mandala is not decentralizing for ideology — but for outcomes."
            categories={categories}
            footerText="Decentralization is introduced only where it improves trust without degrading performance."
        />
    );
};

export default RoadmapSection;

