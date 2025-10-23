"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { showSwal } from "@/utils/helper";
import Navbar from "@/components/modules/navbar/Navbar";
import Title from "@/components/tamplates/title/Title";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { useUser } from "@/context/UserContext";
import Link from "next/link";


export default function LoginPage() {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useUser();

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!phoneOrEmail.trim() || !password.trim()) {
    swal("خطا!", "تمام فیلدها الزامی هستند.", "error");
    return;
  }

  setLoading(true);

  try {
    // ساخت body با نام "identifier" که می‌تونه ایمیل یا شماره باشه
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: phoneOrEmail, 
        password: password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      showSwal("شماره تلفن صحیح نیست", "error", "تلاش مجدد");
      setLoading(false);
      return;
    }
     if (data.user) {
      setUser({ name: data.user.name });
    }

      showSwal(" با موفقیت لاگین شدید", "success", "اوکی");
    setLoading(false);

    // هدایت کاربر بعد از ورود
    // router.push("/dashboard"); // می‌تونی به صفحه دلخواه تغییر بدی
  } catch (err: any) {
      showSwal("شماره تلفن صحیح نیست", "error", "تلاش مجدد");
    setLoading(false);
  }
};


  return (
    <div>
      <Navbar />
      <Title title="ورود به حساب کاربری" />
      <form onSubmit={handleLogin}>
        <div className="mt-24 mb-12 flex items-center justify-center p-4">
          <div className="grid bg-white font-shabnam font-bold p-6 w-full max-w-[380px] sm:max-w-[420px] mx-auto rounded-2xl shadow-xl text-center text-black transition-all duration-300 hover:shadow-2xl">
            
            <div className="flex justify-center mb-4">
              <div className="bg-[#34180e] p-3 rounded-full shadow-md">
                <FaUserAlt size={30} color="white" />
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#34180e]">
              ورود به حساب
            </h2>

            <div className="relative mt-3">
              <FaEnvelope
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={16}
              />
              <input
                name="phoneOrEmail"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                className="font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
                type="text"
                placeholder=" شماره موبایل"
              />
            </div>

            <div className="relative mt-4">
              <FaLock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={16}
              />
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
                type="password"
                placeholder="رمز عبور"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-6 p-3 cursor-pointer font-myfont bg-green text-white rounded-lg transition-all duration-300 ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-textcolor"
              }`}
            >
              {loading ? "در حال ورود..." : "ورود"}
            </button>

            <span className="font-myfont text-right mt-7 mb-2 text-sm block">
              حساب کاربری ندارید؟
            </span>
            <Link
              href="/register"
              className="text-gray-700 font-myfont border border-gray-300 mb-3 cursor-pointer p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              <FaUserAlt size={16} />
              ثبت نام
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}


