"use client";

import Image from "next/image";
import Button from "./Button";
import { SiLeaflet } from "react-icons/si";
import { PlayIcon } from "@heroicons/react/24/outline";


const Hero = () => {
  return (
    <div className="h-full p-0 text-white grid place-items-center overflow-hidden">
      <div className="w-full h-auto flex flex-col lg:flex-row lg:gap-2 justify-between">
        <div className="hidden lg:grid place-items-center p-2">
          <div className="rounded-full p-3 border border-transparent hover:border-gray-400/30 duration-500 group">
            <div className="rounded-full border border-gray-400 p-4 group-hover:border-[#6ea713] duration-500">
              <SiLeaflet size={25} className="rotate-[250deg] text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex flex-grow flex-col gap-6">
          <div
            className={`flex w-full justify-center text-9xl sm:text-[180px] md:text-[250px] font-black uppercase tracking-tighter duration-700]`}
          >
            <span
              className="z-[13] translate-x-6 md:translate-x-14"
              style={{ textShadow: "1px 1px 10px black" }}
            >
              a
            </span>
            <span
              className="z-[12] translate-x-0 md:translate-x-4"
              style={{ textShadow: "1px 1px 10px black" }}
            >
              o
            </span>
            <span
              className="z-[11] -translate-x-6"
              style={{ textShadow: "1px 1px 10px black" }}
            >
              v
            </span>
            <span
              className="z-[10] -translate-x-10 md:-translate-x-12"
              style={{ textShadow: "1px 1px 10px black" }}
            >
              e
            </span>
          </div>
          <div className="w-full flex justify-center sm:-mt-6">
            <p className="text-center text-sm sm:text-base max-w-xs sm:max-w-md">
              As an environmental charity we&apos;re on a mission to make it
              simple for everyone to help the environment by planting each one
              tree!{" "}
            </p>
          </div>
          <div className="mx-auto pt-4 pb-6 sm:pt-0">
            <Button
              className=" px-10 py-4 text-sm sm:text-base cursor-pointer hover:bg-[#6ea713]/60 transition w-fit bg-[#6ea713] rounded-bl-full rounded-tl-full rounded-br-full"
              onClick={() => {}}
            >
              <span className="font-medium text-white tracking-widest uppercase">
                Plant a tree now
              </span>
            </Button>
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <div className="h-44 w-full min-[400px]:w-96 relative flex items-center">
              <Image
                src={"/assets/VIDEO-BG.jpg"}
                fill
                alt="Video background"
                className=" object-cover object-bottom min-[400px]:rounded-xl"
              />
              <Button
                className="absolute border rounded-full p-2 left-8 border-gray-300/70 duration-500 hover:border-[#6ea713] group"
                onClick={() => {}}
              >
                <div className="p-2 rounded-full bg-[#6ea713] border border-transparent group-hover:bg-transparent group-hover:border-gray-300/70 duration-500">
                  <PlayIcon className="h-8 w-8 text-white font-thin" />
                </div>
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="flex lg:hidden justify-around items-center">
          <div className="grid place-items-center p-2">
            <div className="rounded-full p-3 border border-transparent hover:border-gray-400/30 duration-500 group">
              <div className="rounded-full border border-gray-400 p-4 group-hover:border-[#6ea713] duration-500">
                <SiLeaflet
                  size={25}
                  className="rotate-[250deg] text-gray-400"
                />
              </div>
            </div>
          </div>
          <div className="grid place-items-center p-2">
            <div className="rounded-full p-3 border border-gray-400/30">
              <div className="rounded-full border p-4 border-[#6ea713]">
                <SiLeaflet size={25} className="rotate-[65deg] text-gray-400" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="hidden lg:grid place-items-center p-2">
          <div className="rounded-full p-3 border border-gray-400/30">
            <div className="rounded-full border p-4 border-[#6ea713]">
              <SiLeaflet size={25} className="rotate-[65deg] text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
