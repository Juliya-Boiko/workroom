/* eslint-disable @typescript-eslint/no-explicit-any */
import Task from '@/models/task';
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
    const { id } = await decode(token);
    const task = new Task({
      userId: id,
      ...reqBody,
    });
    await task.save();
    return NextResponse.json({ message: 'Task created' }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
