/* eslint-disable @typescript-eslint/no-explicit-any */
import Task from '@/models/task';
import { decodeToken } from '@/libs/jose';
import { connectToMongoDB } from '@/libs/database';
import { defineTaskNumber } from '@/utils';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { id } = await decodeToken(token);
  const lastTask = await Task.findOne({ projectId: reqBody.projectId }).sort({ createdAt: -1 });

  const task = new Task({
    userId: id,
    ...reqBody,
    order: defineTaskNumber(lastTask),
  });
  const savedTask = await task.save();
  return NextResponse.json(
    { projectId: reqBody.projectId, taskId: savedTask._id },
    { status: 201 }
  );
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const projectId = url.searchParams.get('projectId');

  if (!projectId) {
    return NextResponse.json({ message: 'ProjectId is required' }, { status: 400 });
  }

  const status = url.searchParams.get('status');
  const priority = url.searchParams.get('priority');
  const start = url.searchParams.get('start');
  const end = url.searchParams.get('end');
  const assignee = url.searchParams.get('assignee');

  const query: any = { projectId };
  if (status) {
    query.status = status;
  }
  if (priority) {
    query.priority = priority;
  }
  if (start) {
    query.start = { $gte: new Date(start) };
  }
  if (end) {
    query.deadline = { $lte: new Date(end) };
  }
  if (assignee) {
    query.assignee = { $in: assignee.split(',') };
  }

  const tasks = await Task.find(query)
    .populate('assignee', 'name avatar _id')
    .sort({ createdAt: 'desc' });

  return NextResponse.json(tasks, { status: 200 });
}

export async function PUT(request: NextRequest) {
  const reqBody = await request.json();
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  await Task.updateMany({ assignee: reqBody.employeeId }, { assignee: null });

  return NextResponse.json({ message: 'Employee deleted from assignee' }, { status: 201 });
}
