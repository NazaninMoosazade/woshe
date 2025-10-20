// pages/api/me.ts
import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/models/User";
import { verifyAccessToken } from "@/utils/Global/auth";
import connectToDB from "@/configs/mongodb";

export async function GET(req: NextRequest) {
  await connectToDB();
  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.json({ user: null }, { status: 401 });

  const payload = verifyAccessToken(token);
  if (!payload) return NextResponse.json({ user: null }, { status: 401 });

  const user = await UserModel.findById(payload.id);
  return NextResponse.json({ user: { name: user?.name, email: user?.email } });
}
