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
          className={`relative h-[90vh] ${
            previous === "6" ? "animate-moveFromLeft" : "animate-moveFromRight"
          } ${isForward ? "animate-moveToLeft" : " "} ${
            isBackward ? "animate-moveToRight" : " "
          }`}
        >
          <button onClick={handleBackButtonClick}>
            <IoIosArrowBack fontSize={25} className=" mb-4 ml-4" />
          </button>

          <Content image="/character5.png" />
          <div className="my-5 flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-xl text-center px-6">
              What is your budget?
            </h1>

            <form>
              <div className="flex flex-col z-10">
                <input
                  type="range"
                  min="500"
                  max="3000"
                  step="200"
                  name="Pricing"
                  value={formData.Pricing}
                  onChange={handleChange}
                  className="mt-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
                />
                <span className="text-center mt-2 text-base text-white font-bold ">
                  {formData.Pricing}
                </span>
              </div>
            </form>
          </div>
          <Image
            src="/buildings.png"
            alt="buildings"
            width={50}
            height={50}
            className="w-screen absolute opacity-65 bottom-6 left-0"
          />
        </div>
        <Footer onButtonClick={handleButtonClick} btn="Next" />
      </Layout>
    </Suspense>
  );
}

export default Page5;
