import { useEffect, useRef, useState } from 'react';
import './Reveal.css';

/**
 * Reveal — scroll-triggered fade-up wrapper.
 * Observes once; disconnects after becoming visible.
 * Respects prefers-reduced-motion via CSS.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref            = useRef(null);
  const [visible, set] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { set(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}
