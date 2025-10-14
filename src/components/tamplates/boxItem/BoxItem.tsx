"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BoxItemProps {
  name: string;
  subtitle?: string;
  href: string;
  image: string;
}

const BoxItem: React.FC<BoxItemProps> = ({ name, subtitle, href, image }) => {
  return (
    <div className="item">
      <div>
        <div>
          <div className="font-shabnam">
            <Link href={href} title={name} className="categoryCard relative block overflow-hidden rounded-md">
              <div className="relative w-full md:h-[360px]">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col text-left text-white">
                <span className="text-4xl font-bold">{name}</span>
                {subtitle && <span className="text-xl">{subtitle}</span>}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxItem;
