import { genInviteToken } from '@/utils/jwt';
import { ROUTES } from '@/constants';

export const createInviteMemberUrl = (companyId: string, email: string) => {
  const inviteToken = genInviteToken(companyId, email);
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const link = `${domain}/${ROUTES.invite}/${inviteToken}`;
  return link;
};
