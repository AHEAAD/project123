import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchCircleSharp } from "react-icons/io5";
import { stats } from "../../data/db";

function Firstsub({path}) {
  return (
    <div className=" flex items-center  h-[90dvh] " 
       >
      <div className="flex w-full justify-between relative h-[90%] ">
        <div className="w-[40%] ">
          <div>
            <div className="relative flex items-center justify-center">
              {path == "service" ?
              (<div>
                <p className="text-[50px] font-bold ">
                  Services  Available at Guver    
                </p>
                
                 <p className="text-[18px] font-extralight mt-5">
                 Guver is not only for urgent call,but to help book appointment and get reminders on current medication.
            </p>
              </div>) : path == "aboutus" ? (<div>
                <p className="text-[50px] font-bold ">
                About us    
                </p>
                
                 <p className="text-[18px] font-extralight mt-5">
                 We offer healthcare byoffering remote acess to medical consultation amd health monitoring.
            </p>
              </div>)
               :
              <div>
                <p className="text-[50px] font-bold ">
                  Find & Search Your Favourite Doctor
                </p>
                <img
                  src="/pictures/vec.png"
                  alt=""
                  className="absolute bottom-24  w-[40%]"
                />
                 <p className="text-[18px] font-extralight mt-5">
              Take the leap and join us today to pave the way for a brighter and healthier tomorrow. Together, we can create a future where your well-being is our top priority.
            </p>
              </div>}
            </div>
           
          </div>

          <div className="flex items-center justify-between  px-[30px] mt-4 bg-nurse-400 rounded-[40px]">
          <div className="flex items-center text-nurse-300">  <IoLocationOutline />
            <select className="outline-none">
              <option value="mainDoc"> Location </option>
              <option value="Ahaed">Tanke</option>
              <option value="Dara">Taiwo</option>
              <option value="Dara">Asa dam</option>
            </select> </div>
            <IoSearchCircleSharp className="w-[55px] h-[53px] text-nurse-300"/>
          </div>
        </div>

        <div className="bg-gradient-to-br to-nurse-100 from-blue-200 flex justify-center h-[78%]  w-[40%] rounded-full overflow-hidden">
          
            
            <img
            src={path === "service" ? "/pictures/Blackservdoc.png" : "/pictures/frontdoc.png"}
            className={` object-cover flex self-end w-[65%] ${path === "service" ? " h-full w-full": " w-[65%]"}`}
            alt=""
          />
          
        </div>

        <div className={`h-[13dvh]  flex justify-center items-center absolute w-full left-0 ${path === "service" ? "bottom-20" : "bottom-28" }`}>
          <div className=" bg-nurse-300 flex px-10 items-center gap-10 justify-start  h-full w-full">
            {stats.map((stat, id) => (
              <div key={id} className="text-white border-r-2 w-[13%] border-white">
                <h1 className="text-4xl font-bold">{stat.header}</h1>
                <p className="font-normal mt-2 text-xs">{stat.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstsub;
