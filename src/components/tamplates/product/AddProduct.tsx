"use client";
import { useState } from "react";

export default function AddProduct() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => Math.min(q + 1, 15));
  const decrease = () => setQuantity((q) => Math.max(q - 1, 1));

  const handleBuy = () => {
    alert(`🛒 افزودن ${quantity} عدد به سبد خرید`);
    // اینجا می‌تونی به API یا سبد خرید وصلش کنی
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-16">
      {/* شمارنده */}
      <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
        <button
          onClick={decrease}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg"
        >
          −
        </button>
        <span className="px-6 text-lg font-semibold">{quantity}</span>
        <button
          onClick={increase}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg"
        >
          +
        </button>
      </div>

      {/* دکمه خرید */}
      <button
        onClick={handleBuy}
        className="w-full sm:w-auto font-shabnam bg-green hover:bg-lime-900 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
      >
        خرید
      </button>
    </div>
  );
}

