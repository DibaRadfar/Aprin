"use client";
import Menumobile from "@/components/Menu/Menumobile.jsx";
import Header from "@/components/Header/Header.jsx";
import Menu from "@/components/Menu/Menu.jsx";
import Phone from "@/components/Menu/Phone.jsx";
import Baners from "@/components/Baners/Baners.jsx";
import Bestselling from "@/components/Bestselling/Bestselling.jsx";
import Exclusive from "@/components/Exclusive/Exclusive.jsx";
import Exhibition from "@/components/Exhibition/Exhibition.jsx";
import Printingservice from "@/components/serviceprint/Printingservices.jsx";
import Office from "@/components/Office/Office.jsx";
import Blog from "@/components/Blog/Blog.jsx";
import Frequently from "@/components/Frequently/Frequently.jsx";
import Customer from "@/components/Customers/Customers.jsx";
import Aboutus from "@/components/Aboutus/Aboutus.jsx";
import Topoffooter from '@/components/Topoffooter/Topoffooter.jsx';
import Footer from "@/components/Footer/Footer.jsx";


export default function LandingPage() {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main dir="rtl" className="flex flex-col w-full overflow-x-hidden">
      <Menumobile scrollToSection={scrollToSection}/>
      <Header />
      <div className="flex flex-row w-full">
        <Menu scrollToSection={scrollToSection} />
      <div className="hidden md:block">
        <Phone/>
      </div> 
      </div>
      <Baners />
      <Bestselling id="Bestselling" />
      <Exclusive />
      <Exhibition />
      <Printingservice id="serviceprint" />
      <Office />
      <Blog id="Blog" />
      <Frequently />
      <Customer />
      <Aboutus />
      <Topoffooter />
      <Footer id="Footer" />
    </main>
  );
}
