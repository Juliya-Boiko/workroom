'use client';
import styles from './profileForm.module.scss';
import { useEffect, useState } from 'react';
import { useProfile, useCompany } from '@/services';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile } from '@/actions';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema, ProfileFormData } from '@/schemas';
import { Avatar } from '@/components/ui/avatar/Avatar';
import { BtnIcon } from '@/components/ui/buttons/icon/BtnIcon';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, EUserPosition } from '@/enums';
import { InputField } from '@/components/ui/input/InputField';
import { PickerDate } from '@/components/ui/pickers/date/PickerDate';
import { PickerLocation } from '@/components/ui/pickers/location/PickerLocation';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { QUERY_KEYS } from '@/constants';

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
  // console.log(user, company);

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
