'use client';
import styles from './projectInfo.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { formatDayDate, LOCALE_LANGUAGE } from '@/utils';
import { EIconsSet, IProjectDetails } from '@/typings';
import { BadgePriopity, Assignees } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { OptionsProjectInfo } from './optionsProjectInfo/OptionsProjectInfo';

interface Props {
  project: IProjectDetails;
}

export const ProjectInfo = ({ project }: Props) => {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<string | null>(null);
  const t = useTranslations();

  useEffect(() => {
    const storedLocale = localStorage.getItem(LOCALE_LANGUAGE);
    setLocale(storedLocale);
  }, []);

  return (
    <section className={styles.projectInfo}>
      <div className={styles.main}>
        <Image
          alt={project.name}
          src={project.image}
          width={48}
          height={48}
          className={styles.image}
        />
        <button type="button" className={styles.toggleBtn} onClick={() => setOpen((prev) => !prev)}>
          <span>Project details</span>
          <SvgHandler icon={EIconsSet.ChevronDown} />
        </button>
        <OptionsProjectInfo id={project._id} />
      </div>
      <div className={`${styles.details} ${open ? styles.showDetails : styles.hideDetails}`}>
        {project.description && <div className={styles.description}>{project.description}</div>}
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>{t('Forms.priority')}</p>
          <BadgePriopity label={project.priority} />
        </div>
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>{t('Forms.start')}</p>
          <p>{formatDayDate(project.start, locale)}</p>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>{t('Forms.deadline')}</p>
          <p>{formatDayDate(project.deadline, locale)}</p>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>{t('Common.assignees')}</p>
          <Assignees assignees={project.tasks.assignee} />
        </div>
      </div>
    </section>
  );
};
