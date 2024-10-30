'use client';
import styles from './infoPortalStatistic.module.scss';
import { useProjects } from '@/services';
import { growthAmount, lastAmount, getDynamic } from '@/utils';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';
import { LineChart, Line } from 'recharts';

export const InfoPortalStatistic = () => {
  const { data, isLoading } = useProjects(null);

  return (
    <section className={styles.infoPortalStatistic}>
      <h2 className={styles.title}>Current Projects</h2>
      {isLoading ? <LoaderSkeleton height={54} /> : null}
      {data ? (
        <div className={styles.wrapper}>
          <div>
            <div className={styles.amount}>{data.total}</div>
            {data.total ? (
              <div className={styles.dynamic}>Growth +{growthAmount(data.projects)}</div>
            ) : null}
          </div>
          <div className={styles.chart}>
            <LineChart width={100} height={80} data={getDynamic(data.projects)}>
              <Line type="monotone" dataKey="pv" stroke="#3F8CFF" strokeWidth={2} />
            </LineChart>
          </div>
        </div>
      ) : null}
      <p className={styles.subtitle}>
        {isLoading ? <LoaderSkeleton height={14} /> : null}
        {data ? `Ongoing projects last month - ${lastAmount(data.projects)}` : null}
      </p>
    </section>
  );
};
