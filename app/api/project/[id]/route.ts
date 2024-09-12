/* eslint-disable @typescript-eslint/no-explicit-any */
import Project from '@/models/project';
import { connectToMongoDB } from '@/libs/database';
import { ETaskStatus, IAssignee, IProject } from '@/typings';
import { NextRequest, NextResponse } from 'next/server';
import { IDynamicRoute } from '@/typings';
import Task from '@/models/task';

connectToMongoDB();

export interface IResponse extends IProject {
  tasks: {
    status: ETaskStatus;
    assignee: IAssignee;
  }[];
}

export async function GET(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const project = await Project.findById(id)
      .select('-companyId -updatedAt')
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
    const allTasks = project.tasks;
    const activeTasks = allTasks.filter((task) => task.status !== ETaskStatus.DONE);
    const users = allTasks.map((task) => task.assignee);
    const assignee = users.filter(
      (user, index, self) => index === self.findIndex((u) => u._id === user._id)
    );
    const data = {
      ...project,
      tasks: {
        all: allTasks.length,
        active: activeTasks.length,
        assignee,
      },
    };
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  try {
    await Project.findByIdAndDelete(id);
    await Task.deleteMany({ projectId: id });
    return NextResponse.json({ message: 'Project deleted' }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
