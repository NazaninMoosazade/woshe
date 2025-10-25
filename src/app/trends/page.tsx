import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import TitleBanner from "@/components/tamplates/TitleBanner/TitleBanner";
import Footer from "@/components/modules/footer/Footer";



const TrendsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <TitleBanner title="ترند وشه"/>
      
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TrendsPage;
