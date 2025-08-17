import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

export default function Office() {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    /*
    fetch("https://your-api-url.com/office-products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
    */
  }, []);

  const sampleProducts = [
    { title: "پاکت ملخی نامه", image: "/imges/officeposter.png" },
    { title: "فاکتور کاربن لس", image: "/imges/officeposter.png" },
    { title: "موبی ام اف (3*3)", image: "/imges/officeposter.png" },
    { title: "ست اداری کامل", image: "/imges/officeposter.png" },
    { title: "کارت ویزیت اداری", image: "/imges/officeposter.png" },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const displayProducts = products.length > 0 ? products : sampleProducts;

  return (
    <div className="office mb-[3.75rem]">
      <div
        className="w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(180, 239, 255, 1)), url('/imges/g.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="flex justify-between items-center px-[1rem] sm:px-[2rem] py-[1rem]">
          <div className="flex gap-[0.5rem] items-center">
            <FaCircle className="text-[#E21761] w-[1.25rem] h-[1.25rem]" />
            <p className="text-[18px] sm:text-[30px] md:text-[30px] font-semibold leading-none text-[#464646] font-vazir">
              محـصـــولات اداری
            </p>
          </div>

          <div
            onClick={handleScroll}
            className="cursor-pointer select-none flex items-center justify-center p-2 rounded-full bg-white shadow-md hover:bg-[#E21761] hover:text-white transition-colors "
            style={{ width: 40, height: 40 }}
            title="مشاهده بیشتر"
          >
            <IoIosArrowForward size={24} />
          </div>
        </div>


        <div className="office flex flex-col lg:flex-row lg:mr-[2rem]">

          <div className="flex-shrink-0">
            <p className="w-full sm:w-[17rem] mt-[1rem] sm:mt-[4.063rem] mb-[1.5rem] sm:mb-[4rem] sm:ml-[5.688rem] px-[1rem] sm:px-0 text-[15px] sm:text-[20px] md:text-[20px] font-normal">
              ارائه سفارش محصولات اداری با استفاده از چاپ افست مخصوص سفارشهای
              تیراژ بالا
            </p>
            <button
              className="text-[20px] sm:text-[25px] bg-[#5ADCFF] border-[0.063rem] border-[#5ADCFF] rounded-[1.563rem] w-[10rem] sm:w-[13.563rem] font-medium mb-[2rem] sm:mb-[2.5rem]
              cursor-pointer text-center px-[2rem] sm:px-[4.125rem] py-[0.313rem] hover:bg-[#2a9dbd] ml-[1rem] sm:ml-[5.688rem]"
            >
              مشاهده
            </button>
          </div>


          <div
            ref={scrollRef}
            className="posters flex overflow-x-auto scrollbar-hide gap-[1.5rem] sm:gap-[3.75rem] mb-[2rem] sm:mb-[3.063rem] px-[1rem]"
            style={{ scrollBehavior: "smooth" }}
          >
            {displayProducts.map((product, index) => (
              <div
                key={index}
                className="items-center flex flex-col flex-shrink-0 min-w-[10rem] sm:min-w-[12rem]"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
                />
                <span
                  className="text-center text-[16px] sm:text-[20px] font-semibold mt-[1rem] sm:mt-[1.875rem]
                hover:text-[#3d707e] cursor-pointer hover:underline underline-offset-6"
                >
                  {product.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
