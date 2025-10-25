"use client";

import React from "react";
import Product from "../Product/Product";

interface ProductType {
  _id: string;
  name: string;
  description: string;
  img: string;
  productCode: string;
  price: number;
  category: string;
}

interface AllProductProps {
  products: ProductType[];
}

const AllProduct: React.FC<AllProductProps> = ({ products }) => {
  return (
    <main className="container">
      <h1 className="text-center mx-auto mt-20 mb-12 font-shabnam font-bold text-2xl text-green">
        همه گل ها
      </h1>{" "}
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            productCode={product.productCode}
            price={product.price}
            image={product.img}
            href={`${product.category}/product/${product._id}`}
          />
        ))}
      </div>
    </main>
  );
};

export default AllProduct;
