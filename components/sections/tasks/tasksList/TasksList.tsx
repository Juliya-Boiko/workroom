import { ITask } from '@/typings';
import styles from './tasksList.module.scss';
import { TaskSkeleton } from '@/components/cards/task/TaskSkeleton/TaskSkeleton';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import { TaskCard } from '@/components/cards/task/TaskCard';

interface Props {
  loading: boolean;
  tasks: ITask[];
}

export const TasksList = ({ loading, tasks }: Props) => {
  return (
    <>
      {loading ? (
        <TaskSkeleton />
      ) : (
        <ul className={styles.list}>
          {tasks.map((el) => (
            <li key={el._id}>
              <Link href={`${ROUTES.project}/${el.projectId}`}>
                <TaskCard task={el} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
