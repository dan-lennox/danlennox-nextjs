import Link from 'next/link';
import styles from '../styles/Menu.module.css';

const Menu = () => (
  <ul className={styles.ul}>
    <li className={styles.li}>
      <Link href="/">Dan Lennox</Link>
    </li>
    <li className={styles.li}>
      <Link href="projects">Projects</Link>
    </li>
  </ul>
);

export default Menu;