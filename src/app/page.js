"use client"
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import About from './Components/About'
import Projects from './Components/Projects'
import Heroslide from './Components/Heroslide'


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
    <div className='bg-gradient-to-b from-[#0547a8] to-black relative h-full w-full'>



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