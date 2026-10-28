import { galleryArtworks } from '../data/artworks';
import Reveal from '../components/ui/Reveal';
import './Shop.css';

export default function Shop() {
  return (
    <main className="shop-page" aria-labelledby="shop-title">
      <section className="shop-hero">
        <div className="container">
          <Reveal>
            <span className="shop-hero__eyebrow">Faim Arts / Originals</span>
            <h1 id="shop-title">Collect an <em>Original</em></h1>
            <p>
              Explore the complete Faim Arts gallery collection. Each work will soon link directly to its secure Selar purchase page.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shop-collection" aria-label="Available artworks">
        <div className="container">
          <div className="shop-grid">
            {galleryArtworks.map((artwork, index) => (
              <Reveal key={artwork.id} delay={(index % 3) * 90} className="shop-card">
                <article>
                  <div className="shop-card__image-wrap">
                    <img
                      src={artwork.image}
                      alt={artwork.alt || artwork.title}
                      loading="lazy"
                      style={{ objectPosition: artwork.objectPosition || 'center center' }}
                    />
                    <span className="shop-card__number">№ {String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="shop-card__details">
                    <div>
                      <h2>{artwork.title}</h2>
                      <p>{artwork.medium}</p>
                    </div>
                    {artwork.shopUrl ? (
                      <a
                        className="shop-card__selar-link"
                        href={artwork.shopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on Selar <span aria-hidden="true">→</span>
                      </a>
                    ) : (
                      <span className="shop-card__coming-soon">Selar link coming soon</span>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
