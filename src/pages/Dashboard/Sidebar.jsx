import React from "react";
import { Dashboardhome } from "../../data/db";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { TbHelpSquare } from "react-icons/tb";
import StarRate from "./StarRate";

function Sidebar() {
  const withoutLogout = Dashboardhome.filter(
    (dash) => dash.path !== "logout" && dash.path !== "general"
  );

  const withLogout = [
    {
      icon: FiSettings,
      head: "General",
      path: "general",
    },
    {
      icon: RiLogoutBoxLine,
      head: "Logout",
      path: "/login",
    },
    {
      icon: TbHelpSquare,
      head: "Help Center",
      path: "Help",
    },
  ];

  return (
    <div className="h-full  ">
      <div className="h-full flex flex-col justify-between ">
        <div className="rounded-3xl bg-dash-300 p-2 text-lg flex flex-col justify-between h-[60%]">
          {" "}
          {withoutLogout.map((dash, id) => {
            const { path, head } = dash;
            return (
              <NavLink
                key={id}
                className={({isActive}) => isActive ? "text-nurse-300 font-light flex items-center gap-2" : " font-light flex items-center gap-2"}
                to={path}
              >
                <dash.icon className="text-xl" />
                {head}
              </NavLink>
            );
          })}
        </div>
        <h1 className="text-xl font-light ">Settings</h1>
        <div className="rounded-3xl bg-dash-300 p-2 text-lg flex flex-col justify-between h-[20%]">
          {withLogout.map((dash, id) => {
            const { path, head } = dash;
            return (
              <div>
                {" "}
                <NavLink
                  key={id}
                  className={({isActive}) => isActive ? "text-nurse-300 font-light flex items-center gap-2" : " font-light flex items-center gap-2"}
                  to={path}
                >
                  <dash.icon />
                  {head}
                </NavLink>{" "}
              </div>
            );
          })}
        </div>


        <div className=" flex items-center  text-lg h-[10%] p-4">
          
          <h1 className="font-medium text-nurse-300">Ratings</h1>
          <h1 className="flex px-3">
            <StarRate />
          </h1>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
