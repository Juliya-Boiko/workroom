'use client';
import styles from './profileForm.module.scss';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, EUserPosition } from '@/typings';
import {
  useProfile,
  useCompany,
  updateProfile,
  profileSchema,
  ProfileFormData,
  QUERY_KEYS,
} from '@/utils';
import {
  Avatar,
  BtnIcon,
  InputField,
  PickerDate,
  PickerLocation,
  BtnPrimary,
} from '@/components/ui';

export const ProfileForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { data: user, isLoading } = useProfile();
  const { data: company } = useCompany();
  const queryClient = useQueryClient();

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
      });
    }
  }, [company, reset, user]);

  const location = watch('location');

  const handleApprove = (v: string) => {
    setValue('location', v);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER, QUERY_KEYS.PROFILE] });
      queryClient.setQueryData([QUERY_KEYS.USER], data);
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    mutate(data);
  };

  return (
    <form action="" className={styles.profileForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.user}>
        <div className={styles.wrapper}>
          <Avatar
            loading={isLoading}
            bordered
            size="xl"
            user={{ name: user?.name || '', avatar: user?.avatar || null }}
          />
          <BtnIcon tonal title="Edit" onClick={() => setIsDisabled(false)}>
            <SvgHandler icon={EIconsSet.Pensil} />
          </BtnIcon>
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
            disabled={!isDirty || !isValid || isSubmitting || isPending}
          >
            Update profile
          </BtnPrimary>
        )}
      </div>
    </form>
  );
};
