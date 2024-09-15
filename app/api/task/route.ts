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
  const status = url.searchParams.get('status');
  const priority = url.searchParams.get('priority');
  const start = url.searchParams.get('start');
  // const end = url.searchParams.get('end');

  if (!projectId) {
    return NextResponse.json({ message: 'ProjectId is required' }, { status: 400 });
  }
  try {
    const query: any = { projectId };
    if (status) {
      query.status = status;
    }
    if (priority) {
      query.priority = priority;
    }
    console.log(start);
    if (start) {
      query.start = { $gte: new Date(start) };
    }
    // if (end) {
    //   const endDate = new Date(end);
    //   if (!isNaN(endDate.getTime())) {
    //     query.deadline = { $lt: endDate };
    //   } else {
    //     return NextResponse.json({ message: 'Invalid end date' }, { status: 400 });
    //   }
    // }

    const tasks = await Task.find(query)
      .populate('assignee', 'name avatar _id')
      .sort({ createdAt: 'desc' });

    return NextResponse.json(tasks, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// assignee: { $in: assignee },
// start: { $gt: start },
// deadline: { $lt: end },
// const assignee = url.searchParams.get('assignee');

// const assignee = url.searchParams.get('assignee');
// const start = url.searchParams.get('start');
// const end = url.searchParams.get('end');
