/* eslint-disable @typescript-eslint/no-explicit-any */
import Task from '@/models/task';
import Attachment from '@/models/attachment';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';
import { EAttachType, IDynamicRoute } from '@/typings';

connectToMongoDB();

export async function GET(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const task = await Task.findById(id).populate('assignee', 'name avatar _id');
    const attachments = await Attachment.find({ taskId: id });
    const initialValue = { links: [], files: [] };
    const grouped = attachments.length
      ? attachments.reduce((acc, curr) => {
        if (curr.type === EAttachType.LINK) {
          acc.links.push(curr);
        } else if (curr.type === EAttachType.FILE) {
          acc.files.push(curr);
        }
        return acc;
      }, initialValue)
      : initialValue;
    const taskWithAttach = { task, attachments: grouped };
    return NextResponse.json(taskWithAttach, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const reqBody = await request.json();
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const task = await Task.findByIdAndUpdate(id, reqBody);
    return NextResponse.json({ projectId: task.projectId, taskId: id }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  try {
    await Task.findByIdAndDelete(id);
    await Attachment.deleteMany({ taskId: id });
    return NextResponse.json({ message: 'Task deleted' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
