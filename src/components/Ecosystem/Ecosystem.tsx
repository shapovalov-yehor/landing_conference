import styles from './Ecosystem.module.css';
import { useTranslations } from 'next-intl';

export default function Ecosystem() {
  const t = useTranslations();

  return (
    <section id="ecosystem" className={styles.ecosystem}>
      <h2 className={styles.header}>{t('Ecosystem.header')}</h2>
      <div className={styles.eco_wrap}>
        <div className={styles.par_wrap_first}>
          <h3 className={styles.eco_par_header}>
            {t('Ecosystem.par_first_header')}
          </h3>
          <p className={styles.eco_par}>{t('Ecosystem.par_first')}</p>
        </div>
        <div className={styles.par_wrap_second}>
          <div className={styles.eco_par_wrap}>
            <p className={styles.eco_par}>
              {t('Ecosystem.par_second_first.1')}{' '}
              <span>{t('Ecosystem.par_second_first.2')}</span>
              {t('Ecosystem.par_second_first.3')}
              {'\n'}
              <span>{t('Ecosystem.par_second_first.4')}</span>
              {t('Ecosystem.par_second_first.5')}
            </p>
          </div>
          <div className={styles.eco_par_wrap}>
            <p className={styles.eco_par}>
              <span>{t('Ecosystem.par_second_second.1')}</span>
              {t('Ecosystem.par_second_second.2')}
              {'\n'}
              {t('Ecosystem.par_second_second.3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
