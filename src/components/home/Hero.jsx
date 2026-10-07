import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Featured Work – Hero">

      {/* 2-column grid: ~42% text | ~58% portrait */}
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
              {/* Headline — exactly 3 lines, each wrapped in its own span */}
              <h1
                className="hero__headline"
                aria-label="The Art of Seeing What Others Miss"
              >
                <span className="hero__line hero__line--1">The Art Of</span>
                <span className="hero__line hero__line--2">Seeing What</span>
                <span className="hero__line hero__line--3">
                  Others&nbsp;<em>Miss.</em>
                </span>
              </h1>

              {/* Sub-label */}
              <p className="hero__sub">
                <span className="hero__sub-line">Contemporary Portraiture</span>
                <span className="hero__sub-line hero__sub-by">By Iyanu</span>
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
            src="/hero.jpg"
            alt="Portrait of a woman wearing a traditional head wrap — featured work by Iyanu"
            className="hero__img"
            width={800}
            height={1000}
            fetchPriority="high"
          />

          {/* Gradient: portrait left edge fades into cream */}
          <div className="hero__img-fade" />

          {/* Rotated "PORTRAIT SERIES" edge label */}
          <span className="hero__series-label">Portrait Series</span>
        </div>

      </div>
    </section>
  );
}
