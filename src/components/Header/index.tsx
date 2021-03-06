import Link from 'next/link';
import Image from 'next/image';

import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={`inline-gutters-16 ${styles.header}`}>
      <div className={`center ${styles.headerContainer}`}>
        <Link href="/">
          <a>
            <Image
              alt="logo"
              src="/Logo.svg"
              layout="fixed"
              width="239"
              height="26"
            />
          </a>
        </Link>
      </div>
    </header>
  );
}
