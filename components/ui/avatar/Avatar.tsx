import styles from './avatar.module.scss';
import Image from 'next/image';

interface Props {
  size: 's' | 'm' | 'l';
  avatar?: string;
  name: string;
}

export const Avatar = ({ size, avatar, name }: Props) => {
  const getInitials = () =>
    name
      ? name
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
  };

  return (
    <div className={` ${styles.avatar} ${getSizeStyles()}`}>
      {avatar ? (
        <Image src={avatar} fill alt={name} />
      ) : (
        <span className={styles.initials}>{getInitials()}</span>
      )}
    </div>
  );
};
