import React from 'react'

const Projects = () => {
    return (
        <>
            <div id='projects' className=' relative flex h-screen w-full text-white justify-center items-center'>
                <img
                    className='triangle w-[40%] h-[60%] -rotate-12 hover:rotate-180 duration-1000'
                    src='/triangle.png'>
                </img>

                <div className='pblock relative w-3/4 h-screen justify-center items-center '>

                {/* <h2 className='flex absolute text-5xl top-[10%] w-[18%] h-[10%] font-bold items-center justify-center  hover:bg-white hover:text-black rounded-md'>PROJECTS</h2> */}
                <div className=' project w-full h-32   '>
                    <h4 className=' absolute text-3xl m-10'>Portfolio website:-
                        <p className='text-xl font-exo'>
                            Developed my own portfolio website by using React and Tailwind Css
                        </p>
                    </h4>
                </div>
                <div className=' project  w-full h-32   '>
                    <h4 className=' absolute text-3xl m-10'>Docs webpage:-
                    <p className='text-xl font-exo'>
                            Created Notes webpage with dragging feature
                        </p>
                    </h4>
                </div>
                <div className=' project  w-full h-32   '>
                    <h4 className=' absolute text-3xl m-10'>Todo-list:-
                    <p className='text-xl font-exo'>
                        Normal Todo list to add task
                        </p>
                    </h4>
                </div>

                <div className=' project  w-full h-36 '>
                    <h4 className=' absolute text-3xl m-10  '>MARWADI BAWARCHI:-
                    <p className='text-xl font-exo'>
                            A web page which is built using html-css-js and Gsap (Javascript library) is used to create animation.
                        <a className='text-blue-400 font-semibold' target='blank' href='https://om-khorwal.github.io/Marwadi_Bawarchi/'> Visit here...</a>
                        </p>
                    </h4>
                </div>
                </div>

            </div>
        </>
    )
}

export default Projects
