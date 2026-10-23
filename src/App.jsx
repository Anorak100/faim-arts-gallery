import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout      from './components/layout/Layout';
import Home        from './pages/Home';
import About       from './pages/About';
import Gallery     from './pages/Gallery';
import Commissions from './pages/Commissions';
import ComingSoon  from './pages/ComingSoon';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/"            element={<Home />} />

          {/* Gallery / Work */}
          <Route path="/gallery"     element={<Gallery />} />
          <Route path="/work"        element={<Gallery />} />

          {/* Additional pages */}
          <Route path="/about"       element={<About />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/shop"        element={<ComingSoon title="Shop" />} />
          <Route path="/learn"       element={<ComingSoon title="Learn" />} />
          <Route path="/contact"     element={<ComingSoon title="Contact" />} />

          {/* Fallback */}
          <Route path="*"            element={<ComingSoon title="Not Found" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
