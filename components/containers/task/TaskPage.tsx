'use client';
import styles from './taskPage.module.scss';
import { ROUTES } from '@/utils';
import { useTask } from '@/services';
import { useTranslations } from 'next-intl';
import { IDynamicComponent, EIconsSet } from '@/typings';
import { Topping } from '@/components/topping/Topping';
import { Preloader, Modal, BtnPrimary } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { LogTimeForm } from '@/components/forms/logTime/LogTimeForm';
import { TaskDetails } from '@/components/sections/task/taskDetails/TaskDetails';
import { TaskInfo } from '@/components/sections/task/taskInfo/TaskInfo';
import { TaskComments } from '@/components/sections/task/comments/TaskComments';
import { useAttachments } from '@/services/attachments/useAttachments';

export const TaskPage = ({ slug }: IDynamicComponent) => {
  const { data: task, isLoading: isLoadingTask } = useTask(slug);
  const { data: attachments } = useAttachments(slug);
  const t = useTranslations();

  return (
    <div className={styles.taskPage}>
      <Topping
        link="Projects.backTasks"
        path={`${ROUTES.project}/${task?.projectId}`}
        subtitle={task?.name || ''}
      >
        <Modal
          title={t('Tasks.timeTracking')}
          activator={
            <BtnPrimary disabled={isLoadingTask}>
              <SvgHandler icon={EIconsSet.ClockOutlined} />
              <span>{t('Tasks.logTime')}</span>
            </BtnPrimary>
          }
          content={
            <LogTimeForm minDate={task?.start} maxDate={task?.deadline} taskId={task?._id} />
          }
        />
      </Topping>
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
