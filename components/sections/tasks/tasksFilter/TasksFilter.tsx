'use client';
import styles from './tasksFilter.module.scss';
import { useState } from 'react';
import { BtnIcon, Overlay } from '@/components/ui';
import { EIconsSet } from '@/typings';

export const TasksFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <BtnIcon title="Filter" onClick={() => setOpen(true)} icon={EIconsSet.Filter} />
      {open && (
        <Overlay onClose={() => setOpen(false)}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.head}>
                <h6 className={styles.title}>Filters</h6>
                <BtnIcon
                  title="Close"
                  tonal
                  onClick={() => setOpen(false)}
                  icon={EIconsSet.Cross}
                />
              </div>
              <div className={styles.filters}>filters</div>
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
};
