import Icon from '@/helpers/Icon';
import styles from './Future.module.css';
import { futureItems } from '@/data/data';

export default function Future() {
  return (
    <section id="future" className={styles.future}>
      <div className={styles.container}>
        <h2 className={styles.header}>Взгляд в будущее</h2>
        <p className={styles.par}>Мы не останавливаемся на достигнутом.</p>
        <div className={styles.main_wrap}>
          <p>В планах:</p>
          <ul className={styles.list}>
            {futureItems.map((item, index) => (
              <li key={index} className={styles.item}>
                <div className={styles.icon_wrap}>
                  <Icon name="icon-plus" width={24} height={24} />
                </div>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className={styles.button}
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
