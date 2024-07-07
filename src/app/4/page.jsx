"use client";
import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Content from "@/components/content";
import Footer from "@/components/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateFormData } from "@/store/store";
import { IoIosArrowBack } from "react-icons/io";
import { Suspense } from "react";
import { useSelector } from "react-redux";

function Page4() {
  const [isForward, setIsForward] = useState(false);
  const [isBackward, setIsBackward] = useState(false);
  const router = useRouter();
  const searchparam = useSearchParams();
  const dispatch = useDispatch();

  const previous = searchparam.get("previous");
  const formData = useSelector((state) => state.form.formData);

  const handleButtonClick = () => {
    // Toggle the state when the button is clicked
    setIsForward((prevState) => !prevState);
    router.push("/5");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };
  const handleBackButtonClick = () => {
    // Toggle the state when the button is clicked
    setIsBackward((prevState) => !prevState);
    router.push("/3?previous=4");
  };
  function SearchBarFallback() {
    return <>placeholder</>;
  }
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <Layout>
        <div
          className={`relative h-[95vh] ${
            previous === "5" ? "animate-moveFromLeft" : "animate-moveFromRight"
          } ${isForward ? "animate-moveToLeft" : " "} ${
            isBackward ? "animate-moveToRight" : " "
          }`}
        >
          <button
            onClick={handleBackButtonClick}
            className="absolute z-[5] lg:top-[35%] p-2 lg:bg-white/50 lg:rounded-full left-2 top-5 lg:left-10"
          >
            <IoIosArrowBack fontSize={25} className="" />
          </button>
          <div className="pt-20 lg:pt-0"></div>
          <Content image="/character4.png" />
          <div className="my-5 flex flex-col justify-center items-center relative z-[2]">
            <h1 className="text-white font-bold text-xl text-center px-6">
              Preferred Location?
            </h1>

            <form>
              <div className="flex flex-col z-10">
                <input
                  type="text"
                  placeholder="City"
                  name="City"
                  value={formData.City}
                  onChange={handleChange}
                  className="mt-5 p-3 rounded-lg font-bold text-[#A9A9A9] pl-3 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Street"
                  name="Street"
                  value={formData.Street}
                  onChange={handleChange}
                  className="mt-5 p-3 rounded-lg font-bold text-[#A9A9A9] pl-3 focus:outline-none"
                />
              </div>
            </form>
          </div>
          <Image
            src="/rounds.png"
            alt="rounds"
            width={200}
            height={200}
            className=" m-auto absolute lg:top-[20px] top-[90px] lg:left-[43%] left-[23%]"
          />
          <Image
            src="/buildimg.png"
            alt="buildings"
            width={50}
            height={50}
            className="w-screen absolute h-[200px] lg:h-[150px] object-cover bottom-6 left-0  mb-[50px]"
          />
        </div>
        <div className="pt-[10px]"></div>
        <Footer onButtonClick={handleButtonClick} btn="Next" />
      </Layout>
    </Suspense>
  );
}

export default Page4;
