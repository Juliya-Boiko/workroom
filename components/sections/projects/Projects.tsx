'use client';
import styles from './projectsSection.module.scss';
import Image from 'next/image';
import imgSrc from '../../../public/placeholder-1.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useProjects } from '@/services';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';
import { ProjectCard } from '@/components/cards/project/ProgectCard';
import { BtnSecondary } from '@/components/ui';
import { projectSectionSkeleton } from '@/helpers';
import { ROUTES } from '@/constants';

export const ProjectsSection = () => {
  const router = useRouter();

  const { data, isLoading } = useProjects({ take: 3 });

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>Projects</h2>
        <BtnSecondary disabled={isLoading} onClick={() => router.push(ROUTES.projects)}>
          <span>{data?.length ? 'View all' : 'Add project'}</span>
          <SvgHandler icon={EIconsSet.ChevronRight} />
        </BtnSecondary>
      </div>
      {isLoading && (
        <ul className={styles.list}>
          {projectSectionSkeleton.map((el) => (
            <li key={el._id} className={styles.item}>
              <ProjectCard loading={isLoading} project={el} />
            </li>
          ))}
        </ul>
      )}
      {data && !data.length && (
        <div className={styles.placeholder}>
          <p>You dont have projects yet</p>
          <Image src={imgSrc} alt="Employees" className={styles.image} />
        </div>
      )}
      {data && data.length > 0 && (
        <ul className={styles.list}>
          {data.map((el) => (
            <li key={el._id} className={styles.item}>
              <Link href={`${ROUTES.project}/${el._id}`}>
                <ProjectCard loading={isLoading} project={el} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
