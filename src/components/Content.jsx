import React from 'react'
import Image from 'next/image';
function Content({image}) {
  return (
    <div className="relative z-[5]  mt-[-100px]">
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
        src={image}
        alt="character 1"
        width={200}
        height={200}
        className="mx-auto absolute left-[50%] -translate-x-[50%] -translate-y-[100%]"
      />
      
    </div>
  );
}

export default Content