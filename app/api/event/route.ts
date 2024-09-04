/* eslint-disable @typescript-eslint/no-explicit-any */
import Event from '@/models/event';
import { decode } from '@/libs/jwt';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function POST(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  try {
    const reqBody = await request.json();
    const { id } = await decode(token);
    const event = new Event({
      userId: id,
      ...reqBody,
    });
    await event.save();
    return NextResponse.json({ message: 'Task created' }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const url = new URL(request.url);
  const take = url.searchParams.get('take');
  // const url = new URL(request.url);
  // const projectId = url.searchParams.get('projectId');

  // if (!projectId) {
  //   return NextResponse.json({ message: 'ProjectId is required' }, { status: 400 });
  // }
  try {
    const { id } = await decode(token);
    const events = await Event.find({ userId: id, date: { $gt: new Date() } })
      .sort({ date: 'asc' })
      .limit(Number(take))
      .select('-createdAt -updatedAt -userId');
    return NextResponse.json(events, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
