import React from "react";
import { steps } from "../../data/db";
import { Link, useNavigate } from "react-router-dom";


    



function Steps({ data, position,}) {
  const navigate = useNavigate();
    const handleNextPage = (path) => {
        navigate(path);
      };
  return (
    <div className=" border-t border-blue-500 pt-24 px-[75px]">
      {steps.map((item, id) => (
        <div key={id} className=  {` flex  items-center gap-20   w-[88%]  ` }>
          
          <div className=" flex flex-col gap-7 w-[53%]">
            <h1 className="font-medium  text-4xl">{item.header}</h1>
            <h1 className="font-medium  text-3xl">{item.sub}</h1>
            
            
            
            {
              item.link.map((link, id) => (
                <div key={id}>
                  <h1 className="font-medium text-nurse-300 text-2xl">{link.subhead}</h1>
                  <h3 className="font-light text-nurse-500 text-xl">{link.desc}</h3>
                </div>
                
              ))
            }
            
            
          </div>
          <div className=" w-[42%] flex mt-24 ">
            <img src={item.universe} className="  " alt="" />
          </div>
         
        </div>
       
       
      ))}
      <div className="mt-10 ">  
        <button className="bg-blue-500 text-white px-6 py-2 rounded-3xl hover:bg-blue-600 transition" onClick={() => handleNextPage("login")}>  
          Book Consultation  
        </button>  
      </div> 
      
    </div>
  );
}

export default Steps;
