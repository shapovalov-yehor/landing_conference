import Icon from '@/helpers/Icon';
import styles from './Contacts.module.css';
import { contactsTexts } from '@/data/data';

export default function Contacts() {
  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.container}>
        <h2 className={styles.header}>Контакты</h2>
        <p className={styles.par}>Поддержка по направлениям:</p>
        <div className={styles.main_wrap}>
          <ul className={styles.list}>
            {contactsTexts.map((item, index) => (
              <li key={index} className={styles.item}>
                <div className={styles.icon_wrap}>
                  <Icon name="icon-support" width={32} height={32} />
                </div>
                <p>
                  {item.text}
                  <a
                    href={`https://t.me/${item.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{item.name}</span>
                  </a>
                </p>
              </li>
            ))}
          </ul>
          <div className={styles.button_wrap}>
            <p>Реклама и сотрудничество -</p>
            <a
              href="https://t.me/usaffiliate"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              @usaffiliate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
