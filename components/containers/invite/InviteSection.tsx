import styles from './invite.module.scss';
import { decodeInvite } from '@/libs/jwt';
import { IDynamicComponent } from '@/typings';
import { InviteForm } from '@/components/forms/invite/InviteForm';
import { AuthWrapper } from '@/components/sections/auth/AuthWrapper';

export const InviteSection = async ({ slug }: IDynamicComponent) => {
  const { companyId, email } = await decodeInvite(slug);

  return (
    <AuthWrapper>
      <h1 className={styles.title}>Register in Woorkroom</h1>
      <InviteForm companyId={companyId} email={email} />
    </AuthWrapper>
  );
};
