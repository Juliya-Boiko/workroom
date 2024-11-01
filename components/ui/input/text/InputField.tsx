'use client';
import styles from './inputfield.module.scss';
import { useTranslations } from 'next-intl';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';

type InputFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  disabled?: boolean;
  register: UseFormRegister<T>;
  errors?: {
    message?: string;
  };
};

export const InputField = <T extends FieldValues>({
  label,
  type,
  placeholder,
  disabled,
  errors,
  name,
  register,
}: InputFieldProps<T>) => {
  const t = useTranslations('Forms');

  return (
    <label
      htmlFor={name}
      className={`
        ${styles.label} ${disabled ? styles.labelDis : errors ? styles.labelErr : styles.labelDef}
      `}
    >
      <span className={styles.title}>{t(label)}</span>
      <div className={styles.wrapper}>
        <input
          id={name}
          type={type ? type : 'text'}
          {...register(name)}
          disabled={disabled}
          placeholder={placeholder}
          className={styles.input}
        />
        {errors && errors.message && !disabled && (
          <span className={styles.errorMsg}>{t(`Errors.${errors.message}`)}</span>
        )}
      </div>
    </label>
  );
};
