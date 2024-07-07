"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Content from "@/components/content";
import Footer from "@/components/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import { updateFormData } from "@/store/store";
import { useDispatch } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { IoHomeSharp } from "react-icons/io5";

function Page5() {
  const [isForward, setIsForward] = useState(false);
  const [isBackward, setIsBackward] = useState(false);
  const [value, setValue] = useState(500);
  const router = useRouter();
  const dispatch = useDispatch();
  const searchparam = useSearchParams();
  const previous = searchparam.get("previous");
  const formData = useSelector((state) => state.form.formData);

  let price;
  const handleButtonClick = () => {
    // Toggle the state when the button is clicked
    setIsForward((prevState) => !prevState);
    router.push("/6");
  };
  const handleBackButtonClick = () => {
    setIsBackward((prevState) => !prevState);
    router.push("/4?previous=5");
  };
  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };
  function SearchBarFallback() {
    return <>placeholder</>;
  }
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <Layout>
        <div
          className={`relative h-[95vh] ${
            previous === "6" ? "animate-moveFromLeft" : "animate-moveFromRight"
          } ${isForward ? "animate-moveToLeft" : " "} ${
            isBackward ? "animate-moveToRight" : " "
          }`}
        >
          <button
            onClick={handleBackButtonClick}
            className="absolute z-[8] lg:top-[45%] p-2 lg:bg-white/50 lg:rounded-full left-2 top-5 lg:left-10"
          >
            <IoIosArrowBack fontSize={25} className="" />
          </button>
          <div className="pt-20 lg:pt-10"></div>
          <Content image="/character5.png" />
          <div className="my-5 flex flex-col justify-center items-center relative z-[5]">
            <h1 className="text-white font-bold text-xl text-center px-6">
              What is your budget?
            </h1>

            <form className="flex mt-5">
              <div className="">
                <div className="flex justify-center">
                  <IoHomeSharp className="text-xl text-blue-600 " />
                </div>
                <h1 className="text-white text-sm text-center">$200</h1>
              </div>
              <div className="flex flex-col z-10 mt-1">
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="200"
                  name="Pricing"
                  value={formData.Pricing}
                  onChange={handleChange}
                  className=" w-full border-none focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
                />
                <span className="text-center mt-2 text-base text-white font-bold ">
                  ${formData.Pricing}
                </span>
              </div>
              <div className="">
                <div className="flex justify-center">
                  <IoHomeSharp className="text-xl text-blue-600 " />
                </div>
                <h1 className="text-white text-sm text-center">$3000</h1>
              </div>
            </form>
          </div>
          <Image
            src="/rounds.png"
            alt="rounds"
            width={200}
            height={200}
            className=" m-auto absolute lg:top-[50px] top-[90px] lg:left-[43%] left-[23%]"
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

export default Page5;
