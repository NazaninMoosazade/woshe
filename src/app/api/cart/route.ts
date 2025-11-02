import { NextResponse } from "next/server";
import connectToDB from "@/configs/mongodb";
import Cart from "@/models/Cart";

export async function GET(req: Request) {
  await connectToDB();

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId)
    return NextResponse.json({ success: false, message: "userId الزامی است" }, { status: 400 });

  const cart = await Cart.findOne({ userId }).populate("items.product");
  return NextResponse.json({ success: true, cart });
}

export async function POST(req: Request) {
  await connectToDB();
  const body = await req.json();
  const { userId, items } = body;

  if (!userId || !Array.isArray(items))
    return NextResponse.json({ success: false, message: "داده نامعتبر" }, { status: 400 });

  let cart = await Cart.findOne({ userId });
  if (cart) {
    cart.items = items;
    await cart.save();
  } else {
    cart = await Cart.create({ userId, items });
  }

  return NextResponse.json({ success: true, cart });
}
