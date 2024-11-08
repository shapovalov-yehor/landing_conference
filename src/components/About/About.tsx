import Icon from '@/helpers/Icon';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.header}>С чего все началось</h2>
        <div className={styles.wrap}>
          <ul>
            <li className={styles.about_item}>
              <Icon name="icon-favorite" width={32} height={32} />
              <p className={styles.about_par}>
                <span>Все началось в 2021 году, </span> когда три энтузиаста
                решили войти в индустрию арбитража трафика.
              </p>
            </li>
            <li className={styles.about_item}>
              <Icon name="icon-favorite" width={32} height={32} />
              <p className={styles.about_par}>
                Мы начинали как
                <span> небольшая команда с большими амбициями,</span> в которой
                стабильно работала только схема аккаунтов и всего один фармер.
              </p>
            </li>
            <li className={styles.about_item}>
              <Icon name="icon-favorite" width={32} height={32} />
              <p className={styles.about_par}>
                Тогда мы еще не знали, что создаем то, что вскоре
                <span> станет целой экосистемой сервисов</span> в индустрии
                affiliate-маркетинга.
              </p>
            </li>
            <li className={styles.about_item}>
              <Icon name="icon-favorite" width={32} height={32} />
              <p className={styles.about_par}>
                <span>Первые месяцы были полны вызовов.</span> Мы
                экспериментировали с различными подходами в заливах и фарме,
                учились на своих ошибках и постоянно адаптировались к изменениям
                рынка.
              </p>
            </li>
            <li className={styles.about_item}>
              <Icon name="icon-favorite" width={32} height={32} />
              <p className={styles.about_par}>
                Начало 2022 года стало настоящим испытанием — события в Украине
                заставили нас полностью переосмыслить наш подход к бизнесу. Из
                команды в 13 человек осталось только трое основателей, но именно
                это испытание <span>закалило нас и помогло стать сильнее.</span>
              </p>
            </li>
          </ul>
          <a
            href="https://t.me/usaffiliate"
            className={styles.about_button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Начать работу с Mustage
          </a>
        </div>
      </div>
    </section>
  );
}
