import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Exclusive() {
  const products = [
    { title: "چاپ افست عمومی", img: "/imges/چاپ عمومی.png", size: "w-[18.938rem] h-[13rem] sm:w-[43.563rem] md:w-[43.563rem] sm:h-[27.25rem] md:h-[27.25rem]" },
    { title: "چاپ بروشور", img: "/imges/چاپ بروشور 1.png", size: "w-[18.938rem] h-[13rem]" },
    { title: "چاپ پلات", img: "/imges/چاپ پلات.png", size: "w-[18.938rem] h-[13rem]" },
    { title: "چاپ رنگی", img: "/imges/چاپ رنگی.png", size: "w-[18.938rem] h-[13rem]" },
    { title: "چاپ افست اختصاصی", img: "/imges/چاپ اختصاصی.png", size: "w-[18.938rem] h-[13rem]" },
    { title: "چاپ پارچه", img: "/imges/چاپ پارچه.png", size: "w-[18.938rem] h-[13rem] sm:w-[43.563rem] md:w-[43.563rem] sm:h-[12.938rem] md:h-[12.938rem]" },
    { title: "چاپ کارت", img: "/imges/چاپ کارت .png", size: "w-[18.938rem] h-[13rem] sm:w-[43.563rem] md:w-[43.563rem] sm:h-[12.938rem] md:h-[12.938rem]"  },
    { title: "چاپ برای تبلیغات", img: "/imges/چاپ برای تبلیغات.png", size: "w-[18.938rem] h-[13rem] sm:w-[40.125rem] md:w-[40.125rem] sm:h-[27.25rem] md:w-[40.125rem]" },
  ];

  return (
    <div className="Exclusive px-[2rem] mb-[3.75rem]">

            <div className="flex justify-between items-center w-full">
        <div className="flex gap-[0.5rem] items-center">
          <FaCircle className="text-[#E21761] w-[1.25rem] h-[1.25rem]" />
          <p className="text-[20px] sm:text-[30px] md:text-[30px] font-semibold leading-none text-[#464646] font-vazir">
            محصولات اختصاصی
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

      <div className="flex flex-col gap-[1.75rem] mt-[3.125rem]">

        <div className="flex flex-col md:flex-row gap-[2.313rem] md:gap-[2.313rem]">
          <div className={`${products[0].size} relative bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer`}>
            <img src={products[0].img} alt={products[0].title} className="w-full h-full object-cover" />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-sky-300 text-[#464646] text-[14px] font-vazir px-4 py-1 rounded-full shadow-md">{products[0].title}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.75rem]">
            {products.slice(1, 5).map((item, index) => (
              <div key={index} className={`${item.size} relative bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer`}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-sky-300 text-[#464646] text-[14px] font-vazir px-4 py-1 rounded-full shadow-md">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[2.313rem]">
          <div className="flex flex-col gap-[1.75rem]">
            {products.slice(5, 7).map((item, index) => (
              <div key={index} className={`${item.size} relative bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer`}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-sky-300 text-[#464646] text-[14px] font-vazir px-4 py-1 rounded-full shadow-md">{item.title}</span>
              </div>
            ))}
          </div>

          <div className={`${products[7].size} relative bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer`}>
            <img src={products[7].img} alt={products[7].title} className="w-full h-full object-cover" />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-sky-300 text-[#464646] text-[14px] font-vazir px-4 py-1 rounded-full shadow-md">{products[7].title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
