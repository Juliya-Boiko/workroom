import styles from './activityCard.module.scss';
import { ETaskStatus, IEmployee } from '@/typings';
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
          <p className={styles.value}>{employee.tasks?.[ETaskStatus.DONE]}</p>
          <p className={styles.subtitle}>Backlog tasks</p>
        </div>
        <div>
          <p className={styles.value}>{employee.tasks?.[ETaskStatus.INPROGRESS]}</p>
          <p className={styles.subtitle}>Tasks In Progress</p>
        </div>
        <div>
          <p className={styles.value}>{employee.tasks?.[ETaskStatus.TODO]}</p>
          <p className={styles.subtitle}>To Do</p>
        </div>
      </div>
    </div>
  );
};
