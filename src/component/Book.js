import React from 'react';
import Ouractivity from './Ouractivity';
import {data} from './Data';
import './book.css';


export default function Practice () {
  return (
    <>
              <div className=' '>
                  <div className="container lg:px-16 md:px-10  px-6 mx-auto font-Monteserrat">
                        <Ouractivity preview="Preview" titleActivity="Our Activity" />

                          <div className='flex md:flex-row flex-col py-16 px-7'>
                                {data.map((Practice, i) =>

                                <div key={i} className='card-book flex justify-center sm:my-0 my-3'>
                                    <div className=' group flex flex-col lg:px-[25px] lg:py-[30px] md:px-2 md:py-3
                                    sm:px-2 sm:py-3 border border-1 justify-center shadow-xl rounded-[5px] 
                                     font-Monteserrat
                                       px-3 py-5 md:text-left text-center md:items-start items-center w-[85%] '>
                                                <div className='practise.id border bottom-1 bg-[#E74040] lg:w-[40%] md:w-[55%]
                                                sm:w-[20%] w-[30%] sm:py-[21px] sm:px-[19px] py-[21px] px-[10px]
                                                 flex items-center justify-center rounded-[10px]'>
                                                  <img src={Practice.img} alt="" />

                                            </div>
                                            <p className='lg:text-[16px] sm:text-[14px] font-bold text-[#252B42] 
                                                          mt-4 group-hover:text-[#fc724d] tracking-[0.1px]'>
                                                {Practice.heading}
                                             </p>
                                            <div className='w-[40px] h-[3px] bg-[#fc724d] mt-4'></div>
                                            <p className='pt-4 text-[14px] text-[#252B42]
                                          group-hover:text-[#fc724d] font-normal'>{Practice.p}
                                                  .</p>
                                                
                                          
                                         
                                            
                                    </div>
                                </div>
                                    
                                )}


                          </div>
                    </div>

              </div>

    </>
  )
}
