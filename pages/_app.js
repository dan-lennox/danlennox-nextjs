import '../styles/globals.css'
import styles from '../styles/Home.module.css';
import Menu from '../components/menu';

/**
 * @TODO:
 * - Add prettier
 */

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={styles.container}>
      <Menu />

      <Component {...pageProps} />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export default MyApp
