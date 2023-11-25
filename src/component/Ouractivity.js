import React from 'react';
import PropTypes from 'prop-types';

export default function Ouractivity(props) {
  return (
    <>
          <div>
              <div className='px-10 flex flex-col md:items-start items-center font-Monteserrat'>
                  <p className='text-[14px] text-[#FC724D] font-semibold'>{props.preview}</p>
                  <p className='md:text-[40px] text-[20px] text-[#252B42]  my-[2px] font-bold 
                  tracking-[0.2px]'>{props.titleActivity}</p>
                  <p className='text-[14px] text-[#737373] md:text-left lg:w-[35%] md:w-[70%]
                  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Repudiandae odio maiores provident atque mollitia dolor.</p>
              </div>
          </div>
    </>
  )
}

Ouractivity.propTypes = {
    preview:PropTypes.string.isRequired,
    titleActivity:PropTypes.string.isRequired,
}

Ouractivity.defaultProps={
    preview : "Preview Here",
    titleActivity : "Set Title Here",
}


