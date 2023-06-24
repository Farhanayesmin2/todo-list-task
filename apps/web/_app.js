import '../web/styles/globals.css';
import Footer from './app/Footer';
import Navbar from './app/Navbar';

export function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

