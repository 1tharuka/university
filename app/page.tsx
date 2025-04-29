"use client";

import React from 'react'
import Navbar from './componets/Navbar'
import VideoSwitcher from './componets/videoSwitcher';
import Foote from './componets/Foote';

const page = () => {
  return (
    <div className='p-4 bg-[#6040D1] w-full'>
      {/* nav bar */}
       <div>
         <Navbar />
       </div>
       {/* main */}
       <div>
        <div className='mt-5mb-5 sm:mb-10'>
        <h1 className='text-3xl mt-5 text-center text-white'>අනාගතය කළඑලි කරන්නට  වස්සාන ඍතුවට ආරාධනා .</h1>
        <h1 className='text-3xl mt-5 text-center text-white'>எதிர்காலத்திற்கான வசந்த காலத்தின்‌ அழைப்பு.</h1>
       </div>
        <div>
          
       <VideoSwitcher />
        </div>
       </div>
       {/* footer */}
       <div>
        <Foote />
       </div>
    </div>
  )
}

export default page