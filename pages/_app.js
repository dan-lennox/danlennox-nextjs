import styles from '../styles/globals.css'
import layout from '../styles/layout.module.css'
import Menu from '../components/Menu';
import Footer from '../components/Footer';

/**
 * @TODO:
 * - Add prettier
 */

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={layout.container}>
      <div className={layout.inner}>
        <Menu />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp
