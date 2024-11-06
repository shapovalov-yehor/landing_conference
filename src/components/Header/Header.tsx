'use client';

import Image from 'next/image';
import styles from './Header.module.css';
// import logo from '../../img/header/logo.webp';
import Icon from '@/helpers/Icon';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}></div>
    </header>
  );
}
