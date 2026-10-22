import { Link } from 'react-router-dom';
import Reveal from '../components/ui/Reveal';
import { artworks } from '../data/artworks';
import './About.css';

const milestones = [
  { year: '2024', event: 'Selected Works Invitational', venue: 'Contemporary African Fine Art Collective' },
  { year: '2023', event: 'Core Values Solo Series', venue: 'Lagos Fine Arts Showcase' },
  { year: '2022', event: 'Echoes of Identity', venue: 'Group Hyperrealism Salon' },
  { year: '2020', event: 'Voices on Paper Exhibition', venue: 'West African Visual Arts Initiative' },
  { year: '2018', event: 'Genesis of Faim Arts', venue: 'Studio Founded by Iyanuoluwapo Akoteyon' },
];

const pillars = [
  {
    num: '01',
    title: 'Emotional Anatomy',
    desc: 'Before graphite touches paper, Iyanu spends hours studying the subject’s gaze, subtle micro-expressions, and the emotional resonance held within the posture.',
  },
  {
    num: '02',
    title: 'The Alchemy of Carbon',
    desc: 'Blending velvety 9B charcoals with razor-sharp 4H graphites. Layer upon layer is fused onto heavyweight archival paper to craft rich, velvety darks and luminous skin tones.',
  },
  {
    num: '03',
    title: 'Patience & Stillness',
    desc: 'Each masterwork takes between 60 to 140 hours of meditative, deliberate mark-making — defying today’s instant digital culture to honor timeless human presence.',
  },
];

export default function About() {
  const featuredArtworks = artworks.slice(0, 3);

  return (
    <main className="about-page" id="about-page" aria-label="About the Artist – Iyanuoluwapo Akoteyon">
      {/* ── 1. Hero / Portrait Section ──────────────────────────── */}
      <section className="about-hero" aria-labelledby="about-title">
        <div className="container">
          <div className="about-hero__header">
            <Reveal>
              <div className="about-eyebrow">
                <span className="about-eyebrow__label">02 / The Artist</span>
                <div className="about-eyebrow__line" aria-hidden="true" />
              </div>
              <h1 id="about-title" className="about-hero__title">
                The Soul Behind <br />
                The <em>Graphite</em>
              </h1>
              <p className="about-hero__tagline">
                Iyanuoluwapo Akoteyon — Contemporary Pencil &amp; Hyperrealism Artist based in Lagos, Nigeria.
              </p>
            </Reveal>
          </div>

          <div className="about-hero__grid">
            {/* Main Artist Photo from user */}
            <Reveal className="about-hero__portrait-col">
              <figure className="about-portrait-card">
                <div className="about-portrait-card__frame">
                  <img
                    src="https://res.cloudinary.com/gbnsoe4f/image/upload/v1792708293/IMG_0793.jpg"
                    alt="Iyanuoluwapo Akoteyon, portrait artist and founder of Faim Arts"
                    className="about-portrait-card__img"
                    width={720}
                    height={900}
                    fetchPriority="high"
                  />
                  <div className="about-portrait-card__vignette" aria-hidden="true" />
                </div>
                <figcaption className="about-portrait-card__caption">
                  <div className="about-portrait-card__caption-meta">
                    <span className="about-portrait-card__artist-name">Iyanuoluwapo Akoteyon</span>
                    <span className="about-portrait-card__role">Founder &amp; Principal Artist · Faim Arts</span>
                  </div>
                  <span className="about-portrait-card__badge" aria-hidden="true">Est. 2018</span>
                </figcaption>
              </figure>
            </Reveal>

            {/* Narrative Column */}
            <div className="about-hero__story-col">
              <Reveal delay={120}>
                <h2 className="about-story__subtitle">
                  Inviting the world to pause, reflect, and look&nbsp;<em>inward</em>.
                </h2>
                <div className="about-story__divider" aria-hidden="true" />
                <p className="about-story__paragraph">
                  Art is more than replication; it is a mirror to the human spirit. Through the delicate interplay
                  of graphite, charcoal, and negative space, Iyanu captures the quiet truths of human experience—moments
                  of contemplation, vulnerability, resilience, and unconditional dignity.
                </p>
                <p className="about-story__paragraph">
                  Based in Nigeria and creating for collectors worldwide, her work bridges traditional draftsmanship
                  with contemporary existential themes, uncovering the profound stories etched into every human face.
                </p>

                {/* Key Metrics */}
                <div className="about-stats-strip" role="list" aria-label="Key artist statistics">
                  <div className="about-stat-item" role="listitem">
                    <span className="about-stat-item__num">120+</span>
                    <span className="about-stat-item__label">Masterworks</span>
                  </div>
                  <div className="about-stat-item__sep" aria-hidden="true" />
                  <div className="about-stat-item" role="listitem">
                    <span className="about-stat-item__num">8</span>
                    <span className="about-stat-item__label">Exhibitions</span>
                  </div>
                  <div className="about-stat-item__sep" aria-hidden="true" />
                  <div className="about-stat-item" role="listitem">
                    <span className="about-stat-item__num">6+</span>
                    <span className="about-stat-item__label">Years Active</span>
                  </div>
                  <div className="about-stat-item__sep" aria-hidden="true" />
                  <div className="about-stat-item" role="listitem">
                    <span className="about-stat-item__num">14+</span>
                    <span className="about-stat-item__label">Countries</span>
                  </div>
                </div>

                <div className="about-hero__actions">
                  <Link to="/gallery" id="about-hero-gallery-btn" className="about-btn about-btn--primary">
                    <span>Explore Gallery</span>
                    <span className="about-btn__arrow" aria-hidden="true">→</span>
                  </Link>
                  <Link to="/commissions" id="about-hero-commissions-btn" className="about-btn about-btn--secondary">
                    <span>Commission a Piece</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Artist Statement / Pull Quote Banner ─────────────── */}
      <section className="about-quote-section" aria-label="Artist Philosophy">
        <div className="container">
          <Reveal>
            <div className="about-quote-box">
              <span className="about-quote-box__mark" aria-hidden="true">&ldquo;</span>
              <blockquote className="about-quote-box__text">
                When you look at a portrait drawn stroke by stroke, you aren’t just observing another person.
                You are meeting yourself in their reflection.
              </blockquote>
              <cite className="about-quote-box__author">— Iyanuoluwapo Akoteyon</cite>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3. Creative Process / The Pillars ───────────────────── */}
      <section className="about-process" aria-labelledby="process-title">
        <div className="container">
          <Reveal>
            <div className="about-eyebrow">
              <span className="about-eyebrow__label">03 / The Practice</span>
              <div className="about-eyebrow__line" aria-hidden="true" />
            </div>
            <div className="about-process__intro">
              <h2 id="process-title" className="about-section-heading">
                The Architecture of a <em>Hyperrealistic Drawing</em>
              </h2>
              <p className="about-process__desc">
                Every artwork is born from hours of silent communion between artist, graphite, and paper.
                Nothing is rushed; every pore, reflection, and shadow is mapped with utmost devotion.
              </p>
            </div>
          </Reveal>

          <div className="about-process__grid">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.num} delay={idx * 120} className="about-pillar-card">
                <div className="about-pillar-card__top">
                  <span className="about-pillar-card__num">{pillar.num}</span>
                  <div className="about-pillar-card__line" aria-hidden="true" />
                </div>
                <h3 className="about-pillar-card__title">{pillar.title}</h3>
                <p className="about-pillar-card__desc">{pillar.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Milestones & Selected Exhibitions ────────────────── */}
      <section className="about-milestones" aria-labelledby="milestones-title">
        <div className="container">
          <div className="about-milestones__layout">
            <Reveal className="about-milestones__left">
              <div className="about-eyebrow">
                <span className="about-eyebrow__label">04 / Journey</span>
                <div className="about-eyebrow__line" aria-hidden="true" />
              </div>
              <h2 id="milestones-title" className="about-section-heading">
                Exhibitions &amp; <em>Selected Milestones</em>
              </h2>
              <p className="about-milestones__copy">
                From intimate studio sessions in Lagos to private collections across the globe,
                Iyanu's work continues to resonate across borders and cultures.
              </p>
            </Reveal>

            <Reveal delay={150} className="about-milestones__right">
              <ol className="about-milestones__list" aria-label="Chronological list of exhibitions and milestones">
                {milestones.map((item) => (
                  <li key={item.year + item.event} className="about-milestones__item">
                    <span className="about-milestones__year">{item.year}</span>
                    <div className="about-milestones__info">
                      <strong className="about-milestones__event">{item.event}</strong>
                      <span className="about-milestones__venue">{item.venue}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. Selected Works Glimpse ───────────────────────────── */}
      <section className="about-works" aria-labelledby="works-title">
        <div className="container">
          <Reveal>
            <div className="about-works__header">
              <div>
                <div className="about-eyebrow">
                  <span className="about-eyebrow__label">05 / Portfolio</span>
                  <div className="about-eyebrow__line" aria-hidden="true" />
                </div>
                <h2 id="works-title" className="about-section-heading">
                  Iconic <em>Creations</em>
                </h2>
              </div>
              <Link to="/gallery" id="about-view-all-artworks" className="about-works__cta-link">
                <span>View Full Gallery</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>

          <div className="about-works__grid">
            {featuredArtworks.map((art, idx) => (
              <Reveal key={art.id} delay={idx * 100} className="about-work-card">
                <div className="about-work-card__frame">
                  <img
                    src={art.image}
                    alt={art.alt}
                    className="about-work-card__img"
                    loading="lazy"
                    width={400}
                    height={500}
                    style={{ objectPosition: art.objectPosition || 'center center' }}
                  />
                </div>
                <div className="about-work-card__meta">
                  <span className="about-work-card__title">{art.title || 'Untitled Study'}</span>
                  <span className="about-work-card__medium">Graphite &amp; Charcoal on Archival Paper</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Bottom Call to Action ────────────────────────────── */}
      <section className="about-cta" aria-labelledby="cta-heading">
        <div className="container">
          <Reveal className="about-cta__box">
            <span className="about-cta__script" aria-hidden="true">Faim Arts</span>
            <h2 id="cta-heading" className="about-cta__headline">
              Ready to Own an <em>Original Masterpiece</em> or Commission Your Story?
            </h2>
            <p className="about-cta__sub">
              Every commission is tailored with obsessive care and museum-quality materials.
              Get in touch to bring your vision to reality.
            </p>
            <div className="about-cta__btns">
              <Link to="/commissions" id="about-cta-commission" className="about-btn about-btn--primary">
                <span>Request a Commission</span>
                <span className="about-btn__arrow" aria-hidden="true">→</span>
              </Link>
              <Link to="/contact" id="about-cta-contact" className="about-btn about-btn--secondary">
                <span>Get in Touch</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
