import styles from './taskInfo.module.scss';
import { formatDayDate } from '@/utils';
import { ITask, EIconsSet } from '@/typings';
import { Avatar, BadgePriopity } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';

export const TaskInfo = ({ task }: { task: ITask }) => {
  const user = {
    name: task.assignee.name,
    avatar: task.assignee.avatar,
  };

  return (
    <section className={styles.taskInfo}>
      <h5 className={styles.title}>TaskInfo</h5>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Assigned</p>
        <div className={styles.assignee}>
          <Avatar size="s" user={user} />
          <span>{task.assignee.name}</span>
        </div>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Priority</p>
        <BadgePriopity label={task.priority} />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Dead Line</p>
        <p>{formatDayDate(task.deadline.toString())}</p>
      </div>
      <div className={styles.created}>
        <SvgHandler icon={EIconsSet.Calendar} />
        <span>Created</span>
        <span>{formatDayDate(task.createdAt.toString())}</span>
      </div>
    </section>
  );
};
