import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import SectionBanner from "@/components/modules/sectionBanner/SectionBanner";
import ProductsPage from "./products/page";
import Category from "@/components/modules/category/category";
import AllProduct from "@/components/modules/allProducts/AllProduct";

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Category />
        <SectionBanner />
        <ProductsPage />
        <AllProduct />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Page;
