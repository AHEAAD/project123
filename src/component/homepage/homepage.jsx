import React from "react";

import Firstsub from "./firstsub";
import Secondpage from "./secondpage";
import { cardstas, hospitems, steps } from "../../data/db";
import Keyfeatures from "./keyfeatures";
import Steps from "./steps";
import Testimonial from "./testimonial";
import FAQs from "./faqs";
import Gettheapp from "./gettheapp";



function Homepage() {
  return (
   <div> <div
      className="bg-cover h-full w-full  bg-no-repeat px-[75px]"
    >
      
        
        
        <Firstsub path="home" />
        <Secondpage cardstas={cardstas} position="flex-row-reverse" /></div>
       
  
      <Keyfeatures  position={"flex-row"}  />
        
        <Steps     />
        <Testimonial  /> 
       <FAQs    />
         <Gettheapp  />
      
    </div>
  );
}

export default Homepage;
