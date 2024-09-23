'use client';
import styles from './editTaskPage.module.scss';
import { ROUTES } from '@/utils';
import { useTask } from '@/services';
import { IDynamicComponent } from '@/typings';
import { Topping } from '@/components/topping/Topping';
import { Preloader } from '@/components/ui';
import { EditTaskForm } from '@/components/forms/editTask/EditTaskForm';

export const EditTaskPage = ({ slug }: IDynamicComponent) => {
  const { data: task, isLoading: isLoadingTask } = useTask(slug);

  console.log(task);

  return (
    <div className={styles.editTaskPage}>
      <Topping link="Back to task" path={`${ROUTES.task}/${task?._id}`} title="Edit task" />
      <div className={styles.container}>
        {isLoadingTask && (
          <div className={styles.loader}>
            <Preloader />
          </div>
        )}
        {task && <EditTaskForm task={task} />}
      </div>
    </div>
  );
};
