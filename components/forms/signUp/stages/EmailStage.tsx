/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '../signUp.module.scss';
import { InputField, PasswordInputField } from '@/components/ui';

interface Props {
  register: any;
  errors?: any;
}

export const EmailStage = ({ register, errors }: Props) => {
  return (
    <div className={styles.stageWrapper}>
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
      <PasswordInputField
        label="Confirm Password"
        name="confirmPassword"
        register={register}
        errors={errors.confirmPassword}
      />
    </div>
  );
};
