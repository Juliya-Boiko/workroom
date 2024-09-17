/* eslint-disable @typescript-eslint/no-explicit-any */
import Project from '@/models/project';
import { decode } from '@/libs/jwt';
import { connectToMongoDB } from '@/libs/database';
import { defineProjectNumber, formatProjectsWithTasks, PROJECTS_STEP } from '@/utils';
import { IProjectResponse } from '@/typings';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { id, companyId } = await decode(token);
  const lastProject = await Project.findOne({ companyId }).sort({ createdAt: -1 });

  const initProject = {
    companyId,
    userId: id,
    ...reqBody,
    order: defineProjectNumber(lastProject),
  };
  const project = new Project(initProject);
  const savedProject = await project.save();
  return NextResponse.json(savedProject._id, { status: 200 });
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const take = url.searchParams.get('take');
  const skip = url.searchParams.get('skip');
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { companyId } = await decode(token);
  const total = await Project.countDocuments({ companyId });
  const projects = await Project.find({ companyId })
    .sort({ createdAt: 'desc' })
    .skip(Number(skip) * PROJECTS_STEP)
    .limit(Number(take))
    .select('deadline description name priority createdAt image order')
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
    .lean<IProjectResponse[]>();
  const formatted = formatProjectsWithTasks(projects);
  return NextResponse.json({ projects: formatted, total }, { status: 200 });
}
