"use client";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/modules/navbar/Navbar";
import NavbarResponsive from "@/components/modules/navbar/NavbarResponsive";
import Footer from "@/components/modules/footer/Footer";
import { useUser } from "@/context/UserContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const userId = useUser();

  // ذخیره در دیتابیس
  useEffect(() => {
    if (cart.length === 0) return;
    fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, items: cart }),
    });
  }, [cart]);

  // لود اولیه از دیتابیس
  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch(`/api/cart?userId=${userId}`);
      const data = await res.json();
      if (data.success && data.cart) {      }
    };
    fetchCart();
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <NavbarResponsive />

      <section className="container mx-auto py-10 mt-36 md:mt-48">
        {cart.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl animate-bounce mb-4">🛒</div>
            <h2 className="text-2xl font-bold mb-2 font-shabnam">سبد خرید شما خالی است!</h2>
            <p className="text-gray-500 font-shabnam">محصولات مورد نظرتان را به سبد خرید اضافه کنید.</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center font-shabnam border p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <p className="">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.quantity} عدد</p>
                  </div>
                </div>
                <div>
                <p>{(item.price * item.quantity).toLocaleString('fa-IR')} تومان</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 font-shabnam text-sm mt-2"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-10 border-t pt-6">
              <span className="text-lg font-shabnam">جمع کل:</span>
              <span className="text-xl font-shabnam font-bold">{total.toLocaleString()} تومان</span>
            </div>

            <button
              onClick={clearCart}
              className="mt-6 bg-red-500 text-white px-6 py-3 font-shabnam rounded-xl"
            >
              پاک کردن سبد خرید
            </button>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
