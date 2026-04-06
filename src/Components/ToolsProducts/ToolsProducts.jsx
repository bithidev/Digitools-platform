import React, {use, useState} from "react";
import ProductsCards from "../ProductsCards/ProductsCards";
import CartProducts from "../CartProducts/cartProducts";
import { toast } from "react-toastify";

const ToolsProducts = ({cardsPromise}) => {
  const products = use(cardsPromise);
  const [selectedType, setSelectedType] = useState("products");
  

  const handleClearCart = () => {
  setSelectedProducts([]);
};

  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleAddToCart = (product) => {
  const exists = selectedProducts.find(p => p.id === product.id);
  if (!exists) {
     toast(`${product.name} is Cart`);
    setSelectedProducts([...selectedProducts, product]);
  }
};

const handleRemoveFromCart = (id) => {
  const updated = selectedProducts.filter(p => p.id !== id);
  setSelectedProducts(updated);
};
  
  
return (
  <>
  
  <div className="py-30">
      <div className="container mx-auto text-center ">
        <h2 className="text-[#101727] font-extrabold text-xl md:text-3xl lg:text-5xl">Premium Digital Tools</h2>
        <p className="text-[#627382] pt-5 text-[12px] md:text-[14px] lg:text-[16px]">Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
        <div className="
        ">
          
          <div className="pb-10 pt-5">
              <button
          onClick={() => setSelectedType("products")}
           className={`btn ${selectedType === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} rounded-full `}>Products</button>
          
          <button 
          onClick={() => setSelectedType("cart")}
          className={`btn ${selectedType === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} rounded-full`}>Cart ({selectedProducts.length})</button>


          </div>
          
        </div>
      </div>
      
       {selectedType === "products" ? (
    <ProductsCards 
       products={products} 
       handleAddToCart={handleAddToCart}
       selectedProducts={selectedProducts}
    />
  ) : (
  //  <CartProducts 
  //   selectedProducts={selectedProducts} 
  //   handleRemoveFromCart={handleRemoveFromCart}
  // />
  <CartProducts 
  selectedProducts={selectedProducts} 
  handleRemoveFromCart={handleRemoveFromCart}
  handleClearCart={handleClearCart}
/>
  )}
     </div>
      
      
  </>
);
};

export default ToolsProducts;



