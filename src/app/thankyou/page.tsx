'use client'
import React from 'react';
import { motion } from 'framer-motion'
import { formAnimation } from '@/utils/animations';
import Header from '@/components/header'
import celebration from '@/../public/images/celebration.gif'
import Image from 'next/image';

type ThankYouProps = {
    
};

const ThankYou:React.FC<ThankYouProps> = () => {
    
    return(
        <div>
            <Header/>
                <div className="flex flex-col items-center justify-center pb-4 pt-8 bg-center bg-cover">
                    <div>
                    <motion.h1 variants={formAnimation} initial='initial' animate='animate' className="text-center mb-4 md:py-8 lg:py-8 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Thank you for submitting our form!</motion.h1>
                    <motion.h1 variants={formAnimation} initial='initial' animate='animate' className="text-center mb-4 pb-8 px-4 text-xl font-medium leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl">A confirmation email has been sent to your inbox</motion.h1>
                    <motion.div variants={formAnimation} initial='initial' animate='animate'>
                        <Image className='md:pt-16 lg:pt-16 rounded-full mx-auto' src={celebration.src} height={300} width={300} alt="Thanks!!!" />
                    </motion.div>
                    </div>
	        </div>
        </div>
    )
}
export default ThankYou;