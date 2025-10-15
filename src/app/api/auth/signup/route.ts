import connectToDB from "@/configs/mongodb";
import User from "@/models/User";
import { generateAccessToken, hashPassword } from "@/utils/Global/auth";
import { NextResponse } from "next/server";

// تعریف نقش‌ها
const roles = {
  ADMIN: "admin",
  USER: "user",
};

// تایپ داده‌های ورودی
interface SignupBody {
  name: string;
  email: string;
  phone: string;
  password: string;
}

// اعتبارسنجی داده‌ها
function validateBody(body: Partial<SignupBody>): body is SignupBody {
  if (
    !body.name?.trim() ||
    !body.email?.trim() ||
    !body.phone?.trim() ||
    !body.password?.trim()
  ) {
    return false;
  }
  // اعتبارسنجی ساده ایمیل
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) return false;

  // اعتبارسنجی ساده شماره تلفن (اعداد فقط)
  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(body.phone)) return false;

  // طول پسورد حداقل 6 کاراکتر
  if (body.password.length < 6) return false;

  return true;
}

export async function POST(req: Request) {
  try {
    await connectToDB();

    const body: Partial<SignupBody> = await req.json();

    // اعتبارسنجی ورودی
    if (!validateBody(body)) {
      return NextResponse.json(
        { message: "Invalid input data" },
        { status: 400 }
      );
    }

    const { name, email, phone, password } = body;

    // بررسی وجود کاربر
    const isUserExist = await User.findOne({
      $or: [{ name }, { email }, { phone }],
    });
    if (isUserExist) {
      return NextResponse.json(
        { message: "User already exists!" },
        { status: 400 }
      );
    }

    // هش پسورد
    const hashedPassword = await hashPassword(password);

    // تعیین نقش
    const userCount = await User.countDocuments();
    const role = userCount > 0 ? roles.USER : roles.ADMIN;

    // ایجاد یوزر
    const newUser = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
    });

    // ایجاد توکن
    const accessToken = generateAccessToken({ email: newUser.email });

    // پاسخ با کوکی
    return NextResponse.json(
      {
        message: "User signed up successfully!",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          role: newUser.role,
        },
      },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token=${accessToken}; Path=/; HttpOnly; SameSite=Lax`,
        },
      }
    );
  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
