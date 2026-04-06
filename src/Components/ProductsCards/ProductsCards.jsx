import React from "react";
import Card from "../ui/card";


const ProductsCards = ({products, handleAddToCart, selectedProducts}) => {
  
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-10 mt-5">
      {products.map((product) =>{
      return (
        
        <Card 
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
          selectedProducts={selectedProducts}
         />
      );
    })}
      
    </div>
    </>
  );
};

export default ProductsCards;