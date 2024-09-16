'use client';
import styles from './userData.module.scss';
import { TabsSlide } from '@/components/ui';
import { EViewProfile, viewProfileDataTypes } from '@/typings';
import { useState } from 'react';
import { Settings } from '../settings/Settings';

export const UserData = () => {
  const [view, setView] = useState(EViewProfile.PROJECTS);

  return (
    <section className={styles.userInfo}>
      <div className={styles.tabs}>
        <TabsSlide options={viewProfileDataTypes} value={view} onChange={(v) => setView(v)} />
      </div>
      {view === EViewProfile.PROJECTS && <div>PROJECTS</div>}
      {view === EViewProfile.TEAM && <div>TEAM</div>}
      {view === EViewProfile.SETTINGS && <Settings />}
    </section>
  );
};
