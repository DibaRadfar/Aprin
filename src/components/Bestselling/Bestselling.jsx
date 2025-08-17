import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const productsStatic = [
  { src: "imges/چاپ کارت ویزیت 1.png",
    alt: "کارت ویزیت", 
    label: "کارت ویزیت", 
    nowrap: true
   },
  { src: "imges/چاپ تراکت 1.png", 
    alt: "تراکت", 
    label: "تراکت"
   },
  { src: "imges/چاپ سربرگ 1.png",
    alt: "سربرگ", 
    label: "سربرگ"
   },
  { src: "imges/چاپ پوستر 1.png",
    alt: "پوستر", 
    label: "پوستر"
   },
  { src: "imges/چاپ تقویم 1.png", 
    alt: "تقویم", 
    label: "تقویم"
  },
  { src: "imges/چاپ کارت پستال 1.png", 
    alt: "کارت پستال", 
    label: "کارت پستال", 
    nowrap: true 
  },
];

export default function Bestselling() {
  const [products] = useState(productsStatic);

  return (
    <div className="Bestselling px-[2rem] mb-[3.75rem]" id="Bestselling">
      {/* هدر */}
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-[0.5rem] items-center">
          <FaCircle className="text-[#E21761] w-[1.25rem] h-[1.25rem]" />
          <p className="text-[20px] sm:text-[30px] font-semibold leading-none text-[#464646] font-vazir">
            محصولات پرفروش
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-[0.25rem] text-[15px] sm:text-[20px] text-[#464646] font-vazir hover:text-[#E21761]"
        >
          مشاهده همه
          <IoIosArrowForward className="rotate-180 w-[1.25rem] h-[1.25rem]" />
        </a>
      </div>

      {/* محصولات */}
      <div className="pro grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center mt-[3.125rem] mx-[2rem]">
        {products.map(({ src, alt, label, nowrap }, index) => (
          <div key={index} className="poster flex flex-col items-center mb-[1.5rem]">
            <img
              src={src}
              alt={alt}
              className="border-[0.125rem] border-[#5ADCFF] rounded-[1.563rem] p-[0.625rem] mb-[1.25rem]
              transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
            />
            <span
              className={`w-[5.813rem] h-[1.938rem] text-[20px] font-vazir font-semibold text-center
               hover:text-[#E21761] cursor-pointer hover:underline underline-offset-6 ${
                 nowrap ? "whitespace-nowrap" : ""
               }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
