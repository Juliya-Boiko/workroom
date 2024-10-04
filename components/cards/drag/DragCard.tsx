import styles from './dragCard.module.scss';
import { Avatar, BadgePriopity } from '@/components/ui';
import { ITask } from '@/typings';
import { LoaderSkeleton } from '../../LoaderSkeleton';

interface Props {
  task: ITask;
  loading: boolean;
}

export const DragCard = ({ task, loading }: Props) => {
  return (
    <div className={styles.dragCard}>
      <p className={styles.name}>{loading ? <LoaderSkeleton height={16} /> : task.name}</p>
      {loading ? (
        <LoaderSkeleton height={24} />
      ) : (
        <div className={styles.wrapper}>
          <BadgePriopity label={task.priority} />
          {task.assignee && (
            <div title={task.assignee.name}>
              <Avatar size="s" user={{ name: task.assignee.name, avatar: task.assignee.avatar }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
