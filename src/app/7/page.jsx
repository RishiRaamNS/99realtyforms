"use client";
import React, { useState } from "react";
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

function Page7() {
  const [isForward, setIsForward] = useState(false);
  const [isBackward, setIsBackward] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const searchparam = useSearchParams();
  const previous = searchparam.get("previous");
    const formData = useSelector((state) => state.form.formData);

  const handleButtonClick = () => {
    setIsForward((prevState) => !prevState);
    router.push("/8");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };
  const handleBackButtonClick = () => {
    setIsBackward((prevState) => !prevState);
    router.push("/6?previous=7");
  };
  function SearchBarFallback() {
    return <>placeholder</>;
  }
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <Layout>
        <div
          className={`relative h-[90vh] ${
            previous === "8" ? "animate-moveFromLeft" : "animate-moveFromRight"
          } ${isForward ? "animate-moveToLeft" : " "} ${
            isBackward ? "animate-moveToRight" : " "
          }`}
        >
          <button onClick={handleBackButtonClick}>
            <IoIosArrowBack fontSize={25} className=" mb-4 ml-4" />
          </button>
          <Content image="/character7.png" />
          <div className="my-5 flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-xl text-center px-6">
              How much can you contribute to the rent?
            </h1>

            <form>
              <div className="flex flex-col z-10">
                <input
                  type="number"
                  placeholder="Amount or Percentage"
                  name="Contribution"
                  value={formData.Contribution}
                  onChange={handleChange}
                  className="mt-5 p-3 rounded-lg font-bold text-[#A9A9A9] pl-3 "
                />
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

export default Page7;
