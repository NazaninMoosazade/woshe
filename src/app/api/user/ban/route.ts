import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/configs/mongodb";
import BanModel, { IBan } from "@/models/Ban";

interface BanRequestBody {
  email?: string;
  phone?: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body: BanRequestBody = await req.json();
    const { email, phone } = body;

    // Validation ساده ✅
    if (!email && !phone) {
      return NextResponse.json({ message: "Email or phone is required" }, { status: 400 });
    }

    const newBan: IBan = await BanModel.create({ email, phone });

    return NextResponse.json({ message: "User banned successfully :))", data: newBan });
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Internal Server Error" }, { status: 500 });
  }
}
