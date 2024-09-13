/* eslint-disable @typescript-eslint/no-explicit-any */
import Project from '@/models/project';
import { decode } from '@/libs/jwt';
import { connectToMongoDB } from '@/libs/database';
import { ETaskStatus, IAssignee, IProject } from '@/typings';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export interface IResponse extends IProject {
  tasks: {
    status: ETaskStatus;
    assignee: IAssignee;
  }[];
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const { id, companyId } = await decode(token);
    const project = new Project({
      companyId,
      userId: id,
      ...reqBody,
      assignee: [],
    });
    const savedProject = await project.save();
    return NextResponse.json(savedProject._id, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const take = url.searchParams.get('take');
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const { companyId } = await decode(token);

    const projectsWithTasks: IResponse[] = await Project.find({ companyId })
      .sort({ createdAt: 'desc' })
      .select('deadline description name priority createdAt image')
      .limit(Number(take))
      .populate({
        path: 'tasks',
        match: { projectId: { $exists: true } },
        model: 'Task',
        select: 'assignee status -projectId -_id',
        populate: {
          path: 'assignee',
          select: 'name avatar',
        },
      })
      .lean();
    const formatted = projectsWithTasks.map((el) => {
      const allTasks = el.tasks;
      const activeTasks = el.tasks.filter((task) => task.status !== ETaskStatus.DONE);
      const users = el.tasks.map((task) => task.assignee);
      const assignee = users.filter(
        (user, index, self) => index === self.findIndex((u) => u._id === user._id)
      );
      return {
        ...el,
        tasks: {
          all: allTasks.length,
          active: activeTasks.length,
          assignee,
        },
      };
    });
    return NextResponse.json(formatted, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
