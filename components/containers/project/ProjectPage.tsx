'use client';
import styles from './projectPage.module.scss';
import { useProject } from '@/services';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary, Preloader } from '@/components/ui';
import { AddTaskForm } from '@/components/forms/addTask/AddTaskForm';
import { EIconsSet, IDynamicComponent } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { ProjectInfo } from '@/components/sections/project/projectInfo/ProjectInfo';
import { Tasks } from '@/components/sections/project/tasks/Tasks';

export const ProjectPage = ({ slug }: IDynamicComponent) => {
  const { data: project, isLoading } = useProject(slug);

  return (
    <div className={styles.projectPage}>
      <Topping title={project?.name || ''}>
        <Modal
          title="Add task"
          activator={
            <BtnPrimary disabled={isLoading}>
              <SvgHandler icon={EIconsSet.Plus} />
              <span>Add Task</span>
            </BtnPrimary>
          }
          content={<AddTaskForm slug={slug} start={project?.start} deadline={project?.deadline} />}
        />
      </Topping>
      <div className={styles.container}>
        {isLoading && (
          <div className={styles.loader}>
            <Preloader />
          </div>
        )}
        <div className={styles.content}>
          {project && <ProjectInfo project={project} />}
          <Tasks projectId={slug} />
        </div>
      </div>
    </div>
  );
};
