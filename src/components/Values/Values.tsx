import { useTranslations } from 'next-intl';
import styles from './Values.module.css';
import honesty from '../../img/values/like.webp';
import innovations from '../../img/values/vr.webp';
import support from '../../img/values/support.webp';
import Image from 'next/image';
import Icon from '@/helpers/Icon';

export default function Values() {
  const t = useTranslations();

  return (
    <section id="values" className={styles.values}>
      <div className={styles.container}>
        <div className={styles.header_wrap}>
          <h2 className={styles.header}>{t('Values.header')}</h2>
          <div className={styles.line_wrap}>
            <div className={styles.icon_wrap}>
              <Icon name="icon-star" width={24} height={24} />
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
        <div className={styles.list_wrap}>
          <ul className={styles.list}>
            <li>
              <Image
                className={styles.logo}
                src={honesty}
                width={0}
                height={0}
                sizes="100vw"
                alt="Honesty icon"
              />
              <h3>{t('Values.values.honesty.title')}</h3>
              <p className={styles.honesty_par}>
                {t('Values.values.honesty.description')}
              </p>
              <p>{t('Values.values.honesty.details')}</p>
            </li>
            <li>
              <Image
                className={styles.logo}
                src={innovations}
                width={0}
                height={0}
                sizes="100vw"
                alt="Innovations icon"
              />
              <h3>{t('Values.values.innovations.title')}</h3>
              <p>{t('Values.values.innovations.description')}</p>
              <p>{t('Values.values.innovations.details')}</p>
            </li>
            <li>
              <Image
                className={styles.logo}
                src={support}
                width={0}
                height={0}
                sizes="100vw"
                alt="Support icon"
              />
              <h3>{t('Values.values.support.title')}</h3>
              <p>{t('Values.values.support.description')}</p>
              <p>{t('Values.values.support.details')}</p>
            </li>
          </ul>

          <a
            href="https://t.me/usaffiliate"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t('Main.button')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
