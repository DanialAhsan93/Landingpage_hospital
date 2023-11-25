import React, { useState } from 'react';
import cartcourse from './icons/cartcourse.png';
import eyecourse from './icons/eyecourse.png';
import courseicon1 from './icons/courseicon1.png';
import Downloadicon from './icons/Downloadicon.png';

export default function Coursescard(props) {
    const [toggle, settoggle] = useState(false);

    const toggler = () => {
        {
            toggle ?
                settoggle(false) :
                settoggle(true)
        }

    }

    const [change, setchange] = useState(false)

    const cart = () => {
        {
            change ?
            setchange(false):
            setchange(true)
        }
    }
    const [eye, seteye] = useState(false)

    const handleeye = () => {
        {
            eye ?
            seteye(false):
            seteye(true)
        }
    }

    return (
        <>
            <div className="flex flex-col items-center p-5">

                <div className='relative top-0 left-0'>
                    <img src={props.img} alt="#" />
                    <div className='bg-[#E74040] lg:h-[10%] lg:w-[20%] md:h-[13%] md:w-[30%]
                     absolute top-3 left-3 flex items-center
                                    justify-center text-white rounded-[5px]'>
                        <p>Sale</p>
                    </div>
                        <div className='flex flex-row items-center justify-center absolute lg:bottom-4 lg:left-9
                        md:bottom-4 md:left-1 bottom-4 left-9'>
                            {
                                toggle ?

                                    <div className='flex items-center justify-center rounded-[50%] bg-white
                                                    lg:py-[9px] lg:mx-2 lg:px-[12px] md:py-[4px] md:mx-[3px] md:px-[7px]
                                                     border border-1 py-[9px] mx-2 px-[12px]'
                                                     onClick={toggler}>

                                        <span><i className="fa-solid fa-heart "></i></span>

                                    </div> :

                                    <div className='flex items-center justify-center rounded-[50%] bg-white
                                                    border border-1 lg:py-[9px] lg:mx-2 lg:px-[12px]
                                                    md:py-[4px] md:mx-[3px] md:px-[7px]
                                                    py-[9px] mx-2 px-[12px]'  onClick={toggler}>

                                        <span><i className="fa-regular fa-heart"></i></span>

                                    </div>
                            }

                            {
                                change ?
                                    <div className='flex items-center justify-center rounded-[50%] bg-white
                                                     border border-1 lg:py-[9px] lg:mx-2 lg:px-[12px]
                                                     md:py-[4px] md:mx-[3px] md:px-[7px] py-[9px] mx-2 px-[12px]'
                                                     onClick={cart}>

                                        <span><i class="fa-solid fa-cart-shopping"></i></span>

                                    </div> :

                                    <div className='flex items-center justify-center rounded-[50%] bg-white
                                    border border-1 lg:py-[9px] lg:mx-2 lg:px-[11px]
                                    md:py-[4px] md:mx-[3px] md:px-[7px] py-[9px] mx-2 px-[12px]'
                                    onClick={cart}>

                                     <span><i class="fa-brands fa-opencart"></i></span>

                                     </div>

                            }

                            {
                                eye ?
                                <div className='flex items-center justify-center rounded-[50%] bg-white lg:py-[9px] lg:mx-2 
                            lg:px-[12px] border border-1 md:py-[4px] md:mx-[3px] md:px-[7px] py-[9px] mx-2 px-[12px]'
                            onClick={handleeye}>

                                <span><i class="fa-regular fa-eye"></i></span>
                            </div> :

                             <div className='flex items-center justify-center rounded-[50%] bg-white lg:py-[9px] lg:mx-2 
                             lg:px-[12px] border border-1 md:py-[4px] md:mx-[3px] md:px-[7px] py-[9px] mx-2 px-[12px]'
                             onClick={handleeye}>
 
                                 <span><i class="fa-solid fa-eye"></i></span>
                             </div>

                            }

                                    
                            
                           


                        </div>
                    

                </div>
                <div className='lg:p-6 md:p-2 py-6 md:w-[100%] sm:w-[40%] w-[63%]'>
                    <div className='flex justify-between pt-3'>
                        <p className='text-[14px] text-[#FC724D] font-bold'>English</p>
                        <img src={courseicon1} alt="#" />
                    </div>
                    <p className='text-[16px] text-[#252B42] font-bold pt-3 lg:w-[75%] md:w-[100%] w-[75%]'>sit amet nulla facilisi morbi</p>

                    <p className='text-14px text-[#737373] pt-3'>We focus on ergonomics and meeting you....</p>
                    <div className='flex pt-3 items-center'>
                        <img src={Downloadicon} alt="#" className='lg:w-[16px] lg:h-[16px]' />
                        <p className='text-14px text-[#737373] pl-3'>15 Sales</p>
                    </div>
                    <p className='pt-3 font-bold text-[#BDBDBD]'>$16.48 <span className='text-[#0061FF]'>$6.48</span> </p>
                    <button type='button' className='text-[14px] text-[#FC724D] border mt-3 font-bold
                                  border-1 rounded-[20px] border-[#FC724D] lg:px-5 lg:py-2 md:px-2 md:py-2
                                  px-2 py-2'>

                        Learn More <span className='lg:pl-[2px]'><i class="fa-solid fa-greater-than"></i></span>

                    </button>

                </div>



            </div>
        </>
    )
}
