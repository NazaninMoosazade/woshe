import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full h-auto mt-14 bg-bg">
        <div className="container mx-auto">
          <div className="mx-auto flex flex-col sm:flex-row items-start justify-evenly font-shabnam relative">
            {/* ستون‌ها */}
            <div className="flex flex-col text-right space-y-2 pt-8 sm:pt-5 mx-auto pr-4">
              <h1 className="text-green">دسترسی سریع</h1>
              <Link className="font-light hover:text-textHover" href="bouquets">
                دسته گل
              </Link>
              <Link className="font-light hover:text-textHover" href="trends">
                ترند وشه
              </Link>
              <Link className="font-light hover:text-textHover" href="pastries">
                کیک و بادکنک
              </Link>
            </div>

            <div className="flex flex-col text-right space-y-2 pt-8 sm:pt-5 mx-auto pr-4">
              <h1 className="text-green">حساب کاربری</h1>
              <Link className="font-light hover:text-textHover" href="register">
                ورود / ثبت نام
              </Link>
 

              {/* <span className="hidden lg:block absolute top-0 right-0 h-60 border-r border-gray-300"></span> */}
            </div>

            <div className="flex flex-col text-right space-y-2 pt-8 sm:pt-5 mx-auto pr-4">
              <h1 className="text-green">استودیو گل وشه</h1>
              <Link className="font-light hover:text-textHover" href="contact">
                تماس با وشه
              </Link>
              <Link className="font-light hover:text-textHover" href="trends">
                ترند وشه
              </Link>

              {/* <span className="hidden lg:block absolute top-0 right-0 h-60 border-r border-gray-300"></span> */}
            </div>

            <div className="flex flex-col text-right mx-auto space-y-2">
              {/* خط عمودی */}
              {/* <span className="hidden lg:block absolute top-0 left-[350px] h-60 border-r border-gray-300"></span> */}
              <img src="/img/enamad.png" alt="enamad" className="w-[125px] pt-8 sm:pt-5" />
            </div>
          </div>
        </div>
        <span className="hidden sm:block w-[70%] mx-auto text-center mt-20 mb-3 h-px bg-gray-300"></span>
        <div className="text-center flex-col sm:!flex-row sm:!items-center sm:!justify-evenly font-shabnam text-sm pb-4 pt-4">
          <p>تمامی حقوق سایت متعلق است به استودیو گل وشه.</p>
          <p>طراحی و برنامه نویسی توسط نازنین موسی زاده</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
