/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import styles from './profileForm.module.scss';
import { useProfile } from '@/services';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema, ProfileFormData } from '@/schemas';
import { Avatar } from '@/components/ui/avatar/Avatar';
import { BtnIcon } from '@/components/ui/buttons/icon/BtnIcon';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';
import { InputField } from '@/components/ui/input/InputField';
import { useState } from 'react';

export const ProfileForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { data: user, isLoading } = useProfile();

  const defaultValues = {
    email: user?.email ?? '',
    location: user?.location ?? '',
    birthday: user?.birthday ?? null,
    name: user?.name ?? '',
    phone: user?.phone ?? null,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(profileSchema),
    mode: 'onChange',
  });
  console.log(user);

  return (
    <form action="" className={styles.profileForm}>
      <div className={styles.user}>
        <div className={styles.wrapper}>
          <div
            className={styles.avatar}
            style={{
              borderColor: isLoading ? '#F4F9FD' : '#3F8CFF',
            }}
          >
            {isLoading && !user ? (
              <Avatar loading={isLoading} size="xl" />
            ) : (
              <Avatar size="xl" user={{ name: user?.name || '', avatar: user?.avatar || null }} />
            )}
          </div>
          <BtnIcon tonal title="Edit">
            <SvgHandler icon={EIconsSet.Pensil} />
          </BtnIcon>
        </div>
        <InputField
          label="Name"
          name="name"
          disabled={isDisabled}
          register={register}
          placeholder="John Doe"
          errors={errors.name}
        />
      </div>
      <div className={styles.main}>main</div>
      <div className={styles.contact}>contact</div>
    </form>
  );
};
