import { useTranslations } from 'next-intl';
import Icon from '@/helpers/Icon';
import styles from './Contacts.module.css';
import { contactsTexts } from '@/data/data';

export default function Contacts() {
  const t = useTranslations();

  return (
    <section id="contacts" className={styles.contacts}>
      <h2 className={styles.header}>{t('Contacts.header')}</h2>
      <p className={styles.par}>{t('Contacts.supportText')}</p>
      <div className={styles.main_wrap}>
        <ul className={styles.list}>
          {contactsTexts.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.icon_wrap}>
                <Icon name="icon-support" width={32} height={32} />
              </div>
              <p>
                {t(`Contacts.${item.textKey}`)}
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

        <div className={styles.back}></div>

        <div className={styles.button_wrap}>
          <p>{t('Contacts.advertisingText')}</p>
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
    </section>
  );
}
