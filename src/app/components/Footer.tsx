import React from "react";

function Footer() {
  return (
    <footer className="md:flex justify-between items-center mt-20 md:space-y-0 space-y-10">
      <div>
        <h1 className="font-medium text-[21px] text-[#2429AF]">
          Mehmet Akif Karasu ⏤ 2020
        </h1>
      </div>
      <div className="md:flex md:space-x-6">
        <h1 className="font-medium text-[21px]">Artstation</h1>
        <h1 className="font-medium text-[21px]">Linkedin</h1>
        <h1 className="font-medium text-[21px]">Twitter</h1>
      </div>
    </footer>
  );
}

export default Footer;
