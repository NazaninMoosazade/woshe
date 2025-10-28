import connectToDB from "@/configs/mongodb";
import ProductModel from "@/models/Product";
import { NextResponse } from "next/server";

interface DeleteRequestBody {
  id: string;
}

export async function DELETE(req: Request) {
  try {
    await connectToDB();

    const body: DeleteRequestBody = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ message: "شناسه محصول ارسال نشده است" }, { status: 400 });
    }

    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json({ message: "محصول یافت نشد" }, { status: 404 });
    }

    return NextResponse.json({ message: "محصول با موفقیت حذف شد" }, { status: 200 });
  } catch (err: any) {
    console.error("DELETE Product Error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
