import React from 'react';
import Ouractivity from './Ouractivity';
import teamcard1 from './bg-img/teamcard1.svg';
import teamcard2 from './bg-img/teamcard2.svg';
import teamcard3 from './bg-img/teamcard3.svg';
import teamcard4 from './bg-img/teamcard4.svg';

export default function Team() {
    const data = [
        {
            Id:1,
            img:teamcard1,
            heading:'Jullian Jamerson',
            p:'Profession',
            icon1:<span><i className="fa-brands fa-facebook text-[#FC724D] text-[22px]"></i></span>,
            icon2:<span><i className="fa-brands fa-instagram text-[#FC724D] text-[22px]"></i></span>,
            icon3:<span><i className="fa-brands fa-twitter text-[#FC724D] text-[22px]"></i></span>,
        },
        {
            Id:2,
            img:teamcard2,
            heading:'Jullian Jamerson',
            p:'Profession',
            icon1:<span><i className="fa-brands fa-facebook text-[#FC724D] text-[22px]"></i></span>,
            icon2:<span><i className="fa-brands fa-instagram text-[#FC724D] text-[22px]"></i></span>,
            icon3:<span><i className="fa-brands fa-twitter text-[#FC724D] text-[22px]"></i></span>,

        },
        {
            Id:3,
            img:teamcard3,
            heading:'Jullian Jamerson',
            p:'Profession',
            icon1:<span><i className="fa-brands fa-facebook text-[#FC724D] text-[22px]"></i></span>,
            icon2:<span><i className="fa-brands fa-instagram text-[#FC724D] text-[22px]"></i></span>,
            icon3:<span><i className="fa-brands fa-twitter text-[#FC724D] text-[22px]"></i></span>,
        },
        {
            Id:4,
            img:teamcard4,
            heading:'Jullian Jamerson',
            p:'Profession',
            icon1:<span><i className="fa-brands fa-facebook text-[#FC724D] text-[22px]"></i></span>,
            icon2:<span><i className="fa-brands fa-instagram text-[#FC724D] text-[22px]"></i></span>,
            icon3:<span><i className="fa-brands fa-twitter text-[#FC724D] text-[22px]"></i></span>,
        },
    ]
  return (
    <>
      <div className="container mx-auto px-10 py-18">
            <Ouractivity preview='Team' titleActivity='Our Team'/>
        <div className='flex md:flex-row flex-col items-center justify-between md:space-y-0
        space-y-5 py-20 px-8 '>
            {data.map((Team, i)=>
            <div key={i} className='flex flex-col space-y-2 rounded-[12px] items-center justify-center shadow-md
            lg:m-0 md:m-1'>
            <div className='w-[100%] '>
            <img src={Team.img} alt="#" className='rounded-t-[12px]'  />
            </div>
            <p className='text-[16px] font-bold text-[#252B42]'>{Team.heading}</p>
            <p className='text-[12px] font-bold text-[#737373]'>{Team.p}</p>
            <div className='flex flex-row space-x-4 pb-6'>
            <span>{Team.icon1}</span>
            <span>{Team.icon2}</span>
            <span>{Team.icon3}</span>
            </div>
        </div>
            )}
            

        </div>

      </div>
    </>
  )
}
