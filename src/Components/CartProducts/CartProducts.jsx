import React from "react";


const CartProducts = ({ selectedProducts, handleRemoveFromCart, handleClearCart }) => {


  const total = selectedProducts.reduce((sum, item) => sum + item.price, 0);
  

  return (
    <>
      <div className="container mx-auto border border-[#F2F2F2] rounded-2xl p-10">
       
        <div className=" ">
           <h2 className="font-bold text-2xl text-[#101727] mb-5">Your Cart</h2>
          {selectedProducts.length === 0 ?
          <div className="h-50 flex items-center justify-center">
           <h2 className=" text-2xl">your cart is empty</h2>
          </div>
          : selectedProducts.map(item => (
        <div key={item.id} className="flex justify-between bg-[#F9FAFC] mb-5 p-5 rounded-2xl items-center">
          <div className="flex gap-4 items-center">
            <span className="items-center inline border border-[#F2F2F2] bg-white rounded-full py-2 px-2 ">{item.icon}</span>
           <div>
             <h3 className="font-semibold thxt-[20px] text-[#101727]">{item.name}</h3>
          <p className="text-[#627382]">${item.price}</p>
           </div>
          </div>

          <div className="items-center">
            <button onClick={() => handleRemoveFromCart(item.id)} className="text-[#FF3980]">
            Remove
          </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between mb-5">
          <h2 className=" text-[#627382]">Total:</h2>
          <span className="font-bold text-2xl text-[#101727] justify-end">${total}</span>
      </div>
        </div>
     
     <button 
  onClick={handleClearCart}
  className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full py-3 px-4 font-bold"
>
  Proceed to Checkout
</button>
      </div>
    </>
  );
};

export default CartProducts;



