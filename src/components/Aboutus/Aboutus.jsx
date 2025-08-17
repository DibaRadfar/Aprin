import { FaCircle } from "react-icons/fa";

export default function Aboutus() {
  return (
    <div className="about-us justify-center ">
      <div className="px-[2rem] mb-[3.75rem] mt-[3.75rem]">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-[0.5rem] items-center">
            <FaCircle className="text-[#E21761] w-[1.25rem] h-[1.25rem]" />
            <p className="text-[20px] sm:text-[30px] md:text-[30px] font-semibold leading-none text-[#464646] font-vazir">
              درباره ما
            </p>
          </div>
        </div>
        <div className="about flex flex-col-reverse mb-[7rem] md:flex md:flex-row sm:flex sm:flex-row justify-center mt-[1.875rem]">
          <p className="md:w-[48.875rem] sm:w-[48.875rem] w-[21rem] h-[19rem] ml-[2.75rem] text-justify text-[18px] md:text-[24px] sm:text-[34px]">
            فعالیت خود را از سال 1373 از مغازه ای کوچک و با دستگاه های آنالوگ
            آغاز نمود. بعد از مدتی بواسطه خوش قولی، کیفیت و مسولیت پذیری توانست
            در بازار کار بین مشتریان و همکاران سهمی برای خود ایجاد کند . حاصل
            تلاش بی وقفه کار کنان و حمایت مخاطبان، بوجود آمدن فضای کاربا مساحت
            900 متر مربع و بخش هایی مجزا که پاسخ گوی تمام نیاز های چاپی مشتریان
            و همکاران شده است. به لطف خدا امروز مدعی هستیم که کامل ترین و
            مجهزترین مرکز چاپ دیجیتال در کشور هستیم . مجزا که پاسخ گوی تمام نیاز
            های چاپی مشتریان و همکاران شده است. به لطف خدا امروز مدعی هستیم که
            کامل ترین و مجهزترین مرکز چاپ دیجیتال در کشور هستیم .
          </p>
          <img
            src="/imges/AboutUs.png"
            alt=""
            className="mb-[1rem] rounded-[0.938rem]"
          />
        </div>
        <button
          className="text-[20px] md:text-[24px] sm:text-[24px] bg-[#5ADCFF] border-[0.063rem] border-[#5ADCFF] rounded-[1.563rem] w-[19rem] h-[3.063rem] font-medium 
          sm:mr-[17.188rem] md:mr-[17.188rem] mr-[1.5rem]
          mt-[3.125rem] cursor-pointer text-center hover:bg-[#2a9dbd]"
        >
          اطلاعات بیشتر
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 w-full bg-[#D5F3FB] h-auto mt-[2.563rem] justify-center">
        <div className="h-[11.625rem] flex flex-col items-center mt-[2.313rem]">
          <img src="/imges/1 (3) 1.png" alt="" className="mb-[1.563rem]" />
          <span className="text-[10px] sm:text-[20px] text-center">
            تحویل سریع به تمام نقاط ایران
          </span>
        </div>
        <div className="h-[11.625rem] flex flex-col items-center mt-[2.313rem]">
          <img src="/imges/6 (1) 1.png" alt="" className="mb-[1.563rem]" />
          <span className="text-[10px] sm:text-[20px] text-center">
            ضمانت رضایت مشتری
          </span>
        </div>
        <div className="h-[11.625rem] flex flex-col items-center mt-[2.313rem]">
          <img src="/imges/4 (2) 1.png" alt="" className="mb-[1.563rem]" />
          <span className="text-[10px] sm:text-[20px] text-center">
            گارانتی کمترین هزینه و زمان
          </span>
        </div>
        <div className="h-[11.625rem] flex flex-col items-center mt-[2.313rem]">
          <img src="/imges/2 (4) 1.png" alt="" className="mb-[1.563rem]" />
          <span className="text-[10px] sm:text-[20px] text-center">
            تضمین کیفیت محصولات
          </span>
        </div>
      </div>
    </div>
  );
}
