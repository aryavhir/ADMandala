import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="main-footer-new">
      <div className="footer-gradient"></div>
      <div className="content-wrapper">
        <div className="footer-content-centered">
          <div className="footer-main">
            <h3 className="footer-logo">Ad Mandala</h3>
            <p className="footer-tagline">Programmatic advertising built to evolve into a decentralized, verifiable protocol.</p>
            <div className="footer-badge-wrapper">
              <div className="social-badge">Built on Transparency</div>
            </div>
          </div>
          
          <div className="footer-links">
            <Link to="/publishers" className="footer-link">Publishers &amp; SSPs</Link>
            <span className="footer-link-separator">•</span>
            <Link to="/advertisers" className="footer-link">DSPs &amp; Advertisers</Link>
            <span className="footer-link-separator">•</span>
            <Link to="/decentralization" className="footer-link">Decentralization</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright-new">© {new Date().getFullYear()} Ad Mandala. All rights reserved.</div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
