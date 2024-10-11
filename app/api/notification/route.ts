import Notification from '@/models/notification';
import { decodeToken } from '@/libs/jose';
import { formatNotifications } from '@/utils';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';
import { INotificationsResponse } from '@/typings';

connectToMongoDB();

export async function POST(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { id, companyId } = await decodeToken(token);

  const reqBody = await request.json();
  const notification = new Notification({
    ...reqBody,
    companyId,
    userId: id,
  });
  await notification.save();
  return NextResponse.json({ message: 'Notification created' }, { status: 201 });
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const url = new URL(request.url);
  const take = url.searchParams.get('take');
  const { companyId } = await decodeToken(token);
  const notifications = await Notification.find({ companyId })
    .sort({ createdAt: 'desc' })
    .limit(Number(take))
    .select('-updatedAt -companyId -taskId')
    .populate('userId', 'name avatar profession')
    .lean<INotificationsResponse[]>();

  return NextResponse.json(formatNotifications(notifications), { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');
  await Notification.deleteMany({ userId });
}
