import Icon from '@/helpers/Icon';
import styles from './Footer.module.css';
import { resourseItems } from '@/data/data';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  return (
    <section id="footer" className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.header}>{t('Footer.title')}</h3>

        <ul className={styles.list}>
          {resourseItems.map((item, index) => (
            <li key={index}>
              <a
                className={styles.item}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{t(item.text)}</p>
                <Icon name={item.icon} width={40} height={40} />
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.email_wrap}>
          <div className={styles.footer_icon}>
            <Icon name="icon-logo_footer" width={88} height={72} />
            <span className={styles.logo_text}>Mustage OÜ</span>
          </div>
          <div className={styles.location_wrap}>
            <div className={styles.email_wrapper}>
              <a
                className={styles.email_text}
                href="mailto:mustage.team@gmail.com"
              >
                mustage.team@gmail.com
              </a>
              <div className={styles.email_icon_wrap}>
                <Icon name="icon-email" width={24} height={24} />
              </div>
            </div>
            <div className={styles.email_wrapper}>
              <a
                className={styles.location_text}
                href="https://www.google.com/maps/place/Kaupmehe+tn+7,+10114+Tallinn,+Estonia/data=!4m2!3m1!1s0x469294a1c763a151:0x1ac152d4e95a121f?sa=X&ved=1t:242&ictx=111"
              >
                Harju maakond, Tallinn, Kesklinna linnaosa, Kaupmehe tn 7-120,
                10114
              </a>
              <div className={styles.email_icon_wrap}>
                <Icon name="icon-location" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.marquee_wrap}>
        <div className={styles.marquee}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className={styles.text_wrap}>
              <span className={styles.link}>mustage.team</span>
              <span className={styles.link}>/</span>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className={styles.marquee}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className={styles.text_wrap}>
              <span className={styles.link}>mustage.team</span>
              <span className={styles.link}>/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
