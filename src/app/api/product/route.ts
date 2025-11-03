// app/api/products/route.ts
import { NextResponse } from "next/server";
import connectToDB from "@/configs/mongodb";
import Product, { IProduct } from "@/models/Product";

export async function GET(req: Request) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") ?? "";

    let products: IProduct[];

    if (category) {
      products = await Product.find({ category }).sort({ createdAt: -1 });
    } else {
      products = await Product.find().sort({ createdAt: -1 });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "مشکلی در دریافت محصولات رخ داد" }, { status: 500 });
  }
}
