
import connectToDB from "@/configs/mongodb";
import Product from "@/models/Product";
import ProductsList from "@/components/modules/ProductsList/ProductsList";
import Navbar from "@/components/modules/navbar/Navbar";
import NavbarResponsive from "@/components/modules/navbar/NavbarResponsive";
import Footer from "@/components/modules/footer/Footer";

interface PageProps {
  params: { id: string };
}

const CategoryPage = async ({ params }: PageProps) => {
  await connectToDB();

  const category = params.id;

  const products = await Product.find({ category })
    .sort({ createdAt: -1 })
    .lean();
  const productsData = JSON.parse(JSON.stringify(products));



  return (
    <>
      <Navbar />
      <NavbarResponsive />
      <div className="container mx-auto mt-36">
       {productsData.length === 0 ? (
  <div className="flex flex-col items-center justify-center h-[60vh] text-center select-none">
    <div className="animate-bounce text-7xl mb-4">🛍️</div>
    <h2 className="text-2xl font-shabnam text-gray-700 dark:text-gray-200 animate-fadeIn">
      محصولی در حال حاضر وجود ندارد!
    </h2>
    <p className="text-gray-500 mt-3 font-shabnam animate-fadeIn delay-200">
      لطفاً بعداً دوباره سر بزنید ❤️
    </p>
  </div>
) : (
  <div>
    <h1 className="text-2xl mb-6 font-semibold text-gray-800 dark:text-gray-200">
      دسته‌بندی: {category}
    </h1>
    <ProductsList products={productsData} />
  </div>
)}


      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
