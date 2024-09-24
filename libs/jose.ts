import { SignJWT, jwtVerify } from 'jose';

export const createToken = async (id: string, companyId: string) => {
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
  const token = await new SignJWT({ id, companyId })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('5h')
    .sign(secret);
  return token;
};

export const isValid = async (token: string) => {
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ['HS256'],
    });
    console.log({ payload });
    return payload;
  } catch (error: unknown) {
    console.log('Token has expired', error);
    return false;
  }
};

export const decodeToken = async (token: string) => {
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
  const { payload } = await jwtVerify(token, secret);
  return payload as { id: string; companyId: string };
};

export const createInviteToken = async (companyId: string, email: string) => {
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
  const token = await new SignJWT({ companyId, email })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1d')
    .sign(secret);
  return token;
};

export const decodeInviteToken = async (token: string) => {
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
  const { payload } = await jwtVerify(token, secret);
  return payload as { email: string; companyId: string };
};
