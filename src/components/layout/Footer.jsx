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
            <a
              href="https://www.instagram.com/faimarts"
              id="footer-instagram"
              aria-label="Instagram"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@faimarts"
              id="footer-tiktok"
              aria-label="TikTok"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12.5 3v11.2a4.2 4.2 0 1 1-3.4-4.1" />
                <path d="M12.5 3c.4 3.2 2.4 5.2 5.5 5.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/faimarts"
              id="footer-facebook"
              aria-label="Facebook"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="mailto:faimarts@gmail.com"
              id="footer-email"
              aria-label="Email"
              className="footer__social"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2,4 12,13 22,4" />
              </svg>
            </a>
          </div>
        </div>

        <hr className="footer__divider" aria-hidden="true" />

        <div className="footer__bottom">
          <p className="footer__copy">&copy; {year} Faim Arts. All rights reserved.</p>
          <a
            className="footer__credit"
            href="https://israelakot.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed and built by Israel Akoteyon
          </a>
          <p className="footer__tagline">Art. Identity. Humanity.</p>
        </div>

      </div>
    </footer>
  );
}
