import styles from './invite.module.scss';
import { decodeInviteToken } from '@/libs/jose';
import { IDynamicComponent } from '@/typings';
import { InviteForm } from '@/components/forms/invite/InviteForm';
import { AuthWrapper } from '@/components/sections/auth/AuthWrapper';

export const InviteSection = async ({ slug }: IDynamicComponent) => {
  const { companyId, email } = await decodeInviteToken(slug);

  return (
    <AuthWrapper>
      <h1 className={styles.title}>Register in Woorkroom</h1>
      <InviteForm companyId={companyId} email={email} />
    </AuthWrapper>
  );
};
