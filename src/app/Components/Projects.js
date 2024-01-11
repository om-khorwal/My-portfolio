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
                <div className=' absolute w-1/2 h-32 top-[5%]  '>
                    <h4 className=' absolute text-3xl m-10'>Portfolio website:-
                        <p className='text-xl font-exo'>
                            Developed my own portfolio website by using React and Tailwind Css
                        </p>
                    </h4>
                </div>
                <div className=' absolute w-1/2 h-32 top-[15%]  '>
                    <h4 className=' absolute text-3xl m-10'>Docs webpage:-
                    <p className='text-xl font-exo'>
                            Created Notes webpage with dragging feature
                        </p>
                    </h4>
                </div>
                <div className=' absolute w-1/2 h-32 top-[25%]  '>
                    <h4 className=' absolute text-3xl m-10'>Todo-list:-
                    <p className='text-xl font-exo'>
                        Normal Todo list to add task
                        </p>
                    </h4>
                </div>

                <div className=' absolute w-1/2 h-36 top-[35%]'>
                    <h4 className=' absolute text-3xl m-10  '>MARWADI BAWARCHI:-
                    <p className='text-xl font-exo'>
                            A web page which is built using html-css-js and Gsap (Javascript library) is used to create animation.
                        <a className='text-blue-400 font-semibold' target='blank' href='https://om-khorwal.github.io/Marwadi_Bawarchi/'> Visit here...</a>
                        </p>
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Projects
