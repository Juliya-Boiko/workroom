import styles from './taskInfo.module.scss';
import { ITask } from '@/typings';
import { BadgePriopity } from '@/components/ui';

export const TaskInfo = ({ task }: { task: ITask }) => {
  console.log(task)
  return (
    <section className={styles.taskInfo}>
      <h5 className={styles.title}>TaskInfo</h5>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Assigned</p>
        <div>

        </div>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Priority</p>
        <BadgePriopity label={task.priority} />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Dead Line</p>
      </div>
      <div>
        <p>Created May 28, 2020</p>
      </div>
      {/* <div className={styles.head}>
        
        <div className={styles.block}>
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.subtitle}>Description</p>
        <div className={styles.description}>{task.description}</div>
        <p className={styles.subtitle}>Attachments (3)</p>
      </div> */}
    </section>
  );
};
