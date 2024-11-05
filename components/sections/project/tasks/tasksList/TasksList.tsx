'use client';
import styles from './tasksList.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { sortTasksByStatus } from '@/utils';
import { ROUTES } from '@/utils';
import { ITask } from '@/typings';
import { TaskCard } from '@/components/cards/task/TaskCard';
import { TaskSkeleton } from '@/components/cards/task/TaskSkeleton/TaskSkeleton';

interface Props {
  tasks: ITask[] | undefined;
  loading: boolean;
}

export const TasksList = ({ tasks, loading }: Props) => {
  const t = useTranslations('Common');

  return (
    <div className={styles.tasksList}>
      <div className={styles.banner}>{t('activeTasks')}</div>
      {loading ? <TaskSkeleton /> : null}
      {tasks ? (
        <ul className={styles.list}>
          {sortTasksByStatus(tasks).active.length ? (
            sortTasksByStatus(tasks).active.map((el) => (
              <li key={el._id}>
                <Link href={`${ROUTES.task}/${el._id}`}>
                  <TaskCard task={el} />
                </Link>
              </li>
            ))
          ) : (
            <li className={styles.placeholder}>You dont have active tasks in this project</li>
          )}
        </ul>
      ) : null}
      <div className={styles.banner}>{t('backlog')}</div>
      {loading ? <TaskSkeleton /> : null}
      {tasks ? (
        <ul className={styles.list}>
          {sortTasksByStatus(tasks).backlog.length ? (
            sortTasksByStatus(tasks).backlog.map((el) => (
              <li key={el._id}>
                <Link href={`${ROUTES.task}/${el._id}`}>
                  <TaskCard task={el} />
                </Link>
              </li>
            ))
          ) : (
            <li className={styles.placeholder}>You dont have finished tasks in this project</li>
          )}
        </ul>
      ) : null}
    </div>
  );
};
