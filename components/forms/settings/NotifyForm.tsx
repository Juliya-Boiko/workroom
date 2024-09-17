'use client';
import styles from './settingsForm.module.scss';
import { useEffect, useState } from 'react';
import { Toggle } from '@/components/ui';
import { useProfile, useProfileMutation } from '@/services';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';

export const NotifyForm = () => {
  const { data: user, isLoading } = useProfile();
  const { update } = useProfileMutation();
  const [emailActivity, setEmailActivity] = useState(false);
  const [notifyComment, setNotifyComment] = useState(true);
  const [notifyTask, setNotifyTask] = useState(true);

  useEffect(() => {
    if (user) {
      const { settings } = user;
      setEmailActivity(settings.emailActivity);
      setNotifyComment(settings.notifyComment);
      setNotifyTask(settings.notifyTask);
    }
  }, [user]);

  const updatedSettings = {
    emailActivity,
    notifyComment,
    notifyTask,
  };

  const handleEmailActivity = (v: boolean) => {
    setEmailActivity(v);
    update({ settings: { ...updatedSettings, emailActivity: v } });
  };

  const handleNotifyComment = (v: boolean) => {
    setNotifyComment(v);
    update({ settings: { ...updatedSettings, notifyComment: v } });
  };

  const handleNotifyTask = (v: boolean) => {
    setNotifyTask(v);
    update({ settings: { ...updatedSettings, notifyTask: v } });
  };

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
          <Toggle name="emailActivity" value={emailActivity} onChange={handleEmailActivity} />
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
          <Toggle name="notifyTask" value={notifyTask} onChange={handleNotifyTask} />
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
          <Toggle name="notifyComment" value={notifyComment} onChange={handleNotifyComment} />
        </li>
      )}
    </ul>
  );
};
