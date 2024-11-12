import Icon from '@/helpers/Icon';
import styles from './Future.module.css';
import { futureItems } from '@/data/data';
import { useTranslations } from 'next-intl';

export default function Future() {
  const t = useTranslations();
  return (
    <section id="future" className={styles.future}>
      <h2 className={styles.header}>{t('Future.title')}</h2>
      <p className={styles.par}>{t('Future.par')}</p>
      <div className={styles.back}></div>
      <div className={styles.main_wrap}>
        <p>{t('Future.plans')}</p>
        <ul className={styles.list}>
          {futureItems.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.icon_wrap}>
                <Icon name="icon-plus" width={24} height={24} />
              </div>
              <p>{t(item)}</p>
            </li>
          ))}
        </ul>
        <a
          href="https://t.me/usaffiliate"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Main.button')}
        </a>
      </div>
    </section>
  );
}
