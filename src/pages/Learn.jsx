import { useState, useRef, useEffect } from 'react';
import Reveal from '../components/ui/Reveal';
import { learnPrograms, learnCategories } from '../data/learnPrograms';
import './Learn.css';

export default function Learn() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalProgram, setActiveModalProgram] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    program: 'Mastering Realism in Graphite & Charcoal',
    experience: 'Beginner (Just starting out)',
    message: '',
  });

  const formRef = useRef(null);
  const closeBtnRef = useRef(null);

  const filteredPrograms = learnPrograms.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const selectProgramForInquiry = (programTitle) => {
    setFormData((prev) => ({ ...prev, program: programTitle }));
    if (activeModalProgram) {
      setActiveModalProgram(null);
    }
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const openProgramModal = (program) => {
    setActiveModalProgram(program);
  };

  const closeProgramModal = () => {
    setActiveModalProgram(null);
  };

  useEffect(() => {
    if (activeModalProgram) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeProgramModal();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeModalProgram]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="learn-page" id="learn-page" aria-label="Faim Arts Learning Center">
      {/* ── 1. Hero ────────────────────────────────────────────── */}
      <section className="learn-hero" aria-labelledby="learn-hero-title">
        <div className="container">
          <Reveal>
            <div className="learn-eyebrow">
              <span className="learn-eyebrow__label">05 / Learning Center</span>
              <div className="learn-eyebrow__line" aria-hidden="true" />
            </div>

            <div className="learn-hero__content">
              <h1 id="learn-hero-title" className="learn-hero__title">
                Bridging The Gap To <em>Artistic Mastery</em>
              </h1>
              <p className="learn-hero__intro">
                Here you will find a list of my coaching programs &amp; offers, books and other resources that can help
                you cover the gap between where you are now and where you want to be in the shortest amount of time
                possible.
              </p>
            </div>

            <div className="learn-badges" role="list">
              <div className="learn-badge" role="listitem">
                <span className="learn-badge__dot" aria-hidden="true" />
                <span>Interactive 1-on-1 Zoom Mentorship</span>
              </div>
              <div className="learn-badge" role="listitem">
                <span className="learn-badge__dot" aria-hidden="true" />
                <span>Global Telegram Coaching Group</span>
              </div>
              <div className="learn-badge" role="listitem">
                <span className="learn-badge__dot" aria-hidden="true" />
                <span>Published Realism Manuals</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Category Filter & Offerings Grid ───────────────── */}
      <section className="learn-shelf" aria-labelledby="shelf-heading">
        <div className="container">
          <Reveal>
            <div className="learn-shelf__header">
              <div>
                <span className="learn-eyebrow__label">Programs &amp; Publications</span>
                <h2 id="shelf-heading" className="learn-section-title">
                  Curated <em>Learning Resources</em>
                </h2>
              </div>

              {/* Filter Tabs */}
              <div className="learn-filters" role="tablist" aria-label="Filter learning offerings">
                {learnCategories.map((cat) => (
                  <button
                    key={cat.id}
                    role="tab"
                    type="button"
                    aria-selected={activeCategory === cat.id}
                    className={`learn-filter-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <span>{cat.label}</span>
                    <span className="learn-filter-count">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Cards Grid */}
          <div className="learn-grid">
            {filteredPrograms.map((item, idx) => {
              const isBook = item.category === 'books';
              return (
                <Reveal key={item.id} delay={idx * 100} className="learn-card-wrap">
                  <article className={`learn-card ${isBook ? 'learn-card--book' : ''}`} aria-labelledby={`prog-title-${item.id}`}>
                    <div className="learn-card__frame">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="learn-card__img"
                        loading="lazy"
                        width={600}
                        height={450}
                      />
                      <span className="learn-card__badge">{item.tag}</span>
                    </div>

                    <div className="learn-card__body">
                      <div className="learn-card__meta-top">
                        <span className="learn-card__format">{item.format}</span>
                        {item.location && <span className="learn-card__location">{item.location}</span>}
                      </div>

                      <h3 id={`prog-title-${item.id}`} className="learn-card__title">
                        {item.title}
                      </h3>

                      <p className="learn-card__blurb">{item.blurb}</p>

                      {/* Pricing Tag */}
                      <div className="learn-card__price-box">
                        <div className="learn-card__price-main">
                          <span className="learn-card__price-label">Tuition / Investment</span>
                          <span className="learn-card__price-val">{item.price}</span>
                        </div>
                        {item.priceSub && <span className="learn-card__price-sub">{item.priceSub}</span>}
                        {item.priceNote && <span className="learn-card__price-note">{item.priceNote}</span>}
                      </div>

                      {/* Feature Highlights */}
                      <ul className="learn-card__features" aria-label="Program highlights">
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx}>
                            <span className="learn-card__bullet" aria-hidden="true">&bull;</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Actions */}
                      <div className="learn-card__actions">
                        {item.ctaType === 'external' ? (
                          <>
                            <a
                              href={item.ctaUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="learn-btn learn-btn--primary"
                              aria-label={`Buy or enroll in ${item.title} on Selar`}
                            >
                              <span>{item.ctaLabel}</span>
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                            {(item.curriculum || item.chapters) && (
                              <button
                                type="button"
                                className="learn-btn learn-btn--secondary"
                                onClick={() => openProgramModal(item)}
                                aria-label={`View details for ${item.title}`}
                              >
                                <span>{item.curriculum ? 'View Syllabus' : 'Overview'}</span>
                              </button>
                            )}
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              className="learn-btn learn-btn--primary"
                              onClick={() => selectProgramForInquiry(item.title)}
                              aria-label={`Enroll in ${item.title}`}
                            >
                              <span>Enroll / Inquire</span>
                              <span aria-hidden="true">&rarr;</span>
                            </button>
                            <button
                              type="button"
                              className="learn-btn learn-btn--secondary"
                              onClick={() => openProgramModal(item)}
                              aria-label={`View detailed syllabus for ${item.title}`}
                            >
                              <span>View Syllabus</span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Educational Manifesto / Pedagogy ───────────────── */}
      <section className="learn-manifesto" aria-labelledby="pedagogy-title">
        <div className="container">
          <Reveal>
            <div className="learn-manifesto__banner">
              <span className="learn-manifesto__eyebrow">The Faim Arts Methodology</span>
              <blockquote className="learn-manifesto__quote">
                &ldquo;People say you need talent for drawing. I say you need to be taught by someone who has
                deconstructed the craft into deliberate, repeatable principles.&rdquo;
              </blockquote>
              <cite className="learn-manifesto__author">&mdash; Iyanuoluwapo Akoteyon</cite>
            </div>

            <div className="learn-pillars-grid">
              <div className="learn-pillar-card">
                <span className="learn-pillar-card__num">01</span>
                <h3 className="learn-pillar-card__title">Observation Over Guesswork</h3>
                <p className="learn-pillar-card__text">
                  Hyper-realism is not artistic magic; it is the discipline of seeing value relationships, proportional
                  planes, and subtle light halos with clinical clarity.
                </p>
              </div>

              <div className="learn-pillar-card">
                <span className="learn-pillar-card__num">02</span>
                <h3 className="learn-pillar-card__title">Chiaroscuro &amp; Carbon Depth</h3>
                <p className="learn-pillar-card__text">
                  Learn to eliminate reflective graphite shine by marrying 9B charcoal, matte carbon powder, and cotton rag
                  fibers to achieve museum-quality tactile velvety darks.
                </p>
              </div>

              <div className="learn-pillar-card">
                <span className="learn-pillar-card__num">03</span>
                <h3 className="learn-pillar-card__title">Creative Self-Sovereignty</h3>
                <p className="learn-pillar-card__text">
                  Master both the easel and the business. Learn how to price, market, package, and export your drawings to
                  collectors worldwide with total confidence.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. Enrollment & Learning Inquiry Form ─────────────── */}
      <section ref={formRef} className="learn-inquiry" id="enrollment-inquiry" aria-labelledby="inquiry-title">
        <div className="container">
          <Reveal className="learn-inquiry__box">
            <div className="learn-inquiry__left">
              <div className="learn-eyebrow">
                <span className="learn-eyebrow__label">Direct Inquiries</span>
                <div className="learn-eyebrow__line" aria-hidden="true" />
              </div>
              <h2 id="inquiry-title" className="learn-inquiry__title">
                Begin Your <em>Mentorship</em>
              </h2>
              <p className="learn-inquiry__lead">
                Have questions regarding syllabus schedules, preparing for the Virtual 1-on-1 Drawing Program, or
                joining the Mastering Realism coaching group?
              </p>
              <p className="learn-inquiry__sub">
                Submit your inquiry below. Iyanuoluwapo personally reviews prospective students to ensure our programs
                align with your artistic ambitions and skill level.
              </p>

              <div className="learn-inquiry__contacts">
                <div className="learn-inquiry__contact-item">
                  <span className="learn-inquiry__contact-label">Mentorship Delivery</span>
                  <span className="learn-inquiry__contact-val">Live 1-on-1 Zoom &amp; Global Telegram Coaching</span>
                </div>
                <div className="learn-inquiry__contact-item">
                  <span className="learn-inquiry__contact-label">Instant Enrollments</span>
                  <span className="learn-inquiry__contact-val">Direct Digital Access &amp; Checkout via Selar</span>
                </div>
              </div>
            </div>

            <div className="learn-inquiry__right">
              {formSubmitted ? (
                <div className="learn-form-success" role="alert">
                  <div className="learn-form-success__icon" aria-hidden="true">✓</div>
                  <h3 className="learn-form-success__title">Inquiry Received</h3>
                  <p>
                    Thank you, <strong>{formData.name || 'Aspiring Artist'}</strong>. Your application for{' '}
                    <strong>{formData.program}</strong> has been received. Iyanu will review your details and respond
                    within 24–48 hours.
                  </p>
                  <button
                    type="button"
                    className="learn-btn learn-btn--primary"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="learn-form" onSubmit={handleSubmit}>
                  <div className="learn-form__group">
                    <label htmlFor="learn-name">Full Name *</label>
                    <input
                      id="learn-name"
                      type="text"
                      required
                      placeholder="e.g. Oluwaseun Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="learn-form__group">
                    <label htmlFor="learn-email">Email Address *</label>
                    <input
                      id="learn-email"
                      type="email"
                      required
                      placeholder="e.g. seun@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="learn-form__group">
                    <label htmlFor="learn-country">Location / Country &amp; Time Zone *</label>
                    <input
                      id="learn-country"
                      type="text"
                      required
                      placeholder="e.g. Lagos, Nigeria (WAT) / London, UK (BST)"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
                  </div>

                  <div className="learn-form__group">
                    <label htmlFor="learn-program">Program of Interest</label>
                    <select
                      id="learn-program"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    >
                      <option value="Monetizing Your Art Blueprint Course">Monetizing Your Art Blueprint Course (Video Course · ₦7,400 / $7.40)</option>
                      <option value="Mastering Realism in Graphite & Charcoal">Mastering Realism (Telegram Group Coaching · $75 / ₦25,000)</option>
                      <option value="Virtual One-to-One Drawing Program">Virtual One-to-One Drawing Program (Zoom 45-Hour · ₦90,000 / $197)</option>
                      <option value="The Entrepreneurial Artist (Publication Inquiry)">The Entrepreneurial Artist ($22 / ₦8,500)</option>
                      <option value="The Artist's Guide to Achieving Realism (Publication Inquiry)">The Artist's Guide to Achieving Realism ($15 / ₦6,500)</option>
                      <option value="General Art Consultation & Mentorship">General Art Consultation &amp; Mentorship</option>
                    </select>
                  </div>

                  <div className="learn-form__group">
                    <label htmlFor="learn-experience">Current Experience Level</label>
                    <select
                      id="learn-experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    >
                      <option value="Beginner (Just starting out)">Beginner (Just starting out / Hobbyist)</option>
                      <option value="Intermediate (Some drawing experience)">Intermediate (Looking to elevate to hyper-realism)</option>
                      <option value="Advanced / Working Artist">Advanced / Working Artist (Seeking professional business & craft polish)</option>
                    </select>
                  </div>

                  <div className="learn-form__group">
                    <label htmlFor="learn-message">Tell Us About Your Goals</label>
                    <textarea
                      id="learn-message"
                      rows={4}
                      placeholder="What is your biggest obstacle in drawing right now? What are your artistic or career goals?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="learn-form__submit">
                    <span>Send Learning Inquiry</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. Detailed Syllabus Lightbox Modal ───────────────── */}
      {activeModalProgram && (
        <div
          className="learn-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeModalProgram.title} details`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeProgramModal();
          }}
        >
          <button
            ref={closeBtnRef}
            type="button"
            className="learn-modal__close"
            onClick={closeProgramModal}
            aria-label="Close details"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="learn-modal__container">
            <div className="learn-modal__stage">
              <img
                src={activeModalProgram.image}
                alt={activeModalProgram.title}
                className="learn-modal__img"
              />
              <div className="learn-modal__stage-meta">
                <span className="learn-modal__badge">{activeModalProgram.tag}</span>
                <span className="learn-modal__price">{activeModalProgram.price}</span>
              </div>
            </div>

            <div className="learn-modal__content">
              <span className="learn-modal__category">{activeModalProgram.format}</span>
              <h3 className="learn-modal__title">{activeModalProgram.title}</h3>
              <p className="learn-modal__subtitle">{activeModalProgram.subtitle}</p>

              <div className="learn-modal__sep" aria-hidden="true" />

              <p className="learn-modal__blurb">{activeModalProgram.blurb}</p>

              {activeModalProgram.curriculum && (
                <div className="learn-modal__curriculum">
                  <h4 className="learn-modal__section-heading">Curriculum Architecture</h4>
                  <div className="learn-modal__timeline">
                    {activeModalProgram.curriculum.map((curr, cIdx) => (
                      <div key={cIdx} className="learn-modal__timeline-item">
                        <span className="learn-modal__timeline-label">{curr.week}</span>
                        <h5 className="learn-modal__timeline-title">{curr.title}</h5>
                        <p className="learn-modal__timeline-desc">{curr.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeModalProgram.chapters && (
                <div className="learn-modal__curriculum">
                  <h4 className="learn-modal__section-heading">Table of Contents</h4>
                  <ul className="learn-modal__chapters">
                    {activeModalProgram.chapters.map((ch, chIdx) => (
                      <li key={chIdx}>{ch}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="learn-modal__actions">
                {activeModalProgram.ctaType === 'external' ? (
                  <a
                    href={activeModalProgram.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learn-btn learn-btn--primary"
                  >
                    <span>{activeModalProgram.ctaLabel}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    className="learn-btn learn-btn--primary"
                    onClick={() => selectProgramForInquiry(activeModalProgram.title)}
                  >
                    <span>Inquire About This Program</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
