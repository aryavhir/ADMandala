import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import './Footer.css';
import privacyPdf from '../assets/Ad_mandala_PP.pdf';
import termsPdf from '../assets/Ad_Mandala_Publisher_Terms_and_Conditions (2).pdf';
import logo from '../assets/fixed-logo.png';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="footer-convert">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-side">
            <div className="footer-logo-wrap">
              <img src={logo} alt="Ad Mandala Logo" className="footer-logo-img" />
              <span className="footer-logo-text">Ad Mandala</span>
            </div>
            <p className="footer-tagline">
              The transparent ad exchange platform for the decentralized era.
            </p>
          </div>

          <div className="footer-links-side">
            <div className="footer-links-col">
              <h6>Publishers</h6>
              <div className="footer-links-list">
                <Link to="/publishers#why-publishers">Why AdMandala</Link>
                <Link to="/publishers#target-audience">Target Audience</Link>
                <Link to="/publishers#future-view">Future View</Link>
                <Link to="/publishers#faqs">Queries</Link>
              </div>
            </div>

            <div className="footer-links-col">
              <h6>Roadmap</h6>
              <div className="footer-links-list">
                <Link to="/decentralization#philosophy">Philosophy</Link>
                <Link to="/decentralization#approach">Approach</Link>
                <Link to="/decentralization#architecture">Architecture</Link>
                <Link to="/decentralization#ecosystem">Ecosystem</Link>
              </div>
            </div>

            <div className="footer-links-col">
              <h6>Advertisers</h6>
              <div className="footer-links-list">
                <Link to="/advertisers#why-advertisers">Why AdMandala</Link>
                <Link to="/advertisers#quality-control">Quality Control</Link>
                <Link to="/advertisers#familiar-ui">Familiar UI</Link>
                <Link to="/advertisers#audience">Audience</Link>
              </div>
            </div>

            <div className="footer-links-col">
              <h6>Legal</h6>
              <div className="footer-links-list">
                <a href={termsPdf} target="_blank" rel="noopener noreferrer">Terms</a>
                <a href={privacyPdf} target="_blank" rel="noopener noreferrer">Privacy</a>
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
