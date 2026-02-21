import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [hidden, setHidden] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const lastScrollY = useRef(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY === 0) {
                setHidden(false);
            } else if (currentScrollY > lastScrollY.current) {
                // Scrolling down → hide immediately (even 1 unit)
                setHidden(true);
                setMobileOpen(false);
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
    }, [location.pathname]);

    const registrationUrl = (import.meta as any).env?.VITE_PUBLISHER_REGISTRATION_URL ?? '#';

    return (
        <nav className={`site-navbar ${hidden ? 'site-navbar--hidden' : ''}`}>
            <div className="site-navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <div className="navbar-logo-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF5722" />
                            <path d="M2 17L12 22L22 17" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="navbar-logo-text">Convert</span>
                </Link>

                {/* Nav Links - Desktop */}
                <div className="navbar-links-center">
                    <Link to="#" className="navbar-link">Features</Link>
                    <Link to="#" className="navbar-link">Pricing</Link>
                    <Link to="#" className="navbar-link">About</Link>
                    <Link to="#" className="navbar-link">Contact</Link>
                    <Link to="#" className="navbar-link">Docs</Link>
                    <Link to="#" className="navbar-link">Blog</Link>
                    <div className="navbar-link navbar-dropdown-toggle">
                        All pages <ChevronDown size={14} />
                    </div>
                </div>

                {/* Actions */}
                <div className="navbar-actions">
                    <Link to="#" className="navbar-btn-login">Log in</Link>
                    <a
                        href={registrationUrl}
                        className="navbar-btn-signup"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sign up
                    </a>
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
            {mobileOpen && (
                <div className="navbar-mobile-menu">
                    <Link to="#" className="mobile-link">Features</Link>
                    <Link to="#" className="mobile-link">Pricing</Link>
                    <Link to="#" className="mobile-link">About</Link>
                    <Link to="#" className="mobile-link">Contact</Link>
                    <Link to="#" className="mobile-link">Docs</Link>
                    <Link to="#" className="mobile-link">Blog</Link>
                    <Link to="#" className="mobile-link">Log in</Link>
                    <a href={registrationUrl} className="mobile-btn-signup">Sign up</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
