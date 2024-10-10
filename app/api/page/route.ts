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
  const page = new Page({
    ...reqBody,
  });
  await page.save();
  return NextResponse.json({ folderId: page.folderId }, { status: 201 });
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const url = new URL(request.url);
  const folderId = url.searchParams.get('folderId');
  const pages = await Page.find({ folderId }).sort({ createdAt: 'desc' });
  return NextResponse.json(pages, { status: 200 });
}
