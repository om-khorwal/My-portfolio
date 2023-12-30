import React from 'react'
import { FaGooglePlus } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Heroslide = () => {
  return (
    <>

      <div className='bg-gradient-to-b from-[#003680] to-black relative h-screen w-full' >
        <img className="absolute w-[80%] h-[80%] left-[18%] top-[12%] object-cover"
        alt=""
        src="/img.png"
        />
        <img className="absolute w-20 h-20 z-30 right-1 "
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


        <div className='absolute z-10  text-black font-bold bg-[#c1e8ff] items-center justify-center gap-[5%] w-28 h-screen uppercase shadow-lg shadow-gray-700'>

          {/* <TiThMenuOutline className='left-[5%]  absolute block '/>
        <div className='relative justify-center text-lg flex le gap-[30%]'>
        <h3 className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125'>Home</h3>
        <h3 className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125'>Contact</h3>
        <h3 className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125'>About</h3>
        <h3 className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125'>Skills</h3>
        </div> */}

          {/* <h2 className=" thunder z-20 absolute  h-[5%] w-[13%] top-[2%] left-[2.26%]  text-3xl mt-4  font-semibold text-center inline-block [text-shadow:_0_5px_0_rgb(0_0_0_/_80%)] ">
            THUNDER
          </h2> */}

          <div className="absolute  flex flex-col h-screen w-full gap-y-10 justify-center items-center  ">
            <h2 className=" text-lg font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold">
              Home
            </h2>
            <h2 className=" text-lg font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold">
              projects
            </h2>
            <h2 className=" text-lg font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold">
              Skills
            </h2>
            <h2 className=" text-lg font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold">
              about
            </h2>
          </div>
        </div>
        <div className=' z-10 w-24 h-24 bg-transparent absolute top-[85%] left-[90%] rounded-full opacity-100 shadow-inner shadow-white hover:bg-gray-200 duration-500 justify-center items-center'>
          <FaLocationArrow className='w-[70%] h-[80%] absolute top-3 left-3 text-gray-900 rotate-45 hover:shadow-inner shadow-white' />
        </div>

      
        <div className="text-white absolute px-[18%] h-[15.3%] w-[100%] top-[35%] font-semibold  inline-block [text-shadow-[10px_4px_5px_rgba(0,0,0.25)]  ">
          <p className=" text-[3rem]  drop-shadow-[0px_10px_0px_rgba(0,0,0)]">Hi,</p>
          <div className='flex gap-3'>
          <p className=" text-[3rem]  drop-shadow-[0px_10px_0px_rgba(0,0,0)]">I'm</p>
          <p className=" text-[3rem] text-[#00a3ff] drop-shadow-[0px_10px_0px_rgba(0,0,0)]">Om</p>
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
