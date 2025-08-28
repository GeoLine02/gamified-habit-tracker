import bcrypt from "bcryptjs";
export const handleHashPassword = async (
  password: string,
  roundOrSalt: number
) => {
  const hashedPasswrod = await bcrypt.hash(password, roundOrSalt);

  return hashedPasswrod;
};
