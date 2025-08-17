import { FaPhone } from "react-icons/fa";

export default function Phone() {
  return (
    <div className=" Phone flex flex-row justify-center xl:mt-[2.438rem] lg:mt-[2.438rem] md:mt-[2.438rem] sm:mt-[2.438rem]
     xl:ml-[2rem] lg:ml-[2rem] md:ml-[2rem] sm:ml-[2rem] lg:mr-[8.813rem] md:mr-[8.813rem] xl:mr-[8.813rem]
      sm:mr-[8.813rem] bg-[#FDF8FA]  border-[#FDF8FA] border-[0.063rem]
    rounded-[0.938rem] w-[9.813rem] h-[2.313rem] place-content-center place-items-center
    cursor-pointer hover:bg-[#fbbed6] hover:border-[0.063rem] hover:border-[#E21761]"
    dir="ltr">
      <FaPhone className="w-[1.875rem] h-[1.875rem] text-[#E21761]"/>
      <p className="text-[14px] font-semibold pl-[0.875rem] text-[#464646]">09143567895</p>
    </div>
  );
}
