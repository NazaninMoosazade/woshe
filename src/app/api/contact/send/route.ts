import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/configs/mongodb";
import Contact, { IContact } from "@/models/Contact";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data: Partial<IContact> = await req.json();

    // اعتبارسنجی فیلدها
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { msg: "لطفاً تمام فیلدهای الزامی را پر کنید." },
        { status: 400 }
      );
    }

    const contact = await Contact.create(data);

    return NextResponse.json(
      { msg: "پیام با موفقیت ارسال شد", contact },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { msg: "خطا در ارسال پیام", error: error.message },
      { status: 500 }
    );
  }
}
