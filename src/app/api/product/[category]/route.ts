import connectToDB from "@/configs/mongodb";
import Product from "@/models/Product";

export async function GET(
  _req: Request,
  { params }: { params: { category: string } }
) {
  try {
    await connectToDB();
    const { category } = params;
    const products = await Product.find({ category }, "-__v").sort({ createdAt: -1 });
    return Response.json(products, { status: 200 });
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}

