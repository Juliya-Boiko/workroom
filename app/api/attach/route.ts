import Attachment from '@/models/attachment';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const taskId = url.searchParams.get('taskId');
  if (!taskId) {
    return NextResponse.json({ message: 'TaskId is required' }, { status: 400 });
  }
  const attachments = await Attachment.find({ taskId }).select('-taskId -updatedAt');
  return NextResponse.json(attachments, { status: 200 });
}

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const attachment = new Attachment({
    ...reqBody,
  });
  const saved = await attachment.save();
  return NextResponse.json(saved, { status: 201 });
}
