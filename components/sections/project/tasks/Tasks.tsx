'use client';
import styles from './tasks.module.scss';
import { useState } from 'react';
import { useTasks } from '@/services';
import { useTranslations } from 'next-intl';
import { TasksView } from './tasksView/TasksView';
import { TasksFilter } from './tasksFilter/TasksFilter';
import { TasksList } from './tasksList/TasksList';
import { TasksColumns } from './tasksColumns/TasksColumns';
import { EViewTasks, IFilters } from '@/typings';
import { Placeholder } from '@/components/ui';

interface Props {
  projectId: string;
}

export const Tasks = ({ projectId }: Props) => {
  const [view, setView] = useState(EViewTasks.LIST);
  const [filters, setFilters] = useState<null | IFilters>(null);
  const { data: tasks, isLoading } = useTasks(projectId, filters);
  const t = useTranslations();

  return (
    <section className={styles.tasks}>
      <div className={styles.container}>
        <div className={styles.head}>
          <p className={styles.title}>{t('Tasks.title')}</p>
          <TasksView view={view} setView={(v) => setView(v)} />
          <TasksFilter filters={filters} setFilters={(v) => setFilters(v)} />
        </div>
        {tasks && !tasks.length ? <Placeholder primary title="tasks" /> : null}
        {view === EViewTasks.LIST && tasks && tasks.length ? (
          <TasksList tasks={tasks} loading={isLoading} />
        ) : null}
        {view === EViewTasks.COLUMNS && tasks && tasks.length ? (
          <TasksColumns tasks={tasks} loading={isLoading} />
        ) : null}
        {view === EViewTasks.TIMELINE && tasks && tasks.length ? (
          <div>EViewTasks.TIMELINE</div>
        ) : null}
      </div>
    </section>
  );
};
