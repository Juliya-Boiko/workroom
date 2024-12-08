import bcryptjs from 'bcryptjs';

export const hashPassword = async (password: string) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (password: string, hash: string) => {
  const validPassword = await bcryptjs.compare(password, hash);
  return validPassword;
};
