import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import Title from "@/components/tamplates/title/Title";
import GalleryProduct from "@/components/tamplates/product/GalleryProduct";
import TitleProduct from "@/components/tamplates/product/TitleProduct";
import DescriptionProduct from "@/components/tamplates/product/DescriptionProduct";
import PriceProduct from "@/components/tamplates/product/PriceProduct";

function Page() {
  return (
    <>
      <Navbar />

      <Title title="متن پیش فرض" />

      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          {/* Right section */}
          <GalleryProduct />

          {/* Left section */}
          <div className="text-center md:text-right">
            <TitleProduct />
           <DescriptionProduct/>
           <PriceProduct/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
