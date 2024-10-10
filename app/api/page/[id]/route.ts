import Page from '@/models/page';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';
import { IDynamicRoute } from '@/typings';

connectToMongoDB();

export async function DELETE(_request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const deletedPage = await Page.findOneAndDelete({ _id: id });
  return NextResponse.json({ folderId: deletedPage.folderId }, { status: 200 });
}

export async function PATCH(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const reqBody = await request.json();
  const updatedPage = await Page.findByIdAndUpdate(id, reqBody);
  return NextResponse.json({ folderId: updatedPage.folderId }, { status: 200 });
}
