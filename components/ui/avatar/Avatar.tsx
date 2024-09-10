import styles from './avatar.module.scss';
import Image from 'next/image';
import { LoaderSkeleton } from '@/components/LoaderSkeleton';

interface Props {
  size: 's' | 'm' | 'l' | 'xl';
  user?: {
    name: string;
    avatar: string | null;
  };
  loading?: boolean;
  bordered?: boolean;
}

export const Avatar = ({ size, user, loading, bordered }: Props) => {
  const getInitials = () =>
    user && user.name
      ? user.name
          .split(' ')
          .filter((el) => el)
          .map((el) => el.toUpperCase().charAt(0))
          .slice(0, 2)
          .join('')
      : '';

  const getSizeStyles = () => {
    if (size === 's') return styles.avatarSmall;
    if (size === 'm') return styles.avatarDef;
    if (size === 'l') return styles.avatarLarge;
    if (size === 'xl') return styles.avatarExtra;
  };

  const getHeight = () => {
    if (size === 's') return 24;
    if (size === 'm') return 30;
    if (size === 'l') return 50;
    if (size === 'xl') return 64;
    return 30;
  };

  return (
    <div
      className={`${styles.avatar} ${bordered ? styles.bordered : ''}`}
      style={{
        borderColor: loading ? '#F4F9FD' : '#3F8CFF',
      }}
    >
      {loading ? (
        <div className={getSizeStyles()}>
          <LoaderSkeleton circle height={getHeight()} />
        </div>
      ) : (
        <div className={`${styles.wrapper} ${getSizeStyles()}`}>
          {user?.avatar ? (
            <Image src={user.avatar} fill alt={user.name} sizes="100%" />
          ) : (
            <span className={styles.initials}>{getInitials()}</span>
          )}
        </div>
      )}
    </div>
  );
};
