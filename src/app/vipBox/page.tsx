import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import TitleBanner from "@/components/tamplates/TitleBanner/TitleBanner";
import Footer from "@/components/modules/footer/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <TitleBanner title="باکس vip"/>
      <Footer/>
    </>
  );
};

export default page;
