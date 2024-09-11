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
  // const url = new URL(request.url);
  // const take = url.searchParams.get('take');
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const project = await Project.findById(id).select('-companyId -updatedAt');
    return NextResponse.json(project, { status: 200 });
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
