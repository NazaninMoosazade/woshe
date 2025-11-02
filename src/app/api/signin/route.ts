// app/api/signin/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  generateAccessToken,
  generateRefreshToken,
  validateEmail,
  validatePassword,
  verifyPassword,
} from "@/utils/Global/auth";
import UserModel from "@/models/User";
import connectToDB from "@/configs/mongodb";

export async function POST(req: NextRequest) {
  try {
    // اتصال به دیتابیس
    await connectToDB();

    const body = await req.json();
    const { identifier, password }: { identifier: string; password: string } = body;

    // ===== Validation =====
    const isValidIdentifier = validateEmail(identifier) || /^\d{6,15}$/.test(identifier);
    const isValidPass = validatePassword(password);

    if (!isValidIdentifier || !isValidPass) {
      return NextResponse.json(
        { message: "Email/Phone or password is invalid" },
        { status: 419 }
      );
    }

    // ===== Find User =====
    const user = await UserModel.findOne({
      $or: [{ email: identifier }, { phone: identifier }],
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 422 });
    }

    if (!user.password) {
      return NextResponse.json({ message: "Password not set for this user" }, { status: 401 });
    }

    // ===== Verify Password =====
    const isCorrectPasswordWithHash = await verifyPassword(password, user.password);

    if (!isCorrectPasswordWithHash) {
      return NextResponse.json(
        { message: "Email/Phone or password is not correct" },
        { status: 401 }
      );
    }

    // ===== Generate Tokens =====
    const accessToken = generateAccessToken({ id: user._id, email: user.email });
    const refreshToken = generateRefreshToken({ id: user._id, email: user.email });

    // ذخیره refresh token در دیتابیس
    await UserModel.findOneAndUpdate(
      { _id: user._id },
      { $set: { refreshToken } }
    );

    // ===== Return Response with Cookie =====
    const response = NextResponse.json(
      { message: "User logged in successfully", user: { name: user.name, email: user.email } },
      { status: 200 }
    );

    const isProd = process.env.NODE_ENV === "production";

    response.cookies.set("token", accessToken, {
      httpOnly: true,
      path: "/",
      sameSite: "strict",
      secure: isProd,           // فقط روی production
      maxAge: 60 * 60 * 24 * 7, // 7 روز
    });

    return response;

  } catch (err: any) {
    console.error("Error in /api/signin:", err);
    return NextResponse.json(
      { message: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}


// // app/api/signin/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import {
//   generateAccessToken,
//   generateRefreshToken,
//   validateEmail,
//   validatePassword,
//   verifyPassword,
// } from "@/utils/Global/auth";
// import UserModel from "@/models/User";
// import connectToDB from "@/configs/mongodb";

// export async function POST(req: NextRequest) {
//   try {
//     await connectToDB();

//     const body = await req.json();
//     const { identifier, password }: { identifier: string; password: string } = body;
//     // "identifier" می‌تونه ایمیل یا شماره تلفن باشه

//     // ===== Validation =====
//     const isValidIdentifier =
//       validateEmail(identifier) || /^\d{6,15}$/.test(identifier); // ایمیل یا شماره موبایل
//     const isValidPass = validatePassword(password);

//     if (!isValidIdentifier || !isValidPass) {
//       return NextResponse.json(
//         { message: "Email/Phone or password is invalid" },
//         { status: 419 }
//       );
//     }

//     // ===== Find User =====
//     const user = await UserModel.findOne({
//       $or: [{ email: identifier }, { phone: identifier }],
//     });

//     if (!user) {
//       return NextResponse.json({ message: "User not found" }, { status: 422 });
//     }

//     // ===== Verify Password =====
//     if (!user.password) {
//       return NextResponse.json({ message: "Password not set for this user" }, { status: 401 });
//     }

//     const isCorrectPasswordWithHash = await verifyPassword(password, user.password);

//     if (!isCorrectPasswordWithHash) {
//       return NextResponse.json(
//         { message: "Email/Phone or password is not correct" },
//         { status: 401 }
//       );
//     }

//     // ===== Generate Tokens =====
//     const accessToken = generateAccessToken({ id: user._id, email: user.email });
//     const refreshToken = generateRefreshToken({ id: user._id, email: user.email });

//     await UserModel.findOneAndUpdate(
//       { _id: user._id },
//       { $set: { refreshToken } }
//     );

//     // ===== Return Response =====
//     const response = NextResponse.json(
//       { message: "User logged in successfully :))" },
//       { status: 200 }
//     );

//     response.headers.set(
//       "Set-Cookie",
//       `token=${accessToken}; Path=/; HttpOnly; Secure; SameSite=Strict;`
//     );

//     return response;
//   } catch (err: any) {
//     console.error("Err ->", err);
//     return NextResponse.json(
//       { message: err?.message || "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
