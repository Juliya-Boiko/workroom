'use client';
import styles from './taskPage.module.scss';
import { ROUTES } from '@/utils';
import { useTask } from '@/services';
import { IDynamicComponent } from '@/typings';
import { Topping } from '@/components/topping/Topping';
import { Preloader } from '@/components/ui';
import { TaskDetails } from '@/components/sections/task/taskDetails/TaskDetails';
import { TaskInfo } from '@/components/sections/task/taskInfo/TaskInfo';

export const TaskPage = ({ slug }: IDynamicComponent) => {
  const { data, isLoading: isLoadingTask } = useTask(slug);

  return (
    <div className={styles.taskPage}>
      <Topping
        link="Back to project info"
        path={`${ROUTES.project}/${data?.task?.projectId}`}
        title={data?.task?.name || ''}
      />
      <div className={styles.container}>
        {isLoadingTask && (
          <div className={styles.loader}>
            <Preloader />
          </div>
        )}
        {data && (
          <div className={styles.content}>
            <TaskInfo task={data?.task} />
            <TaskDetails task={data?.task} attachments={data.attachments} />
          </div>
        )}
      </div>
    </div>
  );
};
