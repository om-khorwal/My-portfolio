import React from 'react'

const About = () => {
    return (
        <div id='about' className=' relative flex text-3xl text-white w-full h-screen justify-around '>
            <div className='about absolute flex justify-around w-full h-[80%] top-[10%]'>
                <h2 className=' text-5xl justify-center items-center  text-center '>About
                    <div className='aboutp'>
                        <h4 className='text-xl w-72 text-center mt-10 '>
                            An engineering student who has always had a passion for technology and its applications in various fields. Throughout my academic journey, I have strived to explore different avenues and gain diverse experiences. I have experience in web development and also worked in different domains too. As a technophile, I am constantly seeking new challenges and opportunities to expand my skill set.
                        </h4>
                    </div>
                </h2>
                <div className='line absolute w-1 h-full bg-white shadow-xl shadow-white'></div>
                <h2 className=' text-5xl justify-center items-center  text-center '>Contact
                    <div className='details'>
                        <h4 className='text-xl w-full text-center mt-10 '>
                            Email: amankhorwal2002@gmail.com
                        </h4>
                        <h4 className='text-xl w-full text-center mt-5 '>
                            Contact no: +918561863828
                        </h4>
                        <h4 className='text-xl w-full text-center mt-5 '>
                            <a href='https://www.linkedin.com/in/om-k-698281129/' target='_blank'> Linkedin: om-khorwal</a>
                             
                        </h4>
                    </div>
                 </h2>
            </div>

        </div>
    )
}

export default About
