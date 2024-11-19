import styles from '../signUp.module.scss';
import { InputField, PasswordInputField } from '@/components/ui';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { SignUpFormData } from '@/utils';

interface Props {
  register: UseFormRegister<SignUpFormData>;
  errors?: FieldErrors<SignUpFormData>;
}

export const EmailStage = ({ register, errors }: Props) => (
  <div className={styles.stageWrapper}>
    <InputField
      label="email"
      name="email"
      register={register}
      placeholder="emailHolder"
      errors={errors?.email}
    />
    <PasswordInputField
      label="password"
      name="password"
      register={register}
      errors={errors?.password}
    />
    <PasswordInputField
      label="confirm"
      name="confirmPassword"
      register={register}
      errors={errors?.confirmPassword}
    />
  </div>
);
