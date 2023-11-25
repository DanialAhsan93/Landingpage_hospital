import React, { useState } from 'react'
import './navbar.css';
import arrow from '../component/icons/arrow.png';

export default function () {

  const [toggle, settoggle] = useState(false)

  const toggleview = () => {
    {
      toggle ?
        settoggle(false) :
        settoggle(true)
    }
  }

  return (
    <>
      <nav className="  bg-[#B888F8] py-[12px]">
        <div className=" md:container mx-auto sm:px-8  lg:w-[75%]">
          <div className=" flex  justify-between items-center">
            <div>
              <div className="navbar md:flex md:items-end">
                <div className='lg:pr-16 md:pb-[1px] md:pr-10  pr-0'>
                  <a href="#" className='font-bold text-white text-[24px] '>Brand name</a>
                </div>
                {
                  toggle ?

                    <div className='pb-[4px]text-[16px] absolute right-8 top-6 cursor-pointer text-white md:hidden'
                      onClick={() => (settoggle(!toggle)) && toggleview}>
                      <span><i className="fa-solid fa-xmark"></i></span>
                    </div> :

                    <div className='pb-[4px] text-[16px] absolute right-8 top-6 cursor-pointer text-white md:hidden'
                      onClick={() => (settoggle(!toggle)) && toggleview}>
                      <span><i className="fa-solid fa-bars"></i></span>
                    </div>


                }

                <div >
                  <ul className={`nav-menu md:flex font-Monteserrat  md:pb-[3px] lg:space-x-7 md:space-x-4 absolute md:static md:bg-[#B888F8] 
                   left-0 w-full md:w-auto md:pl-0 pl-9  md:space-y-0 md:py-0 space-y-4 py-4 ${toggle ? 'left-0 ' : 'hidden'}
                   `}>
                    <li>
                      <a href="#" className='text-white   font-semibold text-[14px]
                            hover:text-gray-500 tracking-[0.2px] active' > Home</a>
                    </li>
                    <li>
                      <a href='#' className='text-white   font-semibold text-[14px]
                        hover:text-gray-500 tracking-[0.2px]'>Product</a>
                    </li>
                    <li>
                      <a href='#' className='text-white   font-semibold text-[14px] 
                        hover:text-gray-500 tracking-[0.2px]' >Pricing</a>
                    </li>
                    <li>
                      <a href='#' className='text-white   font-semibold text-[14px]
                         hover:text-gray-500 tracking-[0.2px]' >Contact</a>
                    </li>

                  </ul>

                </div>

              </div>
            </div>
            <div className="hidden md:flex justify-between items-center font-Monteserrat">
              <a href="#" className='text-white text-md p-5 font-bold text-[14px] tracking-[0.2px] text-end'>Login</a>
              <div>
                <a href="#">
                  <button type='button' className='bg-[#FC724D] text-white rounded-[5px] 
                px-[25px] py-[13px]'>
                    <span className='flex items-center text-[14px] font-bold tracking-[0.2px]'>JOIN US
                      <div className='pl-2'>
                        <img src={arrow} alt="#" />
                      </div>
                    </span>
                  </button>
                </a>

              </div>
            </div>

          </div>
        </div>
      </nav>

    </>
  )
}
