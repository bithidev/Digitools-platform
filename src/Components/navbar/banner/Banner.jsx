import React from "react";
import bannerImg from "../../../assets/banner.png";
import linearIcon from"../../../assets/Group 5.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <>
      <div className=" flex-row md:flex lg:flex container mx-auto justify-between items-center py-15 ">
        <div>
          <button className="flex bg-[#E1E7FF] px-5 py-2.5 rounded-full gap-2">
            <img src={linearIcon} alt="" />
            <span className="text-sm font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
             New: AI-Powered Tools Available
          </span>
          </button>
          <h1 className="font-extrabold text-xl md:text-3xl lg:text-5xl leading-8 md:leading-12 lg:leading-20 py-4">Supercharge Your <br />Digital Workflow</h1>
          <p className="text-[#627382] text-[12px] md:text-[14px] lg:text-[16px] leading-4 md:leading-5 lg:leading-7  pb-8">Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. <br />
         Explore Products</p>
         <div className="flex gap-4">
          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5 py-2.5 rounded-full font-semibold text-white">Explore Products</button>

<div>
      <button className="p-[1px] rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:shadow-lg hover:shadow-purple-500/30 transition duration-300">
        
        <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white">
          
          <CiPlay1 className="text-lg text-[#4F39F6]" />

          <span className="text-sm font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            Watch Demo
          </span>

        </span>
      </button>
    </div>

         </div>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </>
  );
};
export default Banner;
