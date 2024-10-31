import { createInviteToken } from '@/libs/jose';
import { ROUTES } from '@/utils';

export const generateInviteUrl = async (companyId: string, email: string) => {
  const inviteToken = await createInviteToken(companyId, email);
  const domain = process.env.DOMAIN;
  const link = `${domain}${ROUTES.invite}/${inviteToken}`;
  return link;
};

export const generateRecoveryUrl = async (companyId: string, email: string) => {
  const inviteToken = await createInviteToken(companyId, email);
  const domain = process.env.DOMAIN;
  const link = `${domain}/${ROUTES.newPassword}/${inviteToken}`;
  return link;
};
