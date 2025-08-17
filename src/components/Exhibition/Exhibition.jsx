import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

export default function Exhibition() {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    /*
    fetch("https://your-api-url.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
    */
  }, []);


  const sampleProducts = [
    {
      title: "پوستر فیلم و سریال",
      image: "/imges/movisposter.png",
    },
    {
      title: "پوستر فیلم و سریال",
      image: "/imges/movisposter.png",
    },
    {
      title: "پوستر فیلم و سریال",
      image: "/imges/movisposter.png",
    },
    {
      title: "پوستر فیلم و سریال",
      image: "/imges/movisposter.png",
    },
    {
      title: "پوستر فیلم و سریال",
      image: "/imges/movisposter.png",
    },
    {
      title: "پوستر فیلم و سریال",
      image: "/imges/movisposter.png",
    },
    {
      title: "پوستر فیلم و سریال",
      image: "/imges/movisposter.png",
    },
    {
      title: "پوستر فیلم و سریال",
      image: "/imges/movisposter.png",
    },
  ];


  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };


  const displayProducts = products.length > 0 ? products : sampleProducts;

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 180, 207, 0.8), rgba(255, 180, 207, 0.8)), url('/imges/g.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-center px-[2rem] py-[1rem]">
        <div className="flex gap-[0.5rem] items-center">
          <FaCircle className="text-[#E21761] w-[1.25rem] h-[1.25rem]" />
          <p className="text-[20px] sm:text-[30px] md:text-[30px] font-semibold leading-none text-[#464646] font-vazir">
            محـصـــولات نمایشـــگاهی وهمـــایــش
          </p>
        </div>

        <div
          onClick={handleScroll}
          className="cursor-pointer select-none flex items-center justify-center p-2 rounded-full bg-white shadow-md hover:bg-[#E21761] hover:text-white transition-colors"
          style={{ width: 40, height: 40 }}
          title="مشاهده بیشتر"
        >
          <IoIosArrowForward size={24} />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="posters flex overflow-x-auto scrollbar-hide gap-[1.5rem] px-[1rem] pb-[1rem]"
        style={{ scrollBehavior: "smooth" }}
      >
        {displayProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col border-[0.125rem] border-[#5ADCFF] rounded-[1.563rem] h-[18.063rem] bg-[#FFFFFF] min-w-[12rem] flex-shrink-0
            transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[13.25rem] mb-[1.5rem] object-cover rounded-t-[1.563rem]"
            />
            <span className="text-[22px] font-medium px-[1.25rem]">
              {product.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
