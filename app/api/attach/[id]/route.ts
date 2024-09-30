import Attachment from '@/models/attachment';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';
import { IDynamicRoute } from '@/typings';

connectToMongoDB();

export async function GET(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const attach = await Attachment.findById(id);
  return NextResponse.json(attach, { status: 200 });
}

// export async function PATCH(request: NextRequest, { params }: IDynamicRoute) {
//   const { id } = params;
//   const reqBody = await request.json();
//   try {
//     const token = request.cookies.get('workroom')?.value;
//     if (!token) {
//       return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
//     }
//     const task = await Task.findByIdAndUpdate(id, reqBody);
//     return NextResponse.json({ projectId: task.projectId, taskId: id }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ message: error.message }, { status: 500 });
//   }
// }

export async function DELETE(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const attach = await Attachment.findByIdAndDelete(id);
  console.log({ attach });
  return NextResponse.json(attach.taskId, { status: 200 });
}
