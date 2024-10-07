import Task from '@/models/task';
import Attachment from '@/models/attachment';
import { decodeToken } from '@/libs/jose';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';
import { IDynamicRoute } from '@/typings';

connectToMongoDB();

export async function GET(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const task = await Task.findById(id).populate('assignee', 'name avatar _id');
  return NextResponse.json(task, { status: 200 });
}

export async function PATCH(request: NextRequest, { params }: IDynamicRoute) {
  const token = request.cookies.get('workroom')?.value;
  const { id } = params;

  const reqBody = await request.json();
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { id: userId, companyId } = await decodeToken(token);

  const task = await Task.findByIdAndUpdate(id, reqBody);
  return NextResponse.json(
    { projectId: task.projectId, taskId: id, companyId, userId },
    { status: 200 }
  );
}

export async function DELETE(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  await Task.findOneAndDelete({ _id: id });
  await Attachment.deleteMany({ taskId: id });
  return NextResponse.json({ message: 'Task deleted' }, { status: 200 });
}
