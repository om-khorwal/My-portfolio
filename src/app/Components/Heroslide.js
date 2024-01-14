import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaFileAlt } from "react-icons/fa";


const Heroslide = () => {


  return (

    <>

      <div id='home' className=' relative h-screen w-full' >
        
        {/* <div className="flex w-full h-[60%] justify-center ">
        <img className="w-16 md:w-32 lg:w-48 "
          alt=""
          src="/img.png"
          />
        </div> */}
        
        {/* <img className="dot fixed w-20 h-20 z-30 right-10 top-10   "
          alt=""
          src="/dot.png"
        /> */}

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


    
        <div className='file flex justify-center items-center z-10 w-20 h-20 bg-transparent fixed top-[85%] right-[3%] rounded-full opacity-100 shadow-inner shadow-[#efab74] hover:hover:scale-125 hover:bg-[#efab74] duration-500'>
          <a className="flex justify-center items-center" href="https://drive.google.com/file/d/1x0vLCRtqoZxFi0jfSS8NkNzIyRYq52qV/view?usp=sharing" target="_blank">
            <FaFileAlt className='absolute w-[50%] h-[60%] text-[#ffff]' />
          </a>
        </div>


        <div className=" herotext  text-white relative px-[20%] h-[15.3%] w-full top-[35%] font-semibold  inline-block [text-shadow-[10px_4px_5px_rgba(0,0,0.25)] opacity-1">
          <p id="head" className="head1 text-[3rem]  drop-shadow-[0px_10px_0px_rgba(0,0,0)]">Hi,</p>
          <div className='flex gap-3'>
            <p className=" head1 text-[3rem]  drop-shadow-[0px_10px_0px_rgba(0,0,0)]">I'm</p>
            <p className=" head1 text-[3rem] text-[#efab74] drop-shadow-[0px_10px_0px_rgba(0,0,0)] hover:scale-150">Om</p>
          </div>
          <p id="fhead" className=" flex w-full text-[4.5rem] drop-shadow-[5px_6px_2px_rgba(0,0,0)] ">FRONT-END DEVELOPER</p>
        </div>

        <div className="reach relative  h-[5%] w-[10%] z-20 justify-center items-center top-[40%] left-[69%] bg-[#efab74] shadow-[5px_4px_5px_rgba(0,0,0.25)] hover:bg-white duration-300 hover:h-[7%]" >
          <button className="  h-full w-full text-[1.7rem] font-exo bg-transparent text-white  inline-block  duration-500 hover:text-[#2b304d]">
            <a href="mailto:amankhorwal2002@gmail.com" target="_blank" rel="noopener noreferrer">
              Reach Me
            </a>
          </button>
        </div>

        <div className=' socialhandle flex h-10 bottom-5 '>

          <a href="linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className=" social1 text-white absolute rounded-lg h-[5%] w-fit bottom-5  left-[20%] max-w-full  max-h-full object-cover z-20 hover:text-blue-900 hover:shadow-2xl hover:shadow-white hover:scale-125 duration-300 hover:bg-white " />
          </a>

          <a href="linkedin.com" target="_blank" rel="noreferrer">
            <FaInstagram className=" social2 text-white absolute rounded-xl h-[5%] w-fit bottom-5  left-[25%] max-w-full  max-h-full object-cover z-20 hover:text-pink-900 hover:shadow-2xl hover:shadow-white hover:scale-125 duration-300 hover:bg-white"
            />
          </a>

          <a href="linkedin.com" target="_blank" rel="noreferrer">
            <FaGooglePlus className="social3 text-white absolute rounded-full h-[5%] w-fit bottom-5  left-[30%] max-w-full  max-h-full object-cover hover:text-red-500  hover:shadow-2xl hover:shadow-white hover:scale-125 duration-300 hover:bg-white " />
          </a>
        </div>

        {/* <div className="absolute h-[1%] w-[0.5%] top-[95.58%] right-[49.69%] bottom-[3.04%] left-[49.54%] rounded-[50%] bg-white z-20 " />
        <div className="absolute h-[1%] w-[0.5%] top-[95.58%] right-[52.47%] bottom-[3.04%] left-[46.76%] rounded-[50%] bg-white z-20" />
        <div className="absolute h-[1%] w-[0.5%] top-[95.58%] right-[46.92%] bottom-[3.04%] left-[52.31%] rounded-[50%] bg-white z-20" /> */}

      </div>

    </>
  )
}

export default Heroslide
