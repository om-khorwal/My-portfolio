import React from 'react'
import { FaRegCopyright } from "react-icons/fa";



function Main() {
    return (
        <>
        <div id='footer' className='relative h-72 w-full'> 
            <div className=' absolute flex w-full h-40 bg-[#09093cdc] bottom-0 justify-center items-center shadow-inner shadow-blue-700'>

            <img
            className='absolute w-20 h-36 left-20 '
            src='/thunder.png'/>

            <h2 className='thunder text-4xl text-white'>THUNDER</h2>
            
            <h4 className='absolute text-lg font-extralight gap-1 text-white right-10 items-center flex '>ALL RIGHTS RESERVED  <FaRegCopyright/> THUNDER 2024 </h4>
            </div>

        </div>
        </>
    )
}

export default Main