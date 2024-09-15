/* eslint-disable @typescript-eslint/no-explicit-any */
import Task from '@/models/task';
import Project from '@/models/project';
import { decode } from '@/libs/jwt';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const { id } = await decode(token);
    const task = new Task({
      userId: id,
      ...reqBody,
    });
    const savedTask = await task.save();
    await Project.findByIdAndUpdate(
      reqBody.projectId,
      { $push: { assignee: savedTask.assignee } },
      { new: true, useFindAndModify: false }
    );
    return NextResponse.json({ projectId: reqBody.projectId }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
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

  try {
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
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
