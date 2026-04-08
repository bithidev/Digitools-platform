import React from "react";
import { BsCart } from "react-icons/bs";

import logoImg from "../../assets/DigiTools.png"
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 container mx-auto justify-between mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
  <div className="">
  
    <img src={logoImg} alt="" />
  </div>

  <div className="flex gap-5 justify-center items-center">
    <ul className="flex gap-6 font-semibold text-[#101727]">
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonial</li>
        <li>FAQ</li>
      </ul>
  </div>

  <div className="flex justify-end items-center gap-4">
    <BsCart />
      <button className="font-semibold text-[#101727]">Login</button>
    <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5 py-2.5 rounded-full font-semibold text-white">Get Started</button>
  </div>
</div>
<div className="divider mb-0"></div>
   
    </>
  );
};
export default Navbar;
