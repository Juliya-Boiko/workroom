import User from '@/models/user';
import Company from '@/models/company';
import { decodeToken } from '@/libs/jose';
import { connectToMongoDB } from '@/libs/database';
import { sendInviteEmails } from '@/utils';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function POST(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { id, companyId } = await decodeToken(token);
  if (!companyId) {
    return NextResponse.json({ message: 'Find company error' }, { status: 400 });
  }

  const emails = (await request.json()) as string[];

  const isExist = (await User.find({ email: { $in: emails } }).select('email -_id')).map(
    (el) => el.email
  );
  const joined = isExist.join(', ');
  const filtered = emails.filter((el) => !isExist.includes(el));

  if (!filtered.length) {
    return NextResponse.json(
      { message: `All users with emails ${joined} already exists` },
      { status: 400 }
    );
  }

  const user = await User.findById(id);
  const company = await Company.findById(companyId);
  await sendInviteEmails({
    name: user.name,
    companyId,
    companyName: company.name,
    members: filtered,
  });
  const resp = {
    success: `Email sended to ${emails.length} employees`,
    warning: '',
  };
  if (isExist.length) {
    resp.warning = `Users with emails ${joined} already exists`;
  }
  return NextResponse.json(resp, { status: 200 });
}
