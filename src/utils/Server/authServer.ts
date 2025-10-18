// utils/server/auth.ts
import { cookies } from "next/headers";
import User from "@/models/User";
import connectToDB from "@/configs/mongodb";
import {verifyAccessToken} from "@/utils/Global/auth";

export const authServer = async () => {
  await connectToDB();

  // دریافت کوکی
  const token = cookies().get("token")?.value;
  if (!token) return null;

  // بررسی اعتبار توکن
  const payload = verifyAccessToken(token);
  if (!payload) return null;

  // جستجوی کاربر
  const user = await User.findOne({ email: payload.email });
  return user || null;
};
