"use client";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function Menu({ scrollToSection }) {
  return (
    <div className="Menu hidden md:block">
      <div className=" flex flex-row justify-center mt-[2.313rem] place-content-center place-items-center items-center ml-[5rem] h-[1.938rem]">
        <IoMenu className="w-[1.875rem] h-[1.875rem] mr-[2rem] ml-[0.938rem]" />
        <div className="text-[20px] font-semibold text-[#464646] h-[1.938rem]">
          <button
            onClick={() => scrollToSection("Bestselling")}
            className="ml-[4rem] cursor-pointer hover:bg-[#fbbed6] hover:border-[0.063rem]
            hover:border-[#fbbed6] hover:rounded-[0.938rem] p-[0.063rem]"
          >
            دسته بندی ها
          </button>

          <button
            onClick={() => scrollToSection("serviceprint")}
            className="ml-[5.375rem] cursor-pointer hover:bg-[#fbbed6] hover:border-[0.063rem]
            hover:border-[#fbbed6] hover:rounded-[0.938rem] p-[0.063rem]"
          >
            سفارش بر اساس کاربرد
          </button>

          <Link href="/download-center" className="ml-[5.375rem] cursor-pointer hover:bg-[#fbbed6] hover:border-[0.063rem]
            hover:border-[#fbbed6] hover:rounded-[0.938rem] p-[0.063rem]">
            مرکز دانلود
          </Link>

          <Link href="/shop" className="ml-[5.375rem] cursor-pointer hover:bg-[#fbbed6] hover:border-[0.063rem]
            hover:border-[#fbbed6] hover:rounded-[0.938rem] p-[0.063rem]">
            فروشگاه
          </Link>

          <button
            onClick={() => scrollToSection("Blog")}
            className="ml-[5.375rem] cursor-pointer hover:bg-[#fbbed6] hover:border-[0.063rem]
            hover:border-[#fbbed6] hover:rounded-[0.938rem] p-[0.063rem]"
          >
            وبلاگ
          </button>


          <button
            onClick={() => scrollToSection("Footer")}
            className="cursor-pointer hover:bg-[#fbbed6] hover:border-[0.063rem]
            hover:border-[#fbbed6] hover:rounded-[0.938rem] p-[0.063rem]"
          >
            تماس با ما
          </button>
        </div>
      </div>
    </div>
  );
}
