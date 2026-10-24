import { useState, useEffect, useRef } from 'react';
import Reveal from '../components/ui/Reveal';
import { commissionArtworks } from '../data/artworks';
import './Commissions.css';

const tiers = [
  {
    name: 'Essential',
    size: '16 × 20 in — 18 × 24 in',
    hours: '40 – 60 Studio Hours',
    focus: 'Entry-level intimate portraiture focusing on singular subject presence and delicate ocular light.',
    includes: ['Archival Strathmore / Arches Cotton Paper', 'Single subject composition', 'Certificate of Authenticity', 'Flat custom archival packaging'],
  },
  {
    name: 'Deluxe',
    size: '20 × 28 in — 22 × 30 in',
    hours: '70 – 100 Studio Hours',
    focus: 'Core signature masterwork with dramatic chiaroscuro contrast and deep velvety background tones.',
    popular: true,
    includes: ['Museum heavyweight 300gsm cotton rag', 'Single or dual subject composition', 'Dedicated progress photo updates', 'Signed Certificate of Authenticity', 'Free global delivery via DHL Express'],
  },
  {
    name: 'Legacy',
    size: '24 × 36 in and larger',
    hours: '110 – 150+ Studio Hours',
    focus: 'Ultimate monumental statement portrait for multi-subject storytelling, generational heirlooms, or large spaces.',
    includes: ['Bespoke large-format archival paper', 'Multi-subject or intricate composition', 'Exclusive studio progress documentation', 'UV museum preservation seal', 'Bespoke wooden crate & DHL delivery'],
  },
];

const steps = [
  {
    num: '01',
    title: 'Consultation & Photo Selection',
    desc: 'We review your photographs, discussing lighting, posture, and the emotional essence of the subject to select the ideal reference.',
  },
  {
    num: '02',
    title: 'The Charcoal & Graphite Alchemy',
    desc: 'Over 60 to 140 hours, layers of 9B charcoal, carbon, and fine graphite are hand-rendered to build lifelike luminosity and velvety contrast.',
  },
  {
    num: '03',
    title: 'Progress Collaboration',
    desc: 'You receive behind-the-scenes studio photos and milestone check-ins as your commission comes to life on the easel.',
  },
  {
    num: '04',
    title: 'Archival Sealing & Global Delivery',
    desc: 'Treated with UV-protective fixative, signed, paired with a Certificate of Authenticity, and securely crated for worldwide delivery.',
  },
];

export default function Commissions() {
  const [activeArtwork, setActiveArtwork] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    size: 'Deluxe',
    message: '',
  });

  const closeBtnRef = useRef(null);
  const triggerRefs = useRef({});
  const formRef = useRef(null);

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

  const selectTierForForm = (tierName) => {
    setFormData((prev) => ({ ...prev, size: tierName }));
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Keyboard navigation & lock body scroll for modal
  useEffect(() => {
    if (activeArtwork) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeViewer();
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeArtwork]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const activeIndex = activeArtwork ? commissionArtworks.findIndex((w) => w.id === activeArtwork.id) : -1;

  return (
    <main className="commissions-page" id="commissions-page" aria-label="Bespoke Art Commissions by Iyanuoluwapo Akoteyon">
      {/* ── 1. Hero ────────────────────────────────────────────── */}
      <section className="commissions-hero" aria-labelledby="commissions-title">
        <div className="container">
          <Reveal>
            <div className="commissions-eyebrow">
              <span className="commissions-eyebrow__label">04 / Private Commissions</span>
              <div className="commissions-eyebrow__line" aria-hidden="true" />
            </div>

            <div className="commissions-hero__content">
              <h1 id="commissions-title" className="commissions-hero__title">
                Immortalize A Story <br />
                In <em>Graphite &amp; Charcoal</em>
              </h1>
              <p className="commissions-hero__intro">
                A private portrait commission is more than fine art—it is an enduring heirloom of love, heritage, and the human spirit.
                Iyanuoluwapo Akoteyon accepts a strictly limited number of bespoke commissions each season.
              </p>
            </div>

            <div className="commissions-badges" role="list">
              <div className="commissions-badge" role="listitem">
                <span className="commissions-badge__dot" aria-hidden="true" />
                <span>100% Hand-Drawn on Cotton Rag</span>
              </div>
              <div className="commissions-badge" role="listitem">
                <span className="commissions-badge__dot" aria-hidden="true" />
                <span>Certificate of Authenticity</span>
              </div>
              <div className="commissions-badge" role="listitem">
                <span className="commissions-badge__dot" aria-hidden="true" />
                <span>Worldwide Insured Shipping</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. The Commissioned Archive (8 Client Portraits — No Groupings, No Titles) ── */}
      <section className="commissions-portfolio" aria-labelledby="portfolio-title">
        <div className="container">
          <Reveal>
            <div className="commissions-portfolio__header">
              <div>
                <div className="commissions-eyebrow">
                  <span className="commissions-eyebrow__label">Client Works</span>
                  <div className="commissions-eyebrow__line" aria-hidden="true" />
                </div>
                <h2 id="portfolio-title" className="commissions-section-title">
                  The Commissioned <em>Archive</em>
                </h2>
              </div>
              <p className="commissions-portfolio__lead">
                A selection of private commissioned portraits drawn for collectors and families worldwide.
              </p>
            </div>
          </Reveal>

          {/* Cards Grid */}
          <div className="commissions-grid">
            {commissionArtworks.map((work, index) => {
              const serial = String(index + 1).padStart(2, '0');
              return (
                <Reveal key={work.id} delay={(index % 3) * 100} className="commissions-card-wrap">
                  <article
                    className="commissions-card"
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
                    aria-label={`Inspect commission portrait № ${serial}`}
                  >
                    <div className="commissions-card__frame">
                      <img
                        src={work.image}
                        alt={`Commissioned portrait drawing № ${serial}`}
                        className="commissions-card__img"
                        loading="lazy"
                        width={600}
                        height={750}
                      />
                      <span className="commissions-card__badge">№ {serial}</span>
                      <div className="commissions-card__overlay" aria-hidden="true">
                        <span>Inspect Drawing</span>
                      </div>
                    </div>

                    {/* Factual Specs Only — No Titles */}
                    <div className="commissions-card__placard">
                      <p className="commissions-card__medium">{work.medium}</p>
                      <div className="commissions-card__meta-row">
                        <span className="commissions-card__dimensions">{work.dimensions}</span>
                        <span className="commissions-card__sep" aria-hidden="true">&bull;</span>
                        <span className="commissions-card__year">{work.year}</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. The 4-Step Process ──────────────────────────────── */}
      <section className="commissions-process" aria-labelledby="process-heading">
        <div className="container">
          <Reveal>
            <div className="commissions-eyebrow">
              <span className="commissions-eyebrow__label">02 / The Journey</span>
              <div className="commissions-eyebrow__line" aria-hidden="true" />
            </div>
            <h2 id="process-heading" className="commissions-section-title">
              From Photograph to <em>Archival Masterwork</em>
            </h2>
            <p className="commissions-process__desc">
              Every commission is an intimate collaboration ensuring your story is treated with reverence, mastery, and discretion.
            </p>
          </Reveal>

          <div className="commissions-steps-grid">
            {steps.map((st, i) => (
              <Reveal key={st.num} delay={i * 120} className="commissions-step-card">
                <span className="commissions-step-card__num">{st.num}</span>
                <div className="commissions-step-card__bar" aria-hidden="true" />
                <h3 className="commissions-step-card__title">{st.title}</h3>
                <p className="commissions-step-card__desc">{st.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. The Commission Manifesto ─────────────────────── */}
      <section className="commissions-manifesto" id="manifesto" aria-labelledby="manifesto-heading">
        <div className="container">
          <Reveal>
            <div className="commissions-eyebrow">
              <span className="commissions-eyebrow__label">03 / Principles &amp; Guidelines</span>
              <div className="commissions-eyebrow__line" aria-hidden="true" />
            </div>
            <div className="commissions-manifesto__head">
              <h2 id="manifesto-heading" className="commissions-section-title">
                The Commission <em>Manifesto</em>
              </h2>
              <p className="commissions-manifesto__lead">
                Everything you need to know about booking, scope, freight, and reserving an original portrait drawing.
              </p>
            </div>
          </Reveal>

          <div className="commissions-manifesto__grid">
            {/* 1. 50% Deposit */}
            <Reveal delay={80} className="commissions-manifesto__card">
              <span className="commissions-manifesto__card-num">Policy 01</span>
              <h3 className="commissions-manifesto__card-title">50% Reservation Deposit</h3>
              <p className="commissions-manifesto__card-body">
                A 50% deposit payment is required once you decide your size and number of subjects <strong>before</strong> reference photos are requested via email.
              </p>
              <p className="commissions-manifesto__card-sub">
                You are welcome to request a video call to confirm my identity prior to making payment.
              </p>
            </Reveal>

            {/* 2. Portraits Exclusively */}
            <Reveal delay={120} className="commissions-manifesto__card">
              <span className="commissions-manifesto__card-num">Policy 02</span>
              <h3 className="commissions-manifesto__card-title">Portraits Exclusively</h3>
              <p className="commissions-manifesto__card-body">
                The commission price-list strictly covers <strong>portrait drawings</strong>. It does not cover imaginative or conceptual drawing requests.
              </p>
            </Reveal>

            {/* 3. Free Global DHL Freight */}
            <Reveal delay={160} className="commissions-manifesto__card">
              <span className="commissions-manifesto__card-num">Policy 03</span>
              <h3 className="commissions-manifesto__card-title">Complimentary Global DHL Freight</h3>
              <p className="commissions-manifesto__card-body">
                There are no hidden costs. All drawings are delivered <strong>for free worldwide via DHL Express</strong>. Clients and collectors should never worry about shipping fees.
              </p>
            </Reveal>

            {/* 4. Arrives Unframed */}
            <Reveal delay={200} className="commissions-manifesto__card">
              <span className="commissions-manifesto__card-num">Policy 04</span>
              <h3 className="commissions-manifesto__card-title">Delivered Unframed</h3>
              <p className="commissions-manifesto__card-body">
                Drawings arrive securely packed and unframed, giving you the complete freedom to frame the piece according to your personal taste and interior space.
              </p>
            </Reveal>

            {/* 5. Production Timeline */}
            <Reveal delay={240} className="commissions-manifesto__card">
              <span className="commissions-manifesto__card-num">Policy 05</span>
              <h3 className="commissions-manifesto__card-title">Timeline &amp; Turnaround</h3>
              <p className="commissions-manifesto__card-body">
                Each portrait requires between <strong>3 weeks to 2 months</strong> of dedicated studio work, depending on the scale and complexity of the subject.
              </p>
            </Reveal>

            {/* 6. Multiple Photo References */}
            <Reveal delay={280} className="commissions-manifesto__card">
              <span className="commissions-manifesto__card-num">Policy 06</span>
              <h3 className="commissions-manifesto__card-title">Flexible Photo References</h3>
              <p className="commissions-manifesto__card-body">
                You can submit multiple photographic references. Two or more subjects do not need to be in the same picture to be harmoniously composed into one portrait.
              </p>
            </Reveal>
          </div>

          {/* Archival Quality & Packaging Guarantee Banner */}
          <Reveal delay={150}>
            <div className="commissions-manifesto__banner">
              <div className="commissions-manifesto__banner-left">
                <span className="commissions-manifesto__banner-tag">Archival Standard &amp; Presentation</span>
                <p className="commissions-manifesto__banner-text">
                  Each commissioned drawing is rendered using museum-grade materials guaranteed to preserve their longevity across generations. Works arrive in premium protective packaging, accompanied by curated art-related gifts to elevate the collector experience.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. Sizing & Tiers ─────────────────────────────────── */}
      <section className="commissions-tiers" aria-labelledby="tiers-heading">
        <div className="container">
          <Reveal>
            <div className="commissions-eyebrow">
              <span className="commissions-eyebrow__label">03 / Formats</span>
              <div className="commissions-eyebrow__line" aria-hidden="true" />
            </div>
            <h2 id="tiers-heading" className="commissions-section-title">
              Curated <em>Commission Formats</em>
            </h2>
            <p className="commissions-tiers__lead">
              Custom dimensions and multiple-figure compositions are welcomed upon request.
            </p>
          </Reveal>

          <div className="commissions-tiers__grid">
            {tiers.map((tier, idx) => {
              const isSelected = formData.size === tier.name;
              return (
                <Reveal
                  key={tier.name}
                  delay={idx * 120}
                  className={`commissions-tier-card ${tier.popular ? 'is-popular' : ''} ${isSelected ? 'is-selected' : ''}`}
                >
                  {tier.popular && <span className="commissions-tier-card__popular-badge">Most Requested</span>}
                  <div className="commissions-tier-card__header">
                    <h3 className="commissions-tier-card__name">{tier.name}</h3>
                    <span className="commissions-tier-card__size">{tier.size}</span>
                    <span className="commissions-tier-card__hours">{tier.hours}</span>
                  </div>
                  <p className="commissions-tier-card__focus">{tier.focus}</p>
                  <div className="commissions-tier-card__sep" aria-hidden="true" />
                  <ul className="commissions-tier-card__list">
                    {tier.includes.map((inc) => (
                      <li key={inc}>
                        <span aria-hidden="true">&bull;</span> {inc}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`commissions-tier-card__btn ${isSelected ? 'commissions-tier-card__btn--active' : ''}`}
                    onClick={() => selectTierForForm(tier.name)}
                    aria-pressed={isSelected}
                  >
                    <span>{isSelected ? 'Format Selected ✓' : 'Select Format'}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Inquiry Form ───────────────────────────────────── */}
      <section ref={formRef} className="commissions-inquiry" aria-labelledby="inquiry-heading">
        <div className="container">
          <Reveal className="commissions-inquiry__box">
            <div className="commissions-inquiry__left">
              <div className="commissions-eyebrow">
                <span className="commissions-eyebrow__label">Inquire</span>
                <div className="commissions-eyebrow__line" aria-hidden="true" />
              </div>
              <h2 id="inquiry-heading" className="commissions-inquiry__title">
                Reserve Your <em>Commission</em>
              </h2>
              <p className="commissions-inquiry__text">
                Please complete the form below with details regarding your desired portrait.
                Iyanuoluwapo will personally review your inquiry and respond within 24 to 48 hours to confirm availability and schedule your consultation.
              </p>
              <div className="commissions-inquiry__note">
                <strong>Studio Availability:</strong> Currently booking commissions for the upcoming calendar season.
              </div>
            </div>

            <div className="commissions-inquiry__right">
              {formSubmitted ? (
                <div className="commissions-form-success" role="alert">
                  <div className="commissions-form-success__icon" aria-hidden="true">✓</div>
                  <h3 className="commissions-form-success__title">Inquiry Received</h3>
                  <p>
                    Thank you, <strong>{formData.name || 'Valued Collector'}</strong>. Your commission inquiry has been sent directly to Iyanu’s studio. We will be in touch shortly.
                  </p>
                  <button
                    type="button"
                    className="about-btn about-btn--secondary"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="commissions-form" onSubmit={handleSubmit}>
                  <div className="commissions-form__group">
                    <label htmlFor="comm-name">Full Name *</label>
                    <input
                      id="comm-name"
                      type="text"
                      required
                      placeholder="e.g. Adebayo Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="commissions-form__group">
                    <label htmlFor="comm-email">Email Address *</label>
                    <input
                      id="comm-email"
                      type="email"
                      required
                      placeholder="e.g. adebayo@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="commissions-form__group">
                    <label htmlFor="comm-country">Destination City &amp; Country *</label>
                    <input
                      id="comm-country"
                      type="text"
                      required
                      placeholder="e.g. Lagos, Nigeria / London, UK"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
                  </div>

                  <div className="commissions-form__group">
                    <label htmlFor="comm-size">Desired Format / Size</label>
                    <select
                      id="comm-size"
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    >
                      <option value="Essential">Essential (16 × 20 in — 18 × 24 in)</option>
                      <option value="Deluxe">Deluxe (20 × 28 in — 22 × 30 in)</option>
                      <option value="Legacy">Legacy (24 × 36 in+)</option>
                      <option value="Custom Bespoke Dimensions">Custom Bespoke Dimensions (Discuss during consultation)</option>
                    </select>
                  </div>

                  <div className="commissions-form__group">
                    <label htmlFor="comm-message">Tell Us About the Subject &amp; Story</label>
                    <textarea
                      id="comm-message"
                      rows={4}
                      placeholder="Describe the subject, occasion, or emotional tone you wish to capture..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="commissions-form__submit">
                    <span>Submit Commission Inquiry</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. Masterwork Lightbox Modal (No Titles) ──────────── */}
      {activeArtwork && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Commission portrait viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeViewer();
          }}
        >
          <button
            ref={closeBtnRef}
            type="button"
            className="gallery-modal__close"
            onClick={closeViewer}
            aria-label="Close viewer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="gallery-modal__container">
            <div className="gallery-modal__stage">
              <img
                src={activeArtwork.viewerImage}
                alt="Commissioned portrait drawing by Iyanuoluwapo Akoteyon"
                className="gallery-modal__img"
              />
            </div>

            <aside className="gallery-modal__meta">
              <div className="gallery-modal__meta-top">
                <span className="gallery-modal__counter">
                  № {String(activeIndex + 1).padStart(2, '0')} / {String(commissionArtworks.length).padStart(2, '0')}
                </span>
                <span className="gallery-modal__badge">{activeArtwork.year} · Private Collection</span>
              </div>

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
                  <dt>Provenance</dt>
                  <dd>Private Client Commission</dd>
                </div>
              </dl>

              <button
                type="button"
                className="gallery-modal__inquire-btn"
                onClick={() => {
                  closeViewer();
                  selectTierForForm('Deluxe');
                }}
              >
                <span>Inquire About A Portrait Commission</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </aside>
          </div>
        </div>
      )}
    </main>
  );
}
