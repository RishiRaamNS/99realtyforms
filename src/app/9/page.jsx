"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Layout from "@/components/Layout";
import Content from "@/components/content";
import { useRouter, useSearchParams } from "next/navigation";
import { updateFormData } from "@/store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { Suspense } from "react";

function Page9() {
  const [isForward, setIsForward] = useState(false);
  const [isBackward, setIsBackward] = useState(false);
  const formData = useSelector((state) => state.form.formData);
  const router = useRouter();
  const dispatch = useDispatch();
  const searchparam = useSearchParams();
  const previous = searchparam.get("previous");
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (formData) {
        axios.post(
          "https://us-central1-realtyforms99.cloudfunctions.net/submitform",
          formData,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        );
        setIsForward((prevState) => !prevState);
        router.push("/success");
      } else {
        console.log("no form data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleBackButtonClick = () => {
    setIsBackward((prevState) => !prevState);
    router.push("/8?previous=9");
  };
  function SearchBarFallback() {
    return <>placeholder</>;
  }
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <Layout>
        <div
          className={`relative h-[90vh] animate-moveFromRight ${
            isForward ? "animate-moveToLeft" : " "
          } ${isBackward ? "animate-moveToRight" : " "}`}
        >
          <button onClick={handleBackButtonClick}>
            <IoIosArrowBack fontSize={25} className=" mb-4 ml-4" />
          </button>
          <Content image="/character9.png" />
          <div className="my-5 flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-xl text-center px-6">
              Do you have any additional requirements for your room?
            </h1>

            <div className="flex flex-col z-10">
              <textarea
                name="Requirements"
                id="requirements"
                rows="4"
                cols="30"
                placeholder="Please share your requirements here"
                value={formData.Requirements}
                onChange={handleChange}
                className="mt-5 p-3 rounded-lg font-bold text-[#A9A9A9] pl-3"
              ></textarea>
            </div>
          </div>
          <Image
            src="/buildings.png"
            alt="buildings"
            width={50}
            height={50}
            className="w-screen opacity-65 absolute bottom-6 left-0"
          />
        </div>
        <div className="absolute z-10 bottom-0 left-0 w-screen h-28 overflow-hidden">
          <button onClick={handleSubmit} className="inline">
            <Image
              src="/bus.png"
              alt="bus"
              width={100}
              height={100}
              className="absolute top-0 left-[50%] -translate-x-[50%]"
            />
            <a className="text-white font-bold absolute top-1 left-[50%] -translate-x-[50%]">
              Next
            </a>
          </button>

          <div className="h-24 bg-[#2A2A2A] w-full"></div>
        </div>
      </Layout>
    </Suspense>
  );
}

export default Page9;
