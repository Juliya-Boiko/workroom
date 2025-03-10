'use client';
import styles from './settingsForm.module.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useProfile, useProfileMutation } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactsSchema, ContactsFormData } from '@/utils';
import { InputField, BtnPrimary } from '@/components/ui';

export const ContactsForm = () => {
  const { data: user } = useProfile();
  const { update, isUpdating } = useProfileMutation();
  const t = useTranslations('Forms');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactsSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (user) {
      reset({
        email: user.email,
        phone: user.phone,
      });
    }
  }, [user, reset]);

  const onSubmit = async (data: ContactsFormData) => {
    update(data);
  };

  const isDisabled = !isDirty || !isValid || isSubmitting || isUpdating;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputField label="email" name="email" register={register} errors={errors.email} />
      <InputField label="number" name="phone" register={register} />
      <div className={styles.btnWrapper}>
        <BtnPrimary type="submit" disabled={isDisabled}>
          {t('saveChanges')}
        </BtnPrimary>
      </div>
    </form>
  );
};
