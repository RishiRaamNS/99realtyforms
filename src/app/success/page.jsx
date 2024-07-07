import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
function Success() {
  return (
    <Layout>
      <div className="relative h-[90vh] animate-moveFromRight">
        <div className="relative z-[2]">
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
            src="/success.png"
            alt="character 1"
            width={300}
            height={300}
            className="mx-auto absolute left-[50%] -translate-x-[50%] -translate-y-[100%]"
          />
          
        </div>
        <div className="my-5 flex flex-col justify-center items-center relative z-[2]">
          <h1 className="text-white font-bold text-xl text-center px-6">
            Let us match you with the
            <br />
            <span className="text-3xl">Perfect One</span>
          </h1>
        </div>
        <Image
          src="/successbuild.png"
          alt="buildings"
          width={50}
          height={50}
          className="w-screen absolute h-[200px]  bottom-6 left-0 object-right object-cover mb-[50px]"
        />
      </div>
      <div className="pt-[50px]"></div>
      <Footer next="#" btn="Reached" />
    </Layout>
  );
}

export default Success;
