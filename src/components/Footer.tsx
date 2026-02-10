import { Link } from 'react-router-dom';
import privacyPdf from '../assets/AdMandala_Privacy_Policy (2).pdf';
import termsPdf from '../assets/Ad_Mandala_Publisher_Terms_and_Conditions (2).pdf';

function Footer() {
  return (
    <footer className="main-footer-new footer-compact">
      <div className="content-wrapper">
        <div className="footer-row">
          <div className="footer-brand">
            <h4 className="footer-logo">Ad Mandala</h4>
            <div className="footer-badge-inline">Built on Transparency</div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/publishers" className="footer-link">Publishers</Link>
            <Link to="/advertisers" className="footer-link">Advertisers</Link>
            <Link to="/decentralization" className="footer-link">Decentralization</Link>
          </nav>

          <div className="footer-actions">
            <div className="footer-legal">
              <a href={privacyPdf} target="_blank" rel="noopener noreferrer">Privacy</a>
              <span className="separator">•</span>
              <a href={termsPdf} target="_blank" rel="noopener noreferrer">Terms</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom footer-bottom-compact">
          <div className="copyright-new">© {new Date().getFullYear()} Ad Mandala</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
