'use client';
import styles from './taskPage.module.scss';
import { useTask, useProject } from '@/utils';
import { IDynamicComponent } from '@/typings';
import { Topping } from '@/components/topping/Topping';
import { TaskDetails } from '@/components/sections/task/taskDetails/TaskDetails';
import { TaskInfo } from '@/components/sections/task/taskInfo/TaskInfo';

export const TaskPage = ({ slug }: IDynamicComponent) => {
  const { data: task, isLoading: isLoadingTask } = useTask(slug);
  const { data: project, isLoading: isLoadingProject } = useProject({
    projectId: task?.projectId,
    enabled: !!task?.projectId,
  });

  console.log({ task, project });

  return (
    <div className={styles.taskPage}>
      <Topping title={task?.name || ''}></Topping>
      {isLoadingProject && <div>loading project</div>}
      {isLoadingTask && <div>loading task</div>}
      {task && (
        <div className={styles.container}>
          <TaskDetails task={task} />
          <TaskInfo task={task} />
        </div>
      )}
    </div>
  );
};
