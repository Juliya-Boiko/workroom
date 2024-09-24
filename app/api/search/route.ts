import Project from '@/models/project';
import { decodeToken } from '@/libs/jose';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const value = url.searchParams.get('value');
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { companyId } = await decodeToken(token);
  const projects = await Project.find({
    companyId,
    name: { $regex: value, $options: 'i' },
  })
    .sort({ createdAt: 'desc' })
    .select('name image')
    .limit(5);
  const projectsWithTasks = await Project.find({
    companyId,
  })
    .populate({
      path: 'tasks',
      match: {
        name: { $regex: value, $options: 'i' },
      },
      select: '_id name status',
      options: { limit: 5 },
    })
    .sort({ createdAt: 'desc' });
  const tasks = projectsWithTasks.flatMap((project) => project.tasks);
  return NextResponse.json({ projects, tasks }, { status: 200 });
}
