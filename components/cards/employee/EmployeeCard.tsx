import styles from './employeeCard.module.scss';
import { IEmployee } from '@/interfaces';
import { BadgeLevel, Avatar } from '@/components/ui';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';

interface Props {
  loading: boolean;
  user: IEmployee;
}

export const EmployeeCard = ({ user, loading }: Props) => {
  return (
    <li className={styles.emlpoyeeCard}>
      <div
        className={styles.round}
        style={{
          borderColor: loading ? '#F4F9FD' : '#3F8CFF',
        }}
      >
        <Avatar
          loading={loading}
          size="l"
          user={loading ? undefined : { name: user.name, avatar: user.avatar }}
        />
      </div>
      <div className={styles.user}>
        <p className={styles.name}>{loading ? <LoaderSkeleton height={14} /> : user.name}</p>
        <p className={styles.position}>
          {loading ? <LoaderSkeleton height={14} /> : user.position}
        </p>
        {loading ? (
          <div className={styles.badge}>
            <LoaderSkeleton height={18} />
          </div>
        ) : (
          user.level && <BadgeLevel label={user.level} />
        )}
      </div>
    </li>
  );
};
