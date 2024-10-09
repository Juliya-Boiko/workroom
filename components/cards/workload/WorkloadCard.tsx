import styles from './workloadCard.module.scss';
import { IEmployee } from '@/typings';
import { BadgeLevel, Avatar } from '@/components/ui';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';

interface Props {
  loading?: boolean;
  user: IEmployee;
}

export const WorkloadCard = ({ user, loading }: Props) => (
  <div className={styles.emlpoyeeCard}>
    <div>
      <Avatar
        loading={loading}
        size="l"
        bordered
        user={loading ? undefined : { name: user.name, avatar: user.avatar }}
      />
    </div>
    <div className={styles.user}>
      <p className={styles.name}>{loading ? <LoaderSkeleton height={14} /> : user.name}</p>
      <p className={styles.position}>
        {loading ? <LoaderSkeleton height={14} /> : user.profession}
      </p>
      {loading ? (
        <div className={styles.badge}>
          <LoaderSkeleton height={18} />
        </div>
      ) : (
        user.level && <BadgeLevel label={user.level} />
      )}
    </div>
  </div>
);
