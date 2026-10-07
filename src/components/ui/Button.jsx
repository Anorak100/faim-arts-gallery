import './Button.css';

/**
 * Button — shared CTA button used across all pages.
 * variant: 'dark' | 'outline'
 * Renders an <a> when href is provided, otherwise <button>.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'dark',
  arrow = true,
  fullWidth = false,
  className = '',
  id,
}) {
  const cls = [
    'btn',
    `btn--${variant}`,
    fullWidth ? 'btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <>
      <span className="btn__label">{children}</span>
      {arrow && <span className="btn__arrow" aria-hidden="true">→</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} id={id} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" id={id} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
