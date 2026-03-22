import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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
                    <span className="navbar-logo-text">Ad<span className="text-mandala">Mandala</span></span>
                </Link>

                {/* Nav Links - Desktop */}
                <div className="navbar-links-right">
                    <Link to="/" className="navbar-link">Home</Link>

                    {/* Publishers Dropdown */}
                    <div
                        className={`navbar-dropdown ${activeDropdown === 'publishers' ? 'is-active' : ''}`}
                        onMouseEnter={() => setActiveDropdown('publishers')}
                        onMouseLeave={() => setActiveDropdown('publishers')}
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
                                            <span className="dropdown-item-label">Why Publishers</span>
                                            <span className="dropdown-item-desc">Benefits of joining the AdMandala network.</span>
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
                                    <Link to="/publishers#target-audience" className="dropdown-item" onClick={() => handleLinkClick('target-audience')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">Audience</span>
                                            <span className="dropdown-item-desc">Connect with the right demand partners.</span>
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
                        onMouseLeave={() => setActiveDropdown('advertisers')}
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
                                            <span className="dropdown-item-label">Why Advertisers</span>
                                            <span className="dropdown-item-desc">Maximize your campaign reach and ROI.</span>
                                        </div>
                                    </Link>
                                    <Link to="/advertisers#familiar-ui" className="dropdown-item" onClick={() => handleLinkClick('familiar-ui')}>
                                        <div className="dropdown-item-content">
                                            <span className="dropdown-item-label">UI & Workflows</span>
                                            <span className="dropdown-item-desc">Powerful tools built for precision.</span>
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

                    <Link to="/decentralization" className="navbar-link">Roadmap</Link>
                    <Link to="/early-adopters" className="navbar-link">Early Access</Link>
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
                        <span className="navbar-logo-text">Ad<span className="text-mandala">Mandala</span></span>
                    </Link>
                    <button className="mobile-close" onClick={() => setMobileOpen(false)}><X size={24} /></button>
                </div>
                <div className="mobile-menu-links">
                    <Link to="/" className="mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>

                    <div className="mobile-dropdown-section">
                        <div className="mobile-dropdown-header" onClick={() => toggleDropdown('publishers')}>
                            Publishers <ChevronDown size={18} className={activeDropdown === 'publishers' ? 'icon-rotate' : ''} />
                        </div>
                        {activeDropdown === 'publishers' && (
                            <div className="mobile-dropdown-items">
                                <Link to="/publishers#why-publishers" className="mobile-submenu-link" onClick={() => handleLinkClick('why-publishers')}>Why Publishers</Link>
                                <Link to="/publishers#integration" className="mobile-submenu-link" onClick={() => handleLinkClick('integration')}>Integration</Link>
                                <Link to="/publishers#quality" className="mobile-submenu-link" onClick={() => handleLinkClick('quality')}>Quality Control</Link>
                                <Link to="/publishers#target-audience" className="mobile-submenu-link" onClick={() => handleLinkClick('target-audience')}>Audience</Link>
                                <Link to="/publishers#faqs" className="mobile-submenu-link" onClick={() => handleLinkClick('faqs')}>FAQ</Link>
                            </div>
                        )}
                    </div>

                    <div className="mobile-dropdown-section">
                        <div className="mobile-dropdown-header" onClick={() => toggleDropdown('advertisers')}>
                            Advertisers <ChevronDown size={18} className={activeDropdown === 'advertisers' ? 'icon-rotate' : ''} />
                        </div>
                        {activeDropdown === 'advertisers' && (
                            <div className="mobile-dropdown-items">
                                <Link to="/advertisers#why-advertisers" className="mobile-submenu-link" onClick={() => handleLinkClick('why-advertisers')}>Why Advertisers</Link>
                                <Link to="/advertisers#quality-control" className="mobile-submenu-link" onClick={() => handleLinkClick('quality-control')}>Supply Quality</Link>
                                <Link to="/advertisers#familiar-ui" className="mobile-submenu-link" onClick={() => handleLinkClick('familiar-ui')}>UI & Workflows</Link>
                                <Link to="/advertisers#target-audience" className="mobile-submenu-link" onClick={() => handleLinkClick('target-audience')}>Who It's For</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/decentralization" className="mobile-link" onClick={() => setMobileOpen(false)}>Roadmap</Link>
                    <Link to="/early-adopters" className="mobile-link" onClick={() => setMobileOpen(false)}>Early Access</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
