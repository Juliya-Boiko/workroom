import Timelog from '@/models/timelog';
import { decodeToken } from '@/libs/jose';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function POST(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const reqBody = await request.json();
  const { id } = await decodeToken(token);
  const timelog = new Timelog({
    userId: id,
    ...reqBody,
  });
  const savedTimelog = await timelog.save();
  return NextResponse.json(savedTimelog.taskId, { status: 201 });
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const url = new URL(request.url);
  const taskId = url.searchParams.get('taskId');
  const timeLogs = await Timelog.find({ taskId });
  if (timeLogs.length) {
    const total = timeLogs.reduce((sum, log) => sum + log.duration, 0);
    return NextResponse.json(total, { status: 200 });
  } else {
    return NextResponse.json(0, { status: 200 });
  }
}
