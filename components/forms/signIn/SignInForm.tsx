'use client';
import styles from './signIn.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema, SignInFormData, ROUTES } from '@/utils';
import { InputField, PasswordInputField, BtnPrimary } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { useUserMutations } from '@/services';

export const SignInForm = () => {
  const { login } = useUserMutations();
  const tAuth = useTranslations('Auth.SignIn');
  const tCommon = useTranslations('Forms');

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: SignInFormData) => {
    login(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label={tCommon('email')}
        name="email"
        register={register}
        placeholder="youremail@gmail.com"
        errors={errors.email}
      />
      <PasswordInputField
        label={tCommon('password')}
        name="password"
        register={register}
        errors={errors.password}
      />
      <div className={styles.wrapper}>
        <Link href={ROUTES.password} className={styles.link}>
          {tAuth('forgot')}
        </Link>
      </div>
      <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
        <span>{tAuth('signIn')}</span>
        <SvgHandler icon={EIconsSet.ArrowRight} />
      </BtnPrimary>
    </form>
  );
};
