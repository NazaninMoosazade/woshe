import connectToDB from "@/configs/mongodb";
import Product from "@/models/Product";

export async function GET() {
  try {
    // اتصال به دیتابیس
    await connectToDB();

    // دریافت تمام محصولات، مرتب بر اساس تاریخ ایجاد (جدیدترین اول)
    const products = await Product.find({}, "-__v").sort({ createdAt: -1 });

    // برگردوندن پاسخ موفق
    return Response.json(
      { message: "Products fetched successfully!", data: products },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching products:", error);
    return Response.json(
      { message: "Failed to fetch products", error: error.message },
      { status: 500 }
    );
  }
}
