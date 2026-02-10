import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BarChart3, Shield, TrendingUp, Network, CheckCircle2} from 'lucide-react';
import Footer from '../components/Footer';
import p1 from '../assets/l1.png';
import p2 from '../assets/l2.png';
import p3 from '../assets/l3.png';
import p4 from '../assets/l4.png';
import p5 from '../assets/l5.png';
import p6 from '../assets/l6.png';
import p7 from '../assets/l7.png';
function Publishers() {
  useScrollAnimation();

  return (
    <div className="landing-page publishers-page">
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
              Monetize<br/>With Confidence
            </h1>
            <p className="hero-subheadline animate-on-scroll delay-1">
              Connect your inventory to a programmatic exchange built for performance today — and transparency tomorrow.
            </p>
            <div className="adv-cta-row animate-on-scroll delay-2">
              <button className="btn btn-primary">Register as a Publisher / SSP</button>
              <a href="#" className="btn btn-ghost">Talk to our team</a>
            </div>
          </div>
          <div className="pub-hero-visual animate-on-scroll delay-2" aria-hidden="true">
            <div className="pub-visual-shell">
              <div className="pub-visual-header">
                <div className="pub-visual-title">Publisher Console</div>
                <div className="pub-visual-badge">Live</div>
              </div>

              <div className="mockup-window light-window pub-mockup">
                <div className="mockup-sidebar">
                  <div className="sidebar-item active"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                </div>
                <div className="mockup-main">
                  <div className="mockup-header-row">
                    <div className="header-title-blob"></div>
                  </div>
                  <div className="dashboard-grid">
                    <div className="dash-card big-chart">
                      <div className="chart-line-svg">
                        <svg viewBox="0 0 100 40" className="trend-line">
                          <path d="M0,35 Q20,35 25,20 T50,25 T75,10 T100,5" fill="none" stroke="#2b6cb0" strokeWidth="3" />
                          <path d="M0,35 Q20,35 25,20 T50,25 T75,10 T100,5 V40 H0 Z" fill="rgba(43, 108, 176, 0.10)" />
                        </svg>
                      </div>
                    </div>
                    <div className="dash-card small-metric"></div>
                    <div className="dash-card small-metric"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 1: WHY PUBLISHERS - Minimalistic Clean Design */}
      <section className="section dsp-why-section-minimal">
        <div className="content-wrapper">
          <div className="why-minimal-header animate-on-scroll">
            <h2>Why Publishers Choose<br/>Ad Mandala</h2>
            <p className="why-subtitle">Ad Mandala is designed to help publishers monetize efficiently while maintaining control over quality and performance.</p>
          </div>

          <div className="why-minimal-list">
            <div className="why-list-item animate-on-scroll">
              <div className="why-item-icon">
                <TrendingUp size={24} />
              </div>
              <div className="why-item-content">
                <h3>Programmatic Demand Access</h3>
                <p>Connect to quality DSPs and advertisers seeking premium inventory. Maximize yield through competitive bidding and strong demand partnerships.</p>
              </div>
            </div>

            <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="why-item-icon">
                <Shield size={24} />
              </div>
              <div className="why-item-content">
                <h3>Centralized Traffic Quality Enforcement</h3>
                <p>Built-in IVT filtering protects your reputation and maintains advertiser trust. Quality controls ensure sustainable, long-term demand partnerships.</p>
              </div>
            </div>

            <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="why-item-icon">
                <Network size={24} />
              </div>
              <div className="why-item-content">
                <h3>Brand-Safe Buying Environments</h3>
                <p>Contextual suitability scoring ensures your inventory meets advertiser standards. Protect your brand while maximizing monetization opportunities.</p>
              </div>
            </div>

            <div className="why-list-item animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="why-item-icon">
                <BarChart3 size={24} />
              </div>
              <div className="why-item-content">
                <h3>Reliable Reporting and Payouts</h3>
                <p>Clear performance visibility with standard programmatic workflows. No experimental infrastructure or forced changes to your existing stack.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTEGRATION - Split Layout */}
      <section className="section dsp-split-section">
        <div className="content-wrapper">
          <div className="split-layout split-left animate-on-scroll">
            <div className="split-content">
              <h2>Simple Integration</h2>
              <p className="split-subtitle">Works with your current setup</p>
              <p className="split-description">Ad Mandala integrates using standard programmatic workflows, enabling:</p>
              <ul className="split-features">
                <li>
                  <CheckCircle2 size={20} />
                  <span>Compatible with existing SSP setups</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Standard ad serving and reporting flows</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Minimal technical overhead</span>
                </li>
              </ul>
              <p className="split-closing">You stay focused on content — we handle the exchange layer.</p>
            </div>
            <div className="split-visual purple-accent">
              <img src={p1} alt="Integration Dashboard" className="split-visual-image" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: QUALITY - Split Layout (Mirrored) */}
      <section className="section dsp-split-section">
        <div className="content-wrapper">
          <div className="split-layout split-right animate-on-scroll">
            <div className="split-visual blue-accent">
              <img src={p2} alt="Quality Controls" className="split-visual-image" />
            </div>
            <div className="split-content">
              <h2>Traffic Quality First</h2>
              <p className="split-subtitle">Quality is enforced — not assumed</p>
              <p className="split-description">Ad Mandala applies centralized traffic quality controls to:</p>
              <ul className="split-features">
                <li>
                  <CheckCircle2 size={20} />
                  <span>Detect and filter invalid traffic</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Protect advertiser trust</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Improve long-term demand value</span>
                </li>
              </ul>
              <p className="split-closing">This approach ensures sustainable monetization, not short-term arbitrage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRANSPARENCY - Split Layout */}
      <section className="section dsp-split-section">
        <div className="content-wrapper">
          <div className="split-layout split-left animate-on-scroll">
            <div className="split-content">
              <h2>Transparent Performance</h2>
              <p className="split-description">Publishers get clear visibility into demand sources, fill rates, CPM performance, and traffic quality signals.</p>
              <p className="split-subheading">What this means for publishers:</p>
              <ul className="split-features">
                <li>
                  <CheckCircle2 size={20} />
                  <span>Moving from opaque metrics to independently verifiable data</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Increased confidence in revenue reporting</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Greater clarity in how value is distributed</span>
                </li>
              </ul>
            </div>
            <div className="split-visual green-accent">
              <img src={p3} alt="Transparency Dashboard" className="split-visual-image" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO THIS IS FOR */}
      <section className="section dsp-who-section">
        <div className="content-wrapper">
          <div className="who-header animate-on-scroll">
            <h2>Who This Is For</h2>
            <p className="who-header-subtitle">Built for supply-side partners who prioritize quality, transparency, and sustainable monetization.</p>
          </div>
          <div className="who-cards-grid">
            <div className="who-card-pro animate-on-scroll">
              <div className="who-card-visual">
                <img src={p4} alt="Independent Publishers" className="who-visual-image" />
              </div>
              <div className="who-card-content">
                <h3>Independent Publishers</h3>
                <p>Seeking quality-focused demand with transparent reporting, reliable payouts, and access to premium advertisers. Connect your inventory and start monetizing within minutes.</p>
                <div className="who-card-meta">
                  <span>Premium Demand</span>
                  <span>Quick Setup</span>
                </div>
              </div>
            </div>

            <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="who-card-visual">
                <img src={p5} alt="Media Networks" className="who-visual-image" />
              </div>
              <div className="who-card-content">
                <h3>Media Networks</h3>
                <p>Managing multiple properties and seeking centralized quality enforcement. Get consistent traffic filtering, unified reporting, and scalable monetization infrastructure.</p>
                <div className="who-card-meta">
                  <span>Scale Ready</span>
                  <span>Unified Reporting</span>
                </div>
              </div>
            </div>

            <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="who-card-visual">
                <img src={p6} alt="Programmatic-First Properties" className="who-visual-image" />
              </div>
              <div className="who-card-content">
                <h3>Programmatic-First Properties</h3>
                <p>Prioritizing efficient yield optimization and automated monetization. Leverage production-grade infrastructure with comprehensive performance visibility and demand diversity.</p>
                <div className="who-card-meta">
                  <span>Yield Optimization</span>
                  <span>Automation</span>
                </div>
              </div>
            </div>

            <div className="who-card-pro animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="who-card-visual">
                <img src={p7} alt="SSPs & Supply Partners" className="who-visual-image" />
              </div>
              <div className="who-card-content">
                <h3>SSPs & Supply Partners</h3>
                <p>Who value stability, clear demand relationships, and future-proof infrastructure. Access quality-focused advertisers today with a clear roadmap toward decentralized verification.</p>
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
            <p className="dsp-future-desc">Ad Mandala is evolving from a centralized exchange into a verifiable advertising protocol. See how verification and settlement decentralize — without disrupting your monetization workflows.</p>
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
            <h2 className="dsp-cta-headline">Start Monetizing Today</h2>
            <p className="dsp-cta-sub">Join as a Publisher or SSP and grow with verifiable revenue.</p>
            <button className="dsp-cta-button">Register as a Publisher / SSP</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Publishers;
