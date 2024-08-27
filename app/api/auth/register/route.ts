/* eslint-disable @typescript-eslint/no-explicit-any */
import User from '@/models/user';
import Company from '@/models/company';
import { hashPassword } from '@/utils/bcrypt';
import { genToken } from '@/utils/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password, userPosition, companyName, direction, companySize } = reqBody;

    const isExist = await User.findOne({ email });
    if (isExist) {
      return NextResponse.json(
        { error: `User with email ${email} already exists` },
        { status: 400 }
      );
    }

    const companyData = {
      name: companyName,
      direction,
      size: companySize,
    };

    const company = new Company({
      ...companyData,
    });

    const savedCompany = await company.save();
    const companyId = savedCompany._id;

    const hashPass = await hashPassword(password);

    const newUser = new User({
      name,
      email,
      password: hashPass,
      companyId,
      position: userPosition,
    });

    const savedUser = await newUser.save();

    await Company.findByIdAndUpdate(companyId, { ownerId: savedUser._id });

    const token = genToken(savedUser._id, companyId);

    const response = NextResponse.json({ message: 'Sign up successful' }, { status: 201 });

    response.cookies.set('workroom', token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
