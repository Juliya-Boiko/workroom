/* eslint-disable @typescript-eslint/no-explicit-any */
import Project from '@/models/project';
import { NextRequest, NextResponse } from 'next/server';
import { connectToMongoDB } from '@/utils/database';
import { decode } from '@/utils/jwt';
// import Task from '@/models/task';
import { ETaskStatus } from '@/enums';
import { IAssignee, IProject } from '@/interfaces';

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
  // const url = new URL(request.url);
  // const take = url.searchParams.get('take');
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const { companyId } = await decode(token);

    const projectsWithTasks: IResponse[] = await Project.find({ companyId })
      .sort({ createdAt: 'desc' })
      .select('deadline name priority start')
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

    // // .limit(Number(take));
    // console.log(formatted);
    return NextResponse.json(formatted, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
