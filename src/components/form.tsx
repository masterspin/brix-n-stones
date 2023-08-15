'use client'
import { motion } from 'framer-motion'
import { formAnimation } from '@/utils/animations'
import * as ROUTES from '@/constants/routes'
import React from 'react'
import background from "../../public/images/whitebricks.png"
import emailjs from 'emailjs-com';

function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e
}

type formProps = {
    
};

const form:React.FC<formProps> = () => {


  async function handleOnSubmit(e: any) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_9lj5ncp', e.target, 'fbeuP_50YqK4tRs3u')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
    });

    await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
      })
    })
    e.target.reset()
    window.location.href = ROUTES.THANKS
  }

  // function sendEmail(e: any){
  //   e.preventDefault();
  //   emailjs.sendForm('gmail', 'template_lhwm1o4', e.target, '4ZrndHac-ANgxcKX7')
  //   .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //       console.log(error.text);
  //   });
  //   e.target.reset()
  // }
    
    return(
        
    <div className="min-h-screen py-16 max-sm:px-6 " style={{backgroundImage: `url(${background.src})`, backgroundRepeat: 'repeat-y'}}>
    <motion.div className="container mx-auto" variants={formAnimation} initial="initial" animate="animate">
        <div className="flex flex-col lg:flex-row bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
          <div className="w-full lg:w-1/2 sm:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
            <h1 className="text-3xl pb-4 font-bold">GOT A PROJECT FOR US?</h1>
            <div>
              <p className="my-3">We are located in Bengaluru</p>
              <p>We work on a variety of project categories - </p>
              <p className="mb-3">Architectural Planning, Interior Designing, Renovations, and Project Consultations</p>
              <p>Fill out the contact form to reach out to us or write to us the old-fashioned way</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 sm:w-1/2 lg:pt-16 pb-16 px-12 justify-center items-center">
            <form className="w-full max-w-lg" onSubmit={handleOnSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Name
                  </label>
                  <div className="flex">
                    <input className="appearance-none block w-10/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="firstName" id="firstName" type="text" placeholder="First Name" required/>
                    <input className="appearance-none block w-10/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="lastName" id="lastName" type="text" placeholder="Last Name" required/>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" id="email" type="email" placeholder="example@email.com" required/>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                    Message
                  </label>
                  <textarea className="h-full appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="message" id="message" placeholder="Enter your message here" required/>
                </div>
              </div>
              <button className="focus:outline-none button-74 mt-4" role="button" type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="mx-12 flex-grow border-t border-red-100"></div>
        <div className="lg:hidden w-full lg:w-2/3 sm:w-4/5 pt-4 px-12">
                <div className="mt-8">
                <p className="font-semibold">Hours</p>
                <p>9:30 - 18:30 IST</p>
                <p>Mon - Sat</p>
                </div>
        </div>
        <div className="lg:hidden w-full lg:w-2/3 sm:w-4/5 py-10 px-6">
            <div className="grid grid-cols-3 gap-4">
                <div className="px-4">
                <a href="tel: +916361917941 "><img width="50px" height="50px" src="/images/phone.png"/></a>
                </div>
                <div className="px-4">
                <a href="mailto: studio.brixnstones@gmail.com"><img width="50px" height="50px" src="/images/email.png"/></a>
                </div>
                <div className="px-4">
                <a href="https://www.instagram.com/brix_n_stones/"><img width="50px" height="50px" src="/images/instagram.png"/></a>
                </div>
            </div>
        </div>
        <div className="max-lg:hidden w-full lg:w-2/3 sm:w-4/5 pt-16 pb-12 px-6">
            <div className="grid grid-cols-4 gap-4">
            <div className="px-4">
                <p className="font-semibold">Hours</p>
                <p>9:30 - 18:30 IST</p>
                <p>Mon - Sat</p>
                </div>
                <div className="px-4">
                <a href="tel: +916361917941 "><img width="64px" height="64px" src="/images/phone.png"/></a>
                <a href="tel: +916361917941 " className="text-center">Call Us!</a>
                </div>
                <div className="px-4">
                <a href="mailto: studio.brixnstones@gmail.com"><img width="64px" height="64px" src="/images/email.png"/></a>
                <a href="mailto: studio.brixnstones@gmail.com" className="text-center">Email Us!</a>
                </div>
                <div className="px-4">
                <a href="https://www.instagram.com/brix_n_stones/"><img width="64px" height="64px" src="/images/instagram.png"/></a>
                <a href="https://www.instagram.com/brix_n_stones/" className="text-center">Follow Us!</a>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  </div>
  )
}
export default form;