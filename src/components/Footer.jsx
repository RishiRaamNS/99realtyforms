import React from "react";
import Image from "next/image";

function Footer({ btn, onButtonClick }) {
  return (
    <div className="absolute z-[10] bottom-0 left-0 min-h-[150px] w-full overflow-hidden">
      <button onClick={onButtonClick} className="inline">
        <Image
          src="/bus2.png"
          alt="bus"
          width={120}
          height={120}
          className="absolute top-0 left-[50%] -translate-x-[50%]"
        />
        <a className="text-white font-bold absolute top-1 left-[50%] -translate-x-[50%]">
          {btn}
        </a>
      </button>
      <div className="h-24 bg-[#2A2A2A] w-full">
        <p className="text-white text-xs font-medium absolute bottom-2 right-2">Powered by 99Groups</p>
      </div>
    </div>
  );
}

export default Footer;
