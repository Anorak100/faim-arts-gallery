import './SectionHeading.css';

/**
 * SectionHeading — "LABEL ————————" row with optional View All CTA.
 * Used in every section to keep heading style consistent.
 */
export default function SectionHeading({ label, cta, ctaHref = '#', ctaId }) {
  return (
    <div className="section-heading">
      <div className="section-heading__left">
        <span className="section-heading__label">{label}</span>
        <div className="section-heading__line" aria-hidden="true" />
      </div>
      {cta && (
        <a href={ctaHref} id={ctaId} className="section-heading__cta">
          {cta}&nbsp;&rarr;
        </a>
      )}
    </div>
  );
}
