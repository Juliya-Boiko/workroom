import Comment from '@/models/comment';
import { decodeToken } from '@/libs/jose';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { id } = await decodeToken(token);
  const comment = new Comment({
    ...reqBody,
    userId: id,
  });
  const savedComment = await comment.save();
  return NextResponse.json(savedComment.taskId, { status: 201 });
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const taskId = url.searchParams.get('taskId');

  if (!taskId) {
    return NextResponse.json({ message: 'TaskId is required' }, { status: 400 });
  }

  const comments = await Comment.find({ taskId }).select('-userId').sort({ createdAt: 'asc' });
  return NextResponse.json(comments, { status: 200 });
}
