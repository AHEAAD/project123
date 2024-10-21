import React from 'react'
import { testimonials } from '../../data/db';

function Testimonial({ data, position,}) {
    return (
      <div className='px-[75px] '>
         <p className="mt-[120px] text-4xl  font-semibold text-nurse-300 border-b border-blue-500 pb-12 ">
        Testimonials
        </p>
        {testimonials.map((item, id) => (
          <div key={id} className=  {` flex ${position} items-center gap-16 mb-32 mt-24 w-full` }>
            <div className=" w-[40%] flex  ">
              <img src={item.teadoc} className=" mt-11 " alt="" />
            </div >
            <div className=" flex flex-col gap-7  ">
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
        ))}
      </div>
    );
  }

export default Testimonial;