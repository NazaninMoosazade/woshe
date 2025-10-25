import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import SectionBanner from "@/components/modules/sectionBanner/SectionBanner";
import ProductsPage from "./products/page";
import Category from "@/components/modules/category/category";
import AllProduct from "@/components/modules/allProducts/AllProduct";
import Footer from "@/components/modules/footer/Footer";
import NavbarResponsive from "@/components/modules/navbar/NavbarResponsive";
import Product from "@/models/Product";
import connectToDB from "@/configs/mongodb";


const Page: React.FC = async () => {

  await connectToDB();

  const allProducts = await Product.find({}).sort({ _id: -1 })
  const productData = JSON.parse(JSON.stringify(allProducts));

  return (
    <>
      <Navbar />
      <NavbarResponsive />
      <div className="container">
        <Category />
        <SectionBanner />
        <ProductsPage />
        <AllProduct products={productData}/>
      </div>
      <Footer />
    </>
  );
};

export default Page;
