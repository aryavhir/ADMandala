import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MonitorPlay, Target, Network, Shield, TrendingUp, Users, BarChart3, Globe, Lock, CheckCircle2, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Home() {
  useScrollAnimation();
  const [scrollProgress, setScrollProgress] = useState(0);

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

      <div className="ecosystem-ticker">
        <div className="ticker-track">
          {[...Array(4)].map((_, i) => (
             <span key={i} className="ticker-group">
                <span className="ticker-item">Transparency First</span>
                <span className="ticker-item">•</span>
                <span className="ticker-item">Zero-Knowledge Proofs</span>
                <span className="ticker-item">•</span>
                <span className="ticker-item">Real-time Settlement</span>
                <span className="ticker-item">•</span>
                <span className="ticker-item">Decentralized Identity</span>
                <span className="ticker-item">•</span>
                <span className="ticker-item">Verifiable Ad Tech</span>
                <span className="ticker-item">•</span>
                <span className="ticker-item">Fraud Prevention</span>
                <span className="ticker-item">•</span>
             </span>
          ))}
        </div>
      </div>

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

      <section className="section why-exists">
        <div className="why-bg-grain"></div>
        <div className="content-wrapper">
          <div className="why-header animate-on-scroll">
            <h2 className="section-title">Why Ad Mandala Exists</h2>
            <p className="why-lead">Advertising needs reliability and trust</p>
            <p className="why-sublead">Digital advertising today faces two competing realities:</p>
          </div>

          <div className="why-versus animate-on-scroll">
            <div className="versus-side versus-left">
              <div className="versus-icon-ring left-ring">
                <Lock size={22} />
              </div>
              <p className="versus-text">Scale and performance depend on centralized systems</p>
            </div>

            <div className="versus-divider">
              <div className="divider-line"></div>
              <span className="versus-label">vs</span>
              <div className="divider-line"></div>
            </div>

            <div className="versus-side versus-right">
              <div className="versus-icon-ring right-ring">
                <Globe size={22} />
              </div>
              <p className="versus-text">Transparency and trust demand decentralization</p>
            </div>
          </div>

          <div className="why-resolution animate-on-scroll delay-1">
            <div className="resolution-accent"></div>
            <p className="resolution-text">
              Ad Mandala bridges this gap by delivering production-grade programmatic infrastructure now, while methodically decentralizing the layers that matter most — verification, settlement, and governance.
            </p>
          </div>
        </div>
      </section>

      <section className="section whats-live">
        <div className="content-wrapper">
          <div className="live-header animate-on-scroll">
             <div className="live-indicator"><span className="blink"></span> SYSTEM OPERATIONAL</div>
             <h2 className="section-title">What’s Live Today</h2>
          </div>
          
          <div className="system-grid">
            <div className="system-card animate-on-scroll delay-1">
               <div className="card-header">
                  <Network size={20} className="sys-icon"/>
                  <span>EXCHANGE CORE</span>
               </div>
               <h3>Centralized Exchange</h3>
               <div className="status-badge">ACTIVE</div>
            </div>

            <div className="system-card animate-on-scroll delay-2">
               <div className="card-header">
                  <Users size={20} className="sys-icon"/>
                  <span>PARTNERS</span>
               </div>
               <h3>Publisher & DSP Integrations</h3>
               <div className="status-badge">ONBOARDING</div>
            </div>

            <div className="system-card animate-on-scroll delay-3">
               <div className="card-header">
                  <Shield size={20} className="sys-icon"/>
                  <span>SECURITY</span>
               </div>
               <h3>Traffic Quality Enforcement</h3>
               <div className="status-badge">ENFORCING</div>
            </div>

            <div className="system-card animate-on-scroll delay-4">
               <div className="card-header">
                  <BarChart3 size={20} className="sys-icon"/>
                  <span>REVENUE</span>
               </div>
               <h3>Performance Reporting</h3>
               <div className="status-badge">LIVE DATA</div>
            </div>
          </div>
          
          <div className="live-footer animate-on-scroll">
            <p>
              Real data. Real revenue. Real scale. <br/>
              <span className="sub">Informing the next phase of the protocol.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section long-term"  style={{background: '#fffdf7'}}>
        <div className="floating-shape shape-2"></div>
        <div className="content-wrapper">
          <h2 className="section-title animate-on-scroll">Built for the Long Term</h2>
          <h3 className="section-subtitle animate-on-scroll">A deliberate path to decentralization</h3>
          <p className="animate-on-scroll">Ad Mandala is not decentralizing for ideology — but for outcomes.</p>
          
          
          <div className="timeline-container animate-on-scroll">
             <div className="timeline-item">
                <span className="timeline-date">Phase 1: Now</span>
                <div className="timeline-content">
                   <h4>Centralized Performance</h4>
                   <p>Integrating seamlessly with existing SSPs and DSPs to ensure high-speed, reliable programmatic trading.</p>
                </div>
             </div>
             <div className="timeline-item">
                <span className="timeline-date">Phase 2: Hybrid</span>
                <div className="timeline-content">
                   <h4>On-Chain Verification</h4>
                   <p>Posting cryptographic proofs of ad impressions to a public ledger for transparency without slowing down bidding.</p>
                </div>
             </div>
             <div className="timeline-item">
                <span className="timeline-date">Phase 3: Future</span>
                <div className="timeline-content">
                   <h4>Decentralized Settlement</h4>
                   <p>Gradually moving payment layers and governance to smart contracts as the ecosystem matures.</p>
                </div>
             </div>
          </div>
          
          <p className="conclusion-text animate-on-scroll">
            Decentralization is introduced only where it improves trust without degrading performance.
          </p>
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
              <Link to="/publishers">Publishers & SSPs</Link>
              <Link to="/advertisers">DSPs & Advertisers</Link>
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
            <div className="copyright-new">© {new Date().getFullYear()} Ad Mandala. All rights reserved.</div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
