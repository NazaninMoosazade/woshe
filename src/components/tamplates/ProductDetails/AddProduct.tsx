"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Swal from "sweetalert2";
import { useUser } from "@/context/UserContext";

interface AddProductProps {
  id: string;
  name: string;
  price: number;
  img: string;
}

export default function AddProduct({ id, name, price, img }: AddProductProps) {
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart } = useCart();
  const userId = useUser(); // می‌تونی بعداً از auth واقعی بگیری

  const increase = () => setQuantity((q) => Math.min(q + 1, 15));
  const decrease = () => setQuantity((q) => Math.max(q - 1, 1));

  const handleBuy = async () => {
    // اضافه کردن به Context
    addToCart({ id, name, price, img, quantity });

    // ذخیره در API
    try {
      await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          items: [...cart, { id, name, price, img, quantity }], // merge ساده
        }),
      });

      Swal.fire({
        title: "🛒 به سبد خرید اضافه شد!",
        text: `${quantity} عدد ${name} اضافه شد.`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
      });
    } catch (err) {
      Swal.fire({
        title: "❌ خطا",
        text: "افزودن محصول به سبد خرید موفق نبود!",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
      });
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-16">
      <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
        <button onClick={decrease} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg">−</button>
        <span className="px-6 text-lg font-semibold">{quantity}</span>
        <button onClick={increase} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg">+</button>
      </div>

      <button
        onClick={handleBuy}
        className="w-full sm:w-auto font-shabnam bg-green hover:bg-lime-900 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
      >
        خرید
      </button>
    </div>
  );
}
