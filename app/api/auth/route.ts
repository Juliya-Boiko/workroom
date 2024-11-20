import User from '@/models/user';
import Company from '@/models/company';
import { hashPassword, comparePassword } from '@/libs/bcrypt';
import { connectToMongoDB } from '@/libs/database';
import { sendRegistrationEmail, sendInviteEmails } from '@/utils';
import { userPositionsDataTypes } from '@/typings';
import { EUserPosition } from '@/typings';
import { NextRequest, NextResponse } from 'next/server';
import { createToken } from '@/libs/jose';

connectToMongoDB();

// REGISTER USER
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
    settings: {
      emailActivity: false,
      notifyTask: true,
      notifyComment: true,
    },
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
    initToken = await createToken(savedUser._id, companyId, savedUser.position);
  } else {
    // Register user
    const newUser = new User({
      ...initUser,
      companyId: reqBody.companyId,
    });
    const savedUser = await newUser.save();
    initToken = await createToken(savedUser._id, reqBody.companyId, savedUser.position);
  }

  const response = NextResponse.json({ message: 'Sign up successful' }, { status: 201 });
  response.cookies.set('workroom', initToken, { httpOnly: true });
  return response;
}

// LOGIN USER
export async function PUT(request: NextRequest) {
  const reqBody = await request.json();
  const { email, password } = reqBody;
  const user = await User.findOne({ email });
  // Check if exist user with email
  if (!user) {
    return NextResponse.json({ message: `User with email ${email} not found` }, { status: 400 });
  }
  // Check is password valid
  const validPassword = await comparePassword(password, user.password);
  if (!validPassword) {
    return NextResponse.json({ message: 'Invalid password' }, { status: 403 });
  }
  const token = await createToken(user._id, user.companyId, user.position);
  const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
  response.cookies.set('workroom', token, { httpOnly: true });
  return response;
}

// CHANGE PASSWORD
export async function PATCH(request: NextRequest) {
  const reqBody = await request.json();
  const { email, password } = reqBody;
  // Check if exist user with email
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: `User with email ${email} not found` }, { status: 400 });
  }
  const hashPass = await hashPassword(password);
  await User.findByIdAndUpdate(user._id, { password: hashPass });
  return NextResponse.json({ message: 'Password updated' }, { status: 200 });
}

// LOGOUT
export async function DELETE() {
  const response = NextResponse.json(
    { message: 'Logout successful', success: true },
    { status: 200 }
  );
  response.cookies.set('workroom', '', { httpOnly: true });
  return response;
}
