/* eslint-disable @typescript-eslint/no-explicit-any */
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import { connectToMongoDB } from '@/utils/database';
import { decode } from '@/utils/jwt';

connectToMongoDB();

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const { id } = await decode(token);
    if (!id) {
      return NextResponse.json({ message: 'Find user error' }, { status: 400 });
    }
    const user = await User.findById(id).select('-password -createdAt -updatedAt -companyId');
    if (!user) {
      return NextResponse.json({ message: `User with not found` }, { status: 400 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const { id } = await decode(token);
    if (!id) {
      return NextResponse.json({ message: 'Find user error' }, { status: 400 });
    }
    const reqBody = await request.json();
    const user = await User.findByIdAndUpdate(id, reqBody, { new: true }).select(
      'name avatar position -_id'
    );
    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
