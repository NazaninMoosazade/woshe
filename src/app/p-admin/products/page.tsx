import React from "react";
import DataTableProducts from "@/components/tamplates/p-admin/DataTableProducts/DataTableProducts";
import Product from "@/models/Product";
import connectToDB from "@/configs/mongodb";

const page = async () => {
  await connectToDB();
  const products = await Product.find({}).lean();

  return (
    <>
      {products.length === 0 ? (
        <h1>در حال حاضر محصولی وجود ندارد</h1>
      ) : (
        <DataTableProducts products={JSON.parse(JSON.stringify(products))} title="لیست محصولات" />
      )}
    </>
  );
};

export default page;
