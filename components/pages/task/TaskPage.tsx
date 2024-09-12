'use client';
import styles from './taskPage.module.scss';
import { useTask, useProject, ROUTES } from '@/utils';
import { EIconsSet, IDynamicComponent } from '@/typings';
import { Topping } from '@/components/topping/Topping';
import { TaskDetails } from '@/components/sections/task/taskDetails/TaskDetails';
import { TaskInfo } from '@/components/sections/task/taskInfo/TaskInfo';
import { ProjectInfo } from '@/components/sections/project/projectInfo/ProjectInfo';
import Link from 'next/link';
import { SvgHandler } from '@/components/SvgHandler';

export const TaskPage = ({ slug }: IDynamicComponent) => {
  const { data: task, isLoading: isLoadingTask } = useTask(slug);
  const { data: project, isLoading: isLoadingProject } = useProject({
    projectId: task?.projectId,
    enabled: !!task?.projectId,
  });

  console.log({ task, project });

  return (
    <div className={styles.taskPage}>
      <Link href={`${ROUTES.project}/${project?._id}`} className={styles.link}>
        <SvgHandler icon={EIconsSet.ArrowLeft} />
        Back to project info
      </Link>
      <Topping title={task?.name || ''}></Topping>
      {isLoadingProject && <div>loading project</div>}
      {isLoadingTask && <div>loading task</div>}
      {task && project && (
        <div className={styles.container}>
          <div className={styles.projectInfo}>
            <ProjectInfo project={project} />
          </div>
          <TaskDetails task={task} />
          <TaskInfo task={task} />
        </div>
      )}
    </div>
  );
};
