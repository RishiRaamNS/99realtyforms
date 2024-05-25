import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
function Success() {
  return (
    <Layout>
      <div className="relative h-[90vh] animate-moveFromRight">
        <div className="relative">
          <Image
            src="/round1.png"
            alt="round1"
            width={200}
            height={200}
            className="mx-auto"
          />
          <Image
            src="/round2.png"
            alt="round2"
            width={150}
            height={150}
            className="mx-auto absolute left-[50%] -translate-x-[50%] -translate-y-[115%]"
          />
          <Image
            src="/success1.png"
            alt="character 1"
            width={70}
            height={70}
            className="mx-auto absolute left-[30%] -translate-x-[50%] -translate-y-[100%]"
          />
          <Image
            src="/success2.png"
            alt="character 2"
            width={100}
            height={100}
            className="mx-auto absolute left-[45%] -translate-x-[50%] -translate-y-[110%]"
          />
          <Image
            src="/character5.png"
            alt="character 3"
            width={200}
            height={200}
            className="mx-auto absolute left-[60%] -translate-x-[50%] -translate-y-[100%]"
          />
          <Image
            src="/character9.png"
            alt="character 5"
            width={200}
            height={200}
            className="mx-auto absolute left-[75%] -translate-x-[50%] -translate-y-[100%]"
          />
        </div>
        <div className="my-5 flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-xl text-center px-6">
            Let us match you with the
            <br />
            <span className="text-3xl">Perfect One</span>
          </h1>
        </div>
        <Image
          src="/buildings.png"
          alt="buildings"
          width={50}
          height={50}
          className="w-screen absolute opacity-65 bottom-6 left-0"
        />
        <Image
          src="/home.png"
          alt="home"
          width={100}
          height={100}
          className="fixed z-10 -right-9 bottom-20"
        />
      </div>
      <Footer next="#" btn="Reached" />
    </Layout>
  );
}

export default Success;
