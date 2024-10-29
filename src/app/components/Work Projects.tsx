import Image from "next/image";
import React from "react";

function WorkProjects({
  ProjectNumber,
  para1,
  para2,
  link,
  linkColor,
  svg,
  image,

}: {
  ProjectNumber: number;
  para1: string;
  para2?: string;
  link: string;
  linkColor?:number
  svg?: React.ReactNode;
  image:string
}) {
  return (
    <div className="md:flex justify-between border-b-2 border-[#606060] md:py-10 py-10 ">
      {/* LEFT */}
      <div className="space-y-5">
        <h1 className="text-[18px] font-medium">
          0{ProjectNumber} / PROJECT NAME
        </h1>
        <div className="md:w-[365px] md:h-[169px] space-y-8">
          <p className="text-[#181717] font-normal text-[18px] leading-5">
            {para1}
          </p>
          <p className="text-[#606060] font-normal leading-4 text-[14px]">
            {para2}
          </p>
        </div>
        <div className="flex items-center w-fit space-x-1 py-24">
          <h1 className={`font-medium text-[18px] leading-5 underline text-[#${linkColor}]`}>
            {link}
          </h1>
          {svg}
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <Image src={image} alt="image" width={1000} height={100} className="md:w-[40vw] w-[90vw] h-[364.68px]"/>
      </div>
    </div>
  );
}

export default WorkProjects;
