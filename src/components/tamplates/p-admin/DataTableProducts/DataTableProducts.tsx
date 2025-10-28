"use client";

import React from "react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

interface ProductTypes {
  _id: string;
  name: string;
  productCode: string;
  price: number;
  img: string;
  category: string;
}

interface DataTableProps {
  title: string;
  products: ProductTypes[];
}

const DataTableProducts: React.FC<DataTableProps> = ({ title, products }) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const confirm = await swal({
      title: "حذف محصول",
      text: "آیا از حذف این محصول مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله، حذف کن"],
      dangerMode: true,
    });

    if (!confirm) return;

    const res = await fetch("/api/products/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      await swal("محصول با موفقیت حذف شد ✅", { icon: "success" });
      router.refresh();
    } else {
      const data = await res.json();
      swal(data.message || "خطا در حذف محصول", { icon: "error" });
    }
  };

  return (
    <div className="p-4 md:p-8 font-shabnam">
      <h1 className="text-2xl md:text-3xl font-medium text-right mb-6">{title}</h1>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto bg-gray-100 p-4 rounded-lg shadow-md">
        <table className="min-w-full bg-white text-center border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">شناسه</th>
              <th className="py-2 px-4">نام</th>
              <th className="py-2 px-4">کد محصول</th>
              <th className="py-2 px-4">قیمت</th>
              <th className="py-2 px-4">عکس</th>
              <th className="py-2 px-4">دسته بندی</th>
              <th className="py-2 px-4">حذف</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="odd:bg-white even:bg-gray-50">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.productCode}</td>
                <td className="py-2 px-4">{product.price.toLocaleString('fa-IR')}</td>
                <td className="py-2 px-4">
                  <img
                    src={product.img || "/placeholder.png"}
                    alt={product.name}
                    className="w-16 h-16 object-cover mx-auto rounded"
                  />
                </td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-900 text-white px-3 py-1 rounded w-full hover:bg-red-700 transition"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden flex flex-col gap-4">
        {products.map((product, index) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={product.img || "/placeholder.png"}
                alt={product.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex-1 text-right">
              <p className="font-medium">نام: {product.name}</p>
              <p>کد محصول: {product.productCode}</p>
              <p>قیمت: {product.price}</p>
              <p>دسته بندی: {product.category}</p>
            </div>
            <div className="self-start">
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-900 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTableProducts;
