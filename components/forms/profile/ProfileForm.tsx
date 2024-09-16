'use client';
import styles from './profileForm.module.scss';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EIconsSet, EUserPosition } from '@/typings';
import { profileSchema, ProfileFormData } from '@/utils';
import { useProfile, useCompany, useProfileMutation } from '@/services';
import {
  Avatar,
  BtnIcon,
  InputField,
  PickerDate,
  PickerLocation,
  BtnPrimary,
  UploadAvatar,
} from '@/components/ui';

export const ProfileForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { data: user, isLoading } = useProfile();
  const { data: company } = useCompany();
  const { update, isUpdating } = useProfileMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(profileSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (user && company) {
      reset({
        email: user.email,
        location: user.location,
        birthday: user.birthday,
        name: user.name,
        phone: user.phone,
        company,
        avatar: user.avatar,
      });
    }
  }, [company, reset, user]);

  const location = watch('location');
  const name = watch('name');
  const prevAvatar = user?.avatar;

  const handleApprove = (v: string) => {
    setValue('location', v);
  };

  const onSubmit = async (data: ProfileFormData) => {
    update({
      ...data,
      avatar: {
        oldAvatar: prevAvatar || null,
        newAvatar: data.avatar,
      },
    });
    setIsDisabled(true);
  };

  return (
    <form className={styles.profileForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.user}>
        <div className={styles.wrapper}>
          {isDisabled ? (
            <Avatar
              loading={isLoading}
              bordered
              size="xl"
              user={{ name: user?.name || '', avatar: user?.avatar || null }}
            />
          ) : (
            <Controller
              control={control}
              name="avatar"
              render={({ field }) => (
                <UploadAvatar value={field.value} name={name} onChange={field.onChange} />
              )}
            />
          )}
          <BtnIcon title="Edit" icon={EIconsSet.Pensil} onClick={() => setIsDisabled((v) => !v)} />
        </div>
        <InputField
          label="Name"
          name="name"
          disabled={isDisabled}
          register={register}
          errors={errors.name}
        />
      </div>
      <div className={styles.main}>
        <p className={styles.subtitle}>Main info</p>
        {user?.position === EUserPosition.OWNER && (
          <InputField
            label="Company"
            name="company"
            disabled={isDisabled}
            register={register}
            errors={errors.company}
          />
        )}
        <PickerLocation value={location} disabled={isDisabled} onApprove={handleApprove} />
        <Controller
          control={control}
          name="birthday"
          render={({ field }) => (
            <PickerDate
              expanded
              disabled={isDisabled}
              label="Birthday Date"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className={styles.contact}>
        <p className={styles.subtitle}>Contact Info</p>
        <InputField
          label="Email"
          name="email"
          disabled={isDisabled}
          register={register}
          errors={errors.email}
        />
        <InputField label="Mobile Number" name="phone" disabled={isDisabled} register={register} />
        {!isDisabled && (
          <BtnPrimary
            type="submit"
            spread
            disabled={!isDirty || !isValid || isSubmitting || isUpdating}
          >
            Update profile
          </BtnPrimary>
        )}
      </div>
    </form>
  );
};
