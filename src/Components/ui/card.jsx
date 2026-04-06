import React, { useState } from "react";

const Card = ({ product, handleAddToCart, selectedProducts }) => {
  
  const isSelected = selectedProducts.find(p => p.id === product.id);
return (
<>
  <div className="container mx-auto ">
        <div className="card bg-base-100 shadow-sm p-5">
  <div className="card-body">
     
    <div className="text-right">
       <span
  className={`badge badge-2xl rounded-full font-medium px-4 py-3 text-right
    ${product.tagType === "popular" && "bg-[#E1E7FF] text-[#9514FA]"}
    ${product.tagType === "best seller" && "bg-[#FEF3C6] text-[#BB4D00]"}
    ${product.tagType === "new" && "bg-[#DBFCE7] text-[#0A883E]"}
  `}
>
  {product.tagType}
</span>
    </div>
     <div className="">
      
       <span className="items-center inline border border-[#F2F2F2] rounded-full py-2 px-2 ">{product.icon}</span>
       <h2 className="text-xl font-bold pt-5">{product.name}</h2>
       <p className="py-3 text-[#627382] leading-5">{product.description}</p>
      <span className="text-sm text-[#627382]"><span className="font-bold text-2xl text-[#101727]">${product.price}</span>/mo</span>
     </div>
     <ul className="mt-6 flex flex-col gap-2 text-xs font-medium text-[#627382]">
       <li>
         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         <span>High-resolution image generation</span>
       </li>
       <li>
         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         <span>Customizable style templates</span>
       </li>
       <li>
         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         <span>Batch processing capabilities</span>
      </li>
       <li>
         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         <span>AI-driven image enhancements</span>
      </li>
      
     </ul>
     <div className="mt-6">
  
  <button
    onClick={() =>handleAddToCart(product)}
    className={`py-3 px-4 w-full rounded-full font-extrabold transition-all duration-300
      ${
        isSelected
          ? " bg-[#3aad4d] text-white font-bold text-sm"
          : " bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold"
      }`}
  >
    {isSelected ? "Added to Cart!" : "Buy Now"}
  </button>
 
</div>
   </div>
</div>
      </div>
</>
);
};
export default Card;


