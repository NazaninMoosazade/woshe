import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import TitleBanner from "@/components/tamplates/TitleBanner/TitleBanner";
import GalleryProduct from "@/components/tamplates/ProductDetails/GalleryProduct";
import TitleProduct from "@/components/tamplates/ProductDetails/TitleProduct";
import DescriptionProduct from "@/components/tamplates/ProductDetails/DescriptionProduct";
import PriceProduct from "@/components/tamplates/ProductDetails/PriceProduct";
import Product from "@/models/Product";
import connectToDB from "@/configs/mongodb";
import CodeProducts from "@/components/tamplates/ProductDetails/CodeProducts";
import AddProduct from "@/components/tamplates/ProductDetails/AddProduct";
import BoxDetails from "@/components/tamplates/ProductDetails/BoxDetails";
import Footer from "@/components/modules/footer/Footer";
import NavbarResponsive from "@/components/modules/navbar/NavbarResponsive";
import Comments from "@/components/tamplates/ProductDetails/Comments";
import CommentModel from "@/models/Comment";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  await connectToDB();

  const productID = params.id;
  const product = await Product.findOne({ _id: productID });

  if (!product) {
    return <div>محصول یافت نشد!</div>;
  }

  const comments = await CommentModel.find({ productID: productID })
    .sort({ date: -1 })
    .lean();
  const commentsData = JSON.parse(JSON.stringify(comments));

  const productData = JSON.parse(JSON.stringify(product));

  return (
    <>
      <Navbar />
      <NavbarResponsive />
      <TitleBanner title={productData.category} />

      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-x-5 justify-evenly">
          {/* Right section */}

          <GalleryProduct img={productData.img} />

          {/* Left section */}
          <div className="flex-col items-center justify-center lg:justify-start">
            <CodeProducts productCode={productData.productCode} />
            <TitleProduct name={productData.name} />
            <DescriptionProduct description={productData.description} />
            <PriceProduct price={productData.price} />
            <AddProduct
              id={productData._id}
              name={productData.name}
              price={productData.price}
              img={productData.img}
            />
            <BoxDetails />
          </div>
        </div>

        <div className="mt-28">
          <Comments comments={commentsData} productID={productData._id} />
        </div>

        <div className="relative flex items-center my-10">
          <div className="flex-grow border-t border-gray-300"></div>

          <div className="mx-5 w-4 h-4 rounded-full border-2 border-gray-300"></div>

          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
