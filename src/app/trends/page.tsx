import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import BoxItem from "@/components/tamplates/boxItem/BoxItem";

interface Product {
  name: string;
  subtitle?: string;
  href: string;
  image: string;
}

const trendsBoxes: Product[] = [
  {
    name: "محصول ترند ۱",
    subtitle: "Trend Product 1",
    href: "/trends/product1",
    image: "/images/products/trend1.jpg",
  },
  {
    name: "محصول ترند ۲",
    subtitle: "Trend Product 2",
    href: "/trends/product2",
    image: "/images/products/trend2.jpg",
  },
  // سایر محصولات
];

const TrendsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">ترند وشه</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trendsBoxes.map((item) => (
            <BoxItem
              key={item.href}
              name={item.name}
              subtitle={item.subtitle}
              href={item.href}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendsPage;
