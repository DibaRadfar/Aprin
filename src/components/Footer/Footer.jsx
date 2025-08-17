import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div
      className="flex flex-col md:flex md:flex-row sm:flex sm:flex-row  justify-between px-2 py-8 bg-[#fff0f2] mt-0  md:h-[26.563rem] sm:h-[26.563rem] relative z-0"
      style={{ zIndex: 0, position: "relative" }}
      id="Footer"
    >
      {/* ستون چهارم (لوگو + متن) */}
      <div className="flex flex-col max-w-xs  md:mr-[2.188rem] sm:mr-[2.188rem] md:mb-[4.813rem] sm:mb-[4.813rem] md:ml-[9.5rem] sm:ml-[9.5rem]">
        <span className=" mb-1 text-[18px] md:text-[30px] sm:text-[30px] font-extrabold">
          لوگو
        </span>
        <p className="text-sm leading-relaxed text-gray-800 text-[15px] md:text-[30px] sm:text-[30px] w-[15rem] md:w-[26.563rem] sm:w-[26.563rem]">
          لورملورم ایپسملورم ایپسملورم ایپسملورم ایپسملورم ایپسم ایپسملورم
          ایپسملورم ا لورم ایپسملورم ایپسملورم ایپسملورم ایپسملورم ایپسملورم
        </p>
      </div>
      <div className=" grid grid-cols-3 sm:flex sm:flex-row md:flex md:flex-row">
        <div className="flex flex-col pt-[3rem] ml-[6.688rem]">
          <h3 className="font-bold mb-1 text-[20px] md:text-[30px] sm:text-[30px] whitespace-nowrap">
            لورم ایپسوم
          </h3>
          <ul className="space-y-1 text-sm text-gray-700 text-[15px] whitespace-nowrap md:text-[20px] sm:text-[20px]">
            <li>• لورم ایپسوم</li>
            <li>• لورم ایپسوم</li>
            <li>• لورم ایپسوم</li>
            <li>• لورم ایپسوم</li>
          </ul>
        </div>

        {/* ستون دوم */}
        <div className="flex flex-col pt-[3rem] ml-[6.688rem]">
          <h3 className="font-bold mb-1 text-[20px] md:text-[30px] sm:text-[30px] whitespace-nowrap">
            لورم ایپسوم
          </h3>
          <ul className="space-y-1 text-sm text-gray-700 text-[15px] whitespace-nowrap md:text-[20px] sm:text-[20px]">
            <li>• لورم ایپسوم</li>
            <li>• لورم ایپسوم</li>
            <li>• لورم ایپسوم</li>
            <li>• لورم ایپسوم</li>
          </ul>
        </div>

        {/* ستون سوم */}
        <div className="flex flex-col pt-[3rem]">
          <h3 className="font-bold mb-1 text-[20px] md:text-[30px] sm:text-[30px] whitespace-nowrap">
            لورم ایپسوم
          </h3>
          <ul className="space-y-1 text-sm text-gray-700 text-[15px] whitespace-nowrap md:text-[20px] sm:text-[20px]">
            <li>• لورم ایپسوم</li>
            <li>• لورم ایپسوم</li>
            <li>• لورم ایپسوم</li>
            <li>• لورم ایپسوم</li>
          </ul>
        </div>
      </div>
      {/* ستون اول */}

      <div className="flex flex-col mr-[5.5rem] md:mr-[1.25rem] sm:mr-[1.25rem] justify-center">
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row-reverse sm:flex sm:flex-row-reverse mt-[2rem] md:mt-[20rem] sm:mt-[20rem]">
          <FaLinkedin className="w-[1.875rem] h-[1.875rem] text-[#E21761]  md:mr-[1.25rem] sm:mr-[1.25rem] cursor-pointer hover:text-[#a2043e]" />
          <FaFacebook className="w-[1.875rem] h-[1.875rem] text-[#E21761] md:mr-[1.25rem] sm:mr-[1.25rem] cursor-pointer hover:text-[#a2043e]" />
          <FaInstagram className="w-[1.875rem] h-[1.875rem] text-[#E21761] md:mr-[1.25rem] sm:mr-[1.25rem] cursor-pointer hover:text-[#a2043e]" />
          <FaXTwitter className="w-[1.875rem] h-[1.875rem] text-[#E21761] md:mr-[1.25rem] sm:mr-[1.25rem] cursor-pointer hover:text-[#a2043e]" />
        </div>
        <p className="text-[#102E50] text-[10px] md:text-[15px] sm:text-[15px] mt-[1.313rem] mr-[3rem]">
          ایجاد شده توسط ملونست
        </p>
      </div>
    </div>
  );
}
