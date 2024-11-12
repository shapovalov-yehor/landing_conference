import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Achieve.module.css';
import back from '../../img/achieve/back.webp';

export default function Achieve() {
  const t = useTranslations('');

  return (
    <section id="achieve" className={styles.achieve}>
      <div className={styles.container}>
        <h2 className={styles.header}>{t('Achieve.title')}</h2>
        <div className={styles.wrap}>
          <ul className={styles.list}>
            <li>
              <p className={styles.count}>
                35,000<span>+</span>
              </p>
              <p>{t('Achieve.items.communityMembers')}</p>
            </li>
            <li>
              <p className={styles.count}>524</p>
              <p>{t('Achieve.items.proxyUsers')}</p>
            </li>
            <li>
              <p className={styles.count}>1764</p>
              <p>{t('Achieve.items.creoClients')}</p>
            </li>
            <li>
              <p className={styles.count}>
                70<span>+</span>
              </p>
              <p>{t('Achieve.items.videos')}</p>
            </li>
            <li>
              <p className={styles.count}>
                45563<span>+</span>
              </p>
              <p>{t('Achieve.items.views')}</p>
            </li>
            <li>
              <p className={styles.count}>
                5851<span>+</span>
              </p>
              <p>{t('Achieve.items.botUsers')}</p>
            </li>
            <li>
              <p className={styles.count}>
                2992<span>+</span>
              </p>
              <p>{t('Achieve.items.academyGraduates')}</p>
            </li>
            <li>
              <a
                href="https://t.me/usaffiliate"
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('Main.button')}
              </a>
            </li>
          </ul>
          <div className={styles.back}>
            <Image
              className={styles.back_img}
              src={back}
              width={0}
              height={0}
              sizes="100vw"
              alt="background image"
            />
            <div className={styles.back_block}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
