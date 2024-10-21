import React from "react";
import { hospitems  } from "../../data/db";



function Keyfeatures({ data, position,}) {
  return (
    <div style={{ backgroundImage: `url("/pictures/Frame.jpg")`}}>
     <div className="px-[75px] pt-1"> <p className="mt-[120px] text-4xl  font-semibold text-nurse-300 border-b border-blue-500 pb-12 ">
          Key Features
        </p>
      {hospitems.map((item, id) => (
        <div key={id} className=  {` flex ${position} items-center gap-12 mb-32 mt-24` }>
          <div className=" w-[45%] flex  ">
            <img src={item.universe} className="  " alt="" />
          </div>
          <div className=" flex flex-col gap-7">
            <h1 className="font-medium  text-4xl">{item.header}</h1>
            
            
            {
              item.link.map((link, id) => (
                <div key={id}>
                  <h1 className="font-medium text-nurse-300 text-2xl">{link.subhead}</h1>
                  <h3 className="font-light text-nurse-500 text-xl">{link.desc}</h3>
                </div>
              ))
            }
          </div>
        </div>
      ))}</div>
    </div>
  );
}

export default Keyfeatures;
