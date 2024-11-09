import Icon from '@/helpers/Icon';
import styles from './Clients.module.css';
import Image from 'next/image';
import { clientsItems } from '@/data/data';

export default function Clients() {
  return (
    <section id="clients" className={styles.clients}>
        <h2 className={styles.header}>
          Так же мы{' '}
          <span>
            активно сотрудничаем
            <br /> с другими сервисами
          </span>{' '}
          из ниши <br /> и помогаем им приводить клиентов
        </h2>
        <ul className={styles.grid}>
          <div className={styles.column}>
            {clientsItems.slice(0, 3).map((item, index) => (
              <li key={index} className={styles.item}>
                <div className={styles.image_wrap}>
                  <Image
                    className={styles.logo}
                    src={item.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Item icon"
                  />
                </div>
                <div className={styles.text_wrap}>
                  <h3>{item.header}</h3>
                  <p>{item.text}</p>
                  <a
                    href={item.link}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="icon-link" width={24} height={24} />
                    <span>{item.link}</span>
                  </a>
                </div>
              </li>
            ))}
          </div>

          <div className={`${styles.column} ${styles.styled}`}>
            {clientsItems.slice(3).map((item, index) => (
              <li key={index} className={styles.item}>
                <div className={styles.image_wrap}>
                  <Image
                    className={styles.logo}
                    src={item.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Item icon"
                  />
                </div>
                <div className={styles.text_wrap}>
                  <h3>{item.header}</h3>
                  <p>{item.text}</p>
                  <a
                    href={item.link}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="icon-link" width={24} height={24} />
                    <span>{item.link}</span>
                  </a>
                </div>
              </li>
            ))}
          </div>
        </ul>

        <a
          href="https://t.me/usaffiliate"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Начать работу с Mustage
        </a>
    </section>
  );
}
