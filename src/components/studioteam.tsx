'use client'
import React from 'react';
import background from "../../public/images/aboutbgcover.png"
import profile1 from "../../public/images/profile1.png"
import profile2 from "../../public/images/profile2.png"
import profile3 from "../../public/images/profile3.png"
import { motion } from 'framer-motion'
import { slideFromLeft,slideFromRight, formAnimation } from '@/utils/animations';
import form from './form';

type studioteamProps = {
  
};

const studioteam:React.FC<studioteamProps> = () => {
  
  return (
<div className="flex flex-col items-center justify-center pb-16 pt-14 bg-center bg-cover" style={{backgroundImage: `url(${background.src})`, backgroundRepeat: 'repeat-y'}}>
    <motion.div variants={formAnimation} initial='initial' animate='animate'>
      <h1 className="text-4xl pb-2 md:text-5xl lg:text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Meet The Team!</h1>
    </motion.div>
    <motion.div className="max-w-4xl w-full mx-auto z-10 pb-2 px-0 lg:px-8" variants={formAnimation} initial="initial" animate = "animate">
		<div className="flex flex-col">
			<div className="bg-gray-100 rounded-full p-4 m-4">
          <div className="flex-none sm:flex">
              <div className="flex justify-between sm:mt-2">
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="w-full flex-none  lg:text-xl text-center text-black leading-5">We the team at Brix n Stones embrace the principles of a number of styles, minimalistic, elegance and a touch of luxury defines our style best. 
We strive to create designs that are timeless and sophisticated. Every project is approached with meticulous attention to details ensuring a harmonious blend of form and function.</div>
                  </div>
                </div>
              </div>
          </div>
				</div>
			</div>
		</motion.div>
    <motion.div className="max-w-4xl w-full mx-auto z-10" variants={slideFromLeft} initial="initial" animate = "animate">
		<div className="flex flex-col">
			<div className="bg-white border border-white shadow-md rounded-3xl p-4 m-4">
          <div className="flex-none sm:flex">
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2'>
            <div className="my-auto relative h-32 w-32">
              <img src={profile1.src} className="my-auto rounded-full w-28 h-28 object-cover" />
            </div>
              <div className="flex justify-between sm:mt-2 col-span-2">
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">Ar. Manasa Dinesh Nair</div>
                    <div className="flex-auto text-gray-500 my-1">
                      <span className="">Architect and Interior Designer. MA - Interior Design | B-Arch </span>
                    </div>
                    <div className="flex-auto text-gray-500 my-1">
                      <span>"Creativity and Design are perhaps two sides of the same coin"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
				</div>
			</div>
		</motion.div>
    <motion.div className="max-w-4xl w-full mx-auto z-10" variants={slideFromRight} initial="initial" animate = "animate">
		<div className="flex flex-col">
			<div className="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
          <div className="flex-none sm:flex">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-end'>
          <div className="flex justify-between sm:mt-2 col-span-2">
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">Ar. Pratika Kishore Hema</div>
                    <div className="flex-auto text-gray-500 my-1">
                      <span className="">Architect and Interior Designer.MA - Interior Design | B-Arch </span>
                    </div>
                    <div className="flex-auto text-gray-500 my-1">
                      <span>"The journey of design reveals the story of the edifice" </span>
                    </div>
                  </div>
                </div>
              </div>
            <div className="my-auto flex relative h-32 w-32 justify-items-end">
              <img src={profile2.src} className="my-auto flex ml-16 mx-auto w-28 h-28 object-cover rounded-full" />
            </div>
            </div>
          </div>
				</div>
			</div>     
		</motion.div>

    <motion.div className="max-w-4xl w-full mx-auto z-10" variants={slideFromLeft} initial="initial" animate = "animate">
		<div className="flex flex-col">
			<div className="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
          <div className="flex-none sm:flex">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className="my-auto relative h-32 w-32">
              <img src={profile3.src} className="my-auto w-28 h-28 object-cover rounded-full" />
            </div>
              <div className="flex justify-between sm:mt-2 col-span-2">
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">Er. Nidhi K</div>
                    <div className="flex-auto text-gray-500 my-1">
                      <span className="mr-3 ">Civil Engineer.M.Tech - Highway Engineering | B.Tech - Civil Engineering</span>
                    </div>
                    <div className="flex-auto text-gray-500 my-1">
                      <span>"Design is when the materials that make are completely understood"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
				</div>
			</div> 
		</motion.div>

	</div>
  )
}
export default studioteam;