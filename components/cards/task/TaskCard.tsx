import styles from './taskCard.module.scss';
import { getEstimate } from '@/utils';
import { ITask } from '@/typings';
import { BadgePriopity, BadgeTask, Avatar } from '@/components/ui';

interface Props {
  task: ITask;
}

export const TaskCard = ({ task }: Props) => {
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
            {task.assignee && (
              <>
                <div title={task.assignee.name}>
                  <Avatar
                    size="s"
                    user={{ name: task.assignee.name, avatar: task.assignee.avatar }}
                  />
                </div>
                <span className={styles.userName}>{task.assignee.name}</span>
              </>
            )}
          </div>
        </div>
        <div className={styles.estimate}>
          <div className={styles.title}>Estimate</div>
          <div className={styles.time}>
            <span className={styles.subtitle}>Estimate:</span>{' '}
            {getEstimate(task.start, task.deadline)}
          </div>
        </div>
      </div>
      <div className={styles.badges}>
        <div className={styles.status}>
          <div className={styles.title}>Status</div>
          <BadgeTask label={task.status} />
        </div>
        <div className={styles.priority}>
          <div className={styles.title}>Priority</div>
          <BadgePriopity label={task.priority} />
        </div>
      </div>
    </div>
  );
};
