'use client'
import React from 'react';
import Header from '../../components/header'
import About from '../../components/studioteam'

type ContactProps = {
    
};

const Contact:React.FC<ContactProps> = () => {
    
    return(
        <div className='bg-gray-background'>
            <Header/>
            <About/>
        </div>
    )
}
export default Contact;