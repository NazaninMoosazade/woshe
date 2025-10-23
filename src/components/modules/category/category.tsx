import React from "react";
import Link from "next/link";

interface CategoryType {
  name: string;
  subtitle?: string;
  href: string;
  image: string;
}

const categories: CategoryType[] = [
  {
    name: "ترند وشه",
    subtitle: "WOSHE TRENDS",
    href: "/trends",
    image: "/img/trend.png",
  },
  {
    name: "باکس VIP",
    subtitle: "VIP BOX",
    href: "/vipBox",
    image: "/img/boxvip.png",
  },
  {
    name: "دسته گل vip",
    subtitle: "VIP BOUQUETS",
    href: "/vipBouquets",
    image: "/img/vipp.png",
  },
  {
    name: "دسته گل ها",
    subtitle: "BOUQUETS",
    href: "/bouquets",
    image: "/img/bouquets.png",
  },
  {
    name: "کیک و بادکنک",
    subtitle: "PASTRIES",
    href: "/pastries",
    image: "/img/pastries.png",
  },
  {
    name: "دسته گل عروس",
    subtitle: "BRIDAL BOUQUETS",
    href: "/bridal",
    image: "/img/bridal.png",
  },
];

function Category() {
  return (
    <ul className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:mt-28">
      {categories.map((category, index) => (
        <li key={index} className="mt-9">
          <Link
            href={category.href}
            className="block w-full h-full font-shabnam font-bold  group relative overflow-hidden"
          >
            <div className="relative flex flex-col w-full h-full">
              <img
                src={category.image}
                alt={category.name}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* لایه بکگراند هنگام هاور */}
              <div className="absolute inset-0 bg-[#263427]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h3 className="text-lg text-center">{category.name}</h3>
                  <p className="text-sm text-center">{category.subtitle}</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Category;
