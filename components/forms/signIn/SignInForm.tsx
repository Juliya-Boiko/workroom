'use client';
import styles from './signIn.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginUser, signInSchema, SignInFormData, ROUTES } from '@/utils';
import { InputField, PasswordInputField, BtnPrimary, CheckField } from '@/components/ui';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';

export const SignInForm = () => {
  const [remember, setRemember] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInSchema),
    mode: 'onChange',
  });

  const toggleRemember = () => {
    setRemember((prev) => !prev);
  };

  const onSubmit = async (data: SignInFormData) => {
    const resp = await loginUser(data);
    if (resp) router.push(ROUTES.dashboard);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Email Address"
        name="email"
        register={register}
        placeholder="youremail@gmail.com"
        errors={errors.email}
      />
      <PasswordInputField
        label="Password"
        name="password"
        register={register}
        errors={errors.password}
      />
      <div className={styles.wrapper}>
        <div className={styles.remember}>
          <CheckField name="remember" value={remember} onChange={toggleRemember} />
          <span>Remember me</span>
        </div>
        <Link href={ROUTES.password} className={styles.link}>
          Forgot Password?
        </Link>
      </div>
      <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
        <span>Sign In</span>
        <SvgHandler icon={EIconsSet.ArrowRight} />
      </BtnPrimary>
    </form>
  );
};
