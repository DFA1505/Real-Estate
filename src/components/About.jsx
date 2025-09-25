import React from 'react'
import Image from '../assets/Aboutimg.jpg'
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div initial ={{opacity:0, x:200}} 
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden mb-20"
      id="About"
    >

      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-center md:gap-20">
        <img
          src={Image}
          alt="About"
          className="w-[450px] sm:w-[400px] lg:w-[500px] rounded-lg"
        />

        <div className="flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-3xl font-medium text-gray-800">10+</p>
              <p className='md:text-sm'>Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-gray-800">12+</p>
              <p className='md:text-sm'>Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-gray-800">20+</p>
              <p className='md:text-sm'>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-gray-800">25+</p>
              <p className='md:text-sm'>Ongoing Projects</p>
            </div>
          </div>
          <p className='my-10 max-w-lg md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className='bg-blue-600 text-white rounded px-8 py-2 hover:bg-blue-300'>Learn More</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
