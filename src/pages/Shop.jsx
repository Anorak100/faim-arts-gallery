import { useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryArtworks } from '../data/artworks';
import Reveal from '../components/ui/Reveal';
import './Shop.css';

const collectorFaqs = [
  {
    question: 'Do you ship internationally?',
    answer: 'Yes. Original works are shipped worldwide via DHL Express. Each artwork is packed with museum-minded care in protective archival materials and durable outer packaging to ensure it arrives safely.',
  },
  {
    question: 'Will my artwork include a certificate of authenticity?',
    answer: 'Yes. Every original Faim Arts work is signed and accompanied by a Certificate of Authenticity, documenting its provenance for your collection.',
  },
  {
    question: 'Do artworks arrive framed?',
    answer: 'Works are delivered unframed, allowing you to select a presentation that best suits your space and personal collection. Please contact the studio before purchase if you would like to discuss framing guidance.',
  },
];

export default function Shop() {
  const [openFaq, setOpenFaq] = useState(0);

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

      <section className="shop-collector" aria-labelledby="collector-title">
        <div className="container shop-collector__layout">
          <Reveal>
            <div className="shop-collector__intro">
              <span>Collector Information</span>
              <h2 id="collector-title">Collect with <em>Confidence</em></h2>
              <p>Everything you need to know before welcoming an original Faim Arts work into your collection.</p>
            </div>
          </Reveal>

          <div className="shop-faq" role="list">
            {collectorFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={faq.question} delay={index * 70}>
                  <article className={`shop-faq__item ${isOpen ? 'is-open' : ''}`} role="listitem">
                    <button
                      type="button"
                      className="shop-faq__trigger"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={`shop-faq-answer-${index}`}
                    >
                      <span>{faq.question}</span>
                      <span className="shop-faq__symbol" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div id={`shop-faq-answer-${index}`} className="shop-faq__answer" hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="shop-commission-cta" aria-labelledby="shop-commission-title">
        <div className="container">
          <Reveal>
            <div className="shop-commission-cta__box">
              <div>
                <span>Private Commissions</span>
                <h2 id="shop-commission-title">Looking for something <em>specific?</em></h2>
                <p>Missed out on a piece or want an original tailored to your space? Commission a work made for your story.</p>
              </div>
              <Link to="/commissions" className="shop-commission-cta__button">
                Request a Commission <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
