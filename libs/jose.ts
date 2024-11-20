import { SignJWT, jwtVerify } from 'jose';

export const createToken = async (id: string, companyId: string, position: string) => {
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
  const token = await new SignJWT({ id, companyId, position })
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
    return !!payload;
  } catch (error: unknown) {
    console.log('Token has expired', error);
    return false;
  }
};

export const decodeToken = async (token: string) => {
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
  const { payload } = await jwtVerify(token, secret);
  return payload as { id: string; companyId: string; position: string };
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
