import React, { useEffect, useState } from 'react'
import { FaGooglePlus } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GrProjects } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";



const Heroslide = () => {

 
  return (

    <>

      <div className=' relative h-screen w-full' >
        <img className="absolute w-[50%] h-[50%] left-[30%] top-[8.5%] object-cover"
        alt=""
        src="/img.png"
        />
        <img className="fixed w-20 h-20 z-30 right-1 "
        alt=""
        src="/dot.png"
        />


        {/* <div className="absolute w-full h-full opacity-30">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover absolute top-0"
          >
            <source src="/herobg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}


        <div className=' z-10 fixed text-black font-bold bg-gradient-to-b from-[#000000] to-[#0652c3] items-center justify-center  w-20 h-[35%] top-[25%] m-10 rounded-full uppercase shadow-xl shadow-white'>

          <div className="absolute text-white h-full gap-5 w-full flex flex-col justify-center items-center  ">
            <h2 className=" text-3xl font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold">
              <FaHome/>
            </h2>
            <h2 className=" text-3xl font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold">
              <GrProjects/>
            </h2>
            <h2 className=" text-3xl font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold">
              <LiaLaptopCodeSolid/>
            </h2>
            <h2 className=" text-3xl font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold">
              <FcAbout/>
            </h2>
          </div>
        </div>
        <div className=' z-10 w-24 h-24 bg-transparent fixed top-[85%] left-[90%] rounded-full opacity-100 shadow-inner shadow-white hover:bg-white duration-500 justify-center items-center'>
          <FaLocationArrow className='w-[70%] h-[80%] absolute top-3 left-3 text-blue-400 rotate-45 ' />
        </div>

      
        <div id="head" className= " text-white absolute px-[18%] h-[15.3%] w-[100%] top-[35%] font-semibold  inline-block [text-shadow-[10px_4px_5px_rgba(0,0,0.25)] opacity-1">
          <p className=" text-[3rem]  drop-shadow-[0px_10px_0px_rgba(0,0,0)]">Hi,</p>
          <div className='flex gap-3'>
          <p className=" text-[3rem]  drop-shadow-[0px_10px_0px_rgba(0,0,0)]">I'm</p>
          <p className=" text-[3rem] text-[#00a3ff] drop-shadow-[0px_10px_0px_rgba(0,0,0)] hover:scale-150">Om</p>
          </div>
          <p className=" text-[5rem] drop-shadow-[5px_10px_2px_rgba(0,0,0)] ">FRONT-END DEVELOPER</p> 
        </div>

        <div className="absolute flex h-[8%] w-[10%] z-20 justify-center items-center top-[70%] left-[70%] bg-white shadow-[10px_4px_5px_rgba(0,0,0.25)] hover:bg-[#4f7eff] duration-300" >
          <button className="  h-full w-full text-[1.7rem] font-exo bg-transparent text-black  inline-block hover:text-white duration-500">
            Know more
          </button>
        </div>

        <div className='flex h-full w-full absolute bottom-5 '>

        <a href="linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin  className=" text-white absolute rounded-lg h-[5%] w-fit bottom-5  left-[20%] max-w-full  max-h-full object-cover z-20 hover:text-blue-900 hover:shadow-2xl hover:shadow-white hover:scale-125 duration-300 hover:bg-white " />
        </a>

        <a href="linkedin.com" target="_blank" rel="noreferrer">
          <FaInstagram className=" text-white absolute rounded-xl h-[5%] w-fit bottom-5  left-[25%] max-w-full  max-h-full object-cover z-20 hover:text-pink-900 hover:shadow-2xl hover:shadow-white hover:scale-125 duration-300 hover:bg-white"
          />
        </a>

        <a href="linkedin.com" target="_blank" rel="noreferrer">
          <FaGooglePlus className="text-white absolute rounded-full h-[5%] w-fit bottom-5  left-[30%] max-w-full  max-h-full object-cover hover:text-red-500  hover:shadow-2xl hover:shadow-white hover:scale-125 duration-300 hover:bg-white " />
        </a>
          </div>

        <div className="absolute h-[1%] w-[0.5%] top-[95.58%] right-[49.69%] bottom-[3.04%] left-[49.54%] rounded-[50%] bg-white z-20 " />
        <div className="absolute h-[1%] w-[0.5%] top-[95.58%] right-[52.47%] bottom-[3.04%] left-[46.76%] rounded-[50%] bg-white z-20" />
        <div className="absolute h-[1%] w-[0.5%] top-[95.58%] right-[46.92%] bottom-[3.04%] left-[52.31%] rounded-[50%] bg-white z-20" />

      </div>

    </>
  )
}

export default Heroslide
