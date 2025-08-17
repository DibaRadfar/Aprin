import { FaCircle } from "react-icons/fa";

export default function Customers() {
  return (
    <div className="Customers px-[2rem] mt-[3rem]">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-[0.5rem] items-center">
          <FaCircle className="text-[#E21761] w-[1.25rem] h-[1.25rem]" />
          <p className="text-[20px] sm:text-[30px] md:text-[30px] font-semibold leading-none text-[#464646] font-vazir">
            برخی از مشتریان
          </p>
        </div>
      </div>
      <div className="brands w-full mt-[3.75rem]">
        <img src="/imges/Customers.png" 
        alt="" />
      </div>
    </div>
  );
}
