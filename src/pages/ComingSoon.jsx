import { Link } from 'react-router-dom';
import './ComingSoon.css';

/**
 * ComingSoon — reusable placeholder for every non-home page.
 * The last word of `title` is rendered in italic brown.
 */
export default function ComingSoon({ title = 'Page' }) {
  const words = title.trim().split(/\s+/);
  const head  = words.slice(0, -1).join(' ');
  const last  = words[words.length - 1];

  return (
    <section className="coming-soon" aria-labelledby="cs-heading">
      <div className="coming-soon__box">
        <span className="coming-soon__eyebrow">Faim Arts</span>

        <h1 id="cs-heading" className="coming-soon__title">
          {head && <span>{head}&nbsp;</span>}
          <em>{last}</em>
        </h1>

        <p className="coming-soon__message">
          This page is coming soon.
        </p>

        <Link to="/" id="coming-soon-back" className="coming-soon__back">
          <span aria-hidden="true">←</span>
          <span>Back to Home</span>
        </Link>
      </div>
    </section>
  );
}
