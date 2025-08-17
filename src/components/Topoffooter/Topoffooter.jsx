export default function Topoffooter() {
  return (
    <div className="w-full bg-white relative h-[23.688rem] mt-[7rem]">
      {/* محتوا - متن و دکمه‌ها */}
      <div className="flex flex-row-reverse justify-between px-10 pt-10 max-w-screen-xl mx-auto relative z-10">
        <div className="flex flex-col max-w-lg">
          <p className="text-lg mb-6 leading-relaxed">
            لورملورم ایپسملورم ایپسملورم ایپسملورم ایپسملورم ایپسم ایپسملورم ایپسملورم ا
          </p>
          <div className="flex flex-row-reverse mbt-[2rem] gap-4">
            <button className="bg-red-500 text-white rounded-md px-5 py-2 hover:bg-red-600 transition">
              دانلود کاتالوگ جامع
            </button>
            <button className="bg-gray-300 text-gray-700 rounded-md px-5 py-2 hover:bg-gray-400 transition">
              مشاهده محصولات
            </button>
          </div>
        </div>
      </div>

      {/* تصویر به صورت absolute و چسبیده به پایین */}
      <div className="absolute mb-[0] ml-[0] w-full overflow-hidden pointer-events-none select-none">
        <img
          src="/imges/FooterFrame.png"
          alt="Footer Graphic"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
