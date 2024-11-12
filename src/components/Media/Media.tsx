import { useTranslations } from 'next-intl';
import Icon from '@/helpers/Icon';
import styles from './Media.module.css';

export default function Media() {
  const t = useTranslations();

  return (
    <section id="media" className={styles.media}>
      <h2 className={styles.header}>{t('Media.header')}</h2>
      <div className={styles.back}></div>
      <div className={styles.main_wrap}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.icon_wrap}>
              <Icon name="icon-youtube" width={40} height={28} />
            </div>
            <p>
              <span>{t('Media.youtube_channel_title')}</span>{' '}
              {t('Media.youtube_channel_description')}
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.icon_wrap}>
              <Icon name="icon-telegram" width={40} height={40} />
            </div>
            <p>
              <span>{t('Media.telegram_community_title')}</span>{' '}
              {t('Media.telegram_community_description')}
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.icon_wrap}>
              <Icon name="icon-bots" width={40} height={40} />
            </div>
            <div className={styles.bot_wrap}>
              <p>
                <span>{t('Media.bots_title')}</span>{' '}
                {t('Media.bots_description')}
              </p>
              <ul className={styles.bot_list}>
                <li>
                  <p>{t('Media.bot_list.bot_1')}</p>
                </li>
                <li>
                  <p>{t('Media.bot_list.bot_2')}</p>
                </li>
                <li>
                  <p>{t('Media.bot_list.bot_3')}</p>
                </li>
              </ul>
              <p className={styles.bot_par}>{t('Media.bot_link_text')}</p>
              <a
                href={t('Media.bot_link')}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="icon-link" width={24} height={24} />
                <span>{t('Media.bot_link')}</span>
              </a>
            </div>
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
