import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

/**
 * Layout — wraps every page with the fixed Navbar and Footer.
 * main has padding-top equal to navbar height so content
 * never slides under the fixed bar.
 */
export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return undefined;

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = previousScrollRestoration; };
  }, []);

  useLayoutEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);

    const resetScrollBehavior = requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    });

    return () => cancelAnimationFrame(resetScrollBehavior);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main className="layout__main" role="main" id="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}
