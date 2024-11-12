import dolphin from '../../img/clients/dolphin.webp';
import cloakIt from '../../img/clients/cloak-it.webp';
import sender from '../../img/clients/sender.webp';

import Icon from '@/helpers/Icon';
import styles from './Clients.module.css';
import Image from 'next/image';
import { clientsItems } from '@/data/data';
import { useTranslations } from 'next-intl';

export default function Clients() {
  const t = useTranslations('');

  return (
    <section id="clients" className={styles.clients}>
      <h2 className={styles.header}>
        {t('Clients.header.headerPart1')}{' '}
        <span>
          {t('Clients.header.headerPart2')}
          {t('Clients.header.headerPart3')}
        </span>{' '}
        {t('Clients.header.headerPart4')} <br />
        {t('Clients.header.headerPart5')}
      </h2>

      <div className={styles.grid}>
        <ul className={styles.column}>
          <li className={styles.item}>
            <div className={styles.image_wrap}>
              <Image
                className={styles.logo}
                src={dolphin}
                width={0}
                height={0}
                sizes="100vw"
                alt="Item icon"
              />
            </div>
            <div className={styles.text_wrap}>
              <h3>
                {t(`Clients.items.dolphinAnty.header.headerPart1`)}
                &#123;{t(`Clients.items.dolphinAnty.header.headerPart2`)}
                &#125;
              </h3>
              <p>{t(`Clients.items.dolphinAnty.text`)}</p>
              <a
                href={t('Clients.link')}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="icon-link" width={24} height={24} />
                <span>{t('Clients.link')}</span>
              </a>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.image_wrap}>
              <Image
                className={styles.logo}
                src={sender}
                width={0}
                height={0}
                sizes="100vw"
                alt="Item icon"
              />
            </div>
            <div className={styles.text_wrap}>
              <h3>{t(`Clients.items.smartSender.header`)}</h3>
              <p>{t(`Clients.items.smartSender.text`)}</p>
              <a
                href={t('Clients.link')}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="icon-link" width={24} height={24} />
                <span>{t('Clients.link')}</span>
              </a>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.image_wrap}>
              <Image
                className={styles.logo}
                src={cloakIt}
                width={0}
                height={0}
                sizes="100vw"
                alt="Item icon"
              />
            </div>
            <div className={styles.text_wrap}>
              <h3>{t(`Clients.items.cloakIt.header`)}</h3>
              <p>{t(`Clients.items.cloakIt.text`)}</p>
              <a
                href={t('Clients.link')}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="icon-link" width={24} height={24} />
                <span>{t('Clients.link')}</span>
              </a>
            </div>
          </li>
        </ul>

        <ul className={`${styles.column} ${styles.styled}`}>
          {clientsItems.map((item, index) => (
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
                <h3>{t(`Clients.items.${item.id}.header`)}</h3>
                <p>{t(`Clients.items.${item.id}.text`)}</p>
                <a
                  href={t('Clients.link')}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="icon-link" width={24} height={24} />
                  <span>{t('Clients.link')}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="https://t.me/usaffiliate"
        className={styles.button}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('Main.button')}
      </a>
    </section>
  );
}
