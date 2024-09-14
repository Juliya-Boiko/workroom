import styles from './taskDetails.module.scss';
import { ITask } from '@/typings';
import { TaskDetailsOptions } from './taskDetailsOptions/TaskDetailsOptions';
import { TaskStatusDrop } from './taskStatusDrop/TaskStatusDrop';
import { UploadAttach } from '@/components/ui';

export const TaskDetails = ({ task }: { task: ITask }) => {
  return (
    <section className={styles.taskDetails}>
      <div className={styles.head}>
        <p className={styles.title}>Task details</p>
        <div className={styles.actions}>
          <TaskStatusDrop id={task._id} status={task.status} />
          <TaskDetailsOptions id={task._id} projectId={task.projectId} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>Description</p>
        <div>{task.description}</div>
        <UploadAttach />
        <p className={styles.title}>Attachments (3)</p>
      </div>
    </section>
  );
};
