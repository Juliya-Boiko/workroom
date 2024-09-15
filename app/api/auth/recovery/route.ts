import User from '@/models/user';
import { connectToMongoDB } from '@/libs/database';
import { sendPasswordRecoveryEmail } from '@/utils';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const email = url.searchParams.get('email');
  // Check if exist user with email
  const user = await User.findOne({ email });
  if (!user || !email) {
    return NextResponse.json({ message: `User with email ${email} not found` }, { status: 400 });
  }

  await sendPasswordRecoveryEmail(email, user.companyId);

  return NextResponse.json(email, { status: 200 });
}
