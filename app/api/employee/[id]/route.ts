import User from '@/models/user';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';
import { IDynamicRoute } from '@/typings';

connectToMongoDB();

export async function GET(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const employee = await User.findById(id).select('-password -createdAt -updatedAt -companyId');
  return NextResponse.json(employee, { status: 200 });
}

export async function PATCH(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const reqBody = await request.json();
  const employee = await User.findByIdAndUpdate(id, reqBody, { new: true }).select('level');
  return NextResponse.json(employee, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Employee deleted' }, { status: 200 });
}
