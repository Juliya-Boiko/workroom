'use client';
import styles from './passwordInputField.module.scss';
import { useState } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/typings';
import { InputField } from '../text/InputField';

type Props<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: {
    message?: string;
  };
};

export const PasswordInputField = <T extends FieldValues>({
  label,
  errors,
  name,
  register,
}: Props<T>) => {
  const [typePassword, setTypePassword] = useState(true);
  const toggleType = () => {
    setTypePassword((prev) => !prev);
  };

  return (
    <div className={styles.passwordInputField}>
      <InputField
        label={label}
        type={typePassword ? 'password' : 'text'}
        name={name}
        register={register}
        placeholder="• • • • •"
        errors={errors}
      />
      <button type="button" className={styles.btnToggle} onClick={toggleType}>
        {!typePassword && <span className={styles.line} />}
        <SvgHandler icon={EIconsSet.Eye} />
      </button>
    </div>
  );
};
