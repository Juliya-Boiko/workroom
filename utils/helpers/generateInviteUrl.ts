import { createInviteToken } from '@/libs/jose';
import { ROUTES } from '@/utils';

export const generateInviteUrl = (companyId: string, email: string) => {
  const inviteToken = createInviteToken(companyId, email);
  const domain = process.env.DOMAIN;
  const link = `${domain}/${ROUTES.invite}/${inviteToken}`;
  return link;
};

export const generateRecoveryUrl = (companyId: string, email: string) => {
  const inviteToken = createInviteToken(companyId, email);
  const domain = process.env.DOMAIN;
  const link = `${domain}/${ROUTES.newPassword}/${inviteToken}`;
  return link;
};
