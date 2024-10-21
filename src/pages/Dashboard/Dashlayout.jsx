import React from "react";
import { Dashboardhome } from "../../data/db";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navdash from "./Navdash";


function Dashlayout() {
  return (
    <div className="flex h-screen w-full flex-col p-3">
       <Navdash />
      <section className="flex  w-full  h-full">
       <div className="w-[15%] h-full ">
       <Sidebar />

       </div>
        <main className=" h-full w-[85%]">
          
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default Dashlayout;
