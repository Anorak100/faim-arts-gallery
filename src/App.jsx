import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout      from './components/layout/Layout';
import Home        from './pages/Home';
import ComingSoon  from './pages/ComingSoon';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/"            element={<Home />} />

          {/* Additional pages */}
          <Route path="/about"       element={<ComingSoon title="About" />} />
          <Route path="/gallery"     element={<ComingSoon title="Gallery" />} />
          <Route path="/commissions" element={<ComingSoon title="Commissions" />} />
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
