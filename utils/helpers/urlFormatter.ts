import { genInviteToken } from '@/libs/jwt';
import { ROUTES } from '@/utils';

export const createInviteMemberUrl = (companyId: string, email: string) => {
  const inviteToken = genInviteToken(companyId, email);
  const domain = process.env.DOMAIN;
  const link = `${domain}/${ROUTES.invite}/${inviteToken}`;
  return link;
};
