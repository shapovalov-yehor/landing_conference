import { useTranslations } from 'next-intl';
import styles from './Development.module.css';
import { devItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import Image from 'next/image';

export default function Development() {
  const t = useTranslations();

  return (
    <section className={styles.development}>
      <div className={styles.container}>
        <h2 className={styles.header}>{t('Development.header')}</h2>
        <p className={styles.dev_par}>{t('Development.description')}</p>
        <ul className={styles.list}>
          {devItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <div className={styles.item_wrap}>
                <Image
                  src={item.img}
                  alt={item.headerKey}
                  className={styles.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <div className={styles.text_wrap}>
                  <h3 className={styles.par_header}>
                    {t(`Development.${item.headerKey}`)}
                  </h3>
                  <p className={styles.text}>
                    {t(`Development.${item.textKey}`)}
                  </p>
                </div>
              </div>
              <a
                href={item.link}
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t('Development.goToProduct')}</span>
                <Icon name="icon-arrow" width={24} height={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
