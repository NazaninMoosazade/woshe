import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import BoxItem from "@/components/tamplates/boxItem/BoxItem";
import SectionBanner from "@/components/modules/sectionBanner/SectionBanner";

interface Category {
  name: string;
  subtitle?: string;
  href: string;
  image: string;
}

const categories: Category[] = [
  {
    name: "ترند وشه",
    subtitle: "WOSHE TRENDS",
    href: "/trends",
    image: "/icon/site-580-1000-trend.webp",
  },
  {
    name: "باکس VIP",
    subtitle: "VIP BOX",
    href: "/vipBox",
    image: "/icon/site-580-1000-trend.webp",
  },
  {
    name: " دسته گل vip",
    subtitle: "VIP BOUQUETS",
    href: "/vipBouquets",
    image: "/img/site-580-1000-trend.webp",
  },

  {
    name: " دسته گل ها ",
    subtitle: "BOUQUETS",
    href: "/bouquets",
    image: "/img/site-580-1000-trend.webp",
  },
  {
    name: "کیک و بادکنک",
    subtitle: "PASTRIES",
    href: "/pastries",
    image: "/img/site-580-1000-trend.webp",
  },
  {
    name: "دسته گل عروس",
    subtitle: "VIP BOUQUETS",
    href: "/vipBouquets",
    image: "/img/site-580-1000-trend.webp",
  },
];

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mt-36 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {categories.map((item) => (
            <BoxItem
              key={item.href}
              name={item.name}
              subtitle={item.subtitle}
              href={item.href}
              image={item.image}
            />
          ))}
        </div>
        <SectionBanner />
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
