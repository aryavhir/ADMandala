import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImg from '../assets/logow.jpg';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [hidden, setHidden] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const lastScrollY = useRef(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY === 0) {
                setHidden(false);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling down → hide
                setHidden(true);
                setMobileOpen(false);
                setActiveDropdown(null);
            } else if (currentScrollY < lastScrollY.current) {
                // Scrolling up → show
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const handleLinkClick = (id: string) => {
        setMobileOpen(false);
        setActiveDropdown(null);
        // If we are already on the page, scroll to section
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`site-navbar ${hidden ? 'site-navbar--hidden' : ''}`}>
            <div className="site-navbar-background"></div>
            <div className="site-navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logoImg} alt="AdMandala Logo" style={{ height: '32px', marginRight: '10px' }} />
                    <span className="navbar-logo-text">Ad<span className="text-mandala">Mandala</span></span>
                </Link>

                {/* Nav Links - Desktop */}
                <div className="navbar-links-right">
                    <Link to="/" className="navbar-link">Home</Link>

                    {/* Publishers Dropdown */}
                    <div
                        className={`navbar-dropdown ${activeDropdown === 'publishers' ? 'is-active' : ''}`}
                        onMouseEnter={() => setActiveDropdown('publishers')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <Link to="/publishers" className="navbar-link navbar-dropdown-toggle">
                            Publishers <ChevronDown size={14} className="dropdown-icon" />
                        </Link>
                        <div className="navbar-dropdown-menu megamenu">
                            <div className="megamenu-grid">
                                <div className="megamenu-column">
                                    <h4 className="megamenu-title">Platform Core</h4>
                                    <Link to="/publishers#why-publishers" className="dropdown-item" onClick={() => handleLinkClick('why-publishers')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Why Choose Us</span>
                                            <span className="dropdown-item-desc">Benefits of joining the AdMandala network.</span>
                                        </div>
                                    </Link>
                                    <Link to="/publishers#target-audience" className="dropdown-item" onClick={() => handleLinkClick('target-audience')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Who This Is For</span>
                                            <span className="dropdown-item-desc">Ideal for direct publishers and networks.</span>
                                        </div>
                                    </Link>
                                    <Link to="/publishers#integration" className="dropdown-item" onClick={() => handleLinkClick('integration')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Integration</span>
                                            <span className="dropdown-item-desc">Set up and sync in minutes.</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="megamenu-column">
                                    <h4 className="megamenu-title">Growth & Quality</h4>
                                    <Link to="/publishers#quality" className="dropdown-item" onClick={() => handleLinkClick('quality')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Quality Control</span>
                                            <span className="dropdown-item-desc">Advanced fraud detection and protection.</span>
                                        </div>
                                    </Link>
                                    <Link to="/publishers#faqs" className="dropdown-item" onClick={() => handleLinkClick('faqs')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Support & FAQ</span>
                                            <span className="dropdown-item-desc">Common questions answered.</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advertisers Dropdown */}
                    <div
                        className={`navbar-dropdown ${activeDropdown === 'advertisers' ? 'is-active' : ''}`}
                        onMouseEnter={() => setActiveDropdown('advertisers')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <Link to="/advertisers" className="navbar-link navbar-dropdown-toggle">
                            Advertisers <ChevronDown size={14} className="dropdown-icon" />
                        </Link>
                        <div className="navbar-dropdown-menu megamenu">
                            <div className="megamenu-grid">
                                <div className="megamenu-column">
                                    <h4 className="megamenu-title">Buying Power</h4>
                                    <Link to="/advertisers#why-advertisers" className="dropdown-item" onClick={() => handleLinkClick('why-advertisers')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Why Choose Us</span>
                                            <span className="dropdown-item-desc">Maximize your campaign reach and ROI.</span>
                                        </div>
                                    </Link>
                                    <Link to="/advertisers#familiar-ui" className="dropdown-item" onClick={() => handleLinkClick('familiar-ui')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Familiar Buying Experience</span>
                                            <span className="dropdown-item-desc">Standard programmatic workflows and UI.</span>
                                        </div>
                                    </Link>
                                    <Link to="/advertisers#transparency" className="dropdown-item" onClick={() => handleLinkClick('transparency')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Progressive Transparency</span>
                                            <span className="dropdown-item-desc">Verifiable ad delivery and performance.</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="megamenu-column">
                                    <h4 className="megamenu-title">Ecosystem</h4>
                                    <Link to="/advertisers#quality-control" className="dropdown-item" onClick={() => handleLinkClick('quality-control')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Supply Quality</span>
                                            <span className="dropdown-item-desc">Access high-quality and verified supply.</span>
                                        </div>
                                    </Link>
                                    <Link to="/advertisers#target-audience" className="dropdown-item" onClick={() => handleLinkClick('target-audience')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Who It's For</span>
                                            <span className="dropdown-item-desc">Brands, DSPs, and Ad Networks.</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Roadmap (Decentralization) Dropdown */}
                    <div
                        className={`navbar-dropdown ${activeDropdown === 'roadmap' ? 'is-active' : ''}`}
                        onMouseEnter={() => setActiveDropdown('roadmap')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <Link to="/decentralization" className="navbar-link navbar-dropdown-toggle">
                            Roadmap <ChevronDown size={14} className="dropdown-icon" />
                        </Link>
                        <div className="navbar-dropdown-menu megamenu">
                            <div className="megamenu-grid">
                                <div className="megamenu-column">
                                    <h4 className="megamenu-title">Vision & Strategy</h4>
                                    <Link to="/decentralization#philosophy" className="dropdown-item" onClick={() => handleLinkClick('philosophy')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Mandala Philosophy</span>
                                            <span className="dropdown-item-desc">Why decentralization matters.</span>
                                        </div>
                                    </Link>
                                    <Link to="/decentralization#approach" className="dropdown-item" onClick={() => handleLinkClick('approach')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Mandala Approach</span>
                                            <span className="dropdown-item-desc">Our balanced, structured system.</span>
                                        </div>
                                    </Link>
                                    <Link to="/decentralization#evolution" className="dropdown-item" onClick={() => handleLinkClick('evolution')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Evolution of Network</span>
                                            <span className="dropdown-item-desc">Three planned phases of growth.</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="megamenu-column">
                                    <h4 className="megamenu-title">Technical Path</h4>
                                    <Link to="/decentralization#architecture" className="dropdown-item" onClick={() => handleLinkClick('architecture')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Architecture</span>
                                            <span className="dropdown-item-desc">Immutable records of ad events.</span>
                                        </div>
                                    </Link>
                                    <Link to="/decentralization#ecosystem" className="dropdown-item" onClick={() => handleLinkClick('ecosystem')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">What This Means for You</span>
                                            <span className="dropdown-item-desc">Participation Across the Map.</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/early-adopters" className="navbar-link" style={{ position: 'relative' }}>
                        Early Access
                        <span className="navbar-new-tag">New</span>
                    </Link>
                    <Link to="/referral-program" className="navbar-link">Referral</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="navbar-mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar-mobile-overlay ${mobileOpen ? 'is-open' : ''}`} onClick={() => setMobileOpen(false)}></div>
            <div className={`navbar-mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
                <div className="mobile-menu-header">
                    <Link to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
                        <img src={logoImg} alt="AdMandala Logo" style={{ height: '32px', marginRight: '10px' }} />
                        <span className="navbar-logo-text">Ad<span className="text-mandala">Mandala</span></span>
                    </Link>
                    <button className="mobile-close" onClick={() => setMobileOpen(false)}><X size={24} /></button>
                </div>
                <div className="mobile-menu-links">
                    <Link to="/" className="mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>

                    <div className="mobile-dropdown-section">
                        <div className="mobile-dropdown-header">
                            <Link to="/publishers" className="mobile-link !p-0 border-none" onClick={() => setMobileOpen(false)}>Publishers</Link>
                            <button className="mobile-dropdown-arrow" onClick={() => toggleDropdown('publishers')}>
                                <ChevronDown size={18} className={activeDropdown === 'publishers' ? 'icon-rotate' : ''} />
                            </button>
                        </div>
                        {activeDropdown === 'publishers' && (
                            <div className="mobile-dropdown-items">
                                <Link to="/publishers#why-publishers" className="mobile-submenu-link" onClick={() => handleLinkClick('why-publishers')}>Why Choose Us</Link>
                                <Link to="/publishers#target-audience" className="mobile-submenu-link" onClick={() => handleLinkClick('target-audience')}>Who This Is For</Link>
                                <Link to="/publishers#integration" className="mobile-submenu-link" onClick={() => handleLinkClick('integration')}>Integration</Link>
                                <Link to="/publishers#quality" className="mobile-submenu-link" onClick={() => handleLinkClick('quality')}>Quality Control</Link>
                                <Link to="/publishers#faqs" className="mobile-submenu-link" onClick={() => handleLinkClick('faqs')}>FAQ</Link>
                            </div>
                        )}
                    </div>

                    <div className="mobile-dropdown-section">
                        <div className="mobile-dropdown-header">
                            <Link to="/advertisers" className="mobile-link !p-0 border-none" onClick={() => setMobileOpen(false)}>Advertisers</Link>
                            <button className="mobile-dropdown-arrow" onClick={() => toggleDropdown('advertisers')}>
                                <ChevronDown size={18} className={activeDropdown === 'advertisers' ? 'icon-rotate' : ''} />
                            </button>
                        </div>
                        {activeDropdown === 'advertisers' && (
                            <div className="mobile-dropdown-items">
                                <Link to="/advertisers#why-advertisers" className="mobile-submenu-link" onClick={() => handleLinkClick('why-advertisers')}>Why Choose Us</Link>
                                <Link to="/advertisers#familiar-ui" className="mobile-submenu-link" onClick={() => handleLinkClick('familiar-ui')}>Familiar Buying Experience</Link>
                                <Link to="/advertisers#transparency" className="mobile-submenu-link" onClick={() => handleLinkClick('transparency')}>Progressive Transparency</Link>
                                <Link to="/advertisers#quality-control" className="mobile-submenu-link" onClick={() => handleLinkClick('quality-control')}>Supply Quality</Link>
                                <Link to="/advertisers#target-audience" className="mobile-submenu-link" onClick={() => handleLinkClick('target-audience')}>Who It's For</Link>
                            </div>
                        )}
                    </div>

                    <div className="mobile-dropdown-section">
                        <div className="mobile-dropdown-header">
                            <Link to="/decentralization" className="mobile-link !p-0 border-none" onClick={() => setMobileOpen(false)}>Roadmap</Link>
                            <button className="mobile-dropdown-arrow" onClick={() => toggleDropdown('roadmap')}>
                                <ChevronDown size={18} className={activeDropdown === 'roadmap' ? 'icon-rotate' : ''} />
                            </button>
                        </div>
                        {activeDropdown === 'roadmap' && (
                            <div className="mobile-dropdown-items">
                                <Link to="/decentralization#philosophy" className="mobile-submenu-link" onClick={() => handleLinkClick('philosophy')}>Mandala Philosophy</Link>
                                <Link to="/decentralization#approach" className="mobile-submenu-link" onClick={() => handleLinkClick('approach')}>Mandala Approach</Link>
                                <Link to="/decentralization#evolution" className="mobile-submenu-link" onClick={() => handleLinkClick('evolution')}>Evolution of Network</Link>
                                <Link to="/decentralization#architecture" className="mobile-submenu-link" onClick={() => handleLinkClick('architecture')}>Architecture</Link>
                                <Link to="/decentralization#ecosystem" className="mobile-submenu-link" onClick={() => handleLinkClick('ecosystem')}>What This Means for You</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/early-adopters" className="mobile-link" onClick={() => setMobileOpen(false)} style={{ position: 'relative' }}>
                        Early Access
                        <span className="navbar-new-tag" style={{ right: '0', top: '16px' }}>New</span>
                    </Link>
                    <Link to="/referral-program" className="mobile-link" onClick={() => setMobileOpen(false)}>Referral</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
