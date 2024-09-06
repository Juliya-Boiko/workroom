/* eslint-disable @typescript-eslint/no-explicit-any */
import User from '@/models/user';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

interface Params {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = params;
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const employee = await User.findById(id).select('-password -createdAt -updatedAt -companyId');
    return NextResponse.json(employee, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    const { id } = params;
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const reqBody = await request.json();
    const employee = await User.findByIdAndUpdate(id, reqBody, { new: true }).select('level -_id');
    return NextResponse.json(employee, { status: 200 });
  } catch (error: any) {
    console.log('PATCH ERROR', error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
