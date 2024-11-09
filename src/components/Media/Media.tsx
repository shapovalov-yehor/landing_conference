import Icon from '@/helpers/Icon';
import styles from './Media.module.css';

export default function Media() {
  return (
    <section id="media" className={styles.media}>
      <h2 className={styles.header}>Медиа-присутствие</h2>
      <div className={styles.back}></div>
      <div className={styles.main_wrap}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.icon_wrap}>
              <Icon name="icon-youtube" width={40} height={28} />
            </div>
            <p>
              <span>Наш YouTube-канал</span> вырос из простых обучающих видео в
              полноценную медиа-платформу с аудиторией более 18,000 подписчиков.
              Мы говорим о сложных вещах простым языком и делимся реальным
              опытом.
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.icon_wrap}>
              <Icon name="icon-telegram" width={40} height={40} />
            </div>
            <p>
              <span>В Telegram мы создали живое сообщество,</span> где более
              15,000 специалистов ежедневно обмениваются опытом, обсуждают
              тренды и помогают друг другу расти. Наши сервисные боты служат
              отличным инструментом для поддержания активности аудитории. Общая
              численность подписчиков наших Telegram-ботов насчитывает 10282
              пользователей.
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.icon_wrap}>
              <Icon name="icon-bots" width={40} height={40} />
            </div>
            <div className={styles.bot_wrap}>
              <p>
                <span>Мы разработали целую систему ботов,</span> которая
                помогает нашим пользователям решать повседневные задачи:
              </p>
              <ul className={styles.bot_list}>
                <li>
                  <p>
                    Бот для уникализации креативов упростил работу с визуальным
                    контентом
                  </p>
                </li>
                <li>
                  <p>
                    Гивэвей-боты создают дополнительную ценность для сообщества;
                  </p>
                </li>
                <li>
                  <p>
                    Образовательный бот помогает структурировать процесс
                    обучения
                  </p>
                </li>
              </ul>
              <p className={styles.bot_par}>
                Полный список наших ботов вы можете увидеть по ссылке:
              </p>
              <a
                href="https://dawn-top-e5f.notion.site/1eee9955ca9d4c18bca3b0e67f2c92e7"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="icon-link" width={24} height={24} />
                <span>
                  https://dawn-top-e5f.notion.site/1eee9955ca9d4c18bca3b0e67f2c92e7
                </span>
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
          Начать работу с Mustage
        </a>
      </div>
    </section>
  );
}
