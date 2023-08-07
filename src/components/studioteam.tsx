'use client'
import React from 'react';
import background from "../../public/images/aboutbgcover.png"
import profile1 from "../../public/images/profile1.png"
import profile2 from "../../public/images/profile2.png"
import profile3 from "../../public/images/profile3.png"
import { motion } from 'framer-motion'
import { slideFromLeft,slideFromRight } from '@/utils/animations';

type studioteamProps = {
  
};

const studioteam:React.FC<studioteamProps> = () => {
  
  return (
<div className="flex flex-col items-center justify-center pb-16 pt-14 bg-center bg-cover" style={{backgroundImage: `url(${background.src})`, backgroundRepeat: 'repeat-y'}}>
{/* <div className="w-full mx-auto z-10">
		<div className="flex flex-col">
			<div className="bg-white border border-white shadow-md rounded-3xl p-4 m-4">
          <div className="flex-none sm:flex">
          <div className='grid grid-cols-2 gap-4'>
          <div className="flex justify-between sm:mt-2">
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="flex-auto text-gray-500 my-1">
                      <span className="">We specialize in Architecture, Interior Design, Execution, and Re-furbishment services. With a passion for creating exceptional spaces, we bring together a team of talented professionals dedicated to transforming your dream into reality.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between sm:mt-2">
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="flex-auto text-gray-500 my-1">
                      <span>We embrace the principles of minimalism, elegance, luxury, and simplicity. As beauty lies in the essence of simplicity, we strive to create designs that are timeless and sophisticated. Each project we undertake is approached with meticulous attention to details, ensuring a harmonious blend of form and function.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
				</div>
			</div>
		</div> */}
    <div>
      <h1 className="mb-4 pb-8 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Meet The Team!</h1>
    </div>
    <motion.div className="max-w-4xl w-full mx-auto z-10" variants={slideFromLeft} initial="initial" animate = "animate">
		<div className="flex flex-col">
			<div className="bg-white border border-white shadow-md rounded-3xl p-4 m-4">
          <div className="flex-none sm:flex">
          <div className='grid grid-cols-3 gap-4'>
            <div className=" relative h-32 w-32   sm:mb-0 mb-3">
              <img src={profile1.src} className=" w-32 h-32 object-cover" />
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
          <div className='grid grid-cols-3 gap-4 justify-items-end'>
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
            <div className="flex relative h-32 w-32   sm:mb-0 mb-3 justify-items-end">
              <img src={profile2.src} className="flex ml-16 mx-auto w-32 h-32 object-cover rounded-2xl" />
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
          <div className='grid grid-cols-3 gap-4'>
            <div className=" relative h-32 w-32   sm:mb-0 mb-3">
              <img src={profile3.src} className=" w-32 h-32 object-cover rounded-2xl" />
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