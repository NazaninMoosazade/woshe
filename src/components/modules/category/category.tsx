import BoxItem from "@/components/tamplates/boxItem/BoxItem";
import Link from "next/link";
import React from "react";

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
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
      {categories.map((category, index) => (
        <li key={index}>
          <Link
            href={category.href}
            className="block w-full h-full mt-24"
          >
            <div className="flex flex-col w-full h-full mt-14">
              <img
                src={category.image}
                alt={category.name}
                className="w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                {/* <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {category.name}
                </h3> */}
                <p className="text-sm text-gray-500 text-center">
                  {category.subtitle}
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Category;
