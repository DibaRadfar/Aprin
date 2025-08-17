"use client";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

export default function Header() {
  const [cartCount, setCartCount] = useState(3);

  return (
    <div className="header font-vazir ">
      <div className="w-full bg-[#EF4056] h-[2.813rem]  justify-center hidden md:block">

      </div>
      <div className=" mt-[2.25rem] flex flex-col sm:flex sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <p className="whitespace-nowrap w-[8.063rem] h-[1.938rem]  text-[15px] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[20px] mb-[1.25rem] mr-[1.25rem] lg:mr-[2rem] lg:ml-[5.563rem] font-semibold text-[#464646] ">
          لگو برای چاپخانه
        </p>
        <div
          className="flex flex-row w-[24rem] mb-[1.25rem] mr-[1.25rem] sm:w-[58rem] md:w-[58rem] lg:w-[58rem] bg-[#FDF8FA] border-[0.063rem] border-[#E21761] rounded-[0.938rem]
          h-[2.313rem] place-content-center justify-center place-items-center"
        >
          <input type="text" className="w-[21rem] sm:w-[55rem] md:w-[55rem] lg:w-[55rem] h-[1.5rem] p-[0.063rem]" />
          <IoIosSearch className="w-[1.875rem] h-[1.813rem] text-[#C4C4C4]" />
        </div>

        <Link href="/login" className="w-[9.125rem] h-[2.313rem] bg-[#FDF8FA] flex flex-row items-center justify-center rounded-[0.938rem] text-[14px]
         mr-[1.25rem] mb-[1.25rem] sm:mr-[4.5rem] md:mr-[4.5rem] lg:mr-[4.5rem] ml-[0.7rem] cursor-pointer hover:bg-[#fbbed6] hover:border-[0.063rem] hover:border-[#E21761]">
          <div className="flex items-center">
            <CgProfile className="text-[#E21761] w-[1.875rem] h-[1.875rem] ml-[0.813rem]" />
            <span className="font-semibold text-[#464646]">ورود / ثبت نام</span>
          </div>
        </Link>

        <div
          className="w-[3.5rem] h-[2.313rem] bg-[#FDF8FA] rounded-[0.938rem] flex items-center justify-center mr-[2rem] cursor-pointer
        hover:bg-[#fbbed6] hover:border-[0.063rem] hover:border-[#E21761] ml-[2rem]"
        >
          <button>
            <FaShoppingBasket className="text-[#E21761] w-[1.875rem] h-[1.875rem] cursor-pointer" />
          </button>
          <span className="bg-[#E21761] w-[0.875rem] h-[1.375rem] rounded-[0.938rem] text-[14px] text-center ml-[0.3rem] cursor-pointer text-[#464646]">
            {cartCount}
          </span>
        </div>
      </div>
    </div>
  );
}
