/* eslint-disable @typescript-eslint/no-explicit-any */
import Project from '@/models/project';
import { NextRequest, NextResponse } from 'next/server';
import { connectToMongoDB } from '@/utils/database';
import { decode } from '@/utils/jwt';

connectToMongoDB();

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
    const projects = await Project.find({
      companyId,
    })
      .select('deadline assignee name priority start')
      .sort({ createdAt: 'desc' })
      .limit(Number(take));
    return NextResponse.json(projects, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
