import styles from './projectInfo.module.scss';
import Image from 'next/image';
import { EIconsSet, IProjectDetails } from '@/typings';
import { formatDayDate, defineImageSrc } from '@/utils';
import { BadgePriopity, UploadAttach, Assignees } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { ProjectInfoOptions } from './projectInfoOptions/ProjectInfoOptions';

interface Props {
  editable?: boolean;
  project: IProjectDetails;
}

export const ProjectInfo = ({ project, editable }: Props) => {
  const imgSrc = defineImageSrc(project.image);
  return (
    <section className={styles.projectInfo}>
      <div className={styles.edit}>
        <Image alt={project.name} src={imgSrc} width={48} height={48} />
        {editable && <ProjectInfoOptions id={project._id} />}
      </div>
      {!editable && <p className={styles.title}>{project.name}</p>}
      {project.description && (
        <div className={styles.description}>
          {editable && <p className={styles.title}>Description</p>}
          <p>{project.description}</p>
        </div>
      )}
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Priority</p>
        <BadgePriopity label={project.priority} />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Start</p>
        <p>{formatDayDate(project.start)}</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Dead Line</p>
        <p>{formatDayDate(project.deadline)}</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Assignees</p>
        <Assignees assignees={project.tasks.assignee} />
      </div>
      <div className={styles.created}>
        <SvgHandler icon={EIconsSet.Calendar} />
        <span>Created</span>
        <span>{formatDayDate(project.createdAt)}</span>
      </div>
      <UploadAttach />
    </section>
  );
};
