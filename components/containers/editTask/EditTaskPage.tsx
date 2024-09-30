'use client';
import styles from './editTaskPage.module.scss';
import { ROUTES } from '@/utils';
import { useTask } from '@/services';
import { IDynamicComponent } from '@/typings';
import { Topping } from '@/components/topping/Topping';
import { Preloader, TaskStatusDrop } from '@/components/ui';
import { EditTaskForm } from '@/components/forms/editTask/EditTaskForm';

export const EditTaskPage = ({ slug }: IDynamicComponent) => {
  const { data, isLoading: isLoadingTask } = useTask(slug);

  return (
    <div className={styles.editTaskPage}>
      <Topping link="Back to task" path={`${ROUTES.task}/${data?.task?._id}`} title="Edit task">
        {data && <TaskStatusDrop id={data.task._id} status={data.task.status} />}
      </Topping>
      <div className={styles.container}>
        {isLoadingTask && (
          <div className={styles.loader}>
            <Preloader />
          </div>
        )}
        {data && <EditTaskForm task={data.task} attachments={data.attachments} />}
      </div>
    </div>
  );
};
