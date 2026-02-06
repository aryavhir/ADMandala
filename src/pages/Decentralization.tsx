import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Layers,
  Network,
  Globe,
  Lock,
  Eye,
  Cpu,
  GitBranch,
  Box,
  Zap,
  Users,
  BarChart3,
  Activity,
  Hexagon,
  CircleDot,
  RadioTower,
} from 'lucide-react';
import './Decentralization.css';

function Decentralization() {
  useScrollAnimation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalScroll / windowHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page dec-page">
      <div className="dec-scroll-progress" style={{ width: `${scrollProgress * 100}%` }} />

      {/* NAV */}
      <nav className="top-nav">
        <div className="content-wrapper nav-flex">
          <Link to="/" className="back-link">&larr; Back Home</Link>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <header className="dec-hero">
        <div className="dec-hero-mesh" aria-hidden="true">
          <div className="dec-mesh-line dec-ml-1" />
          <div className="dec-mesh-line dec-ml-2" />
          <div className="dec-mesh-line dec-ml-3" />
          <div className="dec-mesh-line dec-ml-4" />
        </div>
        <div className="dec-hero-radial" aria-hidden="true" />

        <div className="content-wrapper dec-hero-layout">
          <div className="dec-hero-copy">
            <div className="dec-hero-eyebrow animate-on-scroll">
              <CircleDot size={14} />
              <span>The Decentralization Roadmap</span>
            </div>
            <h1 className="dec-hero-h1 animate-on-scroll">
              From <span className="dec-h1-em">Platform</span><br />to Protocol
            </h1>
            <p className="dec-hero-sub animate-on-scroll delay-1">
              Ad Mandala is evolving from a centralized programmatic exchange into a decentralized advertising network&nbsp;— without compromising performance or usability.
            </p>
            <div className="dec-hero-actions animate-on-scroll delay-2">
              <a href="#evolution" className="btn btn-primary">
                Explore the Journey <ArrowRight size={16} />
              </a>
              <a href="#architecture" className="btn btn-ghost">View Architecture</a>
            </div>
          </div>

          {/* Network Visualization */}
          <div className="dec-hero-visual animate-on-scroll delay-3" aria-hidden="true">
            <div className="dec-netvis">
              <div className="dec-netvis-ring dec-nr-outer" />
              <div className="dec-netvis-ring dec-nr-mid" />
              <div className="dec-netvis-ring dec-nr-inner" />
              {/* Orbiting nodes */}
              <div className="dec-netvis-node dec-nn-1"><Shield size={16} /></div>
              <div className="dec-netvis-node dec-nn-2"><Layers size={16} /></div>
              <div className="dec-netvis-node dec-nn-3"><Eye size={16} /></div>
              <div className="dec-netvis-node dec-nn-4"><Lock size={16} /></div>
              <div className="dec-netvis-node dec-nn-5"><Cpu size={16} /></div>
              <div className="dec-netvis-node dec-nn-6"><Globe size={16} /></div>
              {/* Center */}
              <div className="dec-netvis-core">
                <Hexagon size={28} strokeWidth={1.5} />
              </div>
              {/* Pulse rings */}
              <div className="dec-netvis-pulse dec-np-1" />
              <div className="dec-netvis-pulse dec-np-2" />
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="content-wrapper">
          <div className="dec-hero-stats animate-on-scroll delay-3">
            <div className="dec-stat">
              <span className="dec-stat-value">3</span>
              <span className="dec-stat-label">Phases</span>
            </div>
            <div className="dec-stat-divider" />
            <div className="dec-stat">
              <span className="dec-stat-value">Phase 1</span>
              <span className="dec-stat-label">Live Today</span>
            </div>
            <div className="dec-stat-divider" />
            <div className="dec-stat">
              <span className="dec-stat-value">0%</span>
              <span className="dec-stat-label">Workflow Disruption</span>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════ PHILOSOPHY ══════════ */}
      <section className="dec-section dec-philosophy">
        <div className="content-wrapper">
          <div className="dec-section-hdr animate-on-scroll">
            <span className="dec-eyebrow"><GitBranch size={14} /> Philosophy</span>
            <h2>Why Decentralization&nbsp;— And Why<br />Timing Matters More</h2>
          </div>

          <div className="dec-phil-grid">
            <div className="dec-phil-card dec-phil-offers animate-on-scroll">
              <div className="dec-phil-icon-box offers">
                <CheckCircle2 size={24} />
              </div>
              <h3>Decentralization Offers</h3>
              <ul className="dec-check-list">
                <li><CheckCircle2 size={16} /> Independent verification of events</li>
                <li><CheckCircle2 size={16} /> Reduced trust in intermediaries</li>
                <li><CheckCircle2 size={16} /> Transparent, auditable settlement</li>
              </ul>
            </div>
            <div className="dec-phil-card dec-phil-warn animate-on-scroll" style={{ transitionDelay: '120ms' }}>
              <div className="dec-phil-icon-box warn">
                <Shield size={24} />
              </div>
              <h3>But Timing Is Everything</h3>
              <p>Decentralization done prematurely introduces friction, complexity, and fragility. Rushing creates more problems than it solves — every step must be earned.</p>
            </div>
          </div>

          <div className="dec-principle animate-on-scroll">
            <div className="dec-principle-bar" />
            <p><strong>Decentralization should emerge from proven infrastructure</strong>&nbsp;— not replace it overnight.</p>
            <div className="dec-principle-bar" />
          </div>
        </div>
      </section>

      {/* ══════════ THE MANDALA APPROACH — Split Layout ══════════ */}
      <section className="dec-section dec-approach">
        <div className="content-wrapper">
          <div className="split-layout split-left animate-on-scroll">
            <div className="split-content">
              <span className="dec-eyebrow"><Box size={14} /> The Mandala Approach</span>
              <h2>Balance. Structure.<br />Interconnected Systems.</h2>
              <p className="split-description">
                A mandala represents balance and interconnected systems. Ad Mandala applies this principle by decentralizing only the layers that benefit from it.
              </p>
              <ul className="split-features">
                <li><CheckCircle2 size={20} /><span>Decentralization is additive, never disruptive</span></li>
                <li><CheckCircle2 size={20} /><span>Usable, scalable and reliable at every stage</span></li>
                <li><CheckCircle2 size={20} /><span>Each layer improves independently</span></li>
              </ul>
              <p className="split-closing">The system grows stronger — each stage building on the last.</p>
            </div>
            <div className="split-visual green-accent">
              {/* Mandala diagram visual */}
              <div className="dec-mandala-vis">
                <svg viewBox="0 0 320 320" className="dec-mandala-svg" aria-hidden="true">
                  <circle cx="160" cy="160" r="148" fill="none" stroke="rgba(15,74,74,0.08)" strokeWidth="1" />
                  <circle cx="160" cy="160" r="110" fill="none" stroke="rgba(15,74,74,0.12)" strokeWidth="1.5" strokeDasharray="6 4" className="dec-svg-spin" />
                  <circle cx="160" cy="160" r="72" fill="none" stroke="rgba(15,74,74,0.18)" strokeWidth="1.5" strokeDasharray="4 6" className="dec-svg-spin-r" />
                  <circle cx="160" cy="160" r="34" fill="#0f4a4a" opacity="0.9" />
                  <text x="160" y="164" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" letterSpacing="0.5">CORE</text>
                  {/* Connection lines */}
                  <line x1="160" y1="12" x2="160" y2="88" stroke="rgba(15,74,74,0.1)" strokeWidth="1" />
                  <line x1="160" y1="232" x2="160" y2="308" stroke="rgba(15,74,74,0.1)" strokeWidth="1" />
                  <line x1="12" y1="160" x2="88" y2="160" stroke="rgba(15,74,74,0.1)" strokeWidth="1" />
                  <line x1="232" y1="160" x2="308" y2="160" stroke="rgba(15,74,74,0.1)" strokeWidth="1" />
                  {/* Outer dots */}
                  <circle cx="160" cy="12" r="5" fill="#0f4a4a" opacity="0.3" />
                  <circle cx="308" cy="160" r="5" fill="#0f4a4a" opacity="0.3" />
                  <circle cx="160" cy="308" r="5" fill="#0f4a4a" opacity="0.3" />
                  <circle cx="12" cy="160" r="5" fill="#0f4a4a" opacity="0.3" />
                  {/* Labels */}
                  <text x="160" y="63" textAnchor="middle" fill="#0f4a4a" fontSize="7" fontWeight="600" opacity="0.5">VERIFICATION</text>
                  <text x="265" y="163" textAnchor="middle" fill="#0f4a4a" fontSize="7" fontWeight="600" opacity="0.5">SETTLEMENT</text>
                  <text x="160" y="268" textAnchor="middle" fill="#0f4a4a" fontSize="7" fontWeight="600" opacity="0.5">GOVERNANCE</text>
                  <text x="55" y="163" textAnchor="middle" fill="#0f4a4a" fontSize="7" fontWeight="600" opacity="0.5">PARTICIPANTS</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ EVOLUTION TIMELINE ══════════ */}
      <section className="dec-section dec-evolution" id="evolution">
        <div className="content-wrapper">
          <div className="dec-section-hdr animate-on-scroll">
            <span className="dec-eyebrow"><Activity size={14} /> Roadmap</span>
            <h2>The Evolution of the Network</h2>
            <p className="dec-section-sub">Three carefully planned phases — each introduced only when it strengthens the whole.</p>
          </div>

          <div className="dec-phases">
            {/* Phase 1 */}
            <div className="dec-phase-card animate-on-scroll">
              <div className="dec-phase-top">
                <div className="dec-phase-badge live">
                  <span className="dec-badge-pulse" />
                  Phase 1 — Live
                </div>
              </div>
              <div className="dec-phase-body">
                <h3>Centralized Exchange</h3>
                <p>Ad Mandala operates today as a centralized programmatic exchange to ensure reliability and real-world validation.</p>
                <ul className="dec-check-list compact">
                  <li><CheckCircle2 size={16} /> Seamless SSP &amp; DSP integration</li>
                  <li><CheckCircle2 size={16} /> Strong traffic quality enforcement</li>
                  <li><CheckCircle2 size={16} /> Reliable performance &amp; uptime</li>
                  <li><CheckCircle2 size={16} /> Real-world data &amp; revenue</li>
                </ul>
                <div className="dec-phase-quote">
                  <Zap size={14} />
                  This phase grounds the protocol in operational reality.
                </div>
              </div>
              <div className="dec-phase-progress">
                <div className="dec-progress-fill" style={{ width: '100%' }} />
              </div>
            </div>

            {/* Phase 2 */}
            <div className="dec-phase-card animate-on-scroll" style={{ transitionDelay: '120ms' }}>
              <div className="dec-phase-top">
                <div className="dec-phase-badge progress">
                  Phase 2 — In Progress
                </div>
              </div>
              <div className="dec-phase-body">
                <h3>Decentralized Verification</h3>
                <p>Independent verification is introduced — shifting trust away from a single operator.</p>
                <ul className="dec-check-list compact">
                  <li><CheckCircle2 size={16} /> Impressions &amp; clicks validated by nodes</li>
                  <li><CheckCircle2 size={16} /> Distributed fraud detection</li>
                  <li><CheckCircle2 size={16} /> Reduced reliance on self-reported metrics</li>
                </ul>
                <div className="dec-phase-quote">
                  <Eye size={14} />
                  Trust begins shifting from platform to protocol.
                </div>
              </div>
              <div className="dec-phase-progress">
                <div className="dec-progress-fill" style={{ width: '35%' }} />
              </div>
            </div>

            {/* Phase 3 */}
            <div className="dec-phase-card animate-on-scroll" style={{ transitionDelay: '240ms' }}>
              <div className="dec-phase-top">
                <div className="dec-phase-badge future">
                  Phase 3 — Upcoming
                </div>
              </div>
              <div className="dec-phase-body">
                <h3>Protocol-Level Settlement &amp; Governance</h3>
                <p>Ad Mandala becomes a trust-minimized protocol — resilient and community-governed.</p>
                <ul className="dec-check-list compact">
                  <li><CheckCircle2 size={16} /> Deterministic pricing &amp; settlement</li>
                  <li><CheckCircle2 size={16} /> Transparent, auditable event records</li>
                  <li><CheckCircle2 size={16} /> Distributed governance</li>
                  <li><CheckCircle2 size={16} /> Network resilience — no single point of failure</li>
                </ul>
                <div className="dec-phase-quote">
                  <Network size={14} />
                  If Ad Mandala disappears, the protocol continues.
                </div>
              </div>
              <div className="dec-phase-progress">
                <div className="dec-progress-fill" style={{ width: '0%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROTOCOL ARCHITECTURE ══════════ */}
      <section className="dec-section dec-architecture" id="architecture">
        <div className="content-wrapper">
          <div className="dec-section-hdr animate-on-scroll">
            <span className="dec-eyebrow"><Cpu size={14} /> Architecture</span>
            <h2>The Mandala Protocol</h2>
            <p className="dec-section-sub">Four concentric layers — each one strengthening the system from the inside out.</p>
          </div>

          {/* Architecture visual — layered mockup */}
          <div className="dec-arch-visual animate-on-scroll">
            <div className="dec-arch-layers">
              <div className="dec-al dec-al-4">
                <span className="dec-al-label">Open Participants</span>
              </div>
              <div className="dec-al dec-al-3">
                <span className="dec-al-label">Verification Nodes</span>
              </div>
              <div className="dec-al dec-al-2">
                <span className="dec-al-label">Protocol Logic</span>
              </div>
              <div className="dec-al dec-al-1">
                <span className="dec-al-label">Immutable Event Record</span>
              </div>
            </div>
          </div>

          {/* Architecture features — bento-style grid */}
          <div className="dec-arch-grid">
            <div className="dec-arch-card dec-arch-wide animate-on-scroll">
              <div className="dec-arch-card-icon"><Cpu size={24} /></div>
              <div className="dec-arch-card-text">
                <h4>Protocol Logic</h4>
                <p>Governs pricing and settlement deterministically — removing the need for opaque intermediary decisions.</p>
              </div>
            </div>
            <div className="dec-arch-card animate-on-scroll" style={{ transitionDelay: '80ms' }}>
              <div className="dec-arch-card-icon"><Eye size={24} /></div>
              <h4>Verification Nodes</h4>
              <p>Validate events independently across the network. No single entity controls truth.</p>
            </div>
            <div className="dec-arch-card animate-on-scroll" style={{ transitionDelay: '160ms' }}>
              <div className="dec-arch-card-icon"><Globe size={24} /></div>
              <h4>Open Participation</h4>
              <p>Connect, verify, and transact without centralized gatekeeping or walled gardens.</p>
            </div>
          </div>

          <p className="dec-arch-stmt animate-on-scroll">Together, these layers form a balanced, self-correcting system.</p>
        </div>
      </section>

      {/* ══════════ ECOSYSTEM ══════════ */}
      <section className="dec-section dec-ecosystem">
        <div className="content-wrapper">
          <div className="dec-section-hdr animate-on-scroll">
            <span className="dec-eyebrow"><Users size={14} /> Ecosystem</span>
            <h2>What This Means for You</h2>
          </div>

          <div className="dec-eco-cards">
            <div className="dec-eco-card animate-on-scroll">
              <div className="dec-eco-icon"><BarChart3 size={24} /></div>
              <h3>For Publishers</h3>
              <p>Monetization that becomes independently verifiable. Reduced dependency on opaque intermediaries.</p>
              <ul className="dec-check-list compact">
                <li><CheckCircle2 size={14} /> Transparent revenue tracking</li>
                <li><CheckCircle2 size={14} /> Independent performance verification</li>
              </ul>
            </div>
            <div className="dec-eco-card animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="dec-eco-icon"><Shield size={24} /></div>
              <h3>For Advertisers</h3>
              <p>Greater confidence in delivery and performance. Transparent measurement and settlement at every level.</p>
              <ul className="dec-check-list compact">
                <li><CheckCircle2 size={14} /> Verified ad delivery</li>
                <li><CheckCircle2 size={14} /> Auditable spend reporting</li>
              </ul>
            </div>
            <div className="dec-eco-card animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="dec-eco-icon"><RadioTower size={24} /></div>
              <h3>For Infrastructure Partners</h3>
              <p>Opportunity to operate verification nodes and participate in securing and governing the network.</p>
              <ul className="dec-check-list compact">
                <li><CheckCircle2 size={14} /> Node operator incentives</li>
                <li><CheckCircle2 size={14} /> Governance participation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ UNCHANGED / COMPATIBILITY ══════════ */}
      <section className="dec-section dec-compat">
        <div className="content-wrapper">
          <div className="split-layout split-right animate-on-scroll">
            <div className="split-visual blue-accent">
              <div className="dec-compat-visual">
                <div className="dec-compat-mockup">
                  <div className="dec-compat-dot green" />
                  <div className="dec-compat-row"><span className="dec-compat-key">SSP Workflow</span><span className="dec-compat-val">Unchanged</span></div>
                  <div className="dec-compat-row"><span className="dec-compat-key">DSP Workflow</span><span className="dec-compat-val">Unchanged</span></div>
                  <div className="dec-compat-row"><span className="dec-compat-key">Integration Methods</span><span className="dec-compat-val">Unchanged</span></div>
                  <div className="dec-compat-row"><span className="dec-compat-key">Buying &amp; Selling UX</span><span className="dec-compat-val">Unchanged</span></div>
                  <div className="dec-compat-row"><span className="dec-compat-key">Ad Serving Flow</span><span className="dec-compat-val">Unchanged</span></div>
                  <div className="dec-compat-divider" />
                  <div className="dec-compat-row highlight"><span className="dec-compat-key">Trust Layer</span><span className="dec-compat-val upgrade">Upgraded</span></div>
                </div>
              </div>
            </div>
            <div className="split-content">
              <span className="dec-eyebrow"><Lock size={14} /> Compatibility</span>
              <h2>What Decentralization<br />Does Not Change</h2>
              <p className="split-description">
                Existing workflows remain exactly the same. Decentralization improves trust without breaking usability — it's an invisible upgrade to the infrastructure layer.
              </p>
              <ul className="split-features">
                <li><CheckCircle2 size={20} /><span>Existing SSP and DSP workflows</span></li>
                <li><CheckCircle2 size={20} /><span>Standard integration methods</span></li>
                <li><CheckCircle2 size={20} /><span>Day-to-day buying and selling experience</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ LOOKING AHEAD — Dark Section ══════════ */}
      <section className="section dsp-future-section">
        <div className="dsp-future-bg">
          <div className="dsp-future-orb orb-1"></div>
          <div className="dsp-future-orb orb-2"></div>
          <div className="dsp-future-grid-lines"></div>
        </div>
        <div className="content-wrapper">
          <div className="dsp-future-content animate-on-scroll">
            <h2 className="dsp-future-title">Looking Ahead</h2>
            <p className="dsp-future-desc">
              Ad Mandala is not racing toward decentralization — it is <strong>progressing</strong> toward it. Each step is introduced only when it strengthens the network without disrupting existing workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="dec-section dec-cta">
        <div className="content-wrapper">
          <div className="dec-cta-container animate-on-scroll">
            <h2>Be Early. Be Aligned.</h2>
            <p className="dec-cta-sub">Ad Mandala is decentralizing in phases — early participants help shape the network.</p>

            <div className="dec-cta-benefits">
              <h4>Early participants gain:</h4>
              <div className="dec-cta-benefit-grid">
                <div className="dec-cta-benefit"><CheckCircle2 size={16} /> Priority access to protocol features</div>
                <div className="dec-cta-benefit"><CheckCircle2 size={16} /> Early integration into decentralized verification</div>
                <div className="dec-cta-benefit"><CheckCircle2 size={16} /> Influence on network standards &amp; governance</div>
                <div className="dec-cta-benefit"><CheckCircle2 size={16} /> A head start as the exchange becomes a protocol</div>
              </div>
            </div>

            <div className="dec-cta-actions">
              <button className="btn btn-primary">Register as a Publisher / SSP</button>
              <button className="btn btn-primary">Register as a DSP / Advertiser</button>
              <button className="btn btn-ghost">Register Interest as Network Participant</button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="main-footer-new">
        <div className="footer-gradient"></div>
        <div className="content-wrapper">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 className="footer-logo">Ad Mandala</h3>
              <p className="footer-tagline">Programmatic advertising built to evolve into a decentralized, verifiable protocol.</p>
              <div className="footer-social">
                <div className="social-badge">Built on Transparency</div>
              </div>
            </div>
            <div className="footer-column">
              <h4>Platform</h4>
              <Link to="/publishers">Publishers &amp; SSPs</Link>
              <Link to="/advertisers">DSPs &amp; Advertisers</Link>
              <Link to="/decentralization">Decentralization</Link>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">Whitepaper</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Team</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright-new">&copy; {new Date().getFullYear()} Ad Mandala. All rights reserved.</div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="separator">&bull;</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Decentralization;
