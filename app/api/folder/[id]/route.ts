import Folder from '@/models/folder';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';
import { IDynamicRoute } from '@/typings';

connectToMongoDB();

export async function GET(_request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const folder = await Folder.findById(id).populate({
    path: 'projectId',
    select: 'name',
  });
  const response = {
    ...folder.toObject(),
    title: folder.projectId?.name || null,
  };
  return NextResponse.json(response, { status: 200 });
}

export async function PATCH(request: NextRequest, { params }: IDynamicRoute) {
  const token = request.cookies.get('workroom')?.value;
  const { id } = params;
  const reqBody = await request.json();
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  console.log(reqBody);
  const folder = await Folder.findByIdAndUpdate(
    id,
    { $addToSet: { users: { $each: reqBody.users } } },
    { new: true }
  );
  return NextResponse.json({ folderId: folder._id }, { status: 200 });
}

// export async function DELETE(request: NextRequest, { params }: IDynamicRoute) {
//   const { id } = params;
//   await Task.findOneAndDelete({ _id: id });
//   await Attachment.deleteMany({ taskId: id });
//   return NextResponse.json({ message: 'Task deleted' }, { status: 200 });
// }
