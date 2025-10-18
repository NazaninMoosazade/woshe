"use server";

import connectToDB from "@/configs/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { z } from "zod";

// ✅ اعتبارسنجی فرم
const loginSchema = z.object({
  phoneOrEmail: z.string().min(3, "ایمیل یا شماره موبایل الزامی است."),
  password: z.string().min(4, "رمز عبور باید حداقل ۴ کاراکتر باشد."),
});

export async function loginAction(formData: FormData) {
  await connectToDB();

  const phoneOrEmail = formData.get("phoneOrEmail")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  // ✅ اعتبارسنجی
  const parsed = loginSchema.safeParse({ phoneOrEmail, password });
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message || "ورودی نامعتبر است.";
    return { success: false, message };
  }

  try {
    // ✅ جستجوی کاربر (بر اساس ایمیل یا موبایل)
    const user = await User.findOne({
      $or: [{ email: phoneOrEmail }, { phone: phoneOrEmail }],
    });

    if (!user) {
      return { success: false, message: "کاربری با این مشخصات یافت نشد." };
    }

    // ✅ بررسی رمز عبور
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { success: false, message: "رمز عبور اشتباه است." };
    }

    // ✅ تولید توکن JWT
    const secret = process.env.JWT_SECRET || "supersecretkey";
    const token = jwt.sign(
      { userId: user._id, phone: user.phone, email: user.email },
      secret,
      { expiresIn: "7d" }
    );

    // ✅ ذخیره کوکی امن
    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 روز
      secure: process.env.NODE_ENV === "production",
    });

    return { success: true, message: "ورود با موفقیت انجام شد." };
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, message: "خطایی در ورود رخ داد." };
  }
}
