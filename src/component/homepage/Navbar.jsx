import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleNextPage = (path) => {
    navigate(path);
  };
  return (
    <div>
      <nav className="flex w-full  items-center justify-between  px-[75px]  py-8 ">
        <div className="flex w-[20%]  items-end">
          <img src="/pictures/logo.png" className="w-10" alt="" />
          <p>GuverCare</p>
        </div>

        <div className="flex justify-between px-16 text-base items-center w-[40%] font-normal ">
          <p>
            {" "}
            <Link to="/">Home</Link>{" "}
          </p>
          <p onClick={()=> handleNextPage("/service")} style={{ cursor: 'pointer' }}>
            Service
            {" "}
            {/* <Link to="/service">Services</Link>{" "} */}
          </p>
          <p onClick={()=> handleNextPage("/aboutus")} style={{ cursor: 'pointer' }}> About Us</p>
          <p>Contact Us</p>
        </div>

        <div className="flex justify-between px-5 items-center w-[30%]">
          <button
            className="py-[7px] px-[40px] border-solid border-[3px] rounded-[40px] "
            style={{
              borderColor: "rgb(1, 123, 255)",
              color: "rgb(1, 123, 255)",cursor: 'pointer'
            }}
            onClick={()=> handleNextPage("/login")} >
            
            Log in
          </button>
          <button
            className="py-[10px] px-[40px] text-white  rounded-[40px] "
            style={{ backgroundColor: "rgb(1, 123, 255)" ,cursor: 'pointer'}}
            onClick={()=> handleNextPage("/create")} >
           
            Create account
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
