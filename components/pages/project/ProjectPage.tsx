'use client';
import styles from './projectPage.module.scss';
import { useState } from 'react';
import { useProject, useTasks } from '@/utils';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary, Preloader } from '@/components/ui';
import { AddTaskForm } from '@/components/forms/addTask/AddTaskForm';
import { EIconsSet, EView, IDynamicComponent } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { ProjectInfo } from '@/components/sections/project/projectInfo/ProjectInfo';
import { Tasks } from '@/components/sections/tasks/Tasks';

export const ProjectPage = ({ slug }: IDynamicComponent) => {
  const [view, setView] = useState(EView.LIST);
  const { data: project, isLoading } = useProject(slug);
  const { data: tasks, isLoading: isLoadingTasks } = useTasks({
    projectId: project?._id,
    enabled: !!project?._id,
  });
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
          content={<AddTaskForm slug={slug} />}
        />
      </Topping>
      {isLoading && (
        <div className={styles.loader}>
          <Preloader />
        </div>
      )}
      {project && (
        <div className={styles.container}>
          <ProjectInfo project={project} />
          <Tasks
            view={view}
            project={!!project._id}
            tasks={tasks || []}
            loading={isLoadingTasks}
            setView={(v: EView) => setView(v)}
          />
        </div>
      )}
    </div>
  );
};
