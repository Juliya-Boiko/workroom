import styles from './tasksList.module.scss';
import { sortTasksByStatus } from '@/utils';
import Link from 'next/link';
import { ROUTES } from '@/utils';
import { ITask } from '@/typings';
import { TaskCard } from '@/components/cards/task/TaskCard';

interface Props {
  tasks: ITask[];
}

export const TasksList = ({ tasks }: Props) => {
  const sortedTasks = sortTasksByStatus(tasks);

  return (
    <div className={styles.tasksList}>
      <div className={styles.banner}>Active Tasks</div>
      <ul className={styles.list}>
        {sortedTasks.active.map((el) => (
          <li key={el._id}>
            <Link href={`${ROUTES.task}/${el._id}`}>
              <TaskCard task={el} />
            </Link>
          </li>
        ))}
      </ul>
      {sortedTasks.backlog.length ? (
        <>
          <div className={styles.banner}>Backlog</div>
          <ul className={styles.list}>
            {sortedTasks.backlog.map((el) => (
              <li key={el._id}>
                <Link href={`${ROUTES.task}/${el._id}`}>
                  <TaskCard task={el} />
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};
