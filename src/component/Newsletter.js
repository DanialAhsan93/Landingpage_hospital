import React from 'react';
import Ouractivity from './Ouractivity';

export default function Newsletter() {
  return (
    <>
      <div className="container mx-auto sm:px-16 px-10 md:py-24 sm:py-16 md:my-16 sm:my-10">
        <div className='flex flex-col items-center justify-center text-center'>
        <div className='px-10 flex flex-col items-center font-Monteserrat'>
                  <p className='text-[14px] text-[#FC724D] font-semibold'>Newsletter</p>
                  <p className='md:text-[40px] text-[20px] text-[#252B42]  my-[2px] font-bold 
                  tracking-[0.2px]'>JOIN US</p>
                  <p className='text-[14px] text-[#737373] lg:w-[60%] md:w-[80%]
                  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Repudiandae odio maiores provident atque mollitia dolor.</p>
              </div>

             <div className='my-16 pt-3 lg:w-[55%] md:w-[80%] sm:w-[65%] w-[85%] sm:flex  items-center justify-center'>
            <input className="appearance-none block w-full bg-[#F9F9F9] text-gray-700 border  py-3 px-4  leading-tight focus:outline-none focus:bg-white
              focus:border-gray-500 sm:rounded-l-[5px] sm:rounded-none rounded-[3x]" 
              id="grid-email" type="email" placeholder="Your Email" />
              <button type='button' className='bg-[#FC724D] text-[14px] text-white font-semibold py-[13px] px-3
              sm:rounded-r-[5px] sm:rounded-none rounded-[3px] sm:mt-0 mt-4' >
                 Subscribe
              </button>
            </div>


        </div>
      </div>
    </>
  )
}
