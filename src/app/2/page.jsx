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

function Page2() {
  const [isForward, setIsForward] = useState(false);
  const [isBackward, setIsBackward] = useState(false);
  const formData = useSelector((state) => state.form.formData);

  const router = useRouter();
  const dispatch = useDispatch();
  const searchparam = useSearchParams();
  const previous = searchparam.get("previous");
  const handleButtonClick = () => {
    setIsForward((prevState) => !prevState);
    router.push("/3");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const handleBackButtonClick = () => {
    setIsBackward((prevState) => !prevState);
    router.push("/1?previous=2");
  };
  function SearchBarFallback() {
    return <>placeholder</>;
  }
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <Layout>
        <div
          className={`relative h-[90vh] ${
            previous === "3" ? "animate-moveFromLeft" : "animate-moveFromRight"
          } ${isForward ? "animate-moveToLeft" : " "} ${
            isBackward ? "animate-moveToRight" : " "
          }`}
        >
          <button onClick={handleBackButtonClick}>
            <IoIosArrowBack fontSize={25} className=" mb-4 ml-4" />
          </button>
          <Content image="/character2.png" />
          <div className="my-5 flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-xl text-center px-6">
              How old are you?
            </h1>
            <form>
              <div className="flex flex-col">
                <input
                  type="number"
                  placeholder="Age"
                  name="Age"
                  value={formData.Age}
                  onChange={handleChange}
                  className="mt-5 p-3 rounded-lg font-bold text-[#A9A9A9] pl-3"
                ></input>
                <select
                  name="Gender"
                  id="gender"
                  value={formData.Gender}
                  onChange={handleChange}
                  className="mt-5 p-3 rounded-lg font-bold text-[#A9A9A9] pl-3"
                >
                  <option value=" ">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Rather not say</option>
                </select>
              </div>
            </form>
          </div>
          <Image
            src="/buildings.png"
            alt="buildings"
            width={50}
            height={50}
            className="w-screen absolute bottom-6 left-0 opacity-65"
          />
        </div>
        <Footer onButtonClick={handleButtonClick} btn="Next" />
      </Layout>
    </Suspense>
  );
}

export default Page2;
