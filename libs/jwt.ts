/* eslint-disable @typescript-eslint/no-explicit-any */
// import jwt from 'jsonwebtoken';

// interface JwtPayload {
//   id: string;
//   companyId: string;
// }

// interface InvitePayload {
//   email: string;
//   companyId: string;
// }

// export const genToken = (id: string, companyId: string) => {
//   const token = jwt.sign({ id, companyId }, process.env.TOKEN_SECRET!, { expiresIn: '5h' });
//   return token;
// };

// export const genInviteToken = (companyId: string, email: string) => {
//   const token = jwt.sign({ companyId, email }, process.env.TOKEN_SECRET!, { expiresIn: '1d' });
//   return token;
// };

// export const decode = async (token: string) => {
//   try {
//     const data = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;
//     return data;
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };

// export const decodeInvite = async (token: string) => {
//   try {
//     const data = jwt.verify(token, process.env.TOKEN_SECRET!) as InvitePayload;
//     return data;
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };

// export const isValidToken = (token: string) => {
//   const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
//   console.log({ decoded });
//   return !!decoded;
//   // const currentTime = Math.floor(Date.now() / 1000);
//   // try {
//   //   // const base64Url = token.split('.')[1];
//   //   // const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//   //   // const { exp, id, companyId } = JSON.parse(Buffer.from(base64, 'base64').toString());
//   //   // console.log({ exp, id, companyId });
//   //   // return exp > currentTime;
//   // } catch (err) {
//   //   console.log('isValidToken error', err);
//   //   return false;
//   // }
// };
