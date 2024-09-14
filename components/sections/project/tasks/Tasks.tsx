'use client';
import styles from './tasks.module.scss';
import Image from 'next/image';
import imgSrc from '../../../../public/tasks-placeholder.png';
import { useState } from 'react';
import { useTasks } from '@/services';
import { TasksView } from './tasksView/TasksView';
import { TasksFilter } from './tasksFilter/TasksFilter';
import { TasksList } from './tasksList/TasksList';
import { EViewTasks } from '@/typings';
// import { TasksActions } from './tasksActions/TasksActions';
// import { TasksList } from './tasksList/TasksList';
// import { TasksColumns } from './tasksColumns/TasksColumns';

interface Props {
  projectId: string;
  // view: EViewTasks;
  // project: boolean;
  // tasks: ITask[];
  // loading: boolean;
  // setView: (v: EViewTasks) => void;
}

export const Tasks = ({ projectId }: Props) => {
  const [view, setView] = useState(EViewTasks.LIST);
  const { data: tasks } = useTasks({ projectId });

  console.log(tasks);

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
          {view === EViewTasks.COLUMNS && <div>EViewTasks.Columns</div>}
          {view === EViewTasks.TIMELINE && <div>EViewTasks.TIMELINE</div>}
        </div>
      ) : null}
      {/* {tasks.length > 0 && view === EViewTasks.COLUMNS && (
          <TasksColumns loading={loading} tasks={tasks} />
        )} */}
    </section>
  );
};
