import React, { useState, useEffect, useCallback } from 'react';
import { Users, FileText, Share2 } from 'lucide-react';
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
}

const categories: CategoryData[] = [
    {
        id: 0,
        title: "Categorize contacts",
        description: "Monitor your team's productivity by viewing completed tasks and active projects.",
        image: p4,
        icon: <Users size={22} />
    },
    {
        id: 1,
        title: "Organize meeting notes",
        description: "Use detailed task views, checklists, and due dates to stay on top of your projects.",
        image: p5,
        icon: <FileText size={22} />
    },
    {
        id: 2,
        title: "Collaborate in real time",
        description: "Assign tasks, share notes, and engage in real-time discussions with your team.",
        image: p6,
        icon: <Share2 size={22} />
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
        <section className="pub-who-tabs-section">
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

                <div className="who-tabs-visual animate-on-scroll">
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
