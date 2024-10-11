import Page from '@/models/page';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function POST(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }

  const reqBody = await request.json();
  const lastPage = await Page.findOne({ folderId: reqBody.folderId }).sort({ order: -1 });

  const page = new Page({
    ...reqBody,
    order: lastPage ? lastPage.order + 1 : 0,
  });
  await page.save();
  return NextResponse.json({ folderId: reqBody.folderId }, { status: 201 });
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const url = new URL(request.url);
  const folderId = url.searchParams.get('folderId');
  const pages = await Page.find({ folderId }).sort({ order: -1 });
  return NextResponse.json(pages, { status: 200 });
}
