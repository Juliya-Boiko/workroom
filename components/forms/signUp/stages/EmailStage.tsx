/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useTranslations } from 'next-intl';
import styles from '../signUp.module.scss';
import { InputField, PasswordInputField } from '@/components/ui';

interface Props {
  register: any;
  errors?: any;
}

export const EmailStage = ({ register, errors }: Props) => {
  const t = useTranslations('Forms');

  return (
    <div className={styles.stageWrapper}>
      <InputField
        label={t('email')}
        name="email"
        register={register}
        placeholder="youremail@gmail.com"
        errors={errors.email}
      />
      <PasswordInputField
        label={t('password')}
        name="password"
        register={register}
        errors={errors.password}
      />
      <PasswordInputField
        label={t('confirm')}
        name="confirmPassword"
        register={register}
        errors={errors.confirmPassword}
      />
    </div>
  );
};
