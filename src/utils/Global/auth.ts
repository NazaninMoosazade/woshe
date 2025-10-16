// utils/global/auth.ts
import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

// ====== تایپ payload JWT ======
interface MyJwtPayload {
  id?: string;
  email?: string;
  iat?: number;
  exp?: number;
  [key: string]: any;
}

// ====== Secrets ======
const ACCESS_TOKEN_SECRET: string = process.env.AccessTokenSecretKey || "defaultAccessKey";
const REFRESH_TOKEN_SECRET: string = process.env.RefreshTokenSecretKey || "defaultRefreshKey";

// ====== Hash و Verify رمز عبور ======
export const hashPassword = async (password: string): Promise<string> => {
  return await hash(password, 12);
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await compare(password, hashedPassword);
};

// ====== JWT ======
export const generateAccessToken = (data: object): string => {
  return sign({ ...data }, ACCESS_TOKEN_SECRET, { expiresIn: "15d" });
};

export const generateRefreshToken = (data: object): string => {
  return sign({ ...data }, REFRESH_TOKEN_SECRET, { expiresIn: "15d" });
};

export const verifyAccessToken = (token: string): MyJwtPayload | null => {
  try {
    return verify(token, ACCESS_TOKEN_SECRET) as MyJwtPayload;
  } catch {
    return null;
  }
};

export const verifyRefreshToken = (token: string): MyJwtPayload | null => {
  try {
    return verify(token, REFRESH_TOKEN_SECRET) as MyJwtPayload;
  } catch {
    return null;
  }
};

// ====== Validate ها ======
export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
};

// export const validatePassword = (password: string) =>
//   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/.test(password);
