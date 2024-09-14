import styles from './tasks.module.scss';
import imgSrc from '../../../../public/tasks-placeholder.png';
import Image from 'next/image';
import { sortTasksByStatus } from '@/utils';
import { EViewTasks, ITask } from '@/typings';
import { TasksActions } from './tasksActions/TasksActions';
import { TasksList } from './tasksList/TasksList';
import { TasksColumns } from './tasksColumns/TasksColumns';

interface Props {
  view: EViewTasks;
  project: boolean;
  tasks: ITask[];
  loading: boolean;
  setView: (v: EViewTasks) => void;
}

export const Tasks = ({ project, tasks, view, loading, setView }: Props) => {
  const sortedTasks = sortTasksByStatus(tasks);

  return (
    <section className={styles.tasks}>
      <TasksActions view={view} setView={setView} />

      <div className={styles.container}>
        {!loading && !project && (
          <>
            <p className={styles.text}>Choose project to review tasks</p>
            <Image src={imgSrc} alt="Tasks" priority className={styles.image} />
          </>
        )}
        {!loading && project && !tasks.length && (
          <>
            <p className={styles.text}>You dont have tasks in this project</p>
            <Image src={imgSrc} alt="Tasks" priority className={styles.image} />
          </>
        )}
        {loading && (
          <div className={styles.wrapper}>
            <div className={styles.banner}>Active Tasks</div>
            <TasksList loading={loading} tasks={sortedTasks.active} />
            <div className={styles.banner}>Backlog</div>
            <TasksList loading={loading} tasks={sortedTasks.backlog} />
          </div>
        )}
        {tasks.length > 0 && view === EViewTasks.LIST && (
          <div className={styles.wrapper}>
            <div className={styles.banner}>Active Tasks</div>
            <TasksList loading={loading} tasks={sortedTasks.active} />
            <div className={styles.banner}>Backlog</div>
            <TasksList loading={loading} tasks={sortedTasks.backlog} />
          </div>
        )}
        {tasks.length > 0 && view === EViewTasks.COLUMNS && (
          <TasksColumns loading={loading} tasks={tasks} />
        )}
      </div>
    </section>
  );
};
