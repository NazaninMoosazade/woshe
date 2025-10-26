import React from "react";
import Navbar from "@/components/modules/navbar/Navbar";
import TitleBanner from "@/components/tamplates/TitleBanner/TitleBanner";
import Form from "@/components/tamplates/Contact-us/Form";
import { CiLocationOn } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import NavbarResponsive from "@/components/modules/navbar/NavbarResponsive";

function Page() {
  return (
    <>
      <Navbar />
      <NavbarResponsive/>
      <TitleBanner title="تماس با وشه" />
      <main className="container mx-auto p-4 font-shabnam">
        <div className="flex flex-col lg:flex-row md:space-x-4">
          {/* ستون سمت راست */}
          <div className="lg:w-2/3 w-full p-4 ">
            {/* محتوای اصلی */}
        <Form/>
          </div>

          <span className="w-px lg:block bg-gray-300 !mr-9"></span>

          {/* ستون سمت چپ */}
          <div className="lg:w-1/3 w-full  p-4">
            <p className="text-gray-400">اطلاعات تماس</p>
            <div className="mt-5 flex items-center gap-x-3 font-light font-shabnam text-gray-600">
              <CiLocationOn className="w-7 h-7" />
              <p className="font-bold">
                زعفرانیه، فلاحی، مقدس اردبیلی، پلاک ۱۴
              </p>
            </div>

            <div className="mt-5 flex items-center gap-x-3 font-light font-shabnam text-gray-600">
              <CiLocationOn className="w-7 h-7" />
              <p className="font-bold"> فرشته، مریم شرقی، پلاک ۴۳ </p>
            </div>

            <div className="mt-5 flex items-center gap-x-3 font-light font-shabnam text-gray-600">
              <BsPhone className="w-7 h-7" />
              <p className="font-bold"> 09194673046 </p>
            </div>

            <div className="mt-5 flex items-center gap-x-3 font-light font-shabnam text-gray-600">
              <BsPhone className="w-7 h-7" />
              <p className="font-bold"> 09338630599 </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
