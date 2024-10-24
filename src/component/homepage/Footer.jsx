import React from "react";
import {
  RiTwitterXLine,
  RiWhatsappFill,
  RiInstagramFill,
} from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { footer } from "../../data/db";
import { IoGlobeOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="px-[120px]  ">
      <div className="flex items-center ">
        <img
          src="/public/pictures/logo.png"
          className="font-semibold text-lg mb-9"
          alt=""
        />
        <p className="font-semibold text-lg "> Guver Care</p>
      </div>
      <div className="flex gap-52 border-b border-nurse-300 pb-16">
        <div className="font-thin ">
          <p>2 Adebayo-3-4 Tanke, Ilorin City,</p>
          <p>Kwara 150-0002, Nigeria.</p>
          <p>+234 9151 887982</p>

          <div className="lastfooter  mt-5 mb-5 flex gap-[150px]">
            <ul className="flex mt-11">
              <li class="list-none ">
                <a
                  href="https://web.facebook.com/chfglobal"
                  class="lasticon text-nurse-300 text-lg leading-[50px] transition-colors duration-600 pt-1 hover:text-[rgb(37,32,32)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF className="lasticon" />
                </a>
              </li>
              <li class="list-none mx-2">
                <a
                  href="https://twitter.com/dehmzzy"
                  class="lasticon text-nurse-300 text-lg leading-[50px] transition-colors duration-600 pt-1 hover:text-[rgb(37,32,32)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiTwitterXLine className="lasticon" />
                </a>
              </li>
              <li class="list-none mx-2">
                <a
                  href="https://wa.link/89vopc"
                  class="lasticon text-nurse-300 text-lg leading-[50px] transition-colors duration-600 pt-1 hover:text-[rgb(37,32,32)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiWhatsappFill className="lasticon" />
                </a>
              </li>
              <li class="list-none mx-2">
                <a
                  href="https://www.instagram.com/dehmzyy/"
                  class="lasticon text-nurse-300 text-lg leading-[50px] transition-colors duration-600 pt-1 hover:text-[rgb(37,32,32)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiInstagramFill className="lasticon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-52 ">
          {footer.map((item, id) => (
            <div key={id}>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-lg mb-3">{item.header}</h1>
                <h1 className="font-thin ">{item.onesub}</h1>
                <h1 className="font-thin ">{item.twosub}</h1>
                <h1 className="font-thin ">{item.threesub}</h1>
                <h1 className="font-thin ">{item.foursub}</h1>
                <h1 className="font-thin ">{item.fivesub}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-10 border-b border-nurse-300 pb-10">
        <button className="flex items-center border border-black rounded-3xl  px-4 py-2">
          <IoGlobeOutline /> <h1>Select Language</h1>
        </button>

        <div className="flex gap-3 h-6">
          <img src="/pictures/american.png" alt="" />
          <img src="/pictures/logos_mastercard.png" alt="" />
          <img src="/pictures/logos_visa.png" alt="" />
          <img src="/pictures/logos_visaelectron.png" alt="" />
          <img src="/pictures/logos_paypal.png" alt="" />
        </div>

        <div className="flex gap-3 h-6 ">
          <p> We Ship with</p>
          <img src="/pictures/brtfoot.png" alt="" />
          <img src="/pictures/dhlfoot.png" alt="" />
          <img src="/pictures/herfoot.png" alt="" />
          <img src="//pictures/tntfoot.png" alt="" />
          <img src="/pictures/fedfoot.png" alt="" />
          <img src="/pictures/upsfoot.png" alt="" />
        </div>
      </div>

      <div className="flex justify-between text-sm pt-5 border-b border-nurse-300 pb-5">
        <div className="flex gap-5">
          <p>Condition of sales </p>
          <p>Information on cookies</p>
        </div>

        <div className="flex gap-9">
          <p>Copyright @ 2024 PickEatPickIT, Shibuya, VAT number 01791300484</p>
          <p>Powered by PickEatPickIT.agency</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
