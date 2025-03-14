import User from '@/models/user';
import { decodeToken } from '@/libs/jose';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function GET(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { id } = await decodeToken(token);
  if (!id) {
    return NextResponse.json({ message: 'Find user error' }, { status: 400 });
  }
  const user = await User.findById(id).select('name avatar position -_id');
  if (!user) {
    return NextResponse.json({ message: `User with not found` }, { status: 400 });
  }
  return NextResponse.json(user, { status: 200 });
}
