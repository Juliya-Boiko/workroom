'use client';
import styles from './settingsForm.module.scss';
import { useState } from 'react';
import { Toggle } from '@/components/ui';
import { useProfile, useProfileMutation } from '@/services';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';

export const NotifyForm = () => {
  const { data: user, isLoading } = useProfile();
  const [emailActivity, setEmailActivity] = useState(false);
  const [notifyComment, setNotifyComment] = useState(true);
  const [notifyTask, setNotifyTask] = useState(true);

  console.log(user);

  return (
    <ul className={styles.form}>
      {isLoading ? (
        <LoaderSkeleton height={70} />
      ) : (
        <li className={styles.item}>
          <div>
            <p className={styles.subtitle}>Issue Activity</p>
            <p>Send me email notifications for issue activity</p>
          </div>
          <Toggle value={emailActivity} onChange={() => setEmailActivity((v) => !v)} />
        </li>
      )}
      {isLoading ? (
        <LoaderSkeleton height={70} />
      ) : (
        <li className={styles.item}>
          <div>
            <p className={styles.subtitle}>Task Activity</p>
            <p>Send me notifications when someone’ve assign tasks to me</p>
          </div>
          <Toggle value={notifyTask} onChange={() => setNotifyTask((v) => !v)} />
        </li>
      )}
      {isLoading ? (
        <LoaderSkeleton height={70} />
      ) : (
        <li className={styles.item}>
          <div>
            <p className={styles.subtitle}>New Comments</p>
            <p>Send me notifications when someone’ve sent the comment</p>
          </div>
          <Toggle value={notifyComment} onChange={() => setNotifyComment((v) => !v)} />
        </li>
      )}
    </ul>
  );
};
