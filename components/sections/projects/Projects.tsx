'use client';
import styles from './projectsSection.module.scss';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { axiosInstance } from '@/utils/axios';
import { useEffect, useState } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';
import { ProjectCard } from '@/components/cards/project/ProgectCard';
import { ROUTES } from '@/constants';
import { Catch } from '@/components/ui/catch/Catch';
import { BtnSecondary } from '@/components/ui/buttons/secondary/BtnSecondary';
import { EPriority } from '@/enums';
import { projectSectionSkeleton } from '@/helpers';

interface IProject {
  _id: string;
  deadline: string;
  name: string;
  priority: EPriority;
  start: string;
  assignee: string[];
}

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<IProject[]>(projectSectionSkeleton);
  const [status, setStatus] = useState({ loading: true, error: false });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/project?take=3');
        if (response.status === 200) {
          setProjects(response.data);
          setStatus((prev) => ({ ...prev, loading: false }));
          console.log(response);
        }
      } catch (error) {
        setStatus({ loading: false, error: true });
        toast.error(error.response.data.message);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>Projects</h2>
        <BtnSecondary>
          <span>View all</span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      {status.error ? (
        <Catch />
      ) : (
        <ul className={styles.list}>
          {projects.map((el) => (
            <li key={el._id} className={styles.item}>
              <Link href={`${ROUTES.project}/${el._id}`}>
                <ProjectCard
                  loading={status.loading}
                  name={el.name}
                  deadline={el.deadline}
                  priority={el.priority}
                  start={el.start}
                  assignee={el.assignee}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
