'use client';
import styles from './taskPage.module.scss';
import { ROUTES } from '@/utils';
import { useTask } from '@/services';
import { IDynamicComponent } from '@/typings';
import { Topping } from '@/components/topping/Topping';
import { Preloader } from '@/components/ui';
import { TaskDetails } from '@/components/sections/task/taskDetails/TaskDetails';
import { TaskInfo } from '@/components/sections/task/taskInfo/TaskInfo';
import { TaskComments } from '@/components/sections/task/comments/TaskComments';
import { useAttachments } from '@/services/useAttachments';

export const TaskPage = ({ slug }: IDynamicComponent) => {
  const { data: task, isLoading: isLoadingTask } = useTask(slug);
  const { data: attachments } = useAttachments(slug);

  return (
    <div className={styles.taskPage}>
      <Topping
        link="Back to project info"
        path={`${ROUTES.project}/${task?.projectId}`}
        title={task?.name || ''}
      />
      <div className={styles.container}>
        {isLoadingTask && (
          <div className={styles.loader}>
            <Preloader />
          </div>
        )}
        {task && attachments && (
          <div className={styles.content}>
            <TaskInfo task={task} />
            <div className={styles.wrapper}>
              <TaskDetails task={task} attachments={attachments} />
              <TaskComments taskId={task._id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
