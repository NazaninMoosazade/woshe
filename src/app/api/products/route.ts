import connectToDB from "@/configs/mongodb";
import Product from "@/models/Product";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const productCode = formData.get("productCode") as string;
    const size = formData.get("size") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string; 
    const imgFile = formData.get("img") as File;

    let imgUrl = "";

    if (imgFile) {
      const buffer = Buffer.from(await imgFile.arrayBuffer());
      const uploadsDir = path.join(process.cwd(), "public/uploads");

      await mkdir(uploadsDir, { recursive: true });

      const filename = Date.now() + "-" + imgFile.name;
      const imgPath = path.join(uploadsDir, filename);
      await writeFile(imgPath, buffer);
      imgUrl = `/uploads/${filename}`;
    }

    const product = await Product.create({
      name,
      price,
      productCode,
      size,
      description,
      category, // 👈 اضافه شد
      img: imgUrl,
    });

    return Response.json(
      { message: "Product created successfully :))", data: product },
      { status: 201 }
    );
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const products = await Product.find({}, "-__v").sort({ createdAt: -1 });
    return Response.json(products);
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
