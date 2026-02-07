import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import './App.css';

import Home from './pages/Home';
import Publishers from './pages/Publishers';
import DSPs from './pages/DSPs';
import Decentralization from './pages/Decentralization';

// Wrapper to scroll to top on route change
const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Router>
      <div className="app-background">
         {/* Background Animation Elements exist globally */}
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
      </div>

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publishers" element={<Publishers />} />
          <Route path="/advertisers" element={<DSPs />} />
          <Route path="/decentralization" element={<Decentralization />} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
