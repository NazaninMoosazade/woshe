import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import Title from "@/components/tamplates/title/Title";
import GalleryProduct from "@/components/tamplates/product/GalleryProduct";
import TitleProduct from "@/components/tamplates/product/TitleProduct";
import DescriptionProduct from "@/components/tamplates/product/DescriptionProduct";
import PriceProduct from "@/components/tamplates/product/PriceProduct";
import Product from "@/models/Product";
import connectToDB from "@/configs/mongodb";
import CodeProducts from "@/components/tamplates/product/CodeProducts";
import AddProduct from "@/components/tamplates/product/AddProduct";

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

  const productData = JSON.parse(JSON.stringify(product));

  return (
    <>
      <Navbar />

      <Title title={productData.name} />

      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row justify-evenly">
          {/* Right section */}
          <GalleryProduct img={productData.img} />

          {/* Left section */}
          <div className="text-center md:text-right">
            <CodeProducts productCode={productData.productCode}/>
            <TitleProduct name={productData.name} />
            <DescriptionProduct description={productData.description} />
            <PriceProduct price={productData.price} />
            <AddProduct/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
