import styles from './activityCard.module.scss';
import { IEmployee } from '@/typings';
import { WorkloadCard } from '../workload/WorkloadCard';

interface Props {
  employee: IEmployee;
}

export const ActivityCard = ({ employee }: Props) => {
  return (
    <div className={styles.activityCard}>
      <WorkloadCard user={employee} />
      <div className={styles.tasks}>
        <div>
          <p className={styles.value}>0</p>
          <p className={styles.subtitle}>Backlog tasks</p>
        </div>
        <div>
          <p className={styles.value}>14</p>
          <p className={styles.subtitle}>Tasks In Progress</p>
        </div>
        <div>
          <p className={styles.value}>2</p>
          <p className={styles.subtitle}>To Do</p>
        </div>
      </div>
    </div>
  );
};
