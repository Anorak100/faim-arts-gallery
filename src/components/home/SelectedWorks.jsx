import { useState, useEffect, useRef } from 'react';
import { artworks } from '../../data/artworks';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import './SelectedWorks.css';

function ArtCard({ artwork, delay, onSelect, setTriggerRef }) {
  return (
    <Reveal delay={delay} className={`art-card art-card--${artwork.size}`}>
      <div
        className="art-card__interactive"
        role="button"
        tabIndex={0}
        ref={(el) => setTriggerRef(artwork.id, el)}
        onClick={() => onSelect(artwork)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(artwork);
          }
        }}
        aria-label={artwork.title ? `View ${artwork.title}` : 'View artwork'}
      >
        <div className="art-card__img-wrap">
          <img
            src={artwork.image}
            alt={artwork.alt}
            className="art-card__img"
            style={{ objectPosition: artwork.objectPosition || 'center center' }}
            loading="lazy"
            width={600}
            height={800}
          />
          <div className="art-card__overlay" aria-hidden="true">
            <span className="art-card__overlay-text">View Work</span>
          </div>
        </div>

        {artwork.showInfo && (
          <div className="art-card__info">
            <h3 className="art-card__title">{artwork.title}</h3>
            <div className="art-card__underline" aria-hidden="true" />
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function SelectedWorks() {
  const [activeArtwork, setActiveArtwork] = useState(null);
  const closeBtnRef = useRef(null);
  const triggerRefs = useRef({});

  const setTriggerRef = (id, el) => {
    if (el) {
      triggerRefs.current[id] = el;
    }
  };

  const openViewer = (work) => {
    setActiveArtwork(work);
  };

  const closeViewer = () => {
    const closedId = activeArtwork?.id;
    setActiveArtwork(null);
    if (closedId && triggerRefs.current[closedId]) {
      setTimeout(() => {
        triggerRefs.current[closedId]?.focus();
      }, 0);
    }
  };

  // Lock scroll when viewer is open
  useEffect(() => {
    if (activeArtwork) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // Focus close button on open
      closeBtnRef.current?.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closeViewer();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeArtwork]);

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
            <ArtCard
              key={work.id}
              artwork={work}
              delay={i * 100}
              onSelect={openViewer}
              setTriggerRef={setTriggerRef}
            />
          ))}
        </div>
      </div>

      {/* Full-screen Image Viewer Modal */}
      {activeArtwork && (
        <div
          className="artwork-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={activeArtwork.title ? `${activeArtwork.title} viewer` : 'Artwork viewer'}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeViewer();
            }
          }}
        >
          {/* Close Button: Cream colored, >= 44px, always visible */}
          <button
            ref={closeBtnRef}
            type="button"
            className="artwork-viewer__close"
            onClick={closeViewer}
            aria-label="Close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Centered, uncropped image container */}
          <div
            className="artwork-viewer__content"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeViewer();
              }
            }}
          >
            <img
              src={activeArtwork.viewerImage}
              alt={activeArtwork.alt}
              className="artwork-viewer__img"
            />

            {/* "Core Values" in small text below image for cards 1 to 3, nothing for card 4 */}
            {activeArtwork.showInfo && activeArtwork.title && (
              <p className="artwork-viewer__caption">
                {activeArtwork.title}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
