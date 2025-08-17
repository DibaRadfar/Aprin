"use client";
import { useState } from "react";
import Link from "next/link";

export default function Menumobile({ scrollToSection }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="Menu block md:hidden relative">
      <div className="w-full bg-[#EF4056] h-[2.813rem]"></div>
      <div className="navbar bg-transparent absolute top-2 right-2 text-2xl w-full shadow-sm">
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={toggleMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <ul
          id="mobile-menu"
          className="menu menu-sm bg-[#EF4056] shadow p-2 rounded-box w-full absolute z-10"
        >
          <li>
            <button
              onClick={() => {
                scrollToSection("Bestselling");
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              دسته بندی ها{" "}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("serviceprint");
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              سفارش بر اساس کاربرد
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("section3");
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              مرکز دانلود{" "}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("section4");
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              فروشگاه
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("Blog");
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              وبلاگ{" "}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("Footer");
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              تماس با ما
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
