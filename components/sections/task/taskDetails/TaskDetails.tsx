import styles from './taskDetails.module.scss';
import { ITask } from '@/typings';
import { TaskDetailsOptions } from './taskDetailsOptions/TaskDetailsOptions';
import { TaskStatusDrop } from './taskStatusDrop/TaskStatusDrop';
import { UploadAttach } from '@/components/ui';

export const TaskDetails = ({ task }: { task: ITask }) => {
  return (
    <section className={styles.taskDetails}>
      <div className={styles.head}>
        <h5 className={styles.title}>TaskDetails</h5>
        <div className={styles.block}>
          <TaskStatusDrop id={task._id} status={task.status} />
          <TaskDetailsOptions id={task._id} projectId={task.projectId} />
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.subtitle}>Description</p>
        <div className={styles.description}>{task.description}</div>
        <UploadAttach />
        <p className={styles.subtitle}>Attachments (3)</p>
      </div>
    </section>
  );
};
