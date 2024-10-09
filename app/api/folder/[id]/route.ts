import Folder from '@/models/folder';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';
import { IDynamicRoute } from '@/typings';

connectToMongoDB();

export async function GET(_request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const folder = await Folder.findById(id);
  return NextResponse.json(folder, { status: 200 });
}

// export async function PATCH(request: NextRequest, { params }: IDynamicRoute) {
//   const token = request.cookies.get('workroom')?.value;
//   const { id } = params;

//   const reqBody = await request.json();
//   if (!token) {
//     return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
//   }

//   const task = await Task.findByIdAndUpdate(id, reqBody);
//   return NextResponse.json({ projectId: task.projectId, taskId: id }, { status: 200 });
// }

// export async function DELETE(request: NextRequest, { params }: IDynamicRoute) {
//   const { id } = params;
//   await Task.findOneAndDelete({ _id: id });
//   await Attachment.deleteMany({ taskId: id });
//   return NextResponse.json({ message: 'Task deleted' }, { status: 200 });
// }
