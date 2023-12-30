"use client"
import React, { useLayoutEffect, useRef } from 'react'
import Main from './Components/Main'
import gsap from 'gsap'
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
    <Heroslide/>
   
    {/* <Main/>
    <Skills/>
    <Projects/>
    <About/> */}
    </>
  )
}

export default page