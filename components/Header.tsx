"use client";

import Link from "next/link";
import {
  ShoppingCartIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-row justify-between px-6 py-4">
      {/* Logo section */}
      <div className="relative z-50 flex items-center">
        <h1 className="text-xl lg:text-2xl tracking-[.25em] text-white font-bold">
          AOVE<span className="text-gray-300 font-thin">CBD</span>
        </h1>
        <span className="border-b-2 border-[#95de1d] h-0 w-20 absolute -z-10 top-[50%]"></span>
      </div>
      {/* Menu section */}
      <div className="hidden md:flex gap-6 items-center uppercase text-sm lg:text-base text-white">
        <Link
          href={"/"}
          className="text-gray-300 duration-500 px-6 py-2 border border-[#6ea713] rounded-tl-full rounded-bl-full rounded-br-full"
        >
          <p>Home</p>
        </Link>
        <Link href={"/"} className="hover:text-gray-300 duration-500 px-6 py-2 border border-transparent hover:border-[#6ea713] rounded-tl-full rounded-bl-full rounded-br-full ">
          <p>Info</p>
        </Link>
        <Link href={"/"} className="hover:text-gray-300 duration-500 px-6 py-2 border border-transparent hover:border-[#6ea713] rounded-tl-full rounded-bl-full rounded-br-full">
          <p>Products</p>
        </Link>
      </div>
      {/* Cart section */}
      <div className="hidden md:grid place-items-center">
        <ShoppingCartIcon className="h-6 w-6 lg:h-7 lg:w-7 text-white cursor-pointer hover:text-gray-300 transition " />
      </div>
      <div onClick={toggleMenu} className="grid place-items-center md:hidden">
        <Bars4Icon className="h-6 w-6 lg:h-7 lg:w-7 text-white cursor-pointer hover:text-gray-300 transition " />
      </div>
      {/* Mobile menu */}
      <div
        className={` overflow-hidden
          ${
            isOpen
              ? "absolute z-40 top-0 left-0 right-0 bottom-0 duration-500"
              : "absolute -z-10 top-0 left-0 right-0 bottom-0 opacity-0 duration-500"
          }
        `}
      >
        {isOpen && (
          <div className="absolute rounded-full p-1 right-4 top-4 duration-500 z-40">
            <XMarkIcon
              onClick={toggleMenu}
              className="h-6 w-6 text-white cursor-pointer hover:text-gray-300"
            />
          </div>
        )}
        <div className="h-full w-full grid grid-cols-3 uppercase bg-gray-700">
          <div
            className={`bg-[#52796F] duration-700 grid place-items-center ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <Link href={"/"}>
              <p className="text-white text-center py-4">Home</p>
            </Link>
          </div>
          <div
            className={`bg-[#354F52] duration-700 grid place-items-center ${
              isOpen ? "translate-y-0" : "translate-y-full"
            } `}
          >
            <Link href={"/"}>
              <p className="text-white text-center py-4">Info</p>
            </Link>
          </div>
          <div
            className={`bg-[#2F3E46] duration-700 grid place-items-center ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <Link href={"/"}>
              <p className="text-white text-center py-4">Products</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
