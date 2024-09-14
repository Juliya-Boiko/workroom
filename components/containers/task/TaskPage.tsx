'use client';
import styles from './taskPage.module.scss';
import Link from 'next/link';
import { ROUTES } from '@/utils';
import { useTask } from '@/services';
import { IDynamicComponent, EIconsSet } from '@/typings';
import { Topping } from '@/components/topping/Topping';
import { Preloader } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { TaskDetails } from '@/components/sections/task/taskDetails/TaskDetails';
import { TaskInfo } from '@/components/sections/task/taskInfo/TaskInfo';

export const TaskPage = ({ slug }: IDynamicComponent) => {
  const { data: task, isLoading: isLoadingTask } = useTask(slug);

  return (
    <div className={styles.taskPage}>
      <Link href={`${ROUTES.project}/${task?.projectId}`} className={styles.link}>
        <SvgHandler icon={EIconsSet.ArrowLeft} />
        Back to project info
      </Link>
      <Topping title={task?.name || ''}></Topping>
      <div className={styles.container}>
        {isLoadingTask && (
          <div className={styles.loader}>
            <Preloader />
          </div>
        )}
        {task && (
          <div className={styles.content}>
            <TaskInfo task={task} />
            <TaskDetails task={task} />
          </div>
        )}
      </div>
    </div>
  );
};
