/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectToMongoDB } from '@/libs/database';
import { NextResponse } from 'next/server';

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
