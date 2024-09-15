'use client';
import styles from './tasksFilter.module.scss';
import { useState } from 'react';
import { BtnIcon, Overlay } from '@/components/ui';
import { EIconsSet, IFilters } from '@/typings';
import { TaskFilterForm } from '@/components/forms/taskFilter/TaskFilterForm';

interface Props {
  filters: IFilters | null;
  setFilters: (v: IFilters) => void;
}

export const TasksFilter = ({ setFilters, filters }: Props) => {
  const [open, setOpen] = useState(false);

  const handleFilters = (v: IFilters) => {
    setFilters(v);
    setOpen(false);
  };

  return (
    <div>
      <BtnIcon title="Filter" onClick={() => setOpen(true)} icon={EIconsSet.Filter} />
      {open && (
        <Overlay onClose={() => setOpen(false)}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.head}>
                <h6 className={styles.title}>Filters</h6>
                <BtnIcon title="Close" onClick={() => setOpen(false)} icon={EIconsSet.Cross} />
              </div>
              <TaskFilterForm filters={filters} setFilters={handleFilters} />
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
};
