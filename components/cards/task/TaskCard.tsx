import styles from './taskCard.module.scss';
import { getEstimate } from '@/utils';
import { ITask } from '@/typings';
import { BadgePriopity, BadgeTask, Avatar } from '@/components/ui';

interface Props {
  task: ITask;
}

export const TaskCard = ({ task }: Props) => {
  console.log(task);
  return (
    <div className={styles.taskCard}>
      <div className={styles.name}>
        <div className={styles.title}>Task Name</div>
        <p className={styles.taskName}>{task.name}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.assignee}>
          <div className={styles.title}>Assignee</div>
          <div className={styles.user}>
            <Avatar size="s" user={{ name: task.assignee.name, avatar: task.assignee.avatar }} />
            <span>{task.assignee.name}</span>
          </div>
        </div>
        <div className={styles.estimate}>
          <div className={styles.title}>Estimate</div>
          <div className={styles.time}>{getEstimate(task.start, task.deadline)}</div>
        </div>
      </div>
      <div className={styles.badges}>
        <div className={styles.priority}>
          <div className={styles.title}>Priority</div>
          <BadgePriopity label={task.priority} />
        </div>
        <div className={styles.status}>
          <div className={styles.title}>Status</div>
          <BadgeTask label={task.status} />
        </div>
      </div>
    </div>
  );
};
