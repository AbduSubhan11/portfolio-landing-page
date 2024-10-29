import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="space-y-10 mt-32">
      {/* ABOUT */}
      <div className="md:flex justify-center md:space-x-32 md:space-y-0 space-y-16">
        {/* LEFT */}
        <div className="md:w-[1120px] space-y-10 ">
          <h1 className="md:text-[4vw] text-[10vw] font-medium text-[#181717] leading-[58.32px]">
            Hi I am Mehmet Akif Karasu, 3D artist & sculptor.
          </h1>
          <p className="font-normal text-[#606060] md:text-[2vw] text-[6vw] leading-9">
            {" "}
            My work is mainly focused on third-dimension modeling, texturing and
            rendering. I like exploring the creatures with a touch of dark
            surrealism for characters and production.
          </p>
          <p className="font-normal text-[#606060] md:text-[2vw] text-[6vw] leading-9">
            {" "}
            Now I am an interactive media design student in Istanbul ⏤ currently
            freelancing and seeking internship opportunities.
          </p>
        </div>
        {/* RIGHT */}
        <div>
          <Image
            src="/Image/hero.jfif"
            alt="hero"
            width={1000}
            height={100}
            className="md:w-[421px] w-full"
          />
        </div>
      </div>

      {/* INFO */}
      <div className="md:w-[623px] gap-10 space-y-10">
        <div className="md:flex gap-10 md:space-y-0 space-y-5">
          <h1 className="font-medium text-[18px] underline">MainSoftware</h1>
          <div className="space-y-4">
            <p className="text-[18px] font-normal">
              Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold
              Renderer, Blender, Forger
            </p>
            <p className="text-[18px] font-normal">Adobe CC, Figma, Ableton</p>
          </div>
        </div>
        <div className="md:flex gap-16  md:space-y-0 space-y-5">
          <h1 className="font-medium text-[18px] underline">MainSkills</h1>
          <p className="font-normal text-[18px]">
            Organic and Polygonal Modeling, UV Layout, Texturing, Retopology,
            Ilustration, Sound Design
          </p>
        </div>
      </div>

      {/* CONTACT */}
      {/* <div className="border-t-2 border-black flex justify-between py-10">
        <div className=" w-[347px]">
          <h2 className="text-[32px] leading-9">
            I am thrilled to answer to your next project ➔
          </h2>
        </div>
        <div className="space-y-5 px-10">
          <h2 className="font-normal text-[32px]">makifkarasu@outlook.com</h2>
          <p className="font-normal text-[18px]">View Resume</p>
        </div>
      </div> */}
    </div>
  );
}

export default page;
