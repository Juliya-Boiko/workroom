/* eslint-disable @typescript-eslint/no-explicit-any */
import User from '@/models/user';
import { genToken } from '@/libs/jwt';
import { comparePassword } from '@/libs/bcrypt';
import { connectToMongoDB } from '@/libs/database';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          message: `User with email ${email} not found`,
        },
        { status: 400 }
      );
    }

    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        {
          message: 'Invalid password',
        },
        { status: 403 }
      );
    }

    const token = genToken(user._id, user.companyId);

    const response = NextResponse.json(
      {
        message: 'Login successful',
      },
      { status: 200 }
    );

    response.cookies.set('workroom', token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
