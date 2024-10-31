'use client';
import styles from './changePasswordForm.module.scss';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePasswordMutations } from '@/services';
import { passwordSchema, PasswordFormData } from '@/utils';
import { PasswordInputField, BtnPrimary } from '@/components/ui';

export const ChangePasswordForm = ({ email }: { email: string }) => {
  const { change, isChanging } = usePasswordMutations();
  const tForm = useTranslations('Forms');
  const tAuth = useTranslations('Auth.NewPassword');
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(passwordSchema),
    mode: 'onChange',
  });

  const isDisabled = !isDirty || !isValid || isSubmitting || isChanging;

  const onSubmit = async (data: PasswordFormData) => {
    change({
      email,
      password: data.password,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>{tAuth('title')}</h1>
      
      <PasswordInputField
        label={tForm('password')}
        name="password"
        register={register}
        errors={errors.password}
      />
      <PasswordInputField
        label={tForm('confirm')}
        name="confirmPassword"
        register={register}
        errors={errors.confirmPassword}
      />
      <BtnPrimary type="submit" disabled={isDisabled}>
        <span>{tAuth('confirm')}</span>
      </BtnPrimary>
    </form>
  );
};
