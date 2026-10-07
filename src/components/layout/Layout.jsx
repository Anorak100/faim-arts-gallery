import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

/**
 * Layout — wraps every page with the fixed Navbar and Footer.
 * main has padding-top equal to navbar height so content
 * never slides under the fixed bar.
 */
export default function Layout({ children }) {
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
