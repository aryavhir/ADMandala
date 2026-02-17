import { Link, useNavigate, useLocation } from 'react-router-dom';
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
      // Navigate to publishers page where FAQ section is located
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
            <a href="/decentralization" onClick={handleDecentralizationClick} className="footer-link">Decentralization</a>
            <a href="#faqs" onClick={handleFAQClick} className="footer-link">FAQ</a>
          </nav>

          <div className="footer-actions">
            <a
              href="https://www.linkedin.com/company/ad-mandala/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Visit Ad Mandala on LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
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
