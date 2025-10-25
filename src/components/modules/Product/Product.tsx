"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductProps {
  name: string;
  price?: number;
  href: string;
  image: string;
  productCode: string;
}

const Product: React.FC<ProductProps> = ({
  name,
  price,
  href,
  image,
  productCode,
}) => {
  return (
    <div className="font-shabnam mt-9">
      <Link
        href={href}
        title={name}
        className="categoryCard relative block overflow-hidden rounded-md group"
      >
        <div className="relative w-full aspect-[4/3] md:h-[500px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex items-center justify-center mt-4 text-black font-light">
          {name}
        </div>

        <div className="flex items-center justify-center mt-2 text-gray-400 font-light">
          <p>کد محصول : </p>
          <p>{productCode}</p>
        </div>

        {/* قیمت / افزودن به سبد خرید با انیمیشن اسلاید */}
        <div className="relative mt-2 h-8 flex items-center justify-center">
          <span className="text-2xl transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            {price?.toLocaleString("fa-IR")} تومان
          </span>

          {/* لایه اسلاید از پایین */}
          <span className="absolute inset-0 flex items-center justify-center bg-green bg-opacity-70 text-white font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            افزودن به سبد خرید
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Product;
