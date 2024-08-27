import styles from './inputfield.module.scss';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet } from '@/enums';

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
  icon?: EIconsSet;
  iconPosition?: 'start' | 'end';
};

export const InputField = <T extends FieldValues>({
  label,
  type,
  placeholder,
  disabled,
  errors,
  iconPosition,
  icon,
  name,
  register,
}: InputFieldProps<T>) => {
  const getPaddings = () => {
    if (iconPosition === 'start') {
      return '0 18px 0 42px';
    }
    if (iconPosition === 'end') {
      return '0 42px 0 18px';
    }
    if (!iconPosition) {
      return '0 18px';
    }
  };
  return (
    <label
      htmlFor={name}
      className={`
        ${styles.label} ${disabled ? styles.labelDis : errors ? styles.labelErr : styles.labelDef}
      `}
    >
      <span className={styles.title}>{label}</span>
      <div className={styles.wrapper}>
        {icon && (
          <div
            className={`
              ${styles.icon} ${iconPosition === 'start' ? styles.iconLeft : styles.iconRight}
            `}
          >
            <SvgHandler icon={icon} />
          </div>
        )}
        <input
          id={name}
          type={type ? type : 'text'}
          {...register(name)}
          disabled={disabled}
          placeholder={placeholder}
          className={styles.input}
          style={{
            padding: getPaddings(),
          }}
        />
        {errors && errors.message && !disabled && (
          <span className={styles.errorMsg}>{errors.message}</span>
        )}
      </div>
    </label>
  );
};
