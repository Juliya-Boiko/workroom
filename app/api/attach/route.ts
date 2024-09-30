import Attachment from '@/models/attachment';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const taskId = url.searchParams.get('taskId');
  if (!taskId) {
    return NextResponse.json({ message: 'TaskId is required' }, { status: 400 });
  }
  const attachments = await Attachment.find({ taskId }).select('-taskId -updatedAt');
  return NextResponse.json(attachments, { status: 200 });
}

// export async function POST(request: NextRequest) {
//   const reqBody = await request.json();
//   const token = request.cookies.get('workroom')?.value;
//   if (!token) {
//     return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
//   }
//   const { id } = await decodeToken(token);
//   const task = new Task({
//     userId: id,
//     ...reqBody,
//   });
//   const savedTask = await task.save();
//   if (reqBody.attachments.length) {
//     const items = reqBody.attachments.map(async (el: ICreateAttach) => {
//       const attach = new Attachment({ ...el, taskId: savedTask._id });
//       await attach.save();
//     });
//     await Promise.all(items);
//   }
//   return NextResponse.json({ projectId: reqBody.projectId }, { status: 201 });
// }
