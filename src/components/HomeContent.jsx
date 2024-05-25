"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowUp } from "react-icons/fa";

function HomeContent() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/1");
  };
  return (
    <div className="relative">
      <Image
        src="/plane.png"
        alt="plane"
        height={250}
        width={250}
        className="animate-plane absolute translate-x-[33.5%] translate-y-32"
      />
      <div className="h-screen flex flex-col z-50 justify-center items-center -translate-y-[10%]">
        <Image
          src="/99logo.png"
          alt="logo"
          height={100}
          width={100}
          className="animate-bigg"
        />
        <h1 className="font-bold text-xl text-[#032D43]">99Roommates</h1>
      </div>
      <Image
        src="/buildings.png"
        alt="buildings"
        width={50}
        height={50}
        className="w-screen absolute bottom-[70px] animate-building opacity-65"
      />
      <div className="absolute z-10 bottom-0 left-0 w-screen h-28 overflow-hidden">
        <button onClick={handleClick} className="inline">
          <Image
            src="/bus.png"
            alt="bus"
            width={120}
            height={120}
            className="absolute top-0 left-[50%] -translate-x-[50%]"
          />
          <a className="text-white font-bold absolute top-1 left-[50%] -translate-x-[50%]">
            Start
          </a>
        </button>
        <div className="h-24 bg-[#2A2A2A] w-full">
          
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
