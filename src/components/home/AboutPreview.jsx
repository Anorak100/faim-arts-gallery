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
              Iyanu invites viewers to pause, question, and look&nbsp;<em>inward</em>
            </h2>

            <p className="about-preview__body">
              Her work examines the ideas, emotions, relationships, and realities that shape how people understand themselves and the world around them, often inviting reflection on what is easily overlooked or taken for granted.
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

          {/* Right: artist portrait photo */}
          <Reveal delay={160} className="about-preview__img-wrap">
            <img
              src="https://res.cloudinary.com/dru2blbte/image/upload/f_auto,q_auto,w_1400/v1792620376/IMG_1123.JPG.jpg"
              alt="Iyanuoluwapo Akoteyon, pencil artist"
              className="about-preview__img"
              loading="lazy"
              width={700}
              height={875}
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
