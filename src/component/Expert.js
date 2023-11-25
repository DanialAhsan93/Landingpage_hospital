import React from 'react';
import Ouractivity from './Ouractivity';
import testimonialscover1 from './bg-img/testimonialscover1.png';
import testimonialscover2 from './bg-img/testimonialscover2.png';
import starssec from './bg-img/starssec.png';

export default function Expert() {
  return (
    <>
      <div className="contaniner mx-auto lg:px-16 md:px-11 sm:px-10 py-24">
        <Ouractivity preview='Testimonials' titleActivity='Our Expert'/>

        <div className="flex md:flex-row flex-col items-center justify-between">
        <div className='flex flex-col items-center justify-center pt-12 font-Monteserrat'>
                <div className='lg:w-[50%] md:w-[70%] sm:w-[60%] w-[70%] space-y-5 flex flex-col items-center'>
                <div className='w-[40%] flex justify-center' >
                <img src={testimonialscover1} alt="#" className='rounded-[50%]'/>
                </div>
                      <p className='text-center text-[14px] text-[#737373]'>Slate helps you see how many more days
                          you need to work to reach your financial
                          goal for the month and year.</p>
                <div className='w-[100%] flex items-center justify-center'>               
                     <img src={starssec} alt="#" />
                </div>
                <p className='text-[16px] font-bold tracking-[0.1px]'>Regina Miles</p>
                <p className='text-[#737373] font-bold text-[14px] tracking-[0.2px]'>Designer</p>
                </div>
                
            </div>

            <div className='flex flex-col items-center justify-center pt-12 font-Monteserrat'>
                <div className='lg:w-[50%] md:w-[70%] sm:w-[60%] w-[70%] space-y-5 flex flex-col items-center'>
                <div className='w-[40%] flex justify-center' >
                <img src={testimonialscover2} alt="#" className='rounded-[50%]'/>
                </div>
                      <p className='text-center text-[14px] text-[#737373]'>Slate helps you see how many more days
                          you need to work to reach your financial
                          goal for the month and year.</p>
                <div className='w-[100%] flex items-center justify-center'>               
                     <img src={starssec} alt="#" />
                </div>
                <p className='text-[16px] font-bold tracking-[0.1px]'>Regina Miles</p>
                <p className='text-[#737373] font-bold text-[14px] tracking-[0.2px] '>Designer</p>
                </div>
                
            </div>
           
        </div>
        
      </div>
    </>
  )
}
