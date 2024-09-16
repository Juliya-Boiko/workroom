'use client';
import styles from './userInfo.module.scss';
import { useProfile, useCompany } from '@/services';
import { Avatar } from '@/components/ui';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';
import { formatDayDate } from '@/utils';

export const UserInfo = () => {
  const { data: user, isLoading } = useProfile();
  const { data: company } = useCompany();

  return (
    <section className={styles.userInfo}>
      <div className={styles.head}>
        <Avatar
          loading={isLoading}
          bordered
          size="xl"
          user={{ name: user?.name || '', avatar: user?.avatar || null }}
        />
        <div className={styles.name}>{isLoading ? <LoaderSkeleton height={18} /> : user?.name}</div>
        <div className={styles.position}>
          {isLoading ? <LoaderSkeleton height={18} /> : user?.position}
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.title}>Main info</p>
        <div className={styles.wrapper}>
          <p className={styles.label}>Company</p>
          {isLoading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.block}>{company?.name}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>Location</p>
          {isLoading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.block}>{user?.location}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>Birthday Date</p>
          {isLoading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.block}>
              {user?.birthday ? formatDayDate(user?.birthday) : ''}
            </div>
          )}
        </div>

        <p className={styles.title}>Contact Info</p>
        <div className={styles.wrapper}>
          <p className={styles.label}>Email</p>
          {isLoading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.block}>{user?.email}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>Mobile Number</p>
          {isLoading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.block}>{user?.phone}</div>
          )}
        </div>
      </div>
    </section>
  );
};
