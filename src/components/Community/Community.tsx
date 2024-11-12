import Icon from '@/helpers/Icon';
import styles from './Community.module.css';
import { useTranslations } from 'next-intl';

export default function Community() {
  const t = useTranslations('');

  return (
    <section id="community" className={styles.community}>
      <h2 className={styles.header}>
        {t('Community.header.headerPart1')}{' '}
        <span>{t('Community.header.headerPart2')}</span>
      </h2>
      <div className={styles.main_wrap}>
        <div className={styles.media_wrap}>
          <p className={styles.community_par}>{t('Community.media_info')}</p>
          <a
            href={t('Community.button_link')}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="icon-link" width={24} height={24} />
            <span>{t('Community.button_link')}</span>
          </a>
        </div>
        <div className={styles.community_wrap}>
          <div className={styles.icon_wrap}>
            <Icon name="icon-community" width={72} height={72} />
            <div>
              <span>{t('Community.icon_info')}</span>
              <span>{t('Community.icon_sub_info')}</span>
            </div>
          </div>
          <p className={styles.audit}>{t('Community.audit_info')}</p>
        </div>
      </div>
    </section>
  );
}
