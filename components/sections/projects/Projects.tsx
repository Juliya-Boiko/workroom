'use client';
import styles from './projectsSection.module.scss';
import Image from 'next/image';
import imgSrc from '../../../public/projects-placeholder.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useProjects } from '@/services';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';
import { ProjectCard } from '@/components/cards/project/ProgectCard';
import { BtnSecondary } from '@/components/ui/buttons/secondary/BtnSecondary';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { projectSectionSkeleton } from '@/helpers';
import { ROUTES } from '@/constants';

export const ProjectsSection = () => {
  const router = useRouter();

  const { data, isLoading } = useProjects({ take: 3 });

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>Projects</h2>
        <BtnSecondary onClick={() => router.push(ROUTES.projects)}>
          <span>View all</span>
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
          <Image src={imgSrc} alt="No projects" className={styles.image} />
          <p className={styles.text}>
            There are no projects yet <br /> Let&apos;s add them
          </p>
          <BtnPrimary onClick={() => router.push(ROUTES.projects)}>
            <SvgHandler icon={EIconsSet.Plus} />
            <span>Add project</span>
          </BtnPrimary>
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
