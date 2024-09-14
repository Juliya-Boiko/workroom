'use client';
import styles from './projectInfo.module.scss';
import Image from 'next/image';
import { EIconsSet, IProjectDetails } from '@/typings';
import { formatDayDate, defineImageSrc } from '@/utils';
import { BadgePriopity, UploadAttach, Assignees } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { OptionsProjectInfo } from './optionsProjectInfo/OptionsProjectInfo';
import { useState } from 'react';

interface Props {
  project: IProjectDetails;
}

export const ProjectInfo = ({ project }: Props) => {
  const [open, setOpen] = useState(false);
  const imgSrc = defineImageSrc(project.image);

  return (
    <section className={styles.projectInfo}>
      <div className={styles.main}>
        <Image alt={project.name} src={imgSrc} width={48} height={48} />
        <button type="button" className={styles.toggleBtn} onClick={() => setOpen((prev) => !prev)}>
          <span>Project details</span>
          <SvgHandler icon={EIconsSet.ChevronDown} />
        </button>
        <OptionsProjectInfo id={project._id} />
      </div>
      <div className={`${styles.details} ${open ? styles.showDetails : styles.hideDetails}`}>
        {project.description && (
          <div className={styles.description}>
            <p className={styles.title}>Description</p>
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
      </div>
    </section>
  );
};
