/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import styles from './signIn.module.scss';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { axiosInstance } from '@/utils/axios';
import { InputField } from '@/components/ui/input/InputField';
import { signInSchema, SignInFormData } from '@/utils/schemas';
import { BtnPrimary } from '@/components/ui/buttons/primary/BtnPrimary';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';
import { ROUTES } from '@/constants';
import { CheckField } from '@/components/ui/checkbox/CheckField';

export const SignInForm = () => {
  const [typePassword, setTypePassword] = useState('password');
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

  const toggleType = () => {
    if (typePassword === 'password') {
      setTypePassword('text');
    } else {
      setTypePassword('password');
    }
  };

  const toggleRemember = () => {
    setRemember((prev) => !prev);
  };

  const onSubmit = async (data: SignInFormData) => {
    try {
      const response = await axiosInstance.post('/auth/login', data);
      if (response.status === 200) {
        router.push(ROUTES.dashboard);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
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
      <InputField
        label="Password"
        type={typePassword}
        name="password"
        register={register}
        iconPosition="end"
        icon={EIconsSet.Eye}
        errors={errors.password}
        onIconClick={toggleType}
      />
      <div className={styles.wrapper}>
        <div className={styles.remember}>
          <CheckField name="remember" value={remember} onChange={toggleRemember} />
          <span>Remember me</span>
        </div>
        <Link href={ROUTES.password}>Forgot Password?</Link>
      </div>
      <BtnPrimary type="submit" disabled={!isDirty || !isValid || isSubmitting}>
        <span>Sign In</span>
        <SvgHandler icon={EIconsSet.ArrowRight} />
      </BtnPrimary>
    </form>
  );
};
