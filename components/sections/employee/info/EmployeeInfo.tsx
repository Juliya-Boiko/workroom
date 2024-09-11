import styles from './employeeInfo.module.scss';
import { EIconsSet, IEmployee } from '@/typings';
import { Avatar } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { AddLevelForm } from '@/components/forms/addLevel/AddLevelForm';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';
import { formatDayDate } from '@/utils';

interface Props {
  company?: string;
  user?: IEmployee;
  loading: boolean;
}

export const EmployeeInfo = ({ user, loading, company }: Props) => {
  return (
    <section className={styles.employeeInfo}>
      <div className={styles.user}>
        <Avatar
          loading={loading}
          bordered
          size="xl"
          user={{ name: user?.name || '', avatar: user?.avatar || null }}
        />
        <p className={styles.name}>{user?.name}</p>
        <AddLevelForm id={user?._id} level={user?.level} loading={loading} />
      </div>
      <div className={styles.main}>
        <p className={styles.subtitle}>Main info</p>
        <div className={styles.wrapper}>
          <p className={styles.label}>Position</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>{user?.profession}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>Company</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>{company}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>Location</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>
              <span>{user?.location}</span>
              <SvgHandler icon={EIconsSet.Location} />
            </div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>Birthday Date</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>
              <span>{user?.birthday ? formatDayDate(user?.birthday.toString()) : ''}</span>
              <SvgHandler icon={EIconsSet.CalendarInput} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.contact}>
        <p className={styles.subtitle}>Contact Info</p>
        <div className={styles.wrapper}>
          <p className={styles.label}>Email</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>{user?.email}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>Mobile Number</p>
          {loading ? (
            <LoaderSkeleton height={48} />
          ) : (
            <div className={styles.containter}>{user?.phone}</div>
          )}
        </div>
      </div>
    </section>
  );
};
