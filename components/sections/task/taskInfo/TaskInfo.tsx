'use client';
import styles from './taskInfo.module.scss';
import { useState, useEffect } from 'react';
import { useTimelogs } from '@/services';
import { useTranslations } from 'next-intl';
import { formatDayDate, getEstimate, calculateEstimateInSeconds, LOCALE_LANGUAGE } from '@/utils';
import { ITask, EIconsSet } from '@/typings';
import { Avatar, BadgePriopity } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { TaskStatusDrop } from '@/components/ui';
import { ProgressTimelog } from '@/components/progress/ProgressTimelog';
import { TaskOptions } from './taskOptions/TaskOptions';

export const TaskInfo = ({ task }: { task: ITask }) => {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<string | null>(null);
  const { data: logged } = useTimelogs(task._id);
  const t = useTranslations();

  useEffect(() => {
    const storedLocale = localStorage.getItem(LOCALE_LANGUAGE);
    setLocale(storedLocale);
  }, []);

  return (
    <section className={styles.taskInfo}>
      <div className={styles.main}>
        <p className={styles.title}>{t('Tasks.info')}</p>
        <button type="button" className={styles.toggleBtn} onClick={() => setOpen((prev) => !prev)}>
          <span>{t('Tasks.show')}</span>
          <SvgHandler icon={EIconsSet.ChevronDown} />
        </button>
        <TaskOptions id={task._id} projectId={task.projectId} />
      </div>
      <div className={`${styles.info} ${open ? styles.showInfo : styles.hideInfo}`}>
        <TaskStatusDrop id={task._id} status={task.status} />
        <div className={styles.tracker}>
          <p>{t('Tasks.timeTracking')}</p>
          <ProgressTimelog
            value={logged}
            total={calculateEstimateInSeconds(task.start, task.deadline)}
            estimate={getEstimate(task.start, task.deadline)}
          />
        </div>
        {task.assignee && (
          <div className={styles.wrapper}>
            <p className={styles.subtitle}>{t('Common.assigned')}</p>
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
          <p className={styles.subtitle}>{t('Forms.start')}</p>
          <p>{formatDayDate(task.start.toString(), locale)}</p>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>{t('Forms.deadline')}</p>
          <p>{formatDayDate(task.deadline.toString(), locale)}</p>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>{t('Forms.priority')}</p>
          <BadgePriopity label={task.priority} />
        </div>
        <div className={styles.created}>
          <SvgHandler icon={EIconsSet.Calendar} />
          <span>{t('Common.created')}</span>
          <span>{formatDayDate(task.createdAt.toString(), locale)}</span>
        </div>
      </div>
    </section>
  );
};
