import styles from './taskDetails.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { formatDayDate } from '@/utils';
import { EIconsSet, ITask, ITaskAttachments } from '@/typings';
import { TaskDetailsOptions } from './taskDetailsOptions/TaskDetailsOptions';
import { TaskStatusDrop } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';

interface Props {
  task: ITask;
  attachments: ITaskAttachments;
}

export const TaskDetails = ({ task, attachments }: Props) => {
  const total = attachments.links.length + attachments.files.length;

  return (
    <section className={styles.taskDetails}>
      <div className={styles.head}>
        <p className={styles.title}>Task details</p>
        <div className={styles.actions}>
          <TaskStatusDrop id={task._id} status={task.status} />
          <TaskDetailsOptions id={task._id} projectId={task.projectId} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>Description</p>
        <div>{task.description}</div>
        <p className={styles.title}>Task Attachments ({total})</p>
        <ul className={styles.filesList}>
          {attachments.files.map(({ _id, value, title, createdAt }) => (
            <li key={_id} className={styles.fileItem}>
              <Image
                priority
                src={value}
                alt={title}
                width={156}
                height={144}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <p className={styles.fileName}>{title}</p>
                <p className={styles.date}>{formatDayDate(createdAt)}</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className={styles.linksList}>
          {attachments.links.map(({ _id, title, value }) => (
            <li key={_id} className={styles.linkItem}>
              <SvgHandler icon={EIconsSet.AttachLink} />
              <Link href={value}>{title || value}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
