/* eslint-disable @typescript-eslint/no-explicit-any */
import Company from '@/models/company';
import { NextRequest, NextResponse } from 'next/server';
import { connectToMongoDB } from '@/utils/database';
import { decode } from '@/utils/jwt';

connectToMongoDB();

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const { companyId } = await decode(token);
    if (!companyId) {
      return NextResponse.json({ message: 'Find company error' }, { status: 400 });
    }
    const company = await Company.findById(companyId).select('name -_id');
    if (!company) {
      return NextResponse.json({ message: `Company not found` }, { status: 400 });
    }
    return NextResponse.json(company.name, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
