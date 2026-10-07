import { Link } from 'react-router-dom';
import './Footer.css';

const categories = ['Portraits', 'Graphite', 'Paintings', 'Sketches'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">

        <div className="footer__top">
          <Link to="/" className="footer__logo" aria-label="Faim Arts – home">
            Faim Arts
          </Link>

          <nav className="footer__links" aria-label="Footer categories">
            {categories.map((cat, i) => (
              <span key={cat} className="footer__link-wrap">
                <a
                  href="#"
                  id={`footer-${cat.toLowerCase()}`}
                  className="footer__link"
                >
                  {cat}
                </a>
                {i < categories.length - 1 && (
                  <span className="footer__sep" aria-hidden="true">/</span>
                )}
              </span>
            ))}
          </nav>

          <div className="footer__socials">
            <a href="#" id="footer-instagram" aria-label="Instagram" className="footer__social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a href="#" id="footer-x" aria-label="X (Twitter)" className="footer__social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
            <a href="#" id="footer-email" aria-label="Email" className="footer__social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2,4 12,13 22,4" />
              </svg>
            </a>
          </div>
        </div>

        <hr className="footer__divider" aria-hidden="true" />

        <div className="footer__bottom">
          <p className="footer__copy">&copy; {year} Faim Arts. All rights reserved.</p>
          <p className="footer__tagline">Art. Identity. Humanity.</p>
        </div>

      </div>
    </footer>
  );
}
