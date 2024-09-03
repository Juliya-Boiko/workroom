/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import styles from './profileForm.module.scss';
import { useProfile, useCompany } from '@/services';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema, ProfileFormData } from '@/schemas';
import { Avatar } from '@/components/ui/avatar/Avatar';
import { BtnIcon } from '@/components/ui/buttons/icon/BtnIcon';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, EUserPosition } from '@/enums';
import { InputField } from '@/components/ui/input/InputField';
import { useEffect, useState } from 'react';
import { PickerDate } from '@/components/ui/pickerDate/PickerDate';
import { PickerLocation } from '@/components/ui/pickerLocation/PickerLocation';

export const ProfileForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { data: user, isLoading } = useProfile();
  const { data: company } = useCompany();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(profileSchema),
    mode: 'onChange',
  });
  console.log(user, company);

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
      <div className={styles.main}>
        <p className={styles.subtitle}>Main info</p>
        {user?.position === EUserPosition.OWNER && (
          <InputField
            label="Company"
            name="company"
            disabled={isDisabled}
            register={register}
            placeholder="Company Name"
            errors={errors.company}
          />
        )}
        <PickerLocation />
        <InputField
          label="location"
          name="location"
          disabled={isDisabled}
          register={register}
          iconPosition="end"
          icon={EIconsSet.Location}
        />
        <Controller
          control={control}
          name="birthday"
          render={({ field }) => (
            <PickerDate
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
          placeholder="youremail@gmail.com"
          errors={errors.email}
        />
        <InputField
          label="Mobile Number"
          name="phone"
          disabled={isDisabled}
          register={register}
          placeholder=""
        />
      </div>
    </form>
  );
};
