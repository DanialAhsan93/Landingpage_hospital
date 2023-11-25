import React, { useState} from 'react'
import './header.css'
import herocover from '../component/bg-img/herocover.png';



export default function Header() {
    const [toggle, settoggle] = useState(false)
    const toggler = () => {
        {
            toggle ?
            settoggle(false):
            settoggle(true)
        }
    }
    const [change, setchange] = useState(false)    
    
    const handlechange = () => {
        {
            change ?
            setchange(false):
            setchange(true)
        }
    }
  return (
    <>
          <div className='  bg-hero mb-5 font-Monteserrat'>
              <div className="container mx-auto px-6">
                  <div className='md:flex justify-between items-center'>
                      <div className='py-5 md:pl-16 sm:pl-0 md:text-left text-center md:w-[65%]'>
                          <h3 className='sm:text-[16px] text-[14px] font-semibold text-white'>For Better Future</h3>
                          <div>
                          <p className='lg:text-[58px] md:text-[30px] sm:text-[25px] text-[20px]
                           font-bold text-white lg:py-[20px] md:py-[14px]
                          font-Monteserrat'>Meet The Best Hospital</p>
                          </div>
                          <p className='lg:text-[20px] md:text-[14px] text-[12px]   text-white my-3'>Get your best looking simle now</p>
                          <div className="flex space-x-4 md:justify-start justify-center">
                            {
                                toggle ?
                                <a href="#">
                              <button type='button' className='bg-[#FC724D] border border-1
                                  border-[#fc724d] text-white lg:px-10 lg:py-2 md:py-1  md:px-4
                                  lg:mt-6 md:mt-2 py-1  px-1  lg:text-[14px] md:text-[10px] text-[10px]' onClick={toggler}>
                                  Get a Quote
                              </button>
                              </a>:
                              <a href="#">
                              <button type='button' className='bg-transparent border border-1
                                  border-[#fc724d] text-white lg:px-10 lg:py-2 md:py-1  md:px-4
                                  lg:mt-6 md:mt-2 py-1  px-1 lg:text-[14px] md:text-[10px] text-[10px]' onClick={toggler}>
                                  Get a Quote
                              </button>
                              </a>

                            }
                          {
                            change ?

                            <a href="#">
                              <button type='button' className='bg-[#FC724D] border border-1
                                  border-[#fc724d] text-white lg:px-10 lg:py-2 lg:mt-6 md:mt-2 md:py-1 md:px-4
                                  py-1  px-1 lg:text-[14px] md:text-[10px] text-[10px]' onClick={handlechange}>
                                  Learn More
                              </button>
                          </a> :
                          <a href="#">
                          <button type='button' className='bg-transparent border border-1
                              border-[#fc724d] text-white lg:px-10 lg:py-2 lg:mt-6 md:mt-2 md:py-1 md:px-4
                              py-1  px-1 lg:text-[14px] md:text-[10px] text-[10px]' onClick={handlechange}>
                              Learn More
                          </button>
                      </a>

                          }
                          
                          </div>
                   </div>

                      <div className='mt-[20px] sm:pl-0 md:pl-12'>
                          <img src={herocover} alt="" />
                      </div>
                  </div>


              </div>
          </div>
    </>
  )
}
