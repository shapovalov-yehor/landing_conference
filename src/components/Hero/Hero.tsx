import styles from './Hero.module.css';
import logo from '../../img/hero/logo.svg';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.hero_text}>Кто такие Mustage Team</h1>
        <Image
          className={styles.hero_logo}
          src={logo}
          width={0}
          height={0}
          sizes="100vw"
          alt="Mustage Team logo"
          priority
        />
      </div>
      <div className={styles.marquee_wrap}>
        <div className={styles.marquee}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className={styles.text_wrap}>
              <span className={styles.hero_link}>mustage.team</span>
              <span className={styles.hero_link}>/</span>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className={styles.marquee}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className={styles.text_wrap}>
              <span className={styles.hero_link}>mustage.team</span>
              <span className={styles.hero_link}>/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
