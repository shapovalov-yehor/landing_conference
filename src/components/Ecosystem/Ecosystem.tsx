import styles from './Ecosystem.module.css';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className={styles.ecosystem}>
      <div className={styles.container}>
        <h2 className={styles.header}>От аккаунтов к экосистеме</h2>
        <div className={styles.eco_wrap}>
          <div className={styles.par_wrap_first}>
            <h3 className={styles.eco_par_header}>
              Начав наш путь с продажи Facebook-аккаунтов,
            </h3>
            <p className={styles.eco_par}>
              мы быстро поняли, что рынку нужно гораздо больше. Наши клиенты
              сталкивались с различными проблемами в арбитраже трафика, и мы
              решили создать комплексное решение для каждой из них.
            </p>
          </div>
          <div className={styles.par_wrap_second}>
            <div className={styles.eco_par_wrap}>
              <p className={styles.eco_par}>
                Сначала появился <span>Mustage Store</span> или же, будет
                правильнее сказать, продавец — <span>Mustage Support,</span> на
                первых этапах выполнявший роль магазина пока мы не сделали
                полноценный сайт.
              </p>
            </div>
            <div className={styles.eco_par_wrap}>
              <p className={styles.eco_par}>
                <span>Mustage Store</span> — место, где каждый арбитражник может
                найти качественные аккаунты для работы. Мы перфекционисты в том,
                что касается качества, поэтому каждый аккаунт проходит
                тщательную проверку перед продажей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
