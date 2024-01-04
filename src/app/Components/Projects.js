import React from 'react'

const Projects = () => {
    return (
        <>
            <div id='projects' className=' flex relative h-screen w-full text-white justify-end'>
                <img
                className='absolute right-1/2 -rotate-12 hover:rotate-180 duration-1000'
                src='/triangle.png'>

                </img>
                
                {/* <h2 className='flex absolute text-5xl top-[10%] w-[18%] h-[10%] font-bold items-center justify-center  hover:bg-white hover:text-black rounded-md'>PROJECTS</h2> */}
                <div className=' absolute w-1/2 h-32 top-[20%]  '>
                    <h4 className=' absolute text-3xl m-10'>ALTCODE:-
                        <p>
                            It's a no coding platform to develop application for mobiles and my role is for backend developer and currently i am on it.

                        </p>
                    </h4>
                </div>

                <div className=' absolute w-1/2 h-36 top-[40%]'>
                    <h4 className=' absolute text-3xl m-10  '>MARWADI BAWARCHI:-

                        <a className='text-blue-400 font-semibold' target='blank' href='https://om-khorwal.github.io/Marwadi_Bawarchi/'> Visit here...</a>
                        <p className='flex'>
                            A restaurant webpage develop by html css and js where i used Gsap a javascript library.
                        </p>
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Projects
