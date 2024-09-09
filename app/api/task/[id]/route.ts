/* eslint-disable @typescript-eslint/no-explicit-any */
import Task from '@/models/task';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';
import { IDynamicRoute } from '@/typings';

connectToMongoDB();

export async function PATCH(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const reqBody = await request.json();
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    await Task.findByIdAndUpdate(id, reqBody);
    return NextResponse.json({ message: 'Task updated' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
