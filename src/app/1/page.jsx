"use client";
import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Content from "@/components/content";
import Footer from "@/components/Footer";
import { useDispatch } from "react-redux";
import { updateFormData } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useSelector } from "react-redux";

function Page1() {
  const [isForward, setIsForward] = useState(false);
  const formData = useSelector((state) => state.form.formData);
  const router = useRouter();
  const dispatch = useDispatch();
  const searchparam = useSearchParams();
  const previous = searchparam.get("previous");
  const handleButtonClick = () => {
    setIsForward((prevState) => !prevState);
    router.push("/2");
  };
  const handleChange = (e) => {
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
            previous === "2" ? "animate-moveFromLeft" : "animate-moveFromRight"
          } ${isForward ? "animate-moveToLeft" : " "}`}
        >
        <div className="pt-20 lg:pt-0"></div>
          <Content image="/character1.png" />
          <div className="my-5 flex flex-col justify-center items-center relative z-[5]">
            <h1 className="text-white font-bold text-xl text-center px-6">
              Hey!
              <br />
              What's your name Buddy?
            </h1>
            <form>
              <input
                type="text"
                placeholder="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                className="mt-5 p-3 rounded-lg font-bold text-[#A9A9A9] pl-3 focus:outline-none"
              />
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
            className="w-screen object-cover h-[200px] lg:h-[150px] absolute bottom-6 left-0  z-[2] mb-[50px]"
          />
        </div>
        <div className="pt-[10px] "></div>
        <Footer btn="Start" onButtonClick={handleButtonClick} />
      </Layout>
    </Suspense>
  );
}

export default Page1;
