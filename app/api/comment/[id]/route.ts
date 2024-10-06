import Comment from '@/models/comment';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';
import { IDynamicRoute } from '@/typings';

connectToMongoDB();

export async function DELETE(_request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const deletedComment = await Comment.findOneAndDelete({ _id: id });
  return NextResponse.json(deletedComment.taskId, { status: 200 });
}

export async function PATCH(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const reqBody = await request.json();
  const updatedComment = await Comment.findByIdAndUpdate(id, reqBody);
  return NextResponse.json(updatedComment.taskId, { status: 200 });
}
