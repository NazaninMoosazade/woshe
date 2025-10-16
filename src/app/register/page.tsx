"use client";

import React, { useState } from "react";
import { signupAction } from "../action/signupAction";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import Navbar from "@/components/modules/navbar/Navbar";
import Title from "@/components/tamplates/title/Title";
import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);

    try {
      await signupAction(formData);
      swal("ثبت‌نام موفق!", "حالا می‌توانید وارد شوید.", "success").then(() => {
        router.push("/");
      });
    } catch (err: any) {
      swal("خطا!", err.message || "خطا در ثبت‌نام.", "error");
    }
  };

  return (
    <>
      <Navbar />
      <Title title="ساخت حساب کاربری" />
      <form onSubmit={handleSubmit} className="mt-12 mb-12 flex items-center justify-center p-4">
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
            <FaUserAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="text"
              placeholder="نام"
            />
          </div>

          <div className="relative mt-4">
            <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="text"
              placeholder="شماره موبایل"
            />
          </div>

          <div className="relative mt-4">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="email"
              placeholder="ایمیل (اختیاری)"
            />
          </div>

          <div className="relative mt-4">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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
    </>
  );
}



// "use client";

// import React, { useEffect } from "react";
// import { signupAction } from "../action/signupAction";
// import Navbar from "@/components/modules/navbar/Navbar";
// import Title from "@/components/tamplates/title/Title";
// import {
//   FaUserAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaLock,
//   FaArrowLeft,
// } from "react-icons/fa";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import swal from "sweetalert";

// export default function SignupPage() {

//   const searchParams = useSearchParams()

//   useEffect(() => {
//       if (searchParams.get("signup") === "success") {
//       swal("ثبت‌نام موفق!", "حالا می‌توانید وارد شوید.", "success");
//     }
//   } ,[searchParams])

//   return (
//     <>
//       <Navbar />
//       <Title title="ساخت حساب کاربری" />
//       <form action={signupAction}>
//         <div className="mt-12 mb-12 flex items-center justify-center p-4">
//           <div className="grid bg-white font-shabnam font-bold p-6 w-full max-w-[380px] sm:max-w-[420px] mx-auto rounded-2xl shadow-xl text-center text-black transition-all duration-300 hover:shadow-2xl">
//             {/* آیکون بالای فرم */}
//             <div className="flex justify-center mb-4">
//               <div className="bg-[#34180e] p-3 rounded-full shadow-md">
//                 <FaUserAlt size={30} color="white" />
//               </div>
//             </div>

//             {/* عنوان */}
//             <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#34180e]">
//               ایجاد حساب کاربری
//             </h2>

//             {/* نام */}
//             <div className="relative mt-3">
//               <FaUserAlt
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//                 size={16}
//               />
//               <input
//                 name="name"
//                 className=" font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
//                 type="text"
//                 placeholder="نام"
//               />
//             </div>

//             {/* شماره موبایل */}
//             <div className="relative mt-4">
//               <FaPhoneAlt
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//                 size={16}
//               />
//               <input
//                 name="phone"
//                 className=" font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
//                 type="text"
//                 placeholder="شماره موبایل"
//               />
//             </div>

//             {/* ایمیل */}
//             <div className="relative mt-4">
//               <FaEnvelope
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//                 size={16}
//               />
//               <input
//                 name="email"
//                 className=" font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
//                 type="email"
//                 placeholder="ایمیل (دلخواه)"
//               />
//             </div>

//             {/* رمز عبور */}
//             <div className="relative mt-4">
//               <FaLock
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//                 size={16}
//               />
//               <input
//                 name="password"
//                 className=" font-light p-3 pl-10 bg-white text-black rounded-md border border-gray-300 rtl w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
//                 type="password"
//                 placeholder="رمز عبور"
//               />
//             </div>

//             {/* دکمه ثبت‌نام */}
//             <button
//               type="submit"
//               className="mt-6 p-3 cursor-pointer font-myfont bg-green text-white rounded-lg hover:bg-textcolor transition-all duration-300"
//             >
//               ثبت نام
//             </button>

//             {/* برگشت به ورود */}
//             <Link
//               href="/login"
//               className="flex items-center justify-center gap-2 font-myfont font-Bold text-sm text-center mt-4 cursor-pointer mb-4 text-[#34180e] hover:underline transition"
//             >
//               <FaArrowLeft size={14} />
//               برگشت به ورود
//             </Link>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }



