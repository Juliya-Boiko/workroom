import Project from '@/models/project';
import Folder from '@/models/folder';
import { decodeToken } from '@/libs/jose';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function GET(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { companyId } = await decodeToken(token);

  const projects = await Project.find({ companyId }).sort({ createdAt: 'desc' }).select('name');
  const folders = await Folder.find({ companyId }).select('projectId');
  const ids = folders.map((el) => el.projectId.toString());

  const projectsWithoutFolders = projects.filter(
    (project) => !ids.includes(project._id.toString())
  );
  return NextResponse.json(projectsWithoutFolders, { status: 200 });
}
