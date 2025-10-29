import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/configs/mongodb";
import Contact from "@/models/Contact";

// DELETE /api/contact/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    const { id } = params;

    // بررسی وجود id
    if (!id) {
      return NextResponse.json(
        { msg: "شناسه کاربر ارسال نشده است." },
        { status: 400 }
      );
    }

    // تلاش برای حذف
    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { msg: "تماس مورد نظر یافت نشد." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { msg: "تماس با موفقیت حذف شد.", deleted },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { msg: "خطایی در حذف تماس رخ داد.", error: error.message },
      { status: 500 }
    );
  }
}
