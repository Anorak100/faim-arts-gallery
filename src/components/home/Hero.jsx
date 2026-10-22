import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Featured Work – Hero">
      <div className="hero__wrapper">
        <div className="hero__grid">

        {/* ── LEFT: text column ─────────────────── */}
        <div className="hero__text-col">

          {/* Eyebrow: "01 / FEATURED WORK ———" */}
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-label">01 / Featured Work</span>
            <div className="hero__eyebrow-line" aria-hidden="true" />
          </div>

          {/* Text block with 1px left vertical bar */}
          <div className="hero__text-block">
            <div className="hero__left-bar" aria-hidden="true" />

            <div className="hero__text-inner">
              {/* Headline — 4 lines */}
              <h1
                className="hero__headline"
                aria-label="The art of representing the soul, values, and the human condition"
              >
                <span className="hero__line hero__line--1">The Art Of</span>
                <span className="hero__line hero__line--2">Representing The</span>
                <span className="hero__line hero__line--3">Soul, Values, And</span>
                <span className="hero__line hero__line--4">
                  The Human&nbsp;<em>Condition</em>
                </span>
              </h1>

              {/* Sub-label */}
              <p className="hero__sub">
                <span className="hero__sub-line">Art created using pencils</span>
                <span className="hero__sub-line hero__sub-by">by Iyanuoluwapo Akoteyon (Faim Arts)</span>
              </p>

              {/* CTA */}
              <div className="hero__cta-wrap">
                <Link to="/work" id="hero-cta" className="hero__cta">
                  <span>Explore the Work</span>
                  <span className="hero__cta-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: portrait column ────────────── */}
        <div className="hero__img-col" aria-hidden="true">
          <img
            src="https://res.cloudinary.com/dru2blbte/image/upload/v1792620147/IMG_0991.JPG.jpg"
            alt="Portrait artwork of man in hourglass by Iyanuoluwapo Akoteyon"
            className="hero__img"
            width={800}
            height={1000}
            fetchPriority="high"
          />

          {/* Gradient: portrait left edge fades into cream */}
          <div className="hero__img-fade" />
        </div>

        </div>
      </div>
    </section>
  );
}
