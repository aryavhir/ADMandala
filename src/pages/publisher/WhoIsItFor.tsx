import React, { useState, useEffect, useCallback } from 'react';
import { Users, Globe, Shield } from 'lucide-react';
import './WhoIsItFor.css';
import p4 from '../../assets/pub1.png';
import p5 from '../../assets/pub2.png';
import p6 from '../../assets/pub3.png';

interface CategoryData {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    bgColor: string;
}

const categories: CategoryData[] = [
    {
        id: 0,
        title: "Independent Publishers",
        description: "Seeking quality-focused demand with transparent reporting, reliable payouts, and access to premium advertisers. Connect your inventory and start monetizing within minutes.",
        image: p4,
        icon: <Users size={22} />,
        bgColor: "rgb(230, 230, 250)" // Lavender
    },
    {
        id: 1,
        title: "Media Networks",
        description: "Managing multiple properties and seeking centralized quality enforcement. Get consistent traffic filtering, unified reporting, and scalable monetization infrastructure.",
        image: p5,
        icon: <Globe size={22} />,
        bgColor: "rgb(250, 240, 230)" // Peach
    },
    {
        id: 2,
        title: "SSPs & Supply Partners",
        description: "Who value stability, clear demand relationships, and future-proof infrastructure. Access quality-focused advertisers today with a clear roadmap toward decentralized verification.",
        image: p6,
        icon: <Shield size={22} />,
        bgColor: "rgb(230, 245, 255)" // Sky
    }
];

const AUTO_SWITCH_INTERVAL = 10000; // 10 seconds

const WhoIsItFor: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [progress, setProgress] = useState(0);

    const nextTab = useCallback(() => {
        setActiveTab((prev) => (prev + 1) % categories.length);
        setProgress(0);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextTab();
                    return 0;
                }
                return prev + (100 / (AUTO_SWITCH_INTERVAL / 100));
            });
        }, 100);

        return () => clearInterval(interval);
    }, [nextTab]);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        setProgress(0);
    };

    return (
        <section id="target-audience" className="pub-who-tabs-section">
            <div className="who-tabs-header animate-on-scroll">
                <div className="who-tabs-badge">Audience</div>
                <h2>Who This Is For</h2>
                <p className="who-header-subtitle">Built for supply-side partners who prioritize quality and transparency.</p>
            </div>

            <div className="who-tabs-container">
                <div className="who-tabs-list animate-on-scroll">
                    {categories.map((cat, index) => (
                        <div
                            key={cat.id}
                            className={`who-tab-item ${activeTab === index ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {activeTab === index && (
                                <div className="who-tab-progress-container">
                                    <div
                                        className="who-tab-progress-bar"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            )}
                            <div className="who-tab-content">
                                <div className="who-tab-title-wrap">
                                    <div className="who-tab-icon">{cat.icon}</div>
                                    <h3 className="who-tab-title">
                                        {cat.title}
                                    </h3>
                                </div>
                                <div className="who-tab-desc">
                                    {cat.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="who-tabs-visual animate-on-scroll"
                    style={{ backgroundColor: categories[activeTab].bgColor }}
                >
                    <div className="who-visual-inner">
                        <div className="who-visual-image-wrapper">
                            {categories.map((cat, index) => (
                                <img
                                    key={cat.id}
                                    src={cat.image}
                                    alt={cat.title}
                                    className={`who-tab-image ${activeTab === index ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoIsItFor;
