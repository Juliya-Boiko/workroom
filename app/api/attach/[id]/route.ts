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

export async function DELETE(request: NextRequest, { params }: IDynamicRoute) {
  const { id } = params;
  const attach = await Attachment.findByIdAndDelete(id);
  return NextResponse.json(attach.taskId, { status: 200 });
}
