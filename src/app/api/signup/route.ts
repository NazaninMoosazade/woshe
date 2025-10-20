// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/configs/mongodb";
import UserModel from "@/models/User";
import { generateAccessToken, hashPassword } from "@/utils/Global/auth";
// import { roles } from "@/utils/contans";
import { roles } from "@/utils/constans";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json();

    const { name, phone, email, password } = body as {
      name: string;
      phone: string;
      email: string;
      password: string;
    };

    // بررسی وجود کاربر تکراری
    const isUserExist = await UserModel.findOne({
      $or: [{ name }, { email }, { phone }],
    });

    if (isUserExist) {
      return NextResponse.json(
        { message: "The username, email or phone already exists!" },
        { status: 422 }
      );
    }

    // هش کردن پسورد
    const hashedPassword = await hashPassword(password);

    // ایجاد کاربر جدید
    const users = await UserModel.find({});
    const newUser = await UserModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role: users.length > 0 ? roles.USER : roles.ADMIN,
    });

    // ساخت توکن JWT
    const accessToken = generateAccessToken({ email: newUser.email });

    // ساخت پاسخ و ست کردن کوکی
    const response = NextResponse.json(
      {
        message: "User signed up successfully!",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
        },
      },
      { status: 201 }
    );

    response.cookies.set({
      name: "token",
      value: accessToken,
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (err: any) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { message: "Internal server error", error: err.message },
      { status: 500 }
    );
  }
}
