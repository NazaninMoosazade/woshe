import React from "react";
import BoxItem from "@/components/tamplates/boxItem/BoxItem";

const ProductsPage = () => {
  return (
    <section className=" mt-20">
      <div className="container">
        <h1 className="text-center mx-auto font-shabnam font-bold text-2xl text-green">
          باکس گل
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <BoxItem
            name="باکس رز قرمز"
            subtitle="با بسته‌بندی شیک"
            href="/products/red-rose-box"
            image="/images/red-rose-box.jpg"
          />
          <BoxItem
            name="باکس گل نرگس"
            href="/products/narcissus-box"
            image="/images/narcissus-box.jpg"
          />
          <BoxItem
            name="باکس گل لاله"
            subtitle="مخصوص هدیه"
            href="/products/tulip-box"
            image="/images/tulip-box.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
