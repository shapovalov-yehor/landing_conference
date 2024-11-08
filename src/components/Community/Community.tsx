import Icon from '@/helpers/Icon';
import styles from './Community.module.css';

export default function Community() {
  return (
    <section id="community" className={styles.community}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          Наша ценность для сообщества или же <span>Mustage Community</span>
        </h2>
        <div className={styles.main_wrap}>
          <div className={styles.media_wrap}>
            <p className={styles.community_par}>
              Просмотреть все наши медиа ресурсы и ознакомиться с прайс-листом
              на рекламу можно по ссылке:
            </p>
            <a
              href="https://dawn-top-e5f.notion.site/Mustage-Media Group-332f846f27cd46339cefc82a58e21f4d"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="icon-link" width={24} height={24} />
              <span>
                https://dawn-top-e5f.notion.site/Mustage-Media
                Group-332f846f27cd46339cefc82a58e21f4d
              </span>
            </a>
          </div>
          <div className={styles.community_wrap}>
            <div className={styles.icon_wrap}>
              <Icon name="icon-community" width={72} height={72} />
              <div>
                <span>более 35,000</span>
                <span>Общее количество участников каналов </span>
              </div>
            </div>
            <p className={styles.audit}>
              Это не просто цифры, а живая, вовлеченная аудитория, которая
              регулярно взаимодействует с нашими сервисами, чатами и ботами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
