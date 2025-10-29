import { NextResponse } from "next/server";
import connectToDB from "@/configs/mongodb";
import CommentModel from "@/models/Comment";
import ProductModel from "@/models/Product";

interface RouteParams {
  params: { id: string };
}

export async function DELETE(req: Request, { params }: RouteParams) {
  try {
    await connectToDB();
    const { id } = params;

    if (!id) {
      return NextResponse.json({ message: "Comment ID is required" }, { status: 400 });
    }

    const comment = await CommentModel.findById(id);
    if (!comment) {
      return NextResponse.json({ message: "Comment not found" }, { status: 404 });
    }

    await CommentModel.findByIdAndDelete(id);
    await ProductModel.findByIdAndUpdate(comment.productID, {
      $pull: { comments: comment._id },
    });

    return NextResponse.json({ message: "Comment deleted successfully ✅" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Internal Server Error" }, { status: 500 });
  }
}
