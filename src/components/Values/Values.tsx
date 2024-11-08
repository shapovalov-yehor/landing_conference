import styles from './Values.module.css';
import honesty from '../../img/values/like.webp';
import innovations from '../../img/values/vr.webp';
import support from '../../img/values/support.webp';
import Image from 'next/image';
import Icon from '@/helpers/Icon';

export default function Values() {
  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <div className={styles.header_wrap}>
          <h2 className={styles.header}>Наши ценности</h2>
          <div className={styles.icon_wrap}>
            <Icon name="icon-star" width={24} height={24} />
          </div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.list_wrap}>
          <ul className={styles.list}>
            <li>
              <Image
                className={styles.logo}
                src={honesty}
                width={0}
                height={0}
                sizes="100vw"
                alt="Honesty icon"
              />
              <h3>Прозрачность</h3>
              <p className={styles.honesty_par}>
                Мы верим в открытые и честные отношения с клиентами.
              </p>
              <p>
                По всем нашим продуктам практически отсутствуют негативные
                отзывы, а если такие и появляются — мы их не скрываем, потому
                что мы открыты к критике и уверены, что с её помощью мы можем
                стать лучше! Например чат с отзывами о нашем курсе полностью
                открыт. Туда может написать каждый ученик, прошедший курс до
                конца, и в течение года мы получили всего пару негативных
                отзывов.
              </p>
            </li>
            <li>
              <Image
                className={styles.logo}
                src={innovations}
                width={0}
                height={0}
                sizes="100vw"
                alt="Innovations icon"
              />
              <h3>Инновации</h3>
              <p>
                Мы постоянно исследуем новые возможности и технологии. Наша
                команда не боится экспериментировать и внедрять смелые решения.
                Мы первые на рынке, у кого получилось сделать достойный
                бесплатный курс по арбитражу трафика. Наш мобильный
                прокси-сервис — один из самых дешевых и качественных на рынке
                Украины.
              </p>
            </li>
            <li>
              <Image
                className={styles.logo}
                src={support}
                width={0}
                height={0}
                sizes="100vw"
                alt="Support icon"
              />
              <h3>Поддержка</h3>
              <p>
                Мы знаем, как важна своевременная помощь в арбитраже. Поэтому
                наш саппорт на связи 7 дней в неделю с 11:00 до 22:00 вечера по
                киевскому времени, готов бесплатно ответить любые вопросы,
                касающиеся арбитража трафика или покупки расходников.
              </p>
            </li>
          </ul>

          <a
            href="#"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Начать работу с Mustage</span>
          </a>
        </div>
      </div>
    </section>
  );
}
