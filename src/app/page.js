"use client"
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import About from './Components/About'
import Projects from './Components/Projects'
import Heroslide from './Components/Heroslide'
import { Link } from 'react-scroll';
import { FaHome } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GrProjects } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";

function page() {
//   const comp = useRef(null)
//   useLayoutEffect(()=>{
//     gsap.to("#main", {
//       backgroundColor:"#000",
//       scrollTrigger:{
//           trigger:"main",
//           scroller:"body",
//           // markers:false,
//           start:"top -25%",
//           end:"top -70%",
//           scrub:2
//       }
//   })
//   })
  return (
    <>
    <div className='bg-[#2b304d] relative h-full w-full'>

    <div className='sidebar z-30 fixed  font-bold bg-[#ffff] items-center justify-center  w-fit h-fit top-[25%] m-8 rounded-full uppercase '>
    <div className="sidebarmobile  text-[#2b304d] h-full gap-5 w-full flex flex-col justify-center items-center p-2  ">

  <Link
    to='home'
    activeClass='active'
    smooth={true}
    spy={true}
    className=" innersidebar text-3xl font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold">
    <FaHome />
  </Link>

  <Link
    to='skills'
    activeClass='active'
    smooth={true}
    spy={true}
    className=" innersidebar text-2xl font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold" >
    <GrProjects />
  </Link>

  <Link
    to='projects'
    activeClass='active'
    smooth={true}
    spy={true}
    className=" innersidebar text-3xl font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold">
    <LiaLaptopCodeSolid />
  </Link>

  <Link
    to='about'
    activeClass='active'
    smooth={true}
    spy={true}
    className=" innersidebar text-3xl font-medium hover:-translate-y-1 hover:scale-125 duration-200 hover:font-bold">
    <FcAbout />
  </Link>


</div>
</div>


    <Heroslide/>
    <Skills/>
    <Projects/>
    <About/>
    <Footer/>
    </div>
    
    
    </>
  )
}

export default page