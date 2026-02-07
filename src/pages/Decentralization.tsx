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

          {/* Hero Visual — 3D Cube + Constellation */}
          <div className="dec-hero-visual animate-on-scroll delay-3" aria-hidden="true">
            <div className="dec-vis">
              {/* Scan line */}
              <div className="dec-scanline" />

              {/* Constellation star field */}
              <svg className="dec-constellation" viewBox="0 0 500 500" fill="none">
                {/* Network connection lines */}
                <line x1="80" y1="60" x2="180" y2="130" className="dec-con-line dec-cl-1" />
                <line x1="180" y1="130" x2="250" y2="80" className="dec-con-line dec-cl-2" />
                <line x1="250" y1="80" x2="400" y2="110" className="dec-con-line dec-cl-3" />
                <line x1="400" y1="110" x2="440" y2="200" className="dec-con-line dec-cl-4" />
                <line x1="440" y1="200" x2="420" y2="340" className="dec-con-line dec-cl-5" />
                <line x1="420" y1="340" x2="350" y2="420" className="dec-con-line dec-cl-6" />
                <line x1="350" y1="420" x2="200" y2="440" className="dec-con-line dec-cl-7" />
                <line x1="200" y1="440" x2="90" y2="380" className="dec-con-line dec-cl-8" />
                <line x1="90" y1="380" x2="60" y2="250" className="dec-con-line dec-cl-9" />
                <line x1="60" y1="250" x2="80" y2="60" className="dec-con-line dec-cl-10" />
                {/* Inner cross-links */}
                <line x1="180" y1="130" x2="350" y2="420" className="dec-con-line dec-cl-cross" />
                <line x1="400" y1="110" x2="90" y2="380" className="dec-con-line dec-cl-cross" />
                <line x1="440" y1="200" x2="80" y2="60" className="dec-con-line dec-cl-cross" />
                <line x1="250" y1="80" x2="200" y2="440" className="dec-con-line dec-cl-cross" />
                <line x1="420" y1="340" x2="60" y2="250" className="dec-con-line dec-cl-cross" />

                {/* Animated signal pulses along lines */}
                <circle r="3" fill="#1a7a7a" className="dec-signal">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M80,60 L180,130 L250,80 L400,110" />
                </circle>
                <circle r="3" fill="#0f4a4a" className="dec-signal">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M440,200 L420,340 L350,420 L200,440" />
                </circle>
                <circle r="2" fill="#1a7a7a" className="dec-signal" opacity="0.7">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M200,440 L90,380 L60,250 L80,60" />
                </circle>
                <circle r="2.5" fill="#0f4a4a" className="dec-signal" opacity="0.8">
                  <animateMotion dur="3.5s" repeatCount="indefinite" path="M180,130 L350,420" />
                </circle>
                <circle r="2" fill="#1a7a7a" className="dec-signal" opacity="0.6">
                  <animateMotion dur="5s" repeatCount="indefinite" path="M400,110 L90,380" />
                </circle>

                {/* Constellation dots (nodes) */}
                <circle cx="80"  cy="60"  r="4" fill="#0f4a4a" opacity="0.8" />
                <circle cx="180" cy="130" r="5" fill="#0f4a4a" opacity="0.9" />
                <circle cx="250" cy="80"  r="3.5" fill="#1a7a7a" opacity="0.7" />
                <circle cx="400" cy="110" r="5" fill="#0f4a4a" opacity="0.85" />
                <circle cx="440" cy="200" r="4" fill="#1a7a7a" opacity="0.75" />
                <circle cx="420" cy="340" r="5" fill="#0f4a4a" opacity="0.9" />
                <circle cx="350" cy="420" r="4" fill="#1a7a7a" opacity="0.8" />
                <circle cx="200" cy="440" r="5" fill="#0f4a4a" opacity="0.85" />
                <circle cx="90"  cy="380" r="4.5" fill="#1a7a7a" opacity="0.8" />
                <circle cx="60"  cy="250" r="3.5" fill="#0f4a4a" opacity="0.7" />

                {/* Glow halos on key nodes */}
                <circle cx="180" cy="130" r="14" fill="none" stroke="rgba(15,74,74,0.15)" strokeWidth="1" className="dec-node-halo" />
                <circle cx="400" cy="110" r="14" fill="none" stroke="rgba(15,74,74,0.15)" strokeWidth="1" className="dec-node-halo" />
                <circle cx="420" cy="340" r="14" fill="none" stroke="rgba(15,74,74,0.15)" strokeWidth="1" className="dec-node-halo" />
                <circle cx="200" cy="440" r="14" fill="none" stroke="rgba(15,74,74,0.15)" strokeWidth="1" className="dec-node-halo" />

                {/* Tiny ambient stars */}
                {[
                  [45, 150], [130, 30], [320, 50], [460, 160], [470, 300],
                  [380, 470], [120, 460], [30, 320], [160, 250], [340, 250],
                  [250, 350], [310, 160], [140, 350], [390, 250], [220, 170],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="1.5" fill="#0f4a4a" opacity="0.3" className={`dec-twinkle dec-tw-${(i % 5) + 1}`} />
                ))}
              </svg>

              {/* 3D Rotating Cube */}
              <div className="dec-cube-wrapper">
                <div className="dec-cube-glow" />
                <div className="dec-cube-scene">
                  <div className="dec-cube">
                    <div className="dec-cube-face dec-face-front">
                      <Network size={24} />
                      <span>Protocol</span>
                    </div>
                    <div className="dec-cube-face dec-face-back">
                      <Shield size={24} />
                      <span>Trust</span>
                    </div>
                    <div className="dec-cube-face dec-face-right">
                      <Eye size={24} />
                      <span>Verify</span>
                    </div>
                    <div className="dec-cube-face dec-face-left">
                      <Globe size={24} />
                      <span>Open</span>
                    </div>
                    <div className="dec-cube-face dec-face-top">
                      <Layers size={24} />
                      <span>Layers</span>
                    </div>
                    <div className="dec-cube-face dec-face-bottom">
                      <Lock size={24} />
                      <span>Secure</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating glass data cards */}
              <div className="dec-datacard dec-dc-1">
                <div className="dec-dc-row">
                  <Activity size={12} />
                  <span className="dec-dc-label">Throughput</span>
                </div>
                <span className="dec-dc-value">1.2M <small>req/s</small></span>
                <div className="dec-dc-bar"><div className="dec-dc-fill" style={{ width: '78%' }} /></div>
              </div>
              <div className="dec-datacard dec-dc-2">
                <div className="dec-dc-row">
                  <Shield size={12} />
                  <span className="dec-dc-label">Verified</span>
                </div>
                <span className="dec-dc-value">99.97%</span>
                <div className="dec-dc-bar"><div className="dec-dc-fill" style={{ width: '99%' }} /></div>
              </div>
              <div className="dec-datacard dec-dc-3">
                <div className="dec-dc-row">
                  <Cpu size={12} />
                  <span className="dec-dc-label">Nodes</span>
                </div>
                <span className="dec-dc-value">248</span>
                <div className="dec-dc-spark">
                  {[4,7,5,9,6,8,10,7,9,8,6,10].map((h, i) => (
                    <div key={i} className="dec-dc-spark-bar" style={{ height: `${h * 10}%` }} />
                  ))}
                </div>
              </div>

              {/* Orbit energy ring */}
              <div className="dec-energy-ring">
                <svg viewBox="0 0 400 400" fill="none">
                  <circle cx="200" cy="200" r="190" stroke="url(#dec-energy-grad)" strokeWidth="1" strokeDasharray="8 12" className="dec-energy-path" />
                  <circle cx="200" cy="200" r="165" stroke="url(#dec-energy-grad2)" strokeWidth="0.5" strokeDasharray="4 16" className="dec-energy-path-r" />
                  <defs>
                    <linearGradient id="dec-energy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0f4a4a" stopOpacity="0" />
                      <stop offset="30%" stopColor="#1a7a7a" stopOpacity="0.5" />
                      <stop offset="70%" stopColor="#0f4a4a" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#1a7a7a" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="dec-energy-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1a7a7a" stopOpacity="0" />
                      <stop offset="50%" stopColor="#0f4a4a" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1a7a7a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats */}
      
      </header>

      {/* ══════════ PHILOSOPHY ══════════ */}
      <section className="dec-section dec-philosophy">
        {/* Ambient background elements */}
        <div className="dec-phil-bg" aria-hidden="true">
          <div className="dec-phil-glow dec-phil-glow-1" />
          <div className="dec-phil-glow dec-phil-glow-2" />
          <div className="dec-phil-grid-lines" />
        </div>

        <div className="content-wrapper">
          {/* Section header — large & cinematic */}
          <div className="dec-phil-header animate-on-scroll">
            <span className="dec-eyebrow"><GitBranch size={14} /> Philosophy</span>
            <h2 className="dec-phil-title">
              The Philosophy Behind<br />
              <span className="dec-phil-title-em">Ad Mandala</span>
            </h2>
            <p className="dec-phil-subtitle">
              Why decentralization matters — and why <em>timing</em> matters more.
            </p>
          </div>

          {/* Guarantees — Three animated cards */}
          <div className="dec-phil-intro animate-on-scroll delay-1">
            <p className="dec-phil-lead">Decentralization offers powerful guarantees:</p>
          </div>

          <div className="dec-phil-guarantees">
            <div className="dec-phil-guarantee animate-on-scroll delay-1">
              <div className="dec-phil-guarantee-icon">
                <Eye size={28} />
                <div className="dec-phil-guarantee-ring" />
              </div>
              <h3>Independent Verification</h3>
              <p>Every impression, click, and conversion can be validated by multiple independent parties — no single entity controls truth.</p>
              <div className="dec-phil-guarantee-shine" />
            </div>

            <div className="dec-phil-guarantee animate-on-scroll delay-2">
              <div className="dec-phil-guarantee-icon">
                <Users size={28} />
                <div className="dec-phil-guarantee-ring" />
              </div>
              <h3>Reduced Trust in Intermediaries</h3>
              <p>Participants verify outcomes directly. No reliance on opaque middlemen or self-reported metrics that can't be audited.</p>
              <div className="dec-phil-guarantee-shine" />
            </div>

            <div className="dec-phil-guarantee animate-on-scroll delay-3">
              <div className="dec-phil-guarantee-icon">
                <BarChart3 size={28} />
                <div className="dec-phil-guarantee-ring" />
              </div>
              <h3>Transparent Settlement</h3>
              <p>Every transaction is recorded, auditable, and deterministic — creating a financial layer built on proof, not promises.</p>
              <div className="dec-phil-guarantee-shine" />
            </div>
          </div>

          {/* The "But" — dramatic transition */}
          <div className="dec-phil-but animate-on-scroll">
            <div className="dec-phil-but-line" />
            <div className="dec-phil-but-content">
              <div className="dec-phil-but-icon">
                <Shield size={24} />
              </div>
              <div className="dec-phil-but-text">
                <h3>But premature decentralization breaks things.</h3>
                <p>When systems decentralize before they're ready, they introduce friction, complexity, and fragility — solving theoretical problems while creating real ones. Every step must be <strong>earned</strong>, not rushed.</p>
              </div>
            </div>
            <div className="dec-phil-but-line" />
          </div>

          {/* Principle — cinematic statement */}
          <div className="dec-phil-principle animate-on-scroll">
            <div className="dec-phil-principle-inner">
              <div className="dec-phil-principle-accent" />
              <div className="dec-phil-principle-body">
                <span className="dec-phil-principle-label">Ad Mandala is built on a simple principle</span>
                <blockquote className="dec-phil-principle-quote">
                  Decentralization should <span className="dec-phil-quote-em">emerge</span> from proven infrastructure — not replace it overnight.
                </blockquote>
              </div>
              <div className="dec-phil-principle-visual" aria-hidden="true">
                <svg viewBox="0 0 120 120" fill="none" className="dec-phil-principle-svg">
                  <circle cx="60" cy="60" r="50" stroke="rgba(15,74,74,0.12)" strokeWidth="1" strokeDasharray="4 6" className="dec-svg-spin" />
                  <circle cx="60" cy="60" r="35" stroke="rgba(15,74,74,0.18)" strokeWidth="1" strokeDasharray="3 5" className="dec-svg-spin-r" />
                  <circle cx="60" cy="60" r="18" fill="rgba(15,74,74,0.06)" stroke="rgba(15,74,74,0.2)" strokeWidth="1" />
                  <circle cx="60" cy="60" r="5" fill="#0f4a4a" opacity="0.7" />
                  {/* Orbiting dots */}
                  <circle r="3" fill="#0f4a4a" opacity="0.5">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M60,10 A50,50 0 1,1 59.9,10" />
                  </circle>
                  <circle r="2" fill="#1a7a7a" opacity="0.4">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M60,25 A35,35 0 1,0 60.1,25" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ THE MANDALA APPROACH ══════════ */}
      <section className="dec-section dec-approach">
        {/* Ambient background */}
        <div className="dec-approach-bg" aria-hidden="true">
          <div className="dec-approach-orb dec-approach-orb-1" />
          <div className="dec-approach-orb dec-approach-orb-2" />
          <div className="dec-approach-dots" />
        </div>

        <div className="content-wrapper">
          {/* Section header */}
          <div className="dec-approach-header animate-on-scroll">
            <span className="dec-eyebrow"><Box size={14} /> The Mandala Approach</span>
            <h2 className="dec-approach-title">
              A Mandala Represents<br />
              <span className="dec-approach-title-words">
                <span className="dec-approach-word">Balance.</span>{' '}
                <span className="dec-approach-word">Structure.</span>{' '}
                <span className="dec-approach-word dec-approach-word-em">Interconnection.</span>
              </span>
            </h2>
          </div>

          {/* Main content: visual + description side-by-side */}
          <div className="dec-approach-main">
            {/* Left side — Large animated Mandala */}
            <div className="dec-approach-visual animate-on-scroll delay-1" aria-hidden="true">
              <div className="dec-mandala-container">
                {/* Outer glow ring */}
                <div className="dec-mandala-glow" />

                <svg viewBox="0 0 400 400" className="dec-mandala-svg-new" fill="none">
                  {/* Outermost ring */}
                  <circle cx="200" cy="200" r="190" stroke="rgba(15,74,74,0.06)" strokeWidth="1" />
                  {/* Dashed orbit rings */}
                  <circle cx="200" cy="200" r="160" stroke="rgba(15,74,74,0.1)" strokeWidth="1" strokeDasharray="8 6" className="dec-svg-spin" />
                  <circle cx="200" cy="200" r="120" stroke="rgba(15,74,74,0.14)" strokeWidth="1.5" strokeDasharray="5 8" className="dec-svg-spin-r" />
                  <circle cx="200" cy="200" r="80" stroke="rgba(15,74,74,0.18)" strokeWidth="1" strokeDasharray="4 6" className="dec-svg-spin" style={{ animationDuration: '80s' }} />

                  {/* Core */}
                  <circle cx="200" cy="200" r="42" fill="rgba(15,74,74,0.04)" stroke="rgba(15,74,74,0.2)" strokeWidth="1.5" />
                  <circle cx="200" cy="200" r="24" fill="#0f4a4a" />
                  <text x="200" y="197" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" letterSpacing="1.5">AD</text>
                  <text x="200" y="208" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="6" fontWeight="600" letterSpacing="0.8">MANDALA</text>

                  {/* Layer labels on rings */}
                  {/* Top — Verification */}
                  <circle cx="200" cy="40" r="18" fill="white" stroke="rgba(15,74,74,0.15)" strokeWidth="1" />
                  <text x="200" y="38" textAnchor="middle" fill="#0f4a4a" fontSize="5.5" fontWeight="700">VERIFY</text>
                  <text x="200" y="47" textAnchor="middle" fill="#0f4a4a" fontSize="4" opacity="0.5">Layer</text>

                  {/* Right — Settlement */}
                  <circle cx="360" cy="200" r="18" fill="white" stroke="rgba(15,74,74,0.15)" strokeWidth="1" />
                  <text x="360" y="198" textAnchor="middle" fill="#0f4a4a" fontSize="5.5" fontWeight="700">SETTLE</text>
                  <text x="360" y="207" textAnchor="middle" fill="#0f4a4a" fontSize="4" opacity="0.5">Layer</text>

                  {/* Bottom — Governance */}
                  <circle cx="200" cy="360" r="18" fill="white" stroke="rgba(15,74,74,0.15)" strokeWidth="1" />
                  <text x="200" y="358" textAnchor="middle" fill="#0f4a4a" fontSize="5.5" fontWeight="700">GOVERN</text>
                  <text x="200" y="367" textAnchor="middle" fill="#0f4a4a" fontSize="4" opacity="0.5">Layer</text>

                  {/* Left — Participants */}
                  <circle cx="40" cy="200" r="18" fill="white" stroke="rgba(15,74,74,0.15)" strokeWidth="1" />
                  <text x="40" y="198" textAnchor="middle" fill="#0f4a4a" fontSize="5.5" fontWeight="700">OPEN</text>
                  <text x="40" y="207" textAnchor="middle" fill="#0f4a4a" fontSize="4" opacity="0.5">Layer</text>

                  {/* Connection lines from core to outer nodes */}
                  <line x1="200" y1="58" x2="200" y2="158" stroke="rgba(15,74,74,0.08)" strokeWidth="1" />
                  <line x1="342" y1="200" x2="242" y2="200" stroke="rgba(15,74,74,0.08)" strokeWidth="1" />
                  <line x1="200" y1="342" x2="200" y2="242" stroke="rgba(15,74,74,0.08)" strokeWidth="1" />
                  <line x1="58" y1="200" x2="158" y2="200" stroke="rgba(15,74,74,0.08)" strokeWidth="1" />

                  {/* Diagonal cross connections */}
                  <line x1="260" y1="80" x2="310" y2="130" stroke="rgba(15,74,74,0.05)" strokeWidth="1" strokeDasharray="3 6" />
                  <line x1="310" y1="270" x2="260" y2="320" stroke="rgba(15,74,74,0.05)" strokeWidth="1" strokeDasharray="3 6" />
                  <line x1="140" y1="320" x2="90" y2="270" stroke="rgba(15,74,74,0.05)" strokeWidth="1" strokeDasharray="3 6" />
                  <line x1="90" y1="130" x2="140" y2="80" stroke="rgba(15,74,74,0.05)" strokeWidth="1" strokeDasharray="3 6" />

                  {/* Small dots on intersection rings */}
                  <circle cx="260" cy="80" r="3" fill="#0f4a4a" opacity="0.25" />
                  <circle cx="320" cy="140" r="3" fill="#1a7a7a" opacity="0.2" />
                  <circle cx="320" cy="260" r="3" fill="#0f4a4a" opacity="0.25" />
                  <circle cx="260" cy="320" r="3" fill="#1a7a7a" opacity="0.2" />
                  <circle cx="140" cy="320" r="3" fill="#0f4a4a" opacity="0.25" />
                  <circle cx="80" cy="260" r="3" fill="#1a7a7a" opacity="0.2" />
                  <circle cx="80" cy="140" r="3" fill="#0f4a4a" opacity="0.25" />
                  <circle cx="140" cy="80" r="3" fill="#1a7a7a" opacity="0.2" />

                  {/* Animated signal pulses */}
                  <circle r="3" fill="#0f4a4a" opacity="0.6">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M200,58 L200,158" />
                  </circle>
                  <circle r="2.5" fill="#1a7a7a" opacity="0.5">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M342,200 L242,200" />
                  </circle>
                  <circle r="3" fill="#0f4a4a" opacity="0.6">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M200,342 L200,242" />
                  </circle>
                  <circle r="2.5" fill="#1a7a7a" opacity="0.5">
                    <animateMotion dur="4.5s" repeatCount="indefinite" path="M58,200 L158,200" />
                  </circle>
                </svg>

                {/* Floating status badges around mandala */}
                <div className="dec-mandala-badge dec-mandala-badge-1">
                  <Zap size={12} /> Scalable
                </div>
                <div className="dec-mandala-badge dec-mandala-badge-2">
                  <Shield size={12} /> Reliable
                </div>
                <div className="dec-mandala-badge dec-mandala-badge-3">
                  <Activity size={12} /> Usable
                </div>
              </div>
            </div>

            {/* Right side — Description + features */}
            <div className="dec-approach-copy animate-on-scroll delay-2">
              <p className="dec-approach-desc">
                Ad Mandala applies this principle by decentralizing <strong>only the layers that benefit from it</strong> — while keeping the system usable, scalable, and reliable at every stage of growth.
              </p>
              <p className="dec-approach-desc-sub">
                Rather than forcing everything onto a decentralized stack, we selectively layer trust-minimized components where they matter most — verification, settlement, and governance — while the performance-critical exchange layer remains optimized for speed and scale.
              </p>

              {/* Three pillars — vertical cards */}
              <div className="dec-approach-pillars">
                <div className="dec-approach-pillar">
                  <div className="dec-approach-pillar-num">01</div>
                  <div className="dec-approach-pillar-body">
                    <h4>Additive, Never Disruptive</h4>
                    <p>Decentralized features are layered on top of working infrastructure — never at the cost of existing functionality.</p>
                  </div>
                </div>
                <div className="dec-approach-pillar">
                  <div className="dec-approach-pillar-num">02</div>
                  <div className="dec-approach-pillar-body">
                    <h4>Every Stage Is Production-Ready</h4>
                    <p>The system works fully at each phase. No "future promises" — every release is usable, stable, and live.</p>
                  </div>
                </div>
                <div className="dec-approach-pillar">
                  <div className="dec-approach-pillar-num">03</div>
                  <div className="dec-approach-pillar-body">
                    <h4>Layers Improve Independently</h4>
                    <p>Each concentric layer evolves on its own schedule. Upgrades to one never break another.</p>
                  </div>
                </div>
              </div>

              <div className="dec-approach-closing">
                <div className="dec-approach-closing-bar" />
                <p>The system grows stronger — each stage building on the last.</p>
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
            <h2>The Mandala Protocol Architecture</h2>
          </div>

          <div className="dec-arch-layout">
            {/* Left — protocol diagram */}
            <div className="dec-arch-diagram animate-on-scroll">
              <div className="dec-arch-ring dec-arch-ring-3">
                <span className="dec-arch-ring-label">Open Participants</span>
                <div className="dec-arch-ring dec-arch-ring-2">
                  <span className="dec-arch-ring-label">Verification Nodes</span>
                  <div className="dec-arch-ring dec-arch-ring-1">
                    <span className="dec-arch-ring-label">Protocol Logic</span>
                    <div className="dec-arch-core">
                      <span>Immutable<br />Event Record</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — text content */}
            <div className="dec-arch-text">
              <p className="dec-arch-lead animate-on-scroll">
                At the core of the protocol lies an immutable record of verified ad events.
              </p>

              <p className="dec-arch-sub animate-on-scroll">Surrounding this core:</p>

              <ul className="dec-arch-list">
                <li className="animate-on-scroll">
                  <span className="dec-arch-bullet" />
                  Protocol logic governs pricing and settlement
                </li>
                <li className="animate-on-scroll delay-1">
                  <span className="dec-arch-bullet dec-arch-bullet-2" />
                  Decentralized verification nodes validate events and detect fraud
                </li>
                <li className="animate-on-scroll delay-2">
                  <span className="dec-arch-bullet dec-arch-bullet-3" />
                  Open participants connect without centralized gatekeeping
                </li>
              </ul>

              <p className="dec-arch-closing animate-on-scroll">
                Together, these layers form a balanced, self-correcting system.
              </p>
            </div>
          </div>
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
