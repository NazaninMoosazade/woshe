import connectToDB from "@/configs/mongodb";
import UserModel from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

// نوع‌دهی بدنه درخواست DELETE
interface DeleteUserBody {
  id: string; // ID کاربری که می‌خوای حذف کنی
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    // اتصال به دیتابیس
    await connectToDB();

    // دریافت داده از بدنه درخواست
    const body: DeleteUserBody = await req.json();
    const { id } = body;

    // حذف کاربر با ID مشخص
    const deletedUser = await UserModel.findOneAndDelete({ _id: id });

    if (!deletedUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "User removed successfully :))", user: deletedUser },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
