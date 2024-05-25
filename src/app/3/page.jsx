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

function Page3() {
  const [isForward, setIsForward] = useState(false);
  const [isBackward, setIsBackward] = useState(false);
  const formData = useSelector((state) => state.form.formData);

  const router = useRouter();
  const dispatch = useDispatch();
  const searchparam = useSearchParams();
  const previous = searchparam.get("previous");

  const handleButtonClick = () => {
    setIsForward((prevState) => !prevState);
    router.push("/4");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const handleBackButtonClick = () => {
    // Toggle the state when the button is clicked
    setIsBackward((prevState) => !prevState);
    router.push("/2?previous=3");
  };
  function SearchBarFallback() {
    return <>placeholder</>;
  }
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <Layout>
        <div
          className={`relative h-[90vh] ${
            previous === "4" ? "animate-moveFromLeft" : "animate-moveFromRight"
          } ${isForward ? "animate-moveToLeft" : " "} ${
            isBackward ? "animate-moveToRight" : " "
          }`}
        >
          <button onClick={handleBackButtonClick}>
            <IoIosArrowBack fontSize={25} className=" mb-4 ml-4" />
          </button>

          <Content image="/character3.png" />
          <div className="my-5 flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-xl text-center px-6">
              May I have your contact?
            </h1>

            <form>
              <div className="flex flex-col realative z-10">
                <input
                  type="number"
                  placeholder="Number"
                  name="Mobile Number"
                  value={formData["Mobile Number"]}
                  onChange={handleChange}
                  className="mt-5 p-3 rounded-lg font-bold text-[#A9A9A9] pl-3"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="Email Address"
                  value={formData["Email Address"]}
                  onChange={handleChange}
                  className="mt-5 p-3 rounded-lg font-bold text-[#A9A9A9] pl-3 z-50"
                />
                <input
                  type="text"
                  placeholder="Profession"
                  name="Profession"
                  value={formData.Profession}
                  onChange={handleChange}
                  className="mt-5 p-3 rounded-lg font-bold text-[#A9A9A9] pl-3 z-50"
                />
              </div>
            </form>
          </div>
          <Image
            src="/buildings.png"
            alt="buildings"
            width={50}
            height={50}
            className="w-screen absolute bottom-6 left-0 opacity-65 -z-0"
          />
        </div>
        <Footer btn="Next" onButtonClick={handleButtonClick} />
      </Layout>
    </Suspense>
  );
}

export default Page3;
