import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Shield, BarChart3, Lock, Target, CheckCircle2} from 'lucide-react';
import Footer from '../components/Footer';
import img1 from '../assets/img1.png';
import imgs1 from '../assets/r1.png';
import img2 from '../assets/r2.png';
import img3 from '../assets/r3.png';
import img4 from '../assets/r4.png';
import imgX from '../assets/r5.png';
import imgY from '../assets/r6.png';
import imgZ from '../assets/r7.png';
function DSPs() {
  useScrollAnimation();

  return (
    <div className="landing-page advertisers-page">
       <nav className="top-nav">
          <div className="content-wrapper nav-flex">
              <Link to="/" className="back-link">&larr; Back Home</Link>
          </div>
      </nav>

      {/* HERO */}
      <header className="hero-section advertisers-hero">
        <div className="content-wrapper adv-hero-grid">
          <div className="adv-hero-copy">
           
            <h1 className="hero-headline-new animate-on-scroll">
              Buy Media<br/>You Can Trust
            </h1>
            <p className="hero-subheadline animate-on-scroll delay-1">
              Access programmatic supply through a centralized exchange with strong quality controls — and a clear path toward verifiable delivery.
            </p>
            <div className="adv-cta-row animate-on-scroll delay-2">
              <button className="btn btn-primary">Register as a DSP / Advertiser</button>
              <a href="#" className="btn btn-ghost">Contact our partnerships team</a>
            </div>
          </div>
          <div className="adv-hero-visual-new animate-on-scroll delay-2" aria-hidden="true">
            <img src={img1} alt="Dashboard preview" className="hero-dashboard-image" />
          </div>
        </div>
      </header>

      {/* SECTION 1: WHY DSPs - Minimalistic Clean Design */}
      <section className="section dsp-why-section-minimal">
        <div className="content-wrapper">
          <div className="why-minimal-header animate-on-scroll">
            <h2>Why DSPs Choose<br/>Ad Mandala</h2>
            <p className="why-subtitle">Ad Mandala is built for advertisers and demand partners who care about performance today — and trust tomorrow.</p>
          </div>

          <div className="why-minimal-list">
            <div className="why-list-item animate-on-scroll">
              <div className="why-item-icon">
                <Shield size={24} />
              </div>
              <div className="why-item-content">
                <h3>Quality Publisher Inventory</h3>
                <p>Access curated, continuously-ranked supply from verified publishers. Every impression is vetted for quality—no remnant inventory.</p>
              </div>
            </div>

            <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="why-item-icon">
                <Lock size={24} />
              </div>
              <div className="why-item-content">
                <h3>Centralized Fraud & Traffic Quality Enforcement</h3>
                <p>Sophisticated IVT filtering protects every bid request before it reaches your DSP. Reduce wasted spend and improve campaign performance.</p>
              </div>
            </div>

            <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="why-item-icon">
                <Target size={24} />
              </div>
              <div className="why-item-content">
                <h3>Brand-Safe Environments</h3>
                <p>Advanced inventory suitability scoring ensures your campaigns run only in contextually appropriate, brand-safe environments.</p>
              </div>
            </div>

            <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="why-item-icon">
                <BarChart3 size={24} />
              </div>
              <div className="why-item-content">
                <h3>Familiar Programmatic Buying Workflows</h3>
                <p>No experimental models. No workflow disruption. Plug into standard RTB workflows and optimize with your existing tools and strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: QUALITY SUPPLY - Split Layout */}
      <section className="section dsp-split-section">
        <div className="content-wrapper">
          <div className="split-layout split-left animate-on-scroll">
            <div className="split-content">
              <h2>Quality-Controlled Supply</h2>
              <p className="split-subtitle">Performance over volume</p>
              <p className="split-description">Ad Mandala prioritizes traffic quality and advertiser outcomes by:</p>
              <ul className="split-features">
                <li>
                  <CheckCircle2 size={20} />
                  <span>Enforcing centralized quality checks</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Actively filtering invalid traffic</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Monitoring performance signals across the exchange</span>
                </li>
              </ul>
              <p className="split-closing">This reduces wasted spend and protects campaign integrity.</p>
            </div>
            <div className="split-visual purple-accent">
              <img src={imgZ} alt="Quality Dashboard" className="split-visual-image" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FAMILIAR - Split Layout (Mirrored) */}
      <section className="section dsp-split-section">
        <div className="content-wrapper">
          <div className="split-layout split-right animate-on-scroll">
            <div className="split-visual blue-accent">
              <img src={imgY} alt="API Integration" className="split-visual-image" />
            </div>
            <div className="split-content">
              <h2>Familiar Buying Experience</h2>
              <p className="split-subtitle">No learning curve required</p>
              <p className="split-description">DSPs and advertisers integrate using standard programmatic mechanisms, enabling:</p>
              <ul className="split-features">
                <li>
                  <CheckCircle2 size={20} />
                  <span>Quick onboarding</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Existing optimization strategies</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Seamless campaign execution</span>
                </li>
              </ul>
              <p className="split-closing">Ad Mandala fits into your current media buying stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRANSPARENCY - Split Layout */}
      <section className="section dsp-split-section">
        <div className="content-wrapper">
          <div className="split-layout split-left animate-on-scroll">
            <div className="split-content">
              <h2>Transparency That Increases Over Time</h2>
              <p className="split-description">While the exchange operates centrally today, Ad Mandala is designed to progressively reduce trust assumptions.</p>
              <p className="split-subheading">What this means for advertisers:</p>
              <ul className="split-features">
                <li>
                  <CheckCircle2 size={20} />
                  <span>Moving from self-reported metrics to independently verifiable ad events</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Increased confidence in delivery and performance</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Greater clarity in how value is created and settled</span>
                </li>
              </ul>
            </div>
            <div className="split-visual green-accent">
              <img src={imgX} alt="Transparency Roadmap" className="split-visual-image" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO THIS IS FOR */}
      <section className="section dsp-who-section">
        <div className="content-wrapper">
          <div className="who-header animate-on-scroll">
            <h2>Who This Is For</h2>
            <p className="who-header-subtitle">Built for demand-side partners who prioritize quality, transparency, and measurable outcomes.</p>
          </div>
          <div className="who-cards-grid">
            <div className="who-card-pro animate-on-scroll">
              <div className="who-card-visual">
                <img src={imgs1} alt="DSPs & Trading Desks" className="who-visual-image" />
              </div>
              <div className="who-card-content">
                <h3>DSPs & Trading Desks</h3>
                <p>Seeking quality-focused supply with transparent bidding, low fraud rates, and access to premium publisher inventory. Connect your existing seats and start buying within minutes.</p>
                <div className="who-card-meta">
                  <span>Programmatic Buying</span>
                  <span>Quality Supply</span>
                </div>
              </div>
            </div>

            <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="who-card-visual">
                <img src={img2} alt="Performance Advertisers" className="who-visual-image" />
              </div>
              <div className="who-card-content">
                <h3>Performance Advertisers</h3>
                <p>Tired of opaque delivery and wasted spend on unverified impressions. Get clear reporting, verifiable metrics, and a path toward independently validated ad delivery.</p>
                <div className="who-card-meta">
                  <span>ROAS Focus</span>
                  <span>Verified Metrics</span>
                </div>
              </div>
            </div>

            <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="who-card-visual">
                <img src={img3} alt="Brand Advertisers" className="who-visual-image" />
              </div>
              <div className="who-card-content">
                <h3>Brand Advertisers</h3>
                <p>Prioritizing long-term trust, brand safety, and accurate measurement. Ensure your campaigns run in appropriate environments with comprehensive suitability scoring.</p>
                <div className="who-card-meta">
                  <span>Brand Safety</span>
                  <span>Trust & Transparency</span>
                </div>
              </div>
            </div>

            <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="who-card-visual">
                <img src={img4} alt="Media Buyers & Agencies" className="who-visual-image" />
              </div>
              <div className="who-card-content">
                <h3>Media Buyers & Agencies</h3>
                <p>Who value stability, clear reporting, and a future-proof supply path. Leverage production-grade infrastructure today with a clear roadmap toward decentralized verification.</p>
                <div className="who-card-meta">
                  <span>Clear Roadmap</span>
                  <span>Stable Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: LOOKING AHEAD - Full-bleed Dark */}
      <section className="section dsp-future-section">
        <div className="dsp-future-bg">
          <div className="dsp-future-orb orb-1"></div>
          <div className="dsp-future-orb orb-2"></div>
          <div className="dsp-future-grid-lines"></div>
        </div>
        <div className="content-wrapper">
          <div className="dsp-future-content animate-on-scroll">
            <h2 className="dsp-future-title">Looking Ahead</h2>
            <p className="dsp-future-desc">Ad Mandala is evolving from a centralized exchange into a verifiable advertising protocol. See how verification and settlement decentralize — without disrupting your buying workflows.</p>
           <div className="decentralization-link-wrapper animate-on-scroll delay-2">
            <Link to="/decentralization" className="explore-button">
              <span className="explore-button__icon-wrapper" aria-hidden="true">
                <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="explore-button__icon-svg" width={12}>
                  <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="explore-button__icon-svg explore-button__icon-svg--copy" width={12}>
                  <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                </svg>
              </span>
              <span className="explore-button__label">Explore the decentralization roadmap</span>
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="section dsp-cta-section">
        <div className="content-wrapper">
          <div className="dsp-cta-box animate-on-scroll">
            <h2 className="dsp-cta-headline">Access Quality Supply Today</h2>
            <p className="dsp-cta-sub">Join as a DSP or Advertiser and grow with verifiable delivery.</p>
            <button className="dsp-cta-button">Register as a DSP / Advertiser</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DSPs;
