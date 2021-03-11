import Link from 'next/link';

const Menu = () => (
  <ul>
    <li>
      <Link href="/">Dan Lennox</Link>
    </li>
    <li>
      <Link href="projects">Recent Projects</Link>
    </li>
  </ul>
);

export default Menu;