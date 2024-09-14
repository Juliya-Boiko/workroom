'use client';
import styles from './tasks.module.scss';
import Image from 'next/image';
import imgSrc from '../../../../public/tasks-placeholder.png';
import { useState } from 'react';
import { useTasks } from '@/services';
import { TasksView } from './tasksView/TasksView';
import { TasksFilter } from './tasksFilter/TasksFilter';
import { TasksList } from './tasksList/TasksList';
import { TasksColumns } from './tasksColumns/TasksColumns';
import { EViewTasks } from '@/typings';

interface Props {
  projectId: string;
}

export const Tasks = ({ projectId }: Props) => {
  const [view, setView] = useState(EViewTasks.LIST);
  const { data: tasks, isLoading } = useTasks({ projectId });

  return (
    <section className={styles.tasks}>
      {tasks && !tasks.length ? (
        <div className={styles.placeholder}>
          <p className={styles.text}>You dont have tasks in this project</p>
          <Image src={imgSrc} alt="Tasks" priority className={styles.image} />
        </div>
      ) : null}
      {tasks && tasks.length ? (
        <div className={styles.container}>
          <div className={styles.head}>
            <p className={styles.title}>Tasks</p>
            <TasksView view={view} setView={(v) => setView(v)} />
            <TasksFilter />
          </div>
          {view === EViewTasks.LIST && <TasksList tasks={tasks} />}
          {view === EViewTasks.COLUMNS && <TasksColumns tasks={tasks} loading={isLoading} />}
          {view === EViewTasks.TIMELINE && <div>EViewTasks.TIMELINE</div>}
        </div>
      ) : null}
    </section>
  );
};