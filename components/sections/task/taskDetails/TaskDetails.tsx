import styles from './taskDetails.module.scss';
import Link from 'next/link';
import { EIconsSet, ITask, IAttachment, EAttachType } from '@/typings';
import { TaskDetailsOptions } from './taskDetailsOptions/TaskDetailsOptions';
import { TaskStatusDrop } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { AttachViewBox } from './attachViewbox/AttachViewBox';

interface Props {
  task: ITask;
  attachments: IAttachment[];
}

export const TaskDetails = ({ task, attachments }: Props) => {
  const total = attachments.length;
  const links = attachments.filter((el) => el.type === EAttachType.LINK);
  const images = attachments.filter((el) => el.type === EAttachType.FILE);

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
          {images.map((el) => (
            <li key={el._id} className={styles.fileItem}>
              <AttachViewBox item={el} />
            </li>
          ))}
        </ul>
        <ul className={styles.linksList}>
          {links.map(({ _id, title, value }) => (
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
