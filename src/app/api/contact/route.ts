import { NextResponse } from "next/server";
import connectToDB from "@/configs/mongodb";
import Contact from "@/models/Contact";

export async function GET() {
  try {
    await connectToDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(contacts, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { msg: "خطا در گرفتن پیام‌ها", error: error.message },
      { status: 500 }
    );
  }
}
