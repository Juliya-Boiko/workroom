/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { connectToMongoDB } from '@/utils/database';

connectToMongoDB();

export async function GET() {
  try {
    const response = NextResponse.json(
      {
        message: 'Logout successful',
        success: true,
      },
      { status: 200 }
    );
    response.cookies.set('workroom', '', {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
