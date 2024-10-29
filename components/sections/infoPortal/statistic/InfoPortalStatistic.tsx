'use client';
import styles from './infoPortalStatistic.module.scss';
import { useProjects } from '@/services';
import { growthAmount } from '@/utils';

export const InfoPortalStatistic = () => {
  const { data, isLoading } = useProjects(null);

  // console.log({ data });

  return (
    <section className={styles.infoPortalStatistic}>
      <h2 className={styles.title}>Current Projects</h2>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.amount}>{data ? data.total : ''}</div>
          {data && data.total ? <div className={styles.dynamic}>Growth +{growthAmount(data)}</div> : null}
        </div>
        <div>line</div>
      </div>
      <p className={styles.subtitle}>Ongoing projects last month - 7</p>
    </section>
  );
};
