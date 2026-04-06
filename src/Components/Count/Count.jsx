// import React from "react";

import { useEffect, useState } from "react";

const useCounter = (end, duration = 2000, isDecimal = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? start.toFixed(1) : Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isDecimal]);

  return count;
};

const Stats = () => {
  const users = useCounter(50000);    
  const projects = useCounter(200);    
  const rating = useCounter(4.9, 2000, true); 

  const formatK = (num) => {
    if (num >= 1000) return Math.floor(num / 1000) + "K+";
    return num + "+";
  };

  return (
    <>
     <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15 ">
      <div className="container mx-auto flex justify-around ">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-6xl font-extrabold text-white ">
        {formatK(users)}</h2>
         <p className="text-center text-lg text-white pt-3">Active Users</p>
      </div>
        <div>
           <h2 className="text-6xl font-extrabold text-white">
        {projects}+</h2>
         <p className="text-center text-lg text-white pt-3">Premium Tools</p>
        </div>
        <div>
           <h2 className="text-6xl font-extrabold text-white ">
        {rating}</h2>
         <p className="text-center text-lg  text-white pt-3">Rating</p>
        </div>

      </div>
    </div>
    </>
    
  );
};

export default Stats;