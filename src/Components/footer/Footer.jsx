import React from "react";
import footerLogo from"../../assets/footer.png";
import instagramIcon from"../../assets/Instagram.png";
import facebookIcon from"../../assets/facebook.png";
import xIcon from"../../assets/fi_5968958.png";


const Footer = () => {
  return (
    <>
      <div className="bg-[#101727] pt-30 ">
        <div className="container mx-auto justify-around ">
         <div className="flex justify-between pb-20">
          <div>
            <img src={footerLogo} alt="" />
            <p className="text-[#ffffff93] pt-4">Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
          </div>
          <div className="text-white">
            <p>Product</p>
            <ul className="text-[#ffffff93] pt-3">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className="text-white">
            <p>Product</p>
            <ul className="text-[#ffffff93] pt-3">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className="text-white">
            <p>Product</p>
            <ul className="text-[#ffffff93]">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          
          <div className="text-white ">
            <p>Social Links</p>
            <div className=" flex pt-2 gap-5">
              <div className="w-10 h-10 rounded-full bg-white items-center justify-center text-center">
                <img src={instagramIcon} alt="" className="inline pt-2"/>
              </div>
              <div className="w-10 h-10 rounded-full bg-white items-center justify-center text-center">
                <img src={facebookIcon} alt="" className="inline pt-2"/>
              </div>
              <div className="w-10 h-10 rounded-full bg-white items-center justify-center text-center">
                <img src={xIcon} alt="" className="inline pt-2"/>
              </div>
            </div>
            

          </div>
         </div>
         
         <div className="flex text-[#ffffff93] justify-between border-t py-7 ">
          <p>© 2026 Digitools. All rights reserved.</p>
          <ul className="flex gap-4">
            <li>Privacy Policy</li>
            <li> Terms of Service</li>
            <li> Cookies</li>
          </ul>
         </div>
        </div>
      </div>
   
    </>
  );
};
export default Footer;
