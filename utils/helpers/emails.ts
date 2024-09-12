'use server';
import { sendEmail } from '@/libs/smtp';
import { registerUserEmailBody, inviteUserEmailBody } from '@/utils';
import { generateInviteUrl } from './generateInviteUrl';

interface RegisterProps {
  name: string;
  email: string;
  companyName: string;
}

export const sendRegistrationEmail = async ({ name, email, companyName }: RegisterProps) => {
  await sendEmail({
    to: email,
    subject: `${name}, welcome to Workroom!`,
    body: registerUserEmailBody(companyName),
  });
};

interface InviteProps {
  name: string;
  companyId: string;
  companyName: string;
  members: string[];
}

export const sendInviteEmails = async ({ name, companyId, companyName, members }: InviteProps) => {
  const inviteMembers = members.map(async (memberEmail: string) => {
    if (!!memberEmail) {
      const link = generateInviteUrl(companyId, memberEmail);

      await sendEmail({
        to: memberEmail,
        subject: `Invite to Workroom from ${name}`,
        body: inviteUserEmailBody(name, companyName, link),
      });
    }
  });
  await Promise.all(inviteMembers);
};
