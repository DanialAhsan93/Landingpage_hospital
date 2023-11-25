import React from 'react';
import Ouractivity from './Ouractivity';
import courses1 from './bg-img/courses1.png'; 
import courses2 from './bg-img/courses2.png'; 
import courses3 from './bg-img/courses3.png'; 
import courses4 from './bg-img/courses4.png'; 
import Coursescard from './Coursescard';

export default function Courses() {
  return (
    <>
    <div className='container mx-auto lg:px-16 md:px-10 py-24'>
      <Ouractivity preview='Courses' titleActivity='Watch our Courses'/>

        <div className="flex md:flex-row flex-col py-20 lg:px-6 md:px-4">
          
        <Coursescard img={courses1} />
        <Coursescard img={courses2} />
        <Coursescard img={courses3} />
        <Coursescard img={courses4} />


        </div>



    </div>
      

    </>
  )
}

