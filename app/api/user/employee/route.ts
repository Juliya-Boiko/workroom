/* eslint-disable @typescript-eslint/no-explicit-any */
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import { connectToMongoDB } from '@/utils/database';
import { decode } from '@/utils/jwt';
import { EUserPosition } from '@/enums';

connectToMongoDB();

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const { id, companyId } = await decode(token);
    if (!id || !companyId) {
      return NextResponse.json({ message: 'Find user error' }, { status: 400 });
    }
    const employees = await User.find({
      companyId,
      position: EUserPosition.EMPLOYEE,
    }).select('-companyId -createdAt -updatedAt -password');
    return NextResponse.json(employees, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}