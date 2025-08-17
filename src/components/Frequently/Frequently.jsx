"use client";
import { useState } from "react";
import { FaCircle, FaPlus, FaMinus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Frequently() {
  const faqs = [
    {
      id: 1,
      question: "چگونه می توانم پرداخت کنم؟",
      answer: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
      لورم ایپسوم متن ساختگی با تولید و با استفاده از طراحان گرافیک است.
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، سادگی نامفهوم از صنعت چاپ.`,
    },
    {
      id: 2,
      question: "چگونه میتوانم پرداخت کنم",
      answer: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
      لورم ایپسوم متن ساختگی با تولید و با استفاده از طراحان گرافیک است.
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، سادگی نامفهوم از صنعت چاپ.`,
    },
    {
      id: 3,
      question: "چگونه میتوانم پرداخت کنم؟",
      answer: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
      لورم ایپسوم متن ساختگی با تولید و با استفاده از طراحان گرافیک است.
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، سادگی نامفهوم از صنعت چاپ.`,
    },
    {
      id: 4,
      question: "چگونه میتوانم پرداخت کنم؟",
      answer: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
      لورم ایپسوم متن ساختگی با تولید و با استفاده از طراحان گرافیک است.
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، سادگی نامفهوم از صنعت چاپ.`,
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="Blog Exclusive px-[2rem]">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-[2rem]">
        <div className="flex gap-[0.5rem] items-center">
          <FaCircle className="text-[#E21761] w-[1.25rem] h-[1.25rem]" />
          <p className="text-[20px] sm:text-[30px] md:text-[30px] font-semibold leading-none text-[#464646] font-vazir">
            سوالات متداول
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

      {/* FAQ List */}
      <div className="Qbox flex flex-col mb-[1rem] sm:mb-[3.75rem] md:mb-[3.75rem]">
        {faqs.map((item) => (
          <div
            key={item.id}
            className="Q bg-[#D5F3FB] rounded-[15px] mb-[30px] px-4 py-3 cursor-pointer transition-all duration-100 text-[25px] font-semibold"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-vazir text-[#464646]">
                {item.question}
              </p>
              {hoveredId === item.id ? (
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
                  <FaMinus className="text-[#303030] w-4 h-4" />
                </div>
              ) : (
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
                  <FaPlus className="text-[#303030] w-4 h-4" />
                </div>
              )}
            </div>

            {/* Answer */}
            <div
              className={`transition-all duration-100 overflow-hidden text-[20px] ${
                hoveredId === item.id
                  ? "max-h-40 mt-2 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-600 font-vazir whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
