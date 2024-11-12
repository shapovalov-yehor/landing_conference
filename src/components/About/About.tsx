import Icon from '@/helpers/Icon';
import styles from './About.module.css';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('');
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.header}>{t('Main.button')}</h2>
      <div className={styles.back}></div>
      <div className={styles.wrap}>
        <ul>
          <li className={styles.item}>
            <Icon name="icon-favorite" width={32} height={32} />
            <p className={styles.par}>
              <span>{t('About.firstPar').split(',')[0]},</span>
              {t('About.firstPar').split(',')[1]}
            </p>
          </li>
          <li className={styles.item}>
            <Icon name="icon-favorite" width={32} height={32} />
            <p className={styles.par}>
              {t('About.secondPar.part1')}{' '}
              <span>{t('About.secondPar.part2')}</span>{' '}
              {t('About.secondPar.part3')}
            </p>
          </li>
          <li className={styles.item}>
            <Icon name="icon-favorite" width={32} height={32} />
            <p className={styles.par}>
              {t('About.thirdPar.part1')}{' '}
              <span>{t('About.thirdPar.part2')}</span>{' '}
              {t('About.thirdPar.part3')}
            </p>
          </li>
          <li className={styles.item}>
            <Icon name="icon-favorite" width={32} height={32} />
            <p className={styles.par}>
              <span>{t('About.fourthPar.part1')}</span>{' '}
              {t('About.fourthPar.part2')}
            </p>
          </li>
          <li className={styles.item}>
            <Icon name="icon-favorite" width={32} height={32} />
            <p className={styles.par}>
              {t('About.fifthPar.part1')}{' '}
              <span>{t('About.fifthPar.part2')}</span>{' '}
            </p>
          </li>
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
