/* eslint-disable @typescript-eslint/no-explicit-any */
import User from '@/models/user';
import Company from '@/models/company';
import { hashPassword } from '@/libs/bcrypt';
import { genToken } from '@/libs/jwt';
import { connectToMongoDB } from '@/libs/database';
import { sendRegistrationEmail, sendInviteEmails } from '@/utils';
import { userPositionsDataTypes } from '@/typings';
import { EUserPosition } from '@/typings';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  // Check if exist user with email
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
    position: reqBody.userPosition ? reqBody.userPosition : userPositionsDataTypes[0],
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
    // Register company if user BusinesOwner
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
    // Register user
    const savedUser = await newUser.save();
    await Company.findByIdAndUpdate(companyId, { ownerId: savedUser._id });
    // Send send registration email to owner
    await sendRegistrationEmail({ name: savedUser.name, email: savedUser.email, companyName });
    // Send invite emails to members
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
    // Register user
    const newUser = new User({
      ...initUser,
      companyId: reqBody.companyId,
    });
    const savedUser = await newUser.save();
    initToken = genToken(savedUser._id, reqBody.companyId);
  }

  const response = NextResponse.json({ message: 'Sign up successful' }, { status: 201 });
  response.cookies.set('workroom', initToken, { httpOnly: true });
  return response;
  // try {
  //   const reqBody = await request.json();

  //   const isExist = await User.findOne({ email: reqBody.email });
  //   if (isExist) {
  //     return NextResponse.json(
  //       { message: `User with email ${reqBody.email} already exists` },
  //       { status: 400 }
  //     );
  //   }

  //   const hashPass = await hashPassword(reqBody.password);

  //   const initUser = {
  //     name: reqBody.name,
  //     email: reqBody.email,
  //     position: reqBody.userPosition ? reqBody.userPosition : userPositionsDataTypes[0],
  //     password: hashPass,
  //     avatar: null,
  //     birthday: null,
  //     level: null,
  //     location: null,
  //     profession: reqBody.userPosition === EUserPosition.EMPLOYEE ? reqBody.profession : null,
  //     phone: null,
  //   };

  //   let initToken = '';

  //   if (reqBody.userPosition === EUserPosition.OWNER) {
  //     const companyData = {
  //       name: reqBody.companyName,
  //       direction: reqBody.direction,
  //       size: reqBody.companySize,
  //     };
  //     const company = new Company({
  //       ...companyData,
  //     });
  //     const savedCompany = await company.save();
  //     const companyId = savedCompany._id;
  //     const companyName = savedCompany.name;
  //     const newUser = new User({
  //       ...initUser,
  //       companyId,
  //     });
  //     const savedUser = await newUser.save();
  //     await Company.findByIdAndUpdate(companyId, { ownerId: savedUser._id });
  //     await sendRegistrationEmail({ name: savedUser.name, email: savedUser.email, companyName });
  //     if (reqBody.members.length > 0) {
  //       await sendInviteEmails({
  //         name: savedUser.name,
  //         companyId,
  //         companyName,
  //         members: reqBody.members,
  //       });
  //     }
  //     initToken = genToken(savedUser._id, companyId);
  //   } else {
  //     const newUser = new User({
  //       ...initUser,
  //       companyId: reqBody.companyId,
  //     });
  //     const savedUser = await newUser.save();
  //     initToken = genToken(savedUser._id, reqBody.companyId);
  //   }

  //   const response = NextResponse.json({ message: 'Sign up successful' }, { status: 201 });

  //   response.cookies.set('workroom', initToken, {
  //     httpOnly: true,
  //   });

  //   return response;
  // } catch (error: any) {
  //   return NextResponse.json({ message: error.message }, { status: 500 });
  // }
}
