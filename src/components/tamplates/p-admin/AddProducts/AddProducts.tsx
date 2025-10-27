"use client";
import React, { useState, ChangeEvent } from "react";
import swal from "sweetalert";

const AddProducts: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [productCode, setProductCode] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImg(file);
    }
  };

  const addProduct = async () => {
    if (!name || !productCode || !price || !size || !description || !category) {
      swal("لطفاً همه‌ی فیلدها را پر کنید", { icon: "warning" });
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("productCode", productCode);
    formData.append("price", price);
    formData.append("size", size);
    formData.append("description", description);
    formData.append("category", category);
    if (img) formData.append("img", img);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (res.status === 201) {
        swal({
          title: "محصول با موفقیت افزوده شد ✅",
          icon: "success",
        });
        // پاک کردن فرم
        setName("");
        setProductCode("");
        setPrice("");
        setSize("");
        setDescription("");
        setCategory("");
        setImg(null);
      } else {
        swal("خطا در افزودن محصول", { icon: "error" });
      }
    } catch (error) {
      console.error("Error adding product:", error);
      swal("مشکلی در ارتباط با سرور پیش آمد", { icon: "error" });
    }
  };

  return (
    <section className="p-6 font-shabnam font-bold md:p-10">
      <p className="text-right text-2xl md:text-3xl mb-8 uppercase relative">
        افزودن محصول جدید
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* نام محصول */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">نام محصول</label>
          <input
            type="text"
            placeholder="لطفا نام محصول را وارد کنید"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>

        {/* کد محصول */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">کد محصول</label>
          <input
            type="text"
            placeholder="لطفا کد محصول را وارد کنید"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>

        {/* قیمت */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">قیمت</label>
          <input
            type="number"
            placeholder="لطفا قیمت محصول را وارد کنید"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>

        {/* سایز */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">سایز</label>
          <input
            type="text"
            placeholder="مثلا بزرگ یا متوسط یا کوچک"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>

        {/* توضیحات */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-lg mb-2">توضیحات</label>
          <textarea
            placeholder="توضیحات محصول..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
            rows={4}
          />
        </div>

        {/* دسته‌بندی */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">دسته‌بندی محصول</label>
          <input
            type="text"
            placeholder=" مثلا trends یا vipBouquets"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>

        {/* تصویر */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">تصویر محصول</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="p-2 border-2 border-red-900 rounded-md focus:outline-none"
            accept="image/*"
          />
        </div>
      </div>

      <button
        onClick={addProduct}
        className="mt-6 bg-red-900 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors"
      >
        افزودن
      </button>
    </section>
  );
};

export default AddProducts;
