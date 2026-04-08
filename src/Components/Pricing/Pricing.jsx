import React from "react";
import vectorIcon from "../../assets/Vector.png"

const Pricing = () => {
  return (
    <>
      <div className=" py-30 ">
          <div className="container mx-auto justify-center">
            <div className="pb-10 text-center">
                 <h2 className=" text-[#101727] font-extrabold  text-xl md:text-3xl lg:text-5xl">Simple, Transparent Pricing</h2>
                 <p className="text-[#627382] text-[12px] md:text-[14px] lg:text-[16px] pt-5">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
   
    <div className="flex-none md:flex lg:flex justify-center gap-6">
      <div className="border border-[#F1F1F1] p-8 rounded-2xl bg-[#F9FAFC] ">
                <div className="">
                
                </div>
                <h3 className="font-bold text-xl text-[#101727] ">Starter</h3>
                <p className="text-[#627382] leading-5 pt-2">Perfect for getting started</p>
                <p className="justify-center items-center py-6 text-[#627382]"><span className="font-bold text-3xl text-[#101727]">$0</span>/month</p>
                <div className="pb-6 text-[#627382] ">
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p>Access to 10 free tools</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p>Basic templates</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p>Community support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p>1 project per month</p>
                  </div>
                </div>
                <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-2 py-1.5 text-white font-medium text-center">Get Started Free</div>
            </div>
      <div className="border border-[#F1F1F1] p-8 rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
                 <div className="text-center">
                   <span className="bg-[#FEF3C6] text-[#BB4D00] rounded-full px-4 py-2 ">Most Popular</span>
               </div>
                <h3 className="font-bold text-xl text-white ">Pro</h3>
                <p className="text-white opacity-80 leading-5 pt-2">Best for professionals</p>
                <p className="justify-center items-center py-6 text-white "><span className="font-bold text-3xl text-white">$29</span>/month</p>
                <div className="pb-6 text-white ">
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p className="opacity-80">Access to 10 free tools</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p className="opacity-80">Basic templates</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p className="opacity-80">Community support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p className="opacity-80">1 project per month</p>
                  </div>
                </div>
                <div className="bg-white text-[#9514FA] rounded-full px-2 py-1.5 font-medium text-center">Get Started Free</div>
            </div>
      <div className="border border-[#F1F1F1] p-8 rounded-2xl bg-[#F9FAFC] ">
                <div className="">
                
                </div>
                <h3 className="font-bold text-xl text-[#101727] ">Enterprise</h3>
                <p className="text-[#627382] leading-5 pt-2">For teams and businesses</p>
                <p className="justify-center items-center py-6 text-[#627382]"><span className="font-bold text-3xl text-[#101727]">$99</span>/month</p>
                <div className="pb-6 text-[#627382] ">
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p>Access to 10 free tools</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p>Basic templates</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p>Community support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={vectorIcon} alt=""  className="w-4 h-4"/>
                    <p>1 project per month</p>
                  </div>
                </div>
                <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-2 py-1.5 text-white font-medium text-center">Get Started Free</div>
            </div>
                
    </div>
    
  </div>
      </div> 
   
    </>
  );
};
export default Pricing ;
