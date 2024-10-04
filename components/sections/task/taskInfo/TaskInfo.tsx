'use client';
import styles from './taskInfo.module.scss';
import { useState } from 'react';
import { formatDayDate } from '@/utils';
import { ITask, EIconsSet } from '@/typings';
import { Avatar, BadgePriopity } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { BtnIcon } from '@/components/ui';

export const TaskInfo = ({ task }: { task: ITask }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.taskInfo}>
      <div className={styles.main} onClick={() => setOpen((prev) => !prev)}>
        <p>Task Info</p>
        <div className={styles.laptopHidden}>
          <BtnIcon title="Show info" icon={EIconsSet.ChevronDown} />
        </div>
      </div>
      <div className={`${styles.info} ${open ? styles.showInfo : styles.hideInfo}`}>
        {task.assignee && (
          <div className={styles.wrapper}>
            <p className={styles.subtitle}>Assigned</p>
            <div className={styles.assignee}>
              <div>
                <Avatar
                  size="s"
                  user={{ name: task.assignee?.name, avatar: task.assignee?.avatar }}
                />
              </div>
              <span className={styles.userName}>{task.assignee.name}</span>
            </div>
          </div>
        )}
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>Deadline</p>
          <p>{formatDayDate(task.deadline.toString())}</p>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>Priority</p>
          <BadgePriopity label={task.priority} />
        </div>
        <div className={styles.created}>
          <SvgHandler icon={EIconsSet.Calendar} />
          <span>Created</span>
          <span>{formatDayDate(task.createdAt.toString())}</span>
        </div>
      </div>
    </section>
  );
};
