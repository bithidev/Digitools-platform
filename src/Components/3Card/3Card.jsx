import React from "react";
import card3Img1 from "../../assets/user.png"
import card3Img2 from "../../assets/package.png"
import card3Img3 from "../../assets/rocket.png"

const Card3 = () => {
  return (
    <>
      <div className="bg-[#F9FAFC] py-30 ">
          <div className="container mx-auto justify-center items-center text-center ">
            <div className="pb-10">
                 <h2 className=" text-[#101727] font-extrabold text-xl md:text-3xl lg:text-5xl">Get Started in 3 Steps</h2>
                 <p className="text-[#627382] text-[12px] md:text-[14px] lg:text-[16px] pt-5">Start using premium digital tools in minutes, not hours.</p>
            </div>
   
    <div className="flex-none md:flex lg:flex justify-center gap-6 ">
      <div className="border border-[#F1F1F1] p-8 md:p-3 lg:p-8 rounded-2xl bg-white ">
                <div className="">
                  <div className="text-right pb-10">
                   <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 rounded-full px-2 py-1.5 text-white font-extrabold text-center">01</span> 
                  </div>
                  
                <img src={card3Img1} alt="" className="items-center inline bg-[#f4e8fe] rounded-full py-2 px-2"/>
                </div>
                <h3 className="font-bold text-xl text-[#101727] py-4">Create Account</h3>
                <p className="text-[#627382] leading-5 pb-8">Sign up for free in seconds. No credit card <br />required to get started.</p>
            </div>
      <div className="border border-[#F1F1F1] p-8 rounded-2xl bg-white">
                <div className="">
                  <div className="text-right pb-10">
                   <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 rounded-full px-2 py-1.5 text-white font-extrabold text-center">02</span> 
                  </div>
                <img src={card3Img2} alt="" className="items-center inline bg-[#f4e8fe] rounded-full py-2 px-2"/>
                </div>
                <h3 className="font-bold text-xl text-[#101727] py-4">Choose Products</h3>
                <p className="text-[#627382] leading-5 pb-8">Browse our catalog and select the tools <br/>that fit your needs.</p>
            </div>
      <div className="border border-[#F1F1F1] p-8 rounded-2xl bg-white">
                <div className="">
                  <div className="text-right pb-10">
                   <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 rounded-full px-2 py-1.5 text-white font-extrabold text-center">03</span> 
                  </div>
                <img src={card3Img3} alt="" className="items-center inline bg-[#f4e8fe] rounded-full py-2 px-2 "/>
                </div>
                <h3 className="font-bold text-xl text-[#101727] py-4">Start Creating</h3>
                <p className="text-[#627382] leading-5 pb-8">Download and start using your premium <br />tools immediately.</p>
            </div>
      
                
    </div>
    
  </div>
      </div> 
   
    </>
  );
};
export default Card3 ;
