import React from 'react';
import hero from './bg-img/hero.png';

export default function Hero() {
  return (
    <>
      <div className='bg-[#26335D]'>
        <div className="container lg:px-16 mx-auto">
        <div className='flex md:flex-row flex-col lg:px-20 px-6 py-28 items-center justify-center'>
            <div className='md:p-5 lg:w-[100%] md:w-[50%] w-[80%]'>
                <img src={hero} alt="#" />
            </div>

            <div className='sm:p-5 p-2 text-white lg:w-[100%] md:w-[50%] w-[80%]'>
            <div className='sm:px-10 md:text-left text-center font-Monteserrat'>
                  <div className='w-[94px] h-[5px] bg-[#E74040] md:flex hidden'></div>
                  <h1 className='lg:text-[40px] text-[30px] text-white font-bold py-[25px]'>Our Activity</h1>
                  <p className='text-[14px] text-white lg:w-[22.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio maiores provident atque mollitia dolor
                  Repudiandae odio maiores provident .</p>
                  <button type='button' className='text-[#FC724D] pt-4 font-bold text-[14px] tracking-[0.2px]'>
                    Learn More <span><i className="fa-solid fa-angle-right font-semibold text-[16px] pr-[3px]"></i></span>
                  </button>
              </div>
            </div>

        </div>
        </div>
        
      </div>
    </>
  )
}
