import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import './AboutPreview.css';

export default function AboutPreview() {
  return (
    <section
      className="about-preview"
      id="about"
      aria-labelledby="about-preview-heading"
    >
      <div className="container">
        <div className="about-preview__layout">

          {/* Left: text */}
          <Reveal className="about-preview__text">
            <span className="about-preview__label">About the Artist</span>
            <div className="about-preview__label-line" aria-hidden="true" />

            <h2 id="about-preview-heading" className="about-preview__headline">
              Every Face<br />
              Carries a&nbsp;<em>Story.</em>
            </h2>

            <p className="about-preview__body">
              I create portraits that explore identity, emotion, and human presence.
              Through graphite and traditional mediums, I seek to capture the quiet
              power in everyday people and the depth within their stories.
            </p>

            <div className="about-preview__stats" role="list">
              <div className="about-preview__stat" role="listitem">
                <span className="about-preview__stat-n">120+</span>
                <span className="about-preview__stat-l">Portraits</span>
              </div>
              <div className="about-preview__stat-sep" aria-hidden="true" />
              <div className="about-preview__stat" role="listitem">
                <span className="about-preview__stat-n">8</span>
                <span className="about-preview__stat-l">Exhibitions</span>
              </div>
              <div className="about-preview__stat-sep" aria-hidden="true" />
              <div className="about-preview__stat" role="listitem">
                <span className="about-preview__stat-n">6+</span>
                <span className="about-preview__stat-l">Years</span>
              </div>
            </div>

            <Link to="/about" id="about-learn-more" className="about-preview__btn">
              <span>Learn More</span>
              <span aria-hidden="true" className="about-preview__btn-arrow">→</span>
            </Link>
          </Reveal>

          {/* Right: studio photo */}
          <Reveal delay={160} className="about-preview__img-wrap">
            <img
              src="/studio.jpg"
              alt="Iyanu working in the studio on a large graphite portrait at an easel"
              className="about-preview__img"
              loading="lazy"
              width={700}
              height={875}
            />
            <div className="about-preview__frame" aria-hidden="true" />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
