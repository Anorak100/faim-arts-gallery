import { artworks } from '../../data/artworks';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import './SelectedWorks.css';

function ArtCard({ artwork, delay }) {
  return (
    <Reveal delay={delay} className={`art-card art-card--${artwork.size}`}>
      <div className="art-card__img-wrap">
        <img
          src={artwork.image}
          alt={artwork.alt}
          className="art-card__img"
          loading="lazy"
          width={600}
          height={800}
        />
        <div className="art-card__overlay" aria-hidden="true">
          <span className="art-card__overlay-text">View Work</span>
        </div>
      </div>

      <div className="art-card__info">
        <h3 className="art-card__title">{artwork.title}</h3>
        <p className="art-card__meta">
          {artwork.medium}&nbsp;&nbsp;|&nbsp;&nbsp;{artwork.year}
        </p>
        <div className="art-card__underline" aria-hidden="true" />
      </div>
    </Reveal>
  );
}

export default function SelectedWorks() {
  return (
    <section
      className="selected-works"
      id="gallery"
      aria-labelledby="works-heading"
    >
      <div className="container">
        <SectionHeading
          label="Selected Works"
          cta="View All"
          ctaHref="/work"
          ctaId="works-view-all"
        />
        <div className="selected-works__grid">
          {artworks.map((work, i) => (
            <ArtCard key={work.id} artwork={work} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
