import styles from './newPassword.module.scss';
import { decodeInviteToken } from '@/libs/jose';
import { IDynamicComponent } from '@/typings';
import { AuthWrapper } from '@/components/sections/auth/AuthWrapper';
import { ChangePasswordForm } from '@/components/forms/changePassword/ChangePasswordForm';

export const NewPassword = async ({ slug }: IDynamicComponent) => {
  const { email } = await decodeInviteToken(slug);

  return (
    <AuthWrapper>
      <h1 className={styles.title}>Enter new password</h1>
      <ChangePasswordForm email={email} />
    </AuthWrapper>
  );
};
