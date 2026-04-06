
import { Suspense, useState } from 'react'
import './App.css'
import Card3 from './Components/3Card/3Card'
import Count from './Components/Count/count'
import Footer from './Components/footer/footer'
import Banner from './Components/navbar/banner/Banner'
import Navbar from './Components/navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'
import ToolsProducts from './Components/ToolsProducts/toolsProducts'
import { ToastContainer } from 'react-toastify'


const fetchProduct = async()=> {
const rest = await fetch("/data.json");
return rest.json();
};
function App() {
const cardsPromise = fetchProduct();

  return (
    <>
      <Navbar/>
      <Banner/>
      <Count/>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      
      <ToolsProducts cardsPromise={cardsPromise} />
    </Suspense>
    
      <Card3/>
      <Pricing/>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
