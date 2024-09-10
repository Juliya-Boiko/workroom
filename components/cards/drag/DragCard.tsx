import { Avatar, BadgePriopity } from '@/components/ui';
import styles from './dragCard.module.scss';
import { ITask } from '@/typings';
import { LoaderSkeleton } from '../../LoaderSkeleton';

interface Props {
  task: ITask;
  loading: boolean;
}

export const DragCard = ({ task, loading }: Props) => {
  console.log(task);
  const user = {
    name: task.assignee.name,
    avatar: task.assignee.avatar,
  };
  return (
    <div className={styles.dragCard}>
      <p className={styles.name}>{loading ? <LoaderSkeleton height={16} /> : task.name}</p>
      {loading ? (
        <LoaderSkeleton height={24} />
      ) : (
        <div className={styles.wrapper}>
          <BadgePriopity label={task.priority} />
          <div title={user.name}>
            <Avatar size="s" user={user} />
          </div>
        </div>
      )}
    </div>
  );
};
