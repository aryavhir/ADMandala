import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

import logoImg from '../assets/fixed-logo.png';

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


    const handleAboutClick = (e: React.MouseEvent) => {
        if (location.pathname === '/') {
            e.preventDefault();
            document.getElementById('what-is')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Let the link navigate to / and then we'll handle scroll on the Home page if needed
            // But usually a Simple /#id works if the browser handles it.
            // Let's use internal state or just /#what-is
        }
    };

    const handleFAQClick = (e: React.MouseEvent) => {
        if (location.pathname === '/publishers') {
            e.preventDefault();
            document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`site-navbar ${hidden ? 'site-navbar--hidden' : ''}`}>
            <div className="site-navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img src={logoImg} alt="Ad Mandala Logo" className="navbar-logo-img" />
                    <span className="navbar-logo-text">AdMandala</span>
                </Link>

                {/* Nav Links - Desktop */}
                <div className="navbar-links-right">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/#what-is" className="navbar-link" onClick={handleAboutClick}>About</Link>
                    <Link to="/publishers" className="navbar-link">Publishers</Link>
                    <Link to="/advertisers" className="navbar-link">Advertisers</Link>
                    <Link to="/decentralization" className="navbar-link">Roadmap</Link>
                    <Link to="/publishers#faqs" className="navbar-link" onClick={handleFAQClick}>FAQ</Link>
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
                    <Link to="/" className="mobile-link">Home</Link>
                    <Link to="/#what-is" className="mobile-link" onClick={handleAboutClick}>About</Link>
                    <Link to="/publishers" className="mobile-link">Publishers</Link>
                    <Link to="/advertisers" className="mobile-link">Advertisers</Link>
                    <Link to="/decentralization" className="mobile-link">Roadmap</Link>
                    <Link to="/publishers#faqs" className="mobile-link" onClick={handleFAQClick}>FAQ</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
