import Image from "next/image";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";

interface ProductType {
  _id: string;
  name: string;
  price: number;
  img: string;
  category: string;
}

interface PageProps {
  params: { category: string };
}

// تابع fetch محصولات
async function getProducts(category: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  // 👇 این خط خیلی مهمه — داده رو برگردون
  const data = await res.json();
  return data;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = params;
  let products: ProductType[] = [];

  try {
    // 👇 دقت کن: اگه در route.ts فقط محصولات رو می‌فرستی (بدون data: ...)، این همون آرایه‌ست
    products = await getProducts(category);
    console.log("Fetched products:", products);
  } catch (err) {
    console.error("Error fetching products:", err);
  }

  return (
    <>
      <Navbar />

      <section className="p-4 container mx-auto">
        <h1 className="text-2xl font-bold mb-4 capitalize">{category}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.length === 0 ? (
            <p>هیچ محصولی برای این دسته وجود ندارد.</p>
          ) : (
            products.map((product) => (
              <div
                key={product._id}
                className="border rounded-xl p-2 shadow-sm hover:shadow-lg transition"
              >
                <Image
                  src={product.img || "/placeholder.png"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-600">
                  {product.price.toLocaleString()} تومان
                </p>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
