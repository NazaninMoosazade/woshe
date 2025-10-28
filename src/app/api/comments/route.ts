import { NextResponse } from "next/server";
import connectToDB from "@/configs/mongodb";
import CommentModel, { IComment } from "@/models/Comment";
import ProductModel from "@/models/Product";

interface CommentRequestBody {
  username: string;
  body: string;
  email: string;
  score?: number;
  productID: string;
}

export async function POST(req: Request) {
  try {
    await connectToDB();
    const reqBody: CommentRequestBody = await req.json();
    const { username, body, email, score, productID } = reqBody;

    if (!username || !body || !email || !productID) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const comment = await CommentModel.create({
      username,
      body,
      email,
      score,
      productID,
    });

    await ProductModel.findByIdAndUpdate(productID, {
      $push: { comments: comment._id },
    });

    return NextResponse.json(
      {
        message: "Comment created successfully :))",
        data: comment,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    const comments: IComment[] = await CommentModel.find({}, "-__v");
    return NextResponse.json(comments, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
