import styles from './textareaField.module.scss';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type AreaFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder?: string;
  disabled?: boolean;
  register: UseFormRegister<T>;
  errors?: {
    message?: string;
  };
};

export const TextareaField = <T extends FieldValues>({
  label,
  name,
  placeholder,
  disabled,
  register,
  errors,
}: AreaFieldProps<T>) => (
  <label
    htmlFor={name}
    className={`
      ${styles.label} ${disabled ? styles.labelDis : errors ? styles.labelErr : styles.labelDef}
    `}
  >
    <span className={styles.title}>{label}</span>
    <div className={styles.wrapper}>
      <textarea
        id={name}
        {...register(name)}
        disabled={disabled}
        placeholder={placeholder}
        className={styles.textarea}
      />
      {errors && errors.message && !disabled && (
        <span className={styles.errorMsg}>{errors.message}</span>
      )}
    </div>
  </label>
);
