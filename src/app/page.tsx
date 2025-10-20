import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import BoxItem from "@/components/tamplates/boxItem/BoxItem";
import SectionBanner from "@/components/modules/sectionBanner/SectionBanner";
import ProductsPage from "./products/page";
import Category from "@/components/modules/category/category";


const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
          <Category/>
        <SectionBanner />
      <ProductsPage/>
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
