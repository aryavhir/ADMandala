import React, { useState, useEffect, useCallback } from 'react';
import { Users, BarChart, Shield, Layout } from 'lucide-react';
import './WhoIsItFor.css';
import l1 from '../../assets/l1.png';
import l2 from '../../assets/l2.png';
import l3 from '../../assets/l3.png';
import l4 from '../../assets/l4.png';

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
        title: "DSPs & Trading Desks",
        description: "Seeking quality-focused supply with transparent bidding, low fraud rates, and access to premium publisher inventory. Connect your existing seats and start buying within minutes.",
        image: l1,
        icon: <Layout size={22} />,
        bgColor: "rgb(230, 230, 250)" // Lavender
    },
    {
        id: 1,
        title: "Performance Advertisers",
        description: "Tired of opaque delivery and wasted spend. Get clear reporting, verifiable metrics, and a path toward independently validated ad delivery.",
        image: l2,
        icon: <BarChart size={22} />,
        bgColor: "rgb(250, 240, 230)" // Peach
    },
    {
        id: 2,
        title: "Brand Advertisers",
        description: "Prioritizing long-term trust, brand safety, and accurate measurement. Ensure your campaigns run in appropriate environments with suitability scoring.",
        image: l3,
        icon: <Shield size={22} />,
        bgColor: "rgb(230, 245, 255)" // Sky
    },
    {
        id: 3,
        title: "Media Buyers & Agencies",
        description: "Value stability, clear reporting, and a future-proof supply path. Leverage production-grade infrastructure today with a clear roadmap toward decentralized verification.",
        image: l4,
        icon: <Users size={22} />,
        bgColor: "rgb(230, 250, 240)" // Mint
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
        <section id="target-audience" className="dsp-who-tabs-section">
            <div className="who-tabs-header animate-on-scroll">
                <div className="who-tabs-badge">Audience</div>
                <h2>Who This Is For</h2>
                <p className="who-header-subtitle">Built for demand partners who prioritize quality, transparency, and measurable outcomes.</p>
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
