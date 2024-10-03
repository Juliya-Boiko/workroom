import Project from '@/models/project';
import { connectToMongoDB } from '@/libs/database';
import { ETaskStatus, IAssignee, IProject } from '@/typings';
import { NextRequest, NextResponse } from 'next/server';
import { IDynamicRoute } from '@/typings';

connectToMongoDB();

export interface IResponse extends IProject {
  tasks: {
    status: ETaskStatus;
    assignee: IAssignee;
  }[];
}

export async function GET(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
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
    .lean<IResponse>();
  if (project) {
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
  }
  return NextResponse.json({ message: `Project with id ${id} not found` }, { status: 400 });
}

export async function DELETE(_request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  await Project.findOneAndDelete({ _id: id });
  return NextResponse.json({ message: 'Project deleted' }, { status: 200 });
}

export async function PATCH(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const reqBody = await request.json();
  await Project.findByIdAndUpdate(id, reqBody);
  return NextResponse.json(id, { status: 200 });
}
