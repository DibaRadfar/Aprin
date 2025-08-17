import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Blog() {
  return (
    <div className="Blog Exclusive px-[2rem] mb-[3.75rem]" id="Blog">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-[0.5rem] items-center">
          <FaCircle className="text-[#E21761] w-[1.25rem] h-[1.25rem]" />
          <p className="text-[20px] sm:text-[30px] md:text-[30px] font-semibold leading-none text-[#464646] font-vazir">
            وبلاگ
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-[0.25rem] text-[15px] sm:text-[20px] md:text-[20px] text-[#464646] font-vazir hover:text-[#E21761]"
        >
          مشاهده همه
          <IoIosArrowForward className="rotate-180 w-[1.25rem] h-[1.25rem]" />
        </a>
      </div>
      <div className="Blog flex flex-col sm:flex sm:flex-row md:flex md:flex-row justify-center md:justify-center  sm:justify-center mx-[1rem]">
        <div className="flex flex-col w-[20rem] h-[30rem] sm:w-[26.5rem] md:w-[26.5rem] sm:h-[33rem] md:h-[33rem] bg-[#F9F9F9] 
             ml-[4re sm:ml-[3.25rem] md:ml-[3.25rem] mt-[3.75rem] items-center border-[0.063rem] border-[#F9F9F9] 
             rounded-[0.625rem] transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer">
          <img src="/imges/پایه بوم 1.png" alt="" />
          <span className="text-[25px] sm:text-[30px] md:text-[30px] font-semibold text-center mt-[1.375rem] mb-[1.375rem] text-[#464646]">آشنایی با رنگ های سرد و گرم</span>
          <p className="w-[17rem] h-[5.813rem] text-[#464646] text-[18px] sm:text-[20px] md:text-[20px]">
            ارائه سفارش محصولات اداری با استفاده از چاپ افست مخصوص سفارشهای
            تیراژ بالا
          </p>
        </div>
        <div className="flex flex-col w-[20rem] h-[30rem] sm:w-[26.5rem] md:w-[26.5rem] sm:h-[33rem] md:h-[33rem] bg-[#F9F9F9] 
             ml-[4re sm:ml-[3.25rem] md:ml-[3.25rem] mt-[3.75rem] items-center border-[0.063rem] border-[#F9F9F9] 
             rounded-[0.625rem] transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer">
          <img src="/imges/پاپ-آپ-2 1.png" alt="" />
          <span className="text-[25px] sm:text-[30px] md:text-[30px] font-semibold text-center mt-[1.375rem] mb-[1.375rem] text-[#464646]">آشنایی با رنگ های سرد و گرم</span>
          <p className="w-[17rem] h-[5.813rem] text-[#464646] text-[18px] sm:text-[20px] md:text-[20px]">
            ارائه سفارش محصولات اداری با استفاده از چاپ افست مخصوص سفارشهای
            تیراژ بالا
          </p>
        </div>
        <div className="flex flex-col w-[20rem] h-[30rem] sm:w-[26.5rem] md:w-[26.5rem] sm:h-[33rem] md:h-[33rem] bg-[#F9F9F9] 
             ml-[4re sm:ml-[3.25rem] md:ml-[3.25rem] mt-[3.75rem] items-center border-[0.063rem] border-[#F9F9F9] 
             rounded-[0.625rem] transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer">
          <img src="/imges/Blog3.png" alt="" />
          <span className="text-[25px] sm:text-[30px] md:text-[30px] font-semibold text-center mt-[1.375rem] mb-[1.375rem] text-[#464646]">آشنایی با رنگ های سرد و گرم</span>
          <p className="w-[17rem] h-[5.813rem] text-[#464646] text-[18px] sm:text-[20px] md:text-[20px]">
            ارائه سفارش محصولات اداری با استفاده از چاپ افست مخصوص سفارشهای
            تیراژ بالا
          </p>
        </div>
      </div>
    </div>
  );
}
