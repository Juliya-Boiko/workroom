import styles from './dragCard.module.scss';
import { Avatar, BadgePriopity } from '@/components/ui';
import { ITask } from '@/typings';
import { LoaderSkeleton } from '../../LoaderSkeleton';
import { getDaysToDeadline } from '@/utils';

interface Props {
  task: ITask;
  loading: boolean;
}

export const DragCard = ({ task, loading }: Props) => (
  <div className={styles.dragCard}>
    <p className={styles.order}>{loading ? <LoaderSkeleton height={16} /> : task.order}</p>
    <p className={styles.name}>{loading ? <LoaderSkeleton height={16} /> : task.name}</p>
    {loading ? (
      <LoaderSkeleton height={24} />
    ) : (
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.deadline}>{getDaysToDeadline(task.deadline)}</div>
          <BadgePriopity label={task.priority} crop />
        </div>
        {task.assignee && (
          <div title={task.assignee.name}>
            <Avatar size="s" user={{ name: task.assignee.name, avatar: task.assignee.avatar }} />
          </div>
        )}
      </div>
    )}
  </div>
);
