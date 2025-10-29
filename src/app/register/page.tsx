"use client";

import React, { useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import Navbar from "@/components/modules/navbar/Navbar";
// import Title from "@/components/tamplates/title/Title";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";
import { validateEmail, validatePhone } from "@/utils/Global/auth";
import { showSwal } from "@/utils/helper";
import NavbarResponsive from "@/components/modules/navbar/NavbarResponsive";
import Footer from "@/components/modules/footer/Footer";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      showSwal("نام را وارد بکنید", "error", "  تلاش مجدد ");
      return;
    }

    const isValidatePhone = validatePhone(phone);
    if (!isValidatePhone) {
      return showSwal(
        "شماره تماس وارد شده صحیح نیست ",
        "error",
        "  تلاش مجدد "
      );
    }
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return showSwal(" ایمیل وارد شده صحیح نیست ", "error", "  تلاش مجدد ");
    }

    if (!password.trim()) {
      showSwal("پسوورد را وارد بکنید", "error", "  تلاش مجدد ");

      return;
    }

    const user = { name, email, phone, password };

    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 201) {
      showSwal("ثبت نام با موفقیت انجام شد", "success", " فهمیدم");
      router.push('/p-admin')
      
    } else if (res.status === 500) {
      showSwal("کاربری با این اطلاعات وجود دارد", "error", " تلاش مجدد  ");
    }
  };

  return (
    <>
      <Navbar />
      <NavbarResponsive/>
      {/* <Title title="ساخت حساب کاربری" /> */}
      <form
        onSubmit={handleSubmit}
        className="mt-12 mb-12 flex items-center justify-center p-4"
      >
        <div className="grid bg-white font-shabnam font-bold p-6 w-full max-w-[380px] sm:max-w-[420px] mx-auto rounded-2xl shadow-xl text-center text-black transition-all duration-300 hover:shadow-2xl">
          <div className="flex justify-center mb-4">
            <div className="bg-[#34180e] p-3 rounded-full shadow-md">
              <FaUserAlt size={30} color="white" />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#34180e]">
            ایجاد حساب کاربری
          </h2>

          <div className="relative mt-3">
            <FaUserAlt
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="text"
              placeholder="نام"
            />
          </div>

          <div className="relative mt-4">
            <FaPhoneAlt
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <input
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="text"
              placeholder="شماره موبایل"
            />
          </div>

          <div className="relative mt-4">
            <FaEnvelope
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="email"
              placeholder="ایمیل (اختیاری)"
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
            className="mt-6 p-3 cursor-pointer font-myfont bg-green text-white rounded-lg hover:bg-textcolor transition-all duration-300"
          >
            ثبت نام
          </button>

          <Link
            href="/login"
            className="flex items-center justify-center gap-2 font-myfont font-Bold text-sm text-center mt-4 cursor-pointer mb-4 text-[#34180e] hover:underline transition"
          >
            <FaArrowLeft size={14} />
            برگشت به ورود
          </Link>
        </div>
      </form>
      <Footer/>
    </>
  );
}

