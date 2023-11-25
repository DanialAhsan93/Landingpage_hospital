import React from 'react';
import activity from './bg-img/activity.png';
import Ouractivity from './Ouractivity';
import './activity.css';

export default function Activity() {
  return (
    <>
          <div className='py-20'>
              <div className="container px-10 mx-auto ">
              <Ouractivity preview='Preview' titleActivity="Our Activity"/>

                  <div className=" flex flex-col md:flex-row py-12 lg:px-16 justify-center lg:gap-x-[100px]
                  md:gap-x-[40px] font-Monteserrat">

                    <div className='md:flex items-center '>
                        <img src={activity} alt="#" />
                    </div>
                    <div className='pt-[30px]'>
                          <h3 className='lg:text-[24px] md:text-[22px] font-bold text-[#252B42] pt-[10px] 
                          md:text-left text-center justify-center' >Most Trusted In Our Field</h3>
                          <p className='md:text-left text-center text-[14px] text-[#737373] pt-[5px]
                          font-normal tracking-[0.2px] lg:w-[80%]'>Most calendars are designed for teams. Slate s designed 
                          for freelancers </p>
                          <div className='card md:pl-6 py-[15px]  flex md:flex-row flex-col items-center '>
                              <div>
                                  <span className='border bottom-1 py-[14px] px-[16px] rounded-full text-[#fc724d] bg-slate-200 
                                  text-[16px] font-bold'>01</span>
                              </div>
                              <div className='mt-[15px] md:pl-[20px] md:text-left text-center'>
                                  <h4 className='cancer text-[14px] text-[#252B42] font-bold'>Cancer Care</h4>
                                  <p className='p-cancer text-[12px] py-1 
                                  text-[#737373] pt-[5px] font-normal tracking-[0.2px]'>Things on a very small that you
                                  <br></br> 
                                  have any direct</p>
                              </div>
                          </div>
                          <div className='card md:pl-6 py-[15px] flex md:flex-row flex-col items-center '>
                              <div>
                                  <span className='border bottom-1 py-[14px] px-[16px] rounded-full text-[#fc724d] bg-slate-200 
                                  text-[16px] font-bold'>02</span>
                              </div>
                              <div className='mt-[15px] md:pl-[20px]  md:text-left text-center'>
                                  <h4 className='cancer text-[14px] text-[#252B42] font-bold'>Health Quries</h4>
                                  <p className='p-cancer text-[12px] py-1 text-[#737373] pt-[5px] font-normal 
                                  tracking-[0.2px]'>Things on a very small that you
                                  <br></br> 
                                  have any direct</p>
                              </div>
                          </div>
                          <div className='card md:pl-6 py-[15px] flex md:flex-row flex-col items-center '>
                              <div>
                                  <span className='border bottom-1 py-[14px] px-[16px] rounded-full text-[#fc724d] bg-slate-200 
                                  text-[16px] font-bold'>03</span>
                              </div>
                              <div className='mt-[15px] md:pl-[20px]  md:text-left text-center'>
                                  <h4 className='cancer text-[14px] text-[#252B42] font-bold'>Quick Examination</h4>
                                  <p className='p-cancer text-[12px] py-1 text-[#737373] pt-[5px]
                                                font-normal tracking-[0.2px]'>Things on a very small that you
                                  <br></br> 
                                  have any direct</p>
                              </div>
                          </div>
                          
                    </div>

                  </div>
              </div>
          </div>

    </>
  )
}
