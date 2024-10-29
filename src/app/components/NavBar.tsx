"use client"
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
    const [isHamburger,setIsHamburger]  = useState(false)
    const hamburHandler = ()=>{
        setIsHamburger(!isHamburger)
    }
  return (
    <nav className="flex justify-between ">
      <div className="font-bold text-3xl">ma.</div>
      <div className={`md:space-x-6 font-semibold text-xl ${
          isHamburger
            ? "flex flex-col right-0 top-0 h-screen w-52 py-20 px-5 absolute space-y-5 border bg-[#f3f3f3]"
            : "md:flex hidden"
        }`}>
        <Link href={"/"}>Work</Link>
        <Link href={"/about"}>About</Link>
        <Link href={""}>Playground</Link>
        <Link href={""}>Contact</Link>
      </div>

      {/* HAMBURGER */}
      <div className="md:hidden z-20 mt-3">
        <button
          className="flex flex-col justify-between w-6 h-[18px] focus:outline-none"
          onClick={hamburHandler}
        >
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isHamburger ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-black transition-opacity duration-300 ease-in-out ${
              isHamburger ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isHamburger ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
