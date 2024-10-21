import React from "react";

function Gettheapp() {
  return (
    <div className="border-t border-nurse-300 "> 
      <div className="flex flex-col items-center gap-6 mt-36">
        <div className="text-3xl font-semibold flex flex-col items-center">
          <h1> Trusted Delivery Partners:</h1>
          <h2>Our Reliable Couriers</h2>{" "}
        </div>
        <h3 className="text-lg font-extralight">
          Discover our network of courier companies committed to secure and
          timely deliveries
        </h3>
        <div className="flex gap-28 h-12 mt-10">
          <img src="/pictures/upslogo.png" className="w-20 " alt="" />
          <img src="/pictures/tntlogo.png" className="w-20 " alt="" />
          <img src="/pictures/brtlogo.png" className="w-20 " alt="" />
          <img src="/pictures/dhllogo.png" className="w-20 " alt="" />
          <img src="/pictures/fedexlogo.png" className="w-20 " alt="" />
          <img src="/pictures/hermeslogo.png" className="w-20 " alt="" />{" "}
        </div>
      </div>

      <div className="bg-nurse-300 bg-cover mx-28 my-24 flex h-[50dvh] pt-10 pl-32 gap-20 rounded-3xl">
        <div className="flex flex-col gap-12 w-[59%]">
          <h1 className="text-white font-semibold text-4xl">Get the App</h1>
          <p className="text-white font-light  ">
            Download the app for easy access to delicious food and hassle-free
            deliveries. With our user-friendly app, you can browse restaurants,
            place orders, track deliveries, and more, all from the palm of your
            hand. Available for iOS and Android devices
          </p>
          <div><button className="bg-white rounded-3xl text-nurse-300 px-4 py-1">Download Now</button></div>
        </div>
        
<img src="/public/pictures/phone.png" className="mt-7" alt="" />
      </div>
    </div>
  );
}

export default Gettheapp;
