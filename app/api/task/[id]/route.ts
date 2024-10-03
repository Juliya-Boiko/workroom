import Task from '@/models/task';
import Attachment from '@/models/attachment';
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
  const { id } = params;
  const reqBody = await request.json();
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const task = await Task.findByIdAndUpdate(id, reqBody);
  return NextResponse.json({ projectId: task.projectId, taskId: id }, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  await Task.findOneAndDelete({ _id: id });
  await Attachment.deleteMany({ taskId: id });
  return NextResponse.json({ message: 'Task deleted' }, { status: 200 });
}
