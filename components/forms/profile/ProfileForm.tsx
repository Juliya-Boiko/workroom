'use client';
import styles from './profileForm.module.scss';
import { useProfile } from '@/services';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Avatar } from '@/components/ui/avatar/Avatar';
import { BtnIcon } from '@/components/ui/buttons/icon/BtnIcon';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';

export const ProfileForm = () => {
  const { data: user, isLoading } = useProfile();

  console.log(user);

  return (
    <form action="" className={styles.profileForm}>
      <div className={styles.user}>
        <div className={styles.wrapper}>
          <div className={styles.avatar} style={{
              borderColor: isLoading ? '#F4F9FD' : '#3F8CFF',
            }}
          >
            {isLoading && !user ? (<Avatar loading={isLoading} size="xl" />) : (<Avatar size="xl" user={{ name: user?.name || '' , avatar: user?.avatar || null }} />)}
          </div>
          <BtnIcon tonal title="Edit">
            <SvgHandler icon={EIconsSet.Pensil} />
          </BtnIcon>
        </div>
      </div>
      <div className={styles.main}>main</div>
      <div className={styles.contact}>contact</div>
    </form>
  );
};
