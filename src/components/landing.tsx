'use client';
import React from 'react';
import arrow from '@/../public/images/arrow2.png'
import home1 from '@/../public/images/homepage/image3.png'
import home2 from '@/../public/images/homepage/image4.png'
import home3 from '@/../public/images/homepage/image1.jpeg'
import home4 from '@/../public/images/homepage/image2.jpeg'
import * as ROUTES from '@/constants/routes'

import service1 from  '@/../public/images/services/Architectural Planning.png'
import service2 from  '@/../public/images/services/Interior Design.png'
import service3 from  '@/../public/images/services/Execution.jpeg'
import service4 from  '@/../public/images/services/Renovations.png'
import service5 from  '@/../public/images/services/3D visuals.png'

import { motion } from 'framer-motion'
import Image from 'next/image';
import { typingContainer, typingText, explainProduct, buttonProduct, imgProduct1, imgProduct2, previewAnimation } from '@/utils/animations';

type landingProps = {
    
};

const landing:React.FC<landingProps> = () => {
    
    return(
        <div>
        <section className="max-lg:hidden mx-auto max-w-screen-xl h-full hero">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-32">
            <div className=" bg-secondary h-full md:h-[38rem] p-7 rounded-xl md:rounded-none mt-5 md:mt-0 hero-grid">
                <motion.h1 className="text-black font-bold text-4xl md:text-6xl md:leading-[50px] mt-2 md:mt-6 mb-1 opacity-90" variants={typingContainer} initial='hidden' animate='show'>
                    {
                        Array.from("Brix N Stones Studio").map((word,i) => (
                            <motion.span key={i} variants={typingText}>{word}</motion.span>
                        ))
                    }
                </motion.h1>
                <motion.h1 className="text-black font-normal text-2xl md:text-2xl md:leading-[35px] mt-0 md:mt-2 opacity-90" variants={explainProduct} initial='hidden' animate='show'>
                    Uniqueness Meets Architecture
                </motion.h1>
                    <form>
                        <motion.button variants={buttonProduct} initial='hidden' animate='show' formAction={ROUTES.CONTACT} className="focus:outline-none border-transparent focus:border-transparent focus:ring-0 text-gray-900 font-medium text-base md:text-2xl flex items-center gap-2 bg-white hover:bg-pink-100 py-2 px-5 rounded-2xl mt-6 hover:opacity-80 shadow-lg hover:shadow-2xl">
                            Let's talk
                            <img src={arrow.src} width="28px"></img>
                        </motion.button>
                    </form>
            </div>
            <div className="relative mix-bend-light mr-4 mb-96">
                <motion.img variants={imgProduct1} initial='hidden' animate='show' className="absolute top-0 left-0" src={home2.src}alt="Workplace" width="390" />
                <motion.img variants={imgProduct2} initial='hidden' animate='show' className="cursor-pointer absolute top-0 left-0 mt-32 ml-40 hover:shadow-outline" src={home1.src} width="390" />
            </div>
        </div>
    </section>

    <section className="mb-32 [text-shadow:_0_1px_0_var(--tw-shadow-color)] md:hidden mx-auto max-w-screen-xl h-full md:py-16 hero" style={{backgroundImage: `url(${home4.src})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="bg-secondary h-full md:h-[38rem] p-7 rounded-xl md:rounded-none md:mt-0 hero-grid">
                <motion.h1 variants={typingContainer} initial='hidden' animate='show' className="px-2 pt-3 pb-2 py-1text-black bg-white opacity-80 font-bold text-4xl md:text-6xl md:leading-[50px] mt-2 md:mt-6 opacity-90">
                    {
                        Array.from("Brix N Stones Studio").map((word,i) => (
                            <motion.span key={i} variants={typingText}>{word}</motion.span>
                        ))
                    }  
                </motion.h1>
                <motion.h1 variants={explainProduct} initial='hidden' animate='show' className="px-2 pb-4 bg-white opacity-80 text-black font-normal text-2xl md:text-2xl md:leading-[30px] mt-0 opacity-90">
                Uniqueness Meets Architecture
                </motion.h1>
                    <form>
                        <motion.button variants={buttonProduct} initial='hidden' animate='show' formAction={ROUTES.CONTACT} className="focus:outline-none border-transparent focus:border-transparent focus:ring-0 text-gray-900 font-medium text-base md:text-2xl flex items-center gap-2 bg-white hover:bg-pink-100 py-2 px-5 rounded-2xl mt-6 hover:opacity-80 shadow-lg hover:shadow-2xl">
                            Let's talk
                            <Image src={arrow.src} alt='arrow' width={28} height={28} />
                        </motion.button>
                    </form>
            </div>
    </section>

    <section className="[text-shadow:_0_1px_0_var(--tw-shadow-color)] max-md:hidden lg:hidden mx-auto max-w-screen-xl h-full md:py-16 hero" style={{backgroundImage: `url(${home3.src})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="bg-secondary h-full md:h-[40rem] p-7 rounded-xl md:rounded-none mt-5 md:mt-0 hero-grid">
                <h1 className="px-2 pt-3 text-black bg-white opacity-80 font-bold text-4xl md:text-6xl md:leading-[50px] mt-2 md:mt-6 opacity-90">
                    Brix N Stones Studio  
                </h1>
                <h1 className="px-2 pb-4 bg-white opacity-80 text-black font-normal text-2xl md:text-2xl md:leading-[30px] mt-0 opacity-90">
                    Uniqueness Meets Architecture
                </h1>
                    <form>
                        <button formAction={ROUTES.CONTACT} className="focus:outline-none border-transparent focus:border-transparent focus:ring-0 text-gray-900 font-medium text-base md:text-2xl flex items-center gap-2 bg-white hover:bg-pink-100 py-2 px-5 rounded-2xl mt-6 hover:opacity-80 shadow-lg hover:shadow-2xl">
                            Let's talk
                            <Image src={arrow.src} alt='arrow' width={28} height={28} />
                        </button>
                    </form>
            </div>
    </section>

    <motion.section variants={previewAnimation} initial='initial' whileInView='animate' className="md:mt-8 lg:mt-40 lg:mb-24 mx-auto max-w-screen-xl h-full sm:pt-2 md:pt-16 lg:pt-16 sm:pb-8 md:pb-24 lg:pb-28 px-8 md:px-16 service">
            <div>
                <p className="text-xl md:text-3xl lg:text-4xl text-center w-full md:w-4/5 mt-4 mb-4 text-gray-900">
                    "With a passion for creating exceptional spaces, we bring together a team of talented professionals dedicated to transforming your dream into reality"
                </p>
            </div>
    </motion.section>

    <motion.section initial='initial' whileInView='animate' className="sm:mt-16 md:mt-8 mx-auto max-w-screen-xl h-full pb-32 px-4 md:px-0 working-process">
        <motion.h1 variants={previewAnimation} className="mt-32 md:mt-4 lg:mt-0 font-semibold md:font-bold mb-8 lg:mb-32 text-5xl text-center md:text-6xl underline decoration-solid w-full md:w-[40%] leading-[120%] text-gray-900">
            Our Services
        </motion.h1>
        <motion.div variants={previewAnimation} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div variants={previewAnimation} className="border-b-4 border-secondary py-5 working-process-list">
                <h1 className="mb-4 font-medium text-3xl text-gray-900">01. Architectural Planning</h1>
                <img src={service1.src} className='rounded-2xl mx-auto my-auto' width={260} height={260}></img>
            </motion.div>
            <motion.div variants={previewAnimation} className="border-b-4 border-yellow py-5 working-process-list">
                <h1 className="mb-4 font-medium text-3xl text-gray-900">02. Interior Design</h1>
                <img src={service2.src} className='rounded-2xl mx-auto my-auto' width={260} height={260}></img>
            </motion.div>
            <motion.div variants={previewAnimation} className="border-b-4 border-primary py-5 working-process-list">
                <h1 className="mb-4 font-medium text-3xl text-gray-900">03. Execution</h1>
                <img src={service3.src} className='rounded-2xl mx-auto my-auto' width={260} height={260}></img>
            </motion.div>
        </motion.div>
        <motion.div variants={previewAnimation} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div variants={previewAnimation} className="border-b-4 border-secondary py-5 working-process-list">
                <h1 className="mb-4 font-medium text-3xl text-gray-900">04. Renovation</h1>
                <img src={service4.src} className='rounded-2xl mx-auto my-auto' width={260} height={260}></img>
            </motion.div>
            <motion.div variants={previewAnimation} className="border-b-4 border-yellow py-5 working-process-list">
                <h1 className="mb-4 font-medium text-3xl text-gray-900">05. 3D Visuals</h1>
                <img src={service5.src} className='rounded-2xl mx-auto my-auto' width={260} height={260}></img>
            </motion.div>
            <motion.div variants={previewAnimation} className='my-auto mx-auto'>
                <form>
                    <button formAction={ROUTES.PROJECTS} className="focus:outline-none border-transparent focus:border-transparent focus:ring-0 text-gray-900 font-medium text-base md:text-2xl flex items-center gap-2 bg-white hover:bg-pink-100 py-2 px-5 rounded-2xl mt-6 hover:opacity-80 shadow-lg hover:shadow-2xl">
                        Our Latest Projects
                        <img src={arrow.src} width="28px"></img>
                    </button>
                </form>
            </motion.div>
        </motion.div>
    </motion.section>
    </div>
    
    )
}
export default landing;