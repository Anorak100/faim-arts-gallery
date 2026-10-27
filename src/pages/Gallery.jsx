import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/ui/Reveal';
import { artworks, categories } from '../data/artworks';
import './Gallery.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All Works');
  const [viewMode, setViewMode] = useState('salon'); // 'salon' | 'grid'
  const [activeArtwork, setActiveArtwork] = useState(null);
  const [viewerImageLoading, setViewerImageLoading] = useState(false);
  const closeBtnRef = useRef(null);
  const triggerRefs = useRef({});

  // Filter artworks
  const filteredWorks = activeCategory === 'All Works'
    ? artworks
    : artworks.filter((item) => item.category === activeCategory);

  // Focus management for modal
  const openViewer = (work) => {
    setViewerImageLoading(true);
    setActiveArtwork(work);
  };

  const closeViewer = () => {
    const closedId = activeArtwork?.id;
    setViewerImageLoading(false);
    setActiveArtwork(null);
    if (closedId && triggerRefs.current[closedId]) {
      setTimeout(() => {
        triggerRefs.current[closedId]?.focus();
      }, 0);
    }
  };

  // Next / Prev Navigation
  const currentIndex = activeArtwork ? filteredWorks.findIndex((w) => w.id === activeArtwork.id) : -1;

  const navigateArtwork = (direction) => {
    if (currentIndex === -1) return;
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = filteredWorks.length - 1;
    if (nextIndex >= filteredWorks.length) nextIndex = 0;
    setViewerImageLoading(true);
    setActiveArtwork(filteredWorks[nextIndex]);
  };

  // Keyboard navigation & lock body scroll
  useEffect(() => {
    if (activeArtwork) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeViewer();
        if (e.key === 'ArrowRight') navigateArtwork(1);
        if (e.key === 'ArrowLeft') navigateArtwork(-1);
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeArtwork, currentIndex, filteredWorks]);

  return (
    <main className="gallery-page" id="gallery-page" aria-label="Faim Arts Gallery – The Permanent Collection">
      {/* ── 1. Curatorial Header ───────────────────────────────── */}
      <section className="gallery-hero" aria-labelledby="gallery-heading">
        <div className="container">
          <Reveal>
            <div className="gallery-eyebrow">
              <span className="gallery-eyebrow__label">03 / The Archive</span>
              <div className="gallery-eyebrow__line" aria-hidden="true" />
            </div>

            <div className="gallery-hero__content">
              <h1 id="gallery-heading" className="gallery-hero__title">
                The Permanent <br />
                <em>Collection</em>
              </h1>
              <p className="gallery-hero__intro">
                A comprehensive anthology of contemporary hyperrealistic pencil and charcoal works by Iyanuoluwapo Akoteyon.
                Each drawing is an intimate dialogue with time, exploring identity, spiritual depth, and the resilience of the human condition.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="gallery-metrics" role="list">
              <div className="gallery-metric" role="listitem">
                <span className="gallery-metric__num">{artworks.length}</span>
                <span className="gallery-metric__label">Archival Pieces</span>
              </div>
              <div className="gallery-metric__sep" aria-hidden="true" />
              <div className="gallery-metric" role="listitem">
                <span className="gallery-metric__num">{categories.length - 1}</span>
                <span className="gallery-metric__label">Curated Series</span>
              </div>
              <div className="gallery-metric__sep" aria-hidden="true" />
              <div className="gallery-metric" role="listitem">
                <span className="gallery-metric__num">100%</span>
                <span className="gallery-metric__label">Pure Graphite &amp; Carbon</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Filter Bar & View Controls ──────────────────────── */}
      <section className="gallery-controls-bar" aria-label="Gallery filters and controls">
        <div className="container gallery-controls-bar__inner">
          {/* Category Tabs */}
          <nav className="gallery-tabs" aria-label="Filter works by series">
            {categories.map((cat) => {
              const count = cat === 'All Works' ? artworks.length : artworks.filter((w) => w.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`gallery-tab ${isActive ? 'gallery-tab--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                >
                  <span className="gallery-tab__name">{cat}</span>
                  <span className="gallery-tab__count">({count})</span>
                </button>
              );
            })}
          </nav>

          {/* Layout Mode Switcher */}
          <div className="gallery-view-switch" role="group" aria-label="Layout view switcher">
            <span className="gallery-view-switch__label">View:</span>
            <button
              type="button"
              className={`gallery-view-btn ${viewMode === 'salon' ? 'is-active' : ''}`}
              onClick={() => setViewMode('salon')}
              aria-label="Salon exhibition wall view"
              title="Salon Wall"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="7" height="11" rx="1" />
                <rect x="14" y="3" width="7" height="6" rx="1" />
                <rect x="14" y="13" width="7" height="8" rx="1" />
                <rect x="3" y="17" width="7" height="4" rx="1" />
              </svg>
              <span>Salon</span>
            </button>
            <button
              type="button"
              className={`gallery-view-btn ${viewMode === 'grid' ? 'is-active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Structured uniform grid view"
              title="Uniform Grid"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <span>Grid</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 3. The Works Display ───────────────────────────────── */}
      <section className="gallery-showcase" aria-label="Artworks gallery">
        <div className="container">
          <div className={`gallery-grid gallery-grid--${viewMode}`}>
            {filteredWorks.map((work, index) => {
              const serial = String(index + 1).padStart(2, '0');
              const isTall = work.aspect === 'tall';

              return (
                <Reveal
                  key={work.id}
                  delay={(index % 4) * 80}
                  className={`gallery-card ${isTall && viewMode === 'salon' ? 'gallery-card--tall' : ''}`}
                >
                  <article
                    className="gallery-card__inner"
                    tabIndex={0}
                    role="button"
                    ref={(el) => { triggerRefs.current[work.id] = el; }}
                    onClick={() => openViewer(work)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openViewer(work);
                      }
                    }}
                    aria-label={`View ${work.title || 'Untitled Artwork'} – ${work.medium}`}
                  >
                    {/* Visual Matting Frame */}
                    <div className="gallery-card__frame">
                      <img
                        src={work.image}
                        alt={work.alt || work.title}
                        className="gallery-card__img"
                        loading="lazy"
                        width={600}
                        height={750}
                        style={{ objectPosition: work.objectPosition || 'center center' }}
                      />

                      {/* Number badge */}
                      <span className="gallery-card__serial" aria-hidden="true">
                        № {serial}
                      </span>

                      {/* Hover Overlay */}
                      <div className="gallery-card__overlay" aria-hidden="true">
                        <span className="gallery-card__action-text">Inspect Masterwork</span>
                        <div className="gallery-card__zoom-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Museum Placard Details */}
                    <div className="gallery-card__placard">
                      <div className="gallery-card__placard-top">
                        <h2 className="gallery-card__title">{work.title || 'Untitled Study'}</h2>
                        <span className="gallery-card__year">{work.year}</span>
                      </div>
                      <p className="gallery-card__medium">{work.medium}</p>
                      <div className="gallery-card__footer">
                        <span className="gallery-card__dimensions">{work.dimensions}</span>
                        <span className="gallery-card__category">{work.category}</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {filteredWorks.length === 0 && (
            <div className="gallery-empty">
              <p>No works found in this curation.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── 4. Fullscreen Masterwork Lightbox ──────────────────── */}
      {activeArtwork && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeArtwork.title} detail viewer`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeViewer();
          }}
        >
          {/* Close button */}
          <button
            ref={closeBtnRef}
            type="button"
            className="gallery-modal__close"
            onClick={closeViewer}
            aria-label="Close viewer (Escape)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            type="button"
            className="gallery-modal__nav gallery-modal__nav--prev"
            onClick={(e) => { e.stopPropagation(); navigateArtwork(-1); }}
            aria-label="Previous artwork (Left arrow)"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            type="button"
            className="gallery-modal__nav gallery-modal__nav--next"
            onClick={(e) => { e.stopPropagation(); navigateArtwork(1); }}
            aria-label="Next artwork (Right arrow)"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Main Modal Layout */}
          <div className="gallery-modal__container">
            {/* Image Stage */}
            <div className={`gallery-modal__stage ${viewerImageLoading ? 'is-loading' : ''}`} aria-busy={viewerImageLoading}>
              {viewerImageLoading && <div className="gallery-modal__skeleton" aria-hidden="true" />}
              <img
                key={activeArtwork.id}
                src={activeArtwork.viewerImage}
                alt={activeArtwork.alt || activeArtwork.title}
                className="gallery-modal__img"
                onLoad={() => setViewerImageLoading(false)}
                onError={() => setViewerImageLoading(false)}
              />
            </div>

            {/* Curatorial Sidebar / Metadata Sheet */}
            <aside className="gallery-modal__meta" aria-label="Curatorial details">
              <div className="gallery-modal__meta-top">
                <span className="gallery-modal__counter">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(filteredWorks.length).padStart(2, '0')}
                </span>
                <span className="gallery-modal__badge">{activeArtwork.category}</span>
              </div>

              <h3 className="gallery-modal__title">{activeArtwork.title}</h3>
              <div className="gallery-modal__line" aria-hidden="true" />

              <dl className="gallery-modal__specs">
                <div className="gallery-modal__spec-row">
                  <dt>Medium</dt>
                  <dd>{activeArtwork.medium}</dd>
                </div>
                <div className="gallery-modal__spec-row">
                  <dt>Dimensions</dt>
                  <dd>{activeArtwork.dimensions}</dd>
                </div>
                <div className="gallery-modal__spec-row">
                  <dt>Year</dt>
                  <dd>{activeArtwork.year}</dd>
                </div>
              </dl>

              {activeArtwork.description && (
                <p className="gallery-modal__description">
                  {activeArtwork.description}
                </p>
              )}

              <div className="gallery-modal__actions">
                <Link
                  to={`/commissions?inquire=${encodeURIComponent(activeArtwork.title)}`}
                  className="gallery-modal__inquire-btn"
                  onClick={closeViewer}
                >
                  <span>Inquire for Acquisition</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      )}

      {/* ── 5. Bottom Acquisition Banner ───────────────────────── */}
      <section className="gallery-footer-cta" aria-labelledby="gallery-cta-title">
        <div className="container">
          <Reveal className="gallery-footer-cta__box">
            <span className="gallery-footer-cta__eyebrow" aria-hidden="true">FAIM ARTS COLLECTION</span>
            <h2 id="gallery-cta-title" className="gallery-footer-cta__title">
              Acquire an Original Work or <em>Commission a Custom Gaze</em>
            </h2>
            <p className="gallery-footer-cta__desc">
              Each original masterwork comes signed and accompanied by an authenticated Certificate of Archival Provenance.
              Private studio commissions are welcomed for distinguished collectors worldwide.
            </p>
            <div className="gallery-footer-cta__btns">
              <Link to="/commissions" className="about-btn about-btn--primary">
                <span>Request Commission</span>
                <span className="about-btn__arrow" aria-hidden="true">&rarr;</span>
              </Link>
              <Link to="/contact" className="about-btn about-btn--secondary">
                <span>Contact Studio</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
