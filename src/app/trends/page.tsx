import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import BoxItem from "@/components/tamplates/boxItem/BoxItem";
import Title from "@/components/tamplates/title/Title";

interface Product {
  name: string;
  subtitle?: string;
  href: string;
  image: string;
}


//   {
//     name: "محصول ترند ۱",
//     subtitle: "Trend Product 1",
//     href: '/trends/product2',
//      image: "/img/site-580-1000-trend.webp",
//   },
//   {
//     name: "محصول ترند ۲",
//     subtitle: "Trend Product 2",
//     href: "/trends/product2",
//        image: "/img/site-580-1000-trend.webp",
//   },
//   // سایر محصولات
// ];

const TrendsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Title title="ترند وشه"/>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        </div>
      </div>
    </>
  );
};

export default TrendsPage;
