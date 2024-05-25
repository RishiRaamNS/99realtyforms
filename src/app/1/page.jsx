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
          className={`relative h-[90vh] ${
            previous === "2" ? "animate-moveFromLeft" : "animate-moveFromRight"
          } ${isForward ? "animate-moveToLeft" : " "}`}
        >
          <Content image="/character1.png" />
          <div className="my-5 flex flex-col justify-center items-center">
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
                className="mt-5 p-3 rounded-lg font-bold text-[#A9A9A9] pl-3"
              />
            </form>
          </div>
          <Image
            src="/buildings.png"
            alt="buildings"
            priority
            width={50}
            height={50}
            className="w-screen absolute bottom-10 left-0 opacity-65"
          />
        </div>

        <Footer btn="Start" onButtonClick={handleButtonClick} />
      </Layout>
    </Suspense>
  );
}

export default Page1;
