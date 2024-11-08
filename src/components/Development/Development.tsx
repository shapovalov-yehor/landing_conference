import styles from './Development.module.css';
import { devItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import Image from 'next/image';

export default function Development() {
  return (
    <section className={styles.development}>
      <div className={styles.container}>
        <h2 className={styles.header}>Развитие продуктовой линейки</h2>
        <p className={styles.dev_par}>
          Прислушиваясь к потребностям нашего сообщества, мы последовательно
          запускали новые сервисы:
        </p>
        <ul className={styles.list}>
          {devItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <div className={styles.item_wrap}>
                <Image
                  src={item.img}
                  alt={item.header}
                  className={styles.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <div className={styles.text_wrap}>
                  <h3 className={styles.par_header}>{item.header}</h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
              <a
                href={item.link}
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Перейти к продукту</span>
                <Icon name="icon-arrow" width={24} height={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
