'use client';
import styles from './settingsForm.module.scss';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useProfile, useProfileMutation } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { accountSchema, AccountFormData } from '@/utils';
import { InputField, PickerDate, PickerLocation, UploadAvatar, BtnPrimary } from '@/components/ui';

export const AccountForm = () => {
  const { data: user } = useProfile();
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
    resolver: yupResolver(accountSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (user) {
      reset({
        location: user.location,
        birthday: user.birthday,
        name: user.name,
        avatar: user.avatar,
      });
    }
  }, [user, reset]);
  const location = watch('location');
  const name = watch('name');
  const prevAvatar = user?.avatar;

  const handleApprove = (v: string) => {
    setValue('location', v);
  };

  const onSubmit = async (data: AccountFormData) => {
    update({
      ...data,
      avatar: {
        oldAvatar: prevAvatar || null,
        newAvatar: data.avatar,
      },
    });
  };

  const isDisabled = !isDirty || !isValid || isSubmitting || isUpdating;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.avatarWrapper}>
        <Controller
          control={control}
          name="avatar"
          render={({ field }) => (
            <UploadAvatar value={field.value} name={name} onChange={field.onChange} />
          )}
        />
      </div>
      <InputField label="Name" name="name" register={register} errors={errors.name} />
      <Controller
        control={control}
        name="birthday"
        render={({ field }) => (
          <PickerDate
            expanded
            label="Birthday Date"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <PickerLocation value={location} onApprove={handleApprove} />
      <div className={styles.btnWrapper}>
        <BtnPrimary type="submit" disabled={isDisabled}>
          Confirm
        </BtnPrimary>
      </div>
    </form>
  );
};
