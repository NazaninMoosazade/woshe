"use server";

import connectToDB from "@/configs/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";


export async function signupAction(formData: FormData) {
  await connectToDB();

  const name = formData.get("name")?.toString();
  const phone = formData.get("phone")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!name || !phone || !password) {
    throw new Error("نام، شماره موبایل و رمز عبور الزامی است.");
  }

  const existing = await User.findOne({ phone });
  if (existing) {
    throw new Error("کاربری با این شماره قبلاً ثبت‌نام کرده است.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    name,
    phone,
    email,
    password: hashedPassword,
  });

   
  return true;
}
