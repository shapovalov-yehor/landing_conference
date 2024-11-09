import Image from 'next/image';
import styles from './Achieve.module.css';
import back from '../../img/achieve/back.webp';

export default function Achieve() {
  return (
    <section id="achieve" className={styles.achieve}>
      <div className={styles.container}>
        <h2 className={styles.header}>Достижения в цифрах</h2>
        <div className={styles.wrap}>
          <ul className={styles.list}>
            <li>
              <p className={styles.count}>
                35,000<span>+</span>
              </p>
              <p>активных участников сообщества</p>
            </li>
            <li>
              <p className={styles.count}>524</p>
              <p>пользователя купивших прокси</p>
            </li>
            <li>
              <p className={styles.count}>1764</p>
              <p>довольных клиентов Creo</p>
            </li>

            <li>
              <p className={styles.count}>
                70<span>+</span>
              </p>
              <p>обучающих видео на YouTube</p>
            </li>
            <li>
              <p className={styles.count}>
                40563<span>+</span>
              </p>
              <p>просмотров за последние 90 дней</p>
            </li>

            <li>
              <p className={styles.count}>
                5851<span>+</span>
              </p>
              <p>пользователей наших ботов</p>
            </li>
            <li>
              <p className={styles.count}>
                2992<span>+</span>
              </p>
              <p>выпускников Academy</p>
            </li>
            <li>
              <a
                href="https://t.me/usaffiliate"
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                Начать работу с Mustage
              </a>
            </li>
          </ul>
          <div className={styles.back}>
            <Image
              className={styles.back_img}
              src={back}
              width={0}
              height={0}
              sizes="100vw"
              alt="background image"
            />
            <div className={styles.back_block}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
