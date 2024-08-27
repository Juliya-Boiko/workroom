/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { InputField } from '@/components/ui/input/InputField';
import { useState } from 'react';
import { EIconsSet } from '@/enums';
import styles from '../signUp.module.scss';

interface Props {
  register: any;
  errors?: any;
}

export const EmailStage = ({ register, errors }: Props) => {
  const [typePassword, setTypePassword] = useState('password');

  const toggleType = () => {
    if (typePassword === 'password') {
      setTypePassword('text');
    } else {
      setTypePassword('password');
    }
  };

  return (
    <div className={styles.stageWrapper}>
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
      <InputField
        label="Confirm Password"
        type={typePassword}
        name="confirmPassword"
        placeholder="Confirm password"
        register={register}
        errors={errors.confirmPassword}
        iconPosition="end"
        icon={EIconsSet.Eye}
        onIconClick={toggleType}
      />
    </div>
  );
};
