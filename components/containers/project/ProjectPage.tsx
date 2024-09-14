'use client';
import styles from './projectPage.module.scss';
import { useState } from 'react';
import { useProject, useTasks } from '@/services';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary, Preloader } from '@/components/ui';
import { AddTaskForm } from '@/components/forms/addTask/AddTaskForm';
import { EIconsSet, EViewTasks, IDynamicComponent } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { ProjectInfo } from '@/components/sections/project/projectInfo/ProjectInfo';
import { Tasks } from '@/components/sections/project/tasks/Tasks';

export const ProjectPage = ({ slug }: IDynamicComponent) => {
  const [view, setView] = useState(EViewTasks.LIST);
  const { data: project, isLoading } = useProject({
    projectId: slug,
    enabled: true,
  });
  const { data: tasks, isLoading: isLoadingTasks } = useTasks({
    projectId: slug,
    enabled: true,
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
          content={<AddTaskForm slug={slug} start={project?.start} deadline={project?.deadline} />}
        />
      </Topping>
      <div className={styles.container}>
        {isLoading || isLoadingTasks ? (
          <div className={styles.loader}>
            <Preloader />
          </div>
        ) : null}
        <div className={styles.content}>
          {project && <ProjectInfo project={project} />}
          <div>taskslist</div>
        </div>
        {/* {project && (
        
          <ProjectInfo editable project={project} />
          <Tasks
            view={view}
            project={!!project._id}
            tasks={tasks || []}
            loading={isLoadingTasks}
            setView={(v: EViewTasks) => setView(v)}
          />
        )} */}
      </div>
    </div>
  );
};
