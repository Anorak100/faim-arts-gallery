import Reveal from '../ui/Reveal';
import './QuoteBand.css';

export default function QuoteBand() {
  return (
    <section className="quote-band" aria-label="Artist quote">
      {/* Background portrait as texture */}
      <div className="quote-band__bg" aria-hidden="true">
        <img
          src="/elder.jpg"
          alt=""
          className="quote-band__bg-img"
          loading="lazy"
          width={1200}
          height={400}
        />
        <div className="quote-band__overlay" />
      </div>

      <div className="quote-band__content container">
        <Reveal>
          <span className="quote-band__open-q" aria-hidden="true">&ldquo;</span>
          <blockquote className="quote-band__text">
            Art is not just what I create,<br />
            <em>it&rsquo;s how I see the world.</em>
          </blockquote>
          <div className="quote-band__attr">
            <div className="quote-band__attr-line" aria-hidden="true" />
            <cite className="quote-band__attr-name">Iyanu</cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
