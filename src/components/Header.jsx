import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <HiOutlineMenuAlt2 fontSize={30} />
      <div className="flex flex-col items-center justify-center">
              <Image src="/99logo.png" alt="logo" height={35} width={35} />
              <p className="text-xs font-bold">99roommates</p>
      </div>
    </div>
  );
}

export default Header;
