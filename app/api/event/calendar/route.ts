/* eslint-disable @typescript-eslint/no-explicit-any */
import Event from '@/models/event';
import { decode } from '@/libs/jwt';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function GET(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  try {
    const { id } = await decode(token);
    const events = await Event.find({ userId: id }).select('-createdAt -updatedAt -userId');
    return NextResponse.json(events, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
