import Folder from '@/models/folder';
import { decodeToken } from '@/libs/jose';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';
import Page from '@/models/page';

connectToMongoDB();

export async function POST(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { id, companyId } = await decodeToken(token);

  const reqBody = await request.json();
  const folder = new Folder({
    ...reqBody,
    companyId,
    users: [id],
  });
  await folder.save();
  return NextResponse.json({ message: 'Folder created' }, { status: 201 });
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { id, companyId } = await decodeToken(token);
  const folders = await Folder.find({ companyId, users: { $in: [id] } })
    .sort({ createdAt: 'desc' })
    .populate({ path: 'projectId', select: 'name' })
    .lean();
  const data = folders.map(async (el) => {
    const pages = await Page.find({ folderId: el._id });
    return { ...el, pages: pages.length };
  });
  const foldersWithPages = await Promise.all(data);
  return NextResponse.json(foldersWithPages, { status: 200 });
}
