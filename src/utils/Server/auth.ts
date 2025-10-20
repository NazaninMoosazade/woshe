"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import connectToDB from "@/configs/mongodb";

export async function getCurrentUser() {
  await connectToDB();

  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) return null;

    const payload = jwt.verify(token, process.env.JWT_SECRET || "supersecretkey") as { userId: string };

    const user = await User.findById(payload.userId).select("name email");
    if (!user) return null;

    return { id: user._id.toString(), name: user.name, email: user.email };
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
}


// utils/server/auth.ts
// import { cookies } from "next/headers";
// import User from "@/models/User";
// import connectToDB from "@/configs/mongodb";
// import {verifyAccessToken} from "@/utils/Global/auth";

// export const authServer = async () => {
//   await connectToDB();

//   // دریافت کوکی
//   const token = cookies().get("token")?.value;
//   if (!token) return null;

//   // بررسی اعتبار توکن
//   const payload = verifyAccessToken(token);
//   if (!payload) return null;

//   // جستجوی کاربر
//   const user = await User.findOne({ email: payload.email });
//   return user || null;
// };
