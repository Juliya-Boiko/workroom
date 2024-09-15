import styles from './forgorPassword.module.scss';
import { AuthWrapper } from '@/components/sections/auth/AuthWrapper';
import { EmailForm } from '@/components/forms/emailForm/EmailForm';

export const ForgotPassword = () => (
  <AuthWrapper>
    <h1 className={styles.title}>Forgot password?</h1>
    <p className={styles.text}>Enter youre email & follow instructions in letter</p>
    <EmailForm />
  </AuthWrapper>
);
