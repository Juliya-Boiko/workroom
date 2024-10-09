import styles from './infoPortalStatistic.module.scss';

export const InfoPortalStatistic = () => (
  <section className={styles.infoPortalStatistic}>
    <h2 className={styles.title}>Current Projects</h2>
    <div className={styles.wrapper}>
      <div>
        <div className={styles.amount}>10</div>
        <div className={styles.dynamic}>Growth +3</div>
      </div>
      <div>line</div>
    </div>
    <p className={styles.subtitle}>Ongoing projects last month - 7</p>
  </section>
);
