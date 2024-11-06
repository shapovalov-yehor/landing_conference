'use client';

import Image from 'next/image';
import styles from './Header.module.css';
import logo from '../../img/header/logo.png';
import { navItems } from '@/data/data';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo_wrap} href="/">
          <Image
            className={styles.logo}
            src={logo}
            width={0}
            height={0}
            sizes="100vw"
            alt="logo"
          />
          <span className={styles.logo_text}>MUSTAGE</span>
        </a>
        <nav>
          <ul className={styles.nav_list}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a className={styles.nav_link} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
