import React, { useState, useEffect, useCallback } from 'react';
import '../../styles/PremiumLayouts.css';

interface CategoryData {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    bgColor: string;
}

interface PremiumWhoIsItForProps {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    categories: CategoryData[];
    autoSwitchInterval?: number;
}

const PremiumWhoIsItFor: React.FC<PremiumWhoIsItForProps> = ({
    id,
    badge,
    title,
    subtitle,
    categories,
    autoSwitchInterval = 10000
}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [progress, setProgress] = useState(0);

    const nextTab = useCallback(() => {
        setActiveTab((prev) => (prev + 1) % categories.length);
        setProgress(0);
    }, [categories.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextTab();
                    return 0;
                }
                return prev + (100 / (autoSwitchInterval / 100));
            });
        }, 100);

        return () => clearInterval(interval);
    }, [nextTab, autoSwitchInterval]);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        setProgress(0);
    };

    return (
        <section id={id} className="prem-who-tabs-section">
            <div className="prem-tabs-header animate-on-scroll">
                <div className="prem-tabs-badge">{badge}</div>
                <h2>{title}</h2>
                <p className="prem-tabs-subtitle">{subtitle}</p>
            </div>

            <div className="prem-tabs-container">
                <div className="prem-tabs-list animate-on-scroll">
                    {categories.map((cat, index) => (
                        <div
                            key={cat.id}
                            className={`prem-tab-item ${activeTab === index ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {activeTab === index && (
                                <div className="prem-tab-progress-wrap">
                                    <div
                                        className="prem-tab-progress-bar"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            )}
                            <div className="prem-tab-content">
                                <div className="prem-tab-title-wrap">
                                    <div className="prem-tab-icon">{cat.icon}</div>
                                    <h3 className="prem-tab-title">
                                        {cat.title}
                                    </h3>
                                </div>
                                <div className="prem-tab-desc">
                                    {cat.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="prem-tabs-visual animate-on-scroll"
                    style={{ backgroundColor: categories[activeTab].bgColor }}
                >
                    <div className="prem-visual-inner">
                        <div className="prem-visual-image-wrapper">
                            {categories.map((cat, index) => (
                                <img
                                    key={cat.id}
                                    src={cat.image}
                                    alt={cat.title}
                                    className={`prem-tab-img ${activeTab === index ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumWhoIsItFor;
