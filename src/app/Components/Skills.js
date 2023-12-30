import React from 'react'
import Marquee from "react-fast-marquee";

import { IoStarOutline } from "react-icons/io5";

const Skills = () => {
  return (
    <>
      <div className=' relative w-full h-screen scroll-smooth bg-[#0e0d0f]   '>
        <div className='absolute top-[5%]'>
        <Marquee play speed={100} loop={0} pauseOnHover className='bg-[#0e0d0f] '>
          <div id= 'scrollAnimation' className=' text-8xl h-28 flex '>
          <h4 className='text-white '>HELLO VISITOR , WELCOME TO MY PORTFOLIO. YOU WILL FIND ALL MY SKILLS PROJECTS AND EXPERIENCE BELOW. THANKYOU .</h4>
          </div>
        </Marquee>
        </div>
        <div className=' absolute top-[35%] w-full h-16 justify-center items-center flex z-10' >
          <h2 className='flex text-white text-5xl font-bold w-52 h-full items-center justify-center hover:bg-white hover:text-black rounded-md '>SKILLS</h2>
        </div>

        <div className=' absolute flex w-full top-[55%] scroll-smooth bg-[#0e0d0f] justify-around items-center   '>
        <div className=' flex w-60 h-60 rounded-full  bg-transparent shadow-inner shadow-blue-800 border-2 border-blue-800 justify-center items-center hover:shadow-2xl hover:shadow-blue-500 duration-500 delay-175 hover:scale-110 hover:bg-blue-600 delay-200'>
          <h3 className='relative text-white text-5xl font-extrabold justify-center text-center'>React
          <div className='flex'>
          <IoStarOutline  className='text-yellow-300 text-5xl '/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          </div>
          </h3>
        </div>

        <div className=' flex w-60 h-60 rounded-full  bg-transparent  border-2 border-blue-800 justify-center items-center hover:shadow-2xl hover:shadow-blue-500 duration-500 delay-175 hover:scale-110 hover:bg-blue-600 delay-200'>
          <h3 className='relative text-white text-5xl font-extrabold justify-center text-center'>Html
          <div className='flex'>
          <IoStarOutline  className='text-yellow-300 text-5xl '/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          </div>
          </h3>
        </div>

        <div className=' flex w-60 h-60 rounded-full  bg-transparent  border-2 border-blue-800 justify-center items-center hover:shadow-2xl hover:shadow-blue-500 duration-500 delay-175 hover:scale-110 hover:bg-blue-600 delay-200'>
          <h3 className='relative text-white text-5xl font-extrabold justify-center text-center'>Css
          <div className='flex'>
          <IoStarOutline  className='text-yellow-300 text-5xl '/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          </div>
          </h3>
        </div>

        <div className=' flex w-60 h-60 rounded-full  bg-transparent  border-2 border-blue-800 justify-center items-center hover:shadow-2xl hover:shadow-blue-500 duration-500 delay-175 hover:scale-110 hover:bg-blue-600 delay-200'>
          <h3 className='relative text-white text-5xl font-extrabold justify-center text-center'>JS
          <div className='flex'>
          <IoStarOutline  className='text-yellow-300 text-5xl '/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          </div>
          </h3>
        </div>

        <div className=' flex w-60 h-60 rounded-full  bg-transparent  border-2 border-blue-800 justify-center items-center hover:shadow-2xl hover:shadow-blue-500 duration-500 delay-175 hover:scale-110 hover:bg-blue-600 delay-200'>
          <h3 className='relative text-white text-5xl font-extrabold justify-center text-center'>Tailwind
          <div className='flex'>
          <IoStarOutline  className='text-yellow-300 text-5xl '/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          <IoStarOutline  className='text-yellow-300 text-5xl'/>
          </div>
          </h3>
        </div>

        </div>

      </div>
    </>
  )
}

export default Skills
