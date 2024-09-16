'use client';
import { TabsSlide } from '@/components/ui';
import styles from './userInfo.module.scss';
import { EViewProfile, viewProfileDataTypes } from '@/typings';
import { useState } from 'react';
import { UserSettings } from './userSettings/UserSettings';
// import { useProjects } from '@/services';
// import Link from 'next/link';
// import { ROUTES } from '@/utils';
// import { ProjectCard } from '../../cards/project/ProgectCard';

export const UserInfo = () => {
  const [view, setView] = useState(EViewProfile.PROJECTS);
  // const { data: projects } = useProjects();

  return (
    <section className={styles.userInfo}>
      <div className={styles.tabs}>
        <TabsSlide options={viewProfileDataTypes} value={view} onChange={(v) => setView(v)} />
      </div>
      {view === EViewProfile.PROJECTS && (
        <ul>
          PROJECTS
          {/* {projects?.map((el) => (
            <li key={el._id}>
              <Link href={`${ROUTES.project}/${el._id}`}>
                <ProjectCard project={el} />
              </Link>
            </li>
          ))} */}
        </ul>
      )}
      {view === EViewProfile.TEAM && <div>TEAM</div>}
      {view === EViewProfile.SETTINGS && <UserSettings />}
    </section>
  );
};
