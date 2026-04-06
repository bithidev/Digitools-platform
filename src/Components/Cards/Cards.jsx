import React, { use, useState } from "react";
import Products from "../ProductsCards/ProductsCards";
import BuyNowProducts from "../BuyNowProducts/BuyNowProducts";

const Cards = ({cardsPromise}) => {
  
  const cards = use(cardsPromise);
  
  const [selectedType, setSelectedType] = useState("products");
  return (
    <>
     <div className="py-30">
      <div className="container mx-auto text-center ">
        <h2 className="text-[#101727] font-extrabold text-xl md:text-3xl lg:text-5xl">Premium Digital Tools</h2>
        <p className="text-[#627382] pt-5 text-[12px] md:text-[14px] lg:text-[16px]">Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
        <div className="
        ">
          
          <div>
              <button
          onClick={() => setSelectedType("products")}
           className={`btn ${selectedType === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} rounded-full `}>Products</button>
          <button 
          onClick={() => setSelectedType("cart")}
          className={`btn ${selectedType === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} rounded-full`}>Cart (0)</button>
          </div>
          
        </div>
      </div>
       {selectedType === "products" ? <Products cards={cards} /> : <BuyNowProducts/>}
     </div>
      
      
    </>
  );
};
export default Cards;
