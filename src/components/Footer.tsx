import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import './Footer.css';
import privacyPdf from '../assets/Ad_mandala_PP.pdf';
import termsPdf from '../assets/Ad_Mandala_Publisher_Terms_and_Conditions (2).pdf';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDecentralizationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const path = '/decentralization';
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

  const handleFAQClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const faqSection = document.getElementById('faqs');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/publishers');
      setTimeout(() => {
        const section = document.getElementById('faqs');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  return (
    <footer className="footer-convert">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-side">
            <div className="footer-logo-wrap">

              <span className="footer-logo-text">Ad Mandala</span>
            </div>
            <p className="footer-tagline">
              The transparent ad exchange platform for the decentralized era.
            </p>

          </div>

          <div className="footer-links-side">
            <div className="footer-links-col">
              <h6>Product</h6>
              <div className="footer-links-list">
                <Link to="/publishers">Publishers</Link>
                <Link to="/advertisers">Advertisers</Link>
                <a href="/decentralization" onClick={handleDecentralizationClick}>Decentralization</a>
                <a href="#changelog">Changelog</a>
              </div>
            </div>

            <div className="footer-links-col">
              <h6>Resources</h6>
              <div className="footer-links-list">
                <a href="#docs">API Docs</a>
                <a href="#blog">Blogs</a>
                <a href="#faqs" onClick={handleFAQClick}>FAQs</a>
              </div>
            </div>

            <div className="footer-links-col">
              <h6>Company</h6>
              <div className="footer-links-list">
                <Link to="/about">About</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            <div className="footer-links-col">
              <h6>Legal</h6>
              <div className="footer-links-list">
                <a href={termsPdf} target="_blank" rel="noopener noreferrer">Terms</a>
                <a href={privacyPdf} target="_blank" rel="noopener noreferrer">Privacy</a>
                <a href="#cookie">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-mid">
          <div className="footer-social-icon">
            <Linkedin />
          </div>
        </div>
        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="copyright-convert">
            Copyright © {new Date().getFullYear()} Ad Mandala LLC. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href={termsPdf} target="_blank" rel="noopener noreferrer">Terms</a>
            <span className="legal-separator">|</span>
            <a href={privacyPdf} target="_blank" rel="noopener noreferrer">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
