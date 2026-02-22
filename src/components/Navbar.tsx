import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';

import logoImg from '../assets/logow.jpg';

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


    return (
        <nav className={`site-navbar ${hidden ? 'site-navbar--hidden' : ''}`}>
            <div className="site-navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img src={logoImg} alt="Ad Mandala Logo" className="navbar-logo-img" />
                    <span className="navbar-logo-text">AdMandala</span>
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

                </div>
            )}
        </nav>
    );
};

export default Navbar;
