import React from 'react'
import Marquee from "react-fast-marquee";
import { IoStarOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GrProjects } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";

const Skills = () => {
  return (
    <>
      <div id='skills' className=' relative w-full h-screen scroll-smooth   '>
        {/* <img className="absolute w-20 h-20 z-30 right-1 "
          alt=""
          src="/dot.png"
        /> */}
       
       <div className='skillset'>

        <div id='s1' className='skills absolute w-[10%] h-[20%] bg-[#8894a581] top-[25%] left-[12%] rounded-xl flex justify-center hover:scale-110 duration-300 '>
          <img
          className='absolute h-20 w-22 my-2' 
          src='/html.png'/>
          <h1 className='absolute bottom-[15%] text-xl font-semibold text-white'>HTML</h1>
        </div>

        <div id='s2' className='skills absolute w-[10%] h-[20%] bg-[#8894a581] top-[25%] left-[24%] rounded-xl flex justify-center hover:scale-110 duration-300'>
          <img
          className='absolute h-20 w-22 my-2 ' 
          src='/CSS.png'/>
          <h1 className='absolute bottom-[15%] text-xl font-semibold text-white'>CSS</h1>
        </div>

        <div id='s3' className='skills absolute w-[10%] h-[20%] bg-[#8894a581] top-[25%] left-[36%] rounded-xl flex justify-center hover:scale-110 duration-300'>
          <img
          className='absolute h-20 w-22 my-2 ' 
          src='/JS.png'/>
          <h1 className='absolute bottom-[15%] text-xl font-semibold text-white'>JavaScrpt</h1>
        </div>

        <div id='s4' className='skills absolute w-[10%] h-[20%] bg-[#8894a581] top-[50%] left-[12%] rounded-xl flex justify-center hover:scale-110 duration-300'>
          <img
          className='absolute h-20 w-22 my-2' 
          src='/React.png'/>
          <h1 className='absolute bottom-[15%] text-xl font-semibold text-white'>React</h1>
        </div>

        <div id='s5' className='skills absolute w-[10%] h-[20%] bg-[#8894a581] top-[50%] left-[24%] rounded-xl flex justify-center hover:scale-110 duration-300'>
          <img
          className='absolute h-20 w-22 my-2' 
          src='/Figma.png'/>
          <h1 className='absolute bottom-[15%] text-xl font-semibold text-white'>Figma</h1>
        </div>

        <div id='s6' className='skills absolute w-[10%] h-[20%] bg-[#8894a581] top-[50%] left-[36%] rounded-xl flex justify-center hover:scale-110 duration-300'>
          <img
          className='absolute h-16 w-22 my-2' 
          src='/Tailwind.png'/>
          <h1 className='absolute bottom-[15%] text-xl font-semibold text-white'>Tailwind</h1>
        </div>
        </div>

        <div className='settings relative w-1/4 h-fit m-2 left-[60%] top-24 justify-center text-center '>
        <img
          className='' 
          src='/Settings.png'/>
        <h4 className='text-white text-base'>
          Created projects with Html & Css and applied Javascript GSAP library for functionalities. Other than these , I have hands on knowledege of React and Tailwind Css.
        </h4>
        </div>

      </div>
    </>
  )
}

export default Skills
