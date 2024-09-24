import Company from '@/models/company';
import { decodeToken } from '@/libs/jose';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function GET(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { companyId } = await decodeToken(token);
  if (!companyId) {
    return NextResponse.json({ message: 'Find company error' }, { status: 400 });
  }
  const company = await Company.findById(companyId).select('name direction size -_id');
  if (!company) {
    return NextResponse.json({ message: `Company not found` }, { status: 400 });
  }
  return NextResponse.json(company, { status: 200 });
}

export async function PATCH(request: NextRequest) {
  const token = request.cookies.get('workroom')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
  }
  const { companyId } = await decodeToken(token);
  if (!companyId) {
    return NextResponse.json({ message: 'Find company error' }, { status: 400 });
  }
  const reqBody = await request.json();
  const company = await Company.findByIdAndUpdate(companyId, reqBody, { new: true });

  if (!company) {
    return NextResponse.json({ message: `Company not found` }, { status: 400 });
  }
  return NextResponse.json({ message: 'Company updated' }, { status: 200 });
}
