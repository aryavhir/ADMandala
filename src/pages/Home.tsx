import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MonitorPlay, Target, Network, Shield, TrendingUp, Users, BarChart3, Globe, Lock, CheckCircle2, Sparkles, Zap, Eye, Vote, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CardSwap, { Card } from '../components/Live today/CardSwap';
import Footer from '../components/Footer';

function Home() {
  useScrollAnimation();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Wake up backend service when homepage is visited
  useEffect(() => {
    fetch('https://cms-backend-mnan.onrender.com/').catch(() => {});
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }}></div>
      
      <header className="hero-section">
        <div className="hero-background">
          <div className="tech-grid"></div>
        </div>
        <div className="content-wrapper">
          <h1 className="hero-headline animate-on-scroll">
            <span className="gradient-text">Programmatic Advertising.</span><br />
            Built to Evolve.
          </h1>
          <p className="hero-subheadline animate-on-scroll delay-1">
            Ad Mandala is a live, centralized programmatic advertising exchange — designed from day one to transition into a decentralized, verifiable protocol.
          </p>
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

          <div className="hero-split-container animate-on-scroll delay-3">
            {/* Left Pane: Publishers */}
            <div className="split-pane pane-left">
              <div className="pane-content">
                <div className="pane-label">FOR PUBLISHERS / SSPS</div>
                <h3 className="pane-title">Monetize Inventory Responsibly</h3>
                <p className="pane-desc">Maximize yield through a reliable programmatic exchange today — and secure your place in a transparent future.</p>
                <Link to="/publishers" className="pane-btn btn-blue">Publisher Access</Link>
              </div>
              <div className="pane-visual visual-light">
                 {/* Dashboard Mockup */}
                 <div className="mockup-window light-window">
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
                                <path d="M0,35 Q20,35 25,20 T50,25 T75,10 T100,5 V40 H0 Z" fill="rgba(43, 108, 176, 0.1)" />
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

            {/* Right Pane: Advertisers */}
            <div className="split-pane pane-right">
              <div className="pane-content">
                <div className="pane-label">FOR DSPS / ADVERTISERS</div>
                <h3 className="pane-title">Access Verified Quality Supply</h3>
                <p className="pane-desc">Target premium audiences with centralized enforcement today — and verifiable delivery on-chain tomorrow.</p>
                <Link to="/advertisers" className="pane-btn btn-white">Advertiser Access</Link>
              </div>
              <div className="pane-visual visual-dark">
                 {/* Analytics Dashboard Mockup */}
                 <div className="mockup-window dark-window">
                    <div className="analytics-panel">
                       <div className="metrics-row">
                          <div className="metric-box">
                            <div className="metric-label"></div>
                            <div className="metric-value large"></div>
                          </div>
                          <div className="metric-box">
                            <div className="metric-label"></div>
                            <div className="metric-value"></div>
                          </div>
                       </div>
                       <div className="chart-area">
                          <div className="bar-chart">
                            <div className="bar" style={{"--height": "60%"} as React.CSSProperties}></div>
                            <div className="bar" style={{"--height": "85%"} as React.CSSProperties}></div>
                            <div className="bar" style={{"--height": "45%"} as React.CSSProperties}></div>
                            <div className="bar" style={{"--height": "75%"} as React.CSSProperties}></div>
                            <div className="bar" style={{"--height": "95%"} as React.CSSProperties}></div>
                            <div className="bar" style={{"--height": "50%"} as React.CSSProperties}></div>
                          </div>
                       </div>
                       <div className="geo-map">
                          <div className="map-dot" style={{"left": "30%", "top": "40%"}}></div>
                          <div className="map-dot" style={{"left": "60%", "top": "25%"}}></div>
                          <div className="map-dot" style={{"left": "75%", "top": "55%"}}></div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Scrolling feature strips */}
      {
        (() => {
          const scrollingRef1 = useRef<HTMLDivElement | null>(null);
          const scrollingRef2 = useRef<HTMLDivElement | null>(null);

          const featurePills = [
            'Transparency First',
            'Zero-Knowledge Proofs',
            'Real-time Settlement',
            'Decentralized Identity',
            'Verifiable Ad Tech',
            'Fraud Prevention',
          ];

          const secondRowPills = [
            'Centralized Performance',
            'Verified Delivery',
            'Traffic Quality',
            'Reliable Payouts',
            'Contextual Suitability',
            'Yield Optimization',
          ];

          return (
            <>
              <div ref={scrollingRef1} className="scrolling-features hidden-mobile">
                <div className="scrolling-features-row">
                  {[...featurePills, ...featurePills, ...featurePills].map((pill, index) => (
                    <div key={index} className="feature-pill">
                      {pill}
                    </div>
                  ))}
                </div>
              </div>

              <div ref={scrollingRef2} className="scrolling-features hidden-mobile" >
                <div className="scrolling-features-row" style={{ animationDirection: 'reverse' }}>
                  {[...secondRowPills, ...secondRowPills, ...secondRowPills].map((pill, index) => (
                    <div key={index} className="feature-pill">
                      {pill}
                    </div>
                  ))}
                </div>
              </div>
            </>
          );
        })()
      }

      <section className="section what-is animate-on-scroll">
        <div className="content-wrapper">
          <div className="what-is-layout">
            <div className="what-is-text">
              <h2 className="what-is-heading">What Is Ad Mandala?</h2>
              <p className="what-is-body">
                Ad Mandala is a programmatic advertising exchange that connects publishers and demand partners through a reliable, centralized system — while preparing the foundation for a more transparent, decentralized future.
              </p>
              <p className="what-is-body what-is-emphasis">
                The platform enables efficient monetization and performance today, without forcing the ecosystem to adopt unproven infrastructure prematurely.
              </p>
              <div className="what-is-tags">
                <span className="what-is-tag"><CheckCircle2 size={14} /> Centralized Today</span>
                <span className="what-is-tag"><Shield size={14} /> Verifiable Tomorrow</span>
                <span className="what-is-tag"><TrendingUp size={14} /> Built to Scale</span>
              </div>
            </div>

            <div className="mandala-visual animate-on-scroll delay-1">
              <div className="mandala-orbit-system">
                {/* Outer ring */}
                <div className="orbit-ring ring-outer">
                  <div className="orbit-node node-pub" title="Publishers"><MonitorPlay size={16} /></div>
                  <div className="orbit-node node-dsp" title="DSPs"><Target size={16} /></div>
                  <div className="orbit-node node-verify" title="Verification"><Shield size={16} /></div>
                  <div className="orbit-node node-data" title="Analytics"><BarChart3 size={16} /></div>
                </div>
                {/* Middle ring */}
                <div className="orbit-ring ring-mid">
                  <div className="orbit-node node-net" title="Network"><Network size={14} /></div>
                  <div className="orbit-node node-growth" title="Growth"><TrendingUp size={14} /></div>
                  <div className="orbit-node node-users" title="Partners"><Users size={14} /></div>
                </div>
                {/* Inner ring */}
                <div className="orbit-ring ring-inner">
                  <div className="orbit-node node-globe" title="Global"><Globe size={14} /></div>
                </div>
                {/* Core */}
                <div className="mandala-core">
                  <Sparkles size={22} />
                  <div className="core-pulse"></div>
                  <div className="core-pulse pulse-2"></div>
                </div>
                {/* Data flow lines */}
                <svg className="mandala-connections" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="170" className="connection-ring" />
                  <circle cx="200" cy="200" r="120" className="connection-ring ring-delay-1" />
                  <circle cx="200" cy="200" r="65" className="connection-ring ring-delay-2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="why-section-deco">
          <div className="why-deco-circle c1"></div>
          <div className="why-deco-circle c2"></div>
        </div>

        <div className="content-wrapper">
          {/* Header */}
          <div className="why-heading-block animate-on-scroll">
            <span className="why-chip">THE TENSION IN AD TECH</span>
            <h2 className="why-main-title">
              Why Ad Mandala Exists
            </h2>
            <p className="why-tagline">
              Advertising needs reliability <em>and</em> trust. Today's ecosystem forces a choice between them.
            </p>
          </div>

          {/* The Scale — two sides */}
          <div className="why-scale animate-on-scroll">
            {/* Left pillar */}
            <div className="scale-pillar pillar-left">
              <div className="pillar-top">
                <div className="pillar-glyph glyph-perf">
                  <Lock size={24} />
                </div>
                <h3 className="pillar-label">Centralized Performance</h3>
              </div>
              <div className="pillar-body">
                <p>Scale and speed depend on centralized systems — walled gardens, black-box auctions, and opaque intermediaries that prioritize throughput over accountability.</p>
              </div>
              <div className="pillar-traits">
                <span className="trait"><CheckCircle2 size={13} /> Low latency bidding</span>
                <span className="trait"><CheckCircle2 size={13} /> Massive scale</span>
                <span className="trait"><CheckCircle2 size={13} /> Proven infrastructure</span>
              </div>
              <div className="pillar-verdict verdict-warn">
                <span>But —</span> opacity erodes trust
              </div>
            </div>

            {/* Center balance */}
            <div className="scale-fulcrum">
              <div className="fulcrum-bar"></div>
              <div className="fulcrum-center">
                <Sparkles size={16} />
              </div>
              <div className="fulcrum-bar"></div>
            </div>

            {/* Right pillar */}
            <div className="scale-pillar pillar-right">
              <div className="pillar-top">
                <div className="pillar-glyph glyph-trust">
                  <Globe size={24} />
                </div>
                <h3 className="pillar-label">Decentralized Trust</h3>
              </div>
              <div className="pillar-body">
                <p>Transparency and verification demand open protocols — but raw decentralization can't yet match the millisecond speed programmatic advertising requires.</p>
              </div>
              <div className="pillar-traits">
                <span className="trait"><CheckCircle2 size={13} /> Full transparency</span>
                <span className="trait"><CheckCircle2 size={13} /> Verifiable delivery</span>
                <span className="trait"><CheckCircle2 size={13} /> No single point of failure</span>
              </div>
              <div className="pillar-verdict verdict-warn">
                <span>But —</span> speed gaps remain
              </div>
            </div>
          </div>

          {/* Resolution strip */}
          <div className="why-resolution-strip animate-on-scroll delay-1">
            <div className="resolution-icon-row">
              <div className="res-icon-pip"><Shield size={18} /></div>
              <div className="res-connector"></div>
              <div className="res-icon-pip"><TrendingUp size={18} /></div>
              <div className="res-connector"></div>
              <div className="res-icon-pip"><Users size={18} /></div>
            </div>
            <h3 className="resolution-headline">Ad Mandala bridges this gap</h3>
            <p className="resolution-body">
              Delivering production-grade programmatic infrastructure <strong>now</strong>, while methodically decentralizing the layers that matter most — <strong>verification</strong>, <strong>settlement</strong>, and <strong>governance</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="section whats-live whats-live-dark">
  <div className="dsp-future-bg">
          <div className="dsp-future-orb orb-1"></div>
          <div className="dsp-future-orb orb-2"></div>
          <div className="dsp-future-grid-lines"></div>
        </div>
        <div className="content-wrapper">
          <div className="live-split-layout">
            <div className="live-left-content animate-on-scroll">
              <div className="live-indicator"><span className="blink"></span> SYSTEM OPERATIONAL</div>
              <h2 className="live-title-large">What's Live Today</h2>
              <p className="live-description-text">
                Our centralized exchange is processing real programmatic trades right now — building the operational foundation that will inform every layer of future decentralization.
              </p>
              <p className="live-description-sub">
                Each component represents a live system actively serving the programmatic advertising ecosystem.
              </p>
            </div>
            
            <div className="live-right-animation animate-on-scroll delay-1">
              <div className="card-swap-wrapper">
                <CardSwap
                  width={420}
                  height={520}
                  cardDistance={55}
                  verticalDistance={65}
                  delay={5000}
                  pauseOnHover={true}
                  skewAmount={3}
                  easing="elastic"
                >
                  <Card>
                    <div className="system-card-inner">
                      <div className="card-icon-wrapper">
                        <Network size={44} className="card-main-icon" strokeWidth={1.5} />
                      </div>
                      <div className="card-text-content">
                        <h3 className="card-title">Centralized Programmatic Exchange</h3>
                        <p className="card-description">Real-time bidding infrastructure processing live programmatic trades</p>
                      </div>
                      <div className="card-status-badge">
                        <span className="status-dot-mini" />
                        <span>Live</span>
                      </div>
                    </div>
                  </Card>
                  
                  <Card>
                    <div className="system-card-inner">
                      <div className="card-icon-wrapper">
                        <Users size={44} className="card-main-icon" strokeWidth={1.5} />
                      </div>
                      <div className="card-text-content">
                        <h3 className="card-title">Publisher &amp; Demand-Side Integrations</h3>
                        <p className="card-description">Seamless connections with SSPs, DSPs, and advertising partners</p>
                      </div>
                      <div className="card-status-badge">
                        <span className="status-dot-mini" />
                        <span>Active</span>
                      </div>
                    </div>
                  </Card>
                  
                  <Card>
                    <div className="system-card-inner">
                      <div className="card-icon-wrapper">
                        <Shield size={44} className="card-main-icon" strokeWidth={1.5} />
                      </div>
                      <div className="card-text-content">
                        <h3 className="card-title">Traffic Quality Enforcement</h3>
                        <p className="card-description">Advanced fraud detection and invalid traffic prevention</p>
                      </div>
                      <div className="card-status-badge">
                        <span className="status-dot-mini" />
                        <span>Enforcing</span>
                      </div>
                    </div>
                  </Card>
                  
                  <Card>
                    <div className="system-card-inner">
                      <div className="card-icon-wrapper">
                        <BarChart3 size={44} className="card-main-icon" strokeWidth={1.5} />
                      </div>
                      <div className="card-text-content">
                        <h3 className="card-title">Performance Reporting &amp; Monetization</h3>
                        <p className="card-description">Real-time analytics and revenue optimization tools</p>
                      </div>
                      <div className="card-status-badge">
                        <span className="status-dot-mini" />
                        <span>Tracking</span>
                      </div>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
          
         
        </div>
      </section>

      <section className="section roadmap-section">
        <div className="roadmap-bg-shapes">
          <div className="rm-shape rm-shape-1"></div>
          <div className="rm-shape rm-shape-2"></div>
          <div className="rm-shape rm-shape-3"></div>
        </div>

        <div className="content-wrapper">
          {/* Header */}
          <div className="roadmap-header animate-on-scroll">
            <span className="roadmap-chip">OUR APPROACH</span>
            <h2 className="roadmap-title">Built for the Long Term</h2>
            <p className="roadmap-subtitle">
              Ad Mandala is not decentralizing for ideology — but for outcomes.<br />
              A deliberate, phased path where each layer earns its place.
            </p>
          </div>

          {/* Journey Track */}
          <div className="journey-track animate-on-scroll">
            {/* Track line behind cards */}
            <div className="track-line">
              <div className="track-line-fill"></div>
            </div>

            {/* Phase 1 */}
            <div className="journey-phase phase-active">
              <div className="phase-beacon">
                <div className="beacon-ring"></div>
                <div className="beacon-dot"><Zap size={18} /></div>
              </div>
              <div className="phase-card">
                <div className="phase-tag tag-live"><span className="tag-dot"></span> Live Now</div>
                <h3 className="phase-name">Centralized Performance</h3>
                <p className="phase-desc">
                  Integrating seamlessly with existing SSPs and DSPs to ensure high-speed, reliable programmatic trading.
                </p>
                <div className="phase-features">
                  <div className="pf-item"><Network size={14} /><span>Real-time bidding</span></div>
                  <div className="pf-item"><BarChart3 size={14} /><span>Analytics & reporting</span></div>
                  <div className="pf-item"><Shield size={14} /><span>Fraud prevention</span></div>
                </div>
              </div>
            </div>

            {/* Arrow connector */}
            <div className="journey-arrow"><ArrowRight size={16} /></div>

            {/* Phase 2 */}
            <div className="journey-phase phase-next">
              <div className="phase-beacon">
                <div className="beacon-dot"><Eye size={18} /></div>
              </div>
              <div className="phase-card">
                <div className="phase-tag tag-next">Up Next</div>
                <h3 className="phase-name">On-Chain Verification</h3>
                <p className="phase-desc">
                  Posting cryptographic proofs of ad impressions to a public ledger for transparency — without slowing down bidding.
                </p>
                <div className="phase-features">
                  <div className="pf-item"><Lock size={14} /><span>Cryptographic proofs</span></div>
                  <div className="pf-item"><Globe size={14} /><span>Public ledger</span></div>
                  <div className="pf-item"><CheckCircle2 size={14} /><span>Verifiable delivery</span></div>
                </div>
              </div>
            </div>

            {/* Arrow connector */}
            <div className="journey-arrow"><ArrowRight size={16} /></div>

            {/* Phase 3 */}
            <div className="journey-phase phase-future">
              <div className="phase-beacon">
                <div className="beacon-dot"><Vote size={18} /></div>
              </div>
              <div className="phase-card">
                <div className="phase-tag tag-future">Horizon</div>
                <h3 className="phase-name">Decentralized Settlement</h3>
                <p className="phase-desc">
                  Gradually moving payment layers and governance to smart contracts as the ecosystem matures.
                </p>
                <div className="phase-features">
                  <div className="pf-item"><TrendingUp size={14} /><span>Smart contract payments</span></div>
                  <div className="pf-item"><Users size={14} /><span>Community governance</span></div>
                  <div className="pf-item"><Sparkles size={14} /><span>Token incentives</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom principle */}
          <div className="roadmap-principle animate-on-scroll delay-1">
            <div className="principle-line"></div>
            <p className="principle-text">
              Decentralization is introduced only where it <strong>improves trust</strong> without degrading <strong>performance</strong>.
            </p>
            <div className="principle-line"></div>
          </div>
        </div>
      </section>

      <section className="section target-audience">
        <div className="content-wrapper">
          <div className="audience-header animate-on-scroll">
            <h2 className="section-title">Who Ad Mandala Is For</h2>
          </div>

          <div className="audience-panels">
            {/* Publishers Panel */}
            <Link to="/publishers" className="aud-panel panel-pub animate-on-scroll">
              <div className="panel-accent"></div>
              <div className="panel-number">01</div>
              <div className="panel-body">
                <div className="panel-icon-row">
                  <div className="panel-icon pub-icon"><MonitorPlay size={28} /></div>
                  <span className="panel-label">PUBLISHERS &amp; SSPs</span>
                </div>
                <h3 className="panel-title">Monetize inventory through a reliable programmatic exchange today — and participate early in a more transparent future.</h3>
                <div className="panel-footer">
                  <span className="panel-link">
                    Publishers / SSPs
                    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={11} className="panel-arrow-svg">
                      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                    </svg>
                  </span>
                  <div className="panel-tags">
                    <span className="ptag"><TrendingUp size={13} /> Yield</span>
                    <span className="ptag"><Shield size={13} /> Quality</span>
                    <span className="ptag"><Sparkles size={13} /> Early Access</span>
                  </div>
                </div>
              </div>
              <div className="panel-glow"></div>
            </Link>

            {/* Advertisers Panel */}
            <Link to="/advertisers" className="aud-panel panel-adv animate-on-scroll delay-1">
              <div className="panel-accent"></div>
              <div className="panel-number">02</div>
              <div className="panel-body">
                <div className="panel-icon-row">
                  <div className="panel-icon adv-icon"><Target size={28} /></div>
                  <span className="panel-label">DSPs &amp; ADVERTISERS</span>
                </div>
                <h3 className="panel-title">Access quality supply with centralized enforcement today — and verifiable delivery tomorrow.</h3>
                <div className="panel-footer">
                  <span className="panel-link">
                    DSPs / Advertisers
                    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={11} className="panel-arrow-svg">
                      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                    </svg>
                  </span>
                  <div className="panel-tags">
                    <span className="ptag"><BarChart3 size={13} /> Performance</span>
                    <span className="ptag"><Lock size={13} /> Verified</span>
                    <span className="ptag"><CheckCircle2 size={13} /> Transparent</span>
                  </div>
                </div>
              </div>
              <div className="panel-glow"></div>
            </Link>
          </div>
        </div>
      </section>

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

      <Footer />
    </div>
  )
}

export default Home
