"use server";

import connectToDB from "@/configs/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { z } from "zod";

// تعریف schema با Zod
const signupSchema = z.object({
  name: z.string().min(3, "نام باید حداقل 3 کاراکتر باشد."),
  phone: z.string().regex(/^\d{10,15}$/, "شماره موبایل معتبر نیست."),
  email: z.string().email("ایمیل معتبر نیست.").optional(),
  password: z.string().min(4, "رمز عبور باید حداقل 4 کاراکتر باشد."),
});

export async function signupAction(formData: FormData) {
  // اتصال به دیتابیس
  await connectToDB();

  // گرفتن داده‌ها از فرم
  const name = formData.get("name")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  // اعتبارسنجی با Zod
  signupSchema.parse({ name, phone, email, password });

  // چک کردن شماره موبایل تکراری
  const existingPhone = await User.findOne({ phone });
  if (existingPhone) throw new Error("کاربری با این شماره قبلاً ثبت‌نام کرده است.");

  // چک کردن ایمیل تکراری
  if (email) {
    const existingEmail = await User.findOne({ email });
    if (existingEmail) throw new Error("کاربری با این ایمیل قبلاً ثبت‌نام کرده است.");
  }

  // هش کردن رمز عبور
  const hashedPassword = await bcrypt.hash(password, 10);

  // ایجاد کاربر جدید
  await User.create({
    name,
    phone,
    email,
    password: hashedPassword,
  });

  return true; // می‌تونی بعداً از این برای alert موفقیت استفاده کنی
}


// "use server";

// import connectToDB from "@/configs/mongodb";
// import User from "@/models/User";
// import bcrypt from "bcryptjs";
// import { redirect } from "next/navigation";


// export async function signupAction(formData: FormData) {
//   await connectToDB();

//   const name = formData.get("name")?.toString();
//   const phone = formData.get("phone")?.toString();
//   const email = formData.get("email")?.toString();
//   const password = formData.get("password")?.toString();

//   if (!name || !phone || !password) {
//     throw new Error("نام، شماره موبایل و رمز عبور الزامی است.");
//   }

//   const existing = await User.findOne({ phone });
//   if (existing) {
//     throw new Error("کاربری با این شماره قبلاً ثبت‌نام کرده است.");
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   await User.create({
//     name,
//     phone,
//     email,
//     password: hashedPassword,
//   });

   
//   return true;
// }
