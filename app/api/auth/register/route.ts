/* eslint-disable @typescript-eslint/no-explicit-any */
import User from '@/models/user';
import Company from '@/models/company';
import { hashPassword } from '@/utils/bcrypt';
import { genToken } from '@/utils/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { connectToMongoDB } from '@/utils/database';
import { sendRegistrationEmail, sendInviteEmails } from '@/helpers';
import { EUserPosition } from '@/enums';

connectToMongoDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const isExist = await User.findOne({ email: reqBody.email });
    if (isExist) {
      return NextResponse.json(
        { message: `User with email ${reqBody.email} already exists` },
        { status: 400 }
      );
    }

    const hashPass = await hashPassword(reqBody.password);

    const initUser = {
      name: reqBody.name,
      email: reqBody.email,
      position: reqBody.userPosition,
      password: hashPass,
      avatar: null,
      birthday: null,
      level: null,
      location: null,
      profession: reqBody.userPosition === EUserPosition.EMPLOYEE ? reqBody.profession : null,
      phone: null,
    };

    let initToken = '';

    if (reqBody.userPosition === EUserPosition.OWNER) {
      const companyData = {
        name: reqBody.companyName,
        direction: reqBody.direction,
        size: reqBody.companySize,
      };
      const company = new Company({
        ...companyData,
      });
      const savedCompany = await company.save();
      const companyId = savedCompany._id;
      const companyName = savedCompany.name;
      const newUser = new User({
        ...initUser,
        companyId,
      });
      const savedUser = await newUser.save();
      await Company.findByIdAndUpdate(companyId, { ownerId: savedUser._id });
      await sendRegistrationEmail({ name: savedUser.name, email: savedUser.email, companyName });
      if (reqBody.members.length > 0) {
        await sendInviteEmails({
          name: savedUser.name,
          companyId,
          companyName,
          members: reqBody.members,
        });
      }
      initToken = genToken(savedUser._id, companyId);
    } else {
      const newUser = new User({
        ...initUser,
        companyId: reqBody.companyId,
      });
      const savedUser = await newUser.save();
      initToken = genToken(savedUser._id, reqBody.companyId);
    }

    const response = NextResponse.json({ message: 'Sign up successful' }, { status: 201 });

    response.cookies.set('workroom', initToken, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
