import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";


function Main() {
    return (
        <>
            <div id='footer' className='relative flex h-44 w-full bg-[#05052c7e]  items-center shadow-inner shadow-blue-700'>

                <div className='footer relative w-1/2 h-full '>

                    <div className=' mobthunder flex absolute h-full w-full justify-start left-10 items-center '>
                        <h2 className='thunder text-3xl text-white flex justify-center items-center h-full'>THU<AiFillThunderbolt className='text-yellow-400'/>DER</h2>
                    </div>

                    <h4 className='right flex absolute h-fit w-1/2 justify-start left-10 bottom-5 items-center text-white'> ALL RIGHTS RESERVED  <FaRegCopyright /> THUNDER 2024 </h4>
                </div>
                <div className=' footersocial h-full w-1/2 flex gap-5 items-center justify-center  text-white'>
                    <FaLinkedin   className='text-4xl rounded-lg hover:text-blue-900 hover:shadow-2xl hover:shadow-white hover:scale-125 duration-300 hover:bg-white'/>
                    <FaInstagram  className='text-4xl rounded-2xl hover:text-pink-900  hover:shadow-2xl hover:shadow-white hover:scale-125 duration-300 hover:bg-white'/>
                    <FaGooglePlus className='text-4xl rounded-full hover:text-red-500 hover:shadow-2xl hover:shadow-white hover:scale-125 duration-300 hover:bg-white'/>

                </div>
               


            </div>
        </>
    )
}

export default Main