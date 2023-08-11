'use client';
import { useState, useEffect } from 'react'
import { db, storage } from '../../../firebase'
import { query, onSnapshot, collection, where } from 'firebase/firestore'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import Header from '@/components/header'
import { projectCardsAnimation, buttonProduct } from '@/utils/animations';
import { motion } from 'framer-motion'
import CardSkeleton from '@/components/cardSkeleton';
import TitleSkeleton from '@/components/titleSkeleton';
import arrow2 from '@/../public/images/arrow3.png'
import * as ROUTES from '@/constants/routes'
import EmblaCarousel from '@/components/EmblaCarousel';
import "react-loading-skeleton/dist/skeleton.css";
import Image from 'next/image';
import ButtonSkeleton from '@/components/buttonSkeleton';


export default function Page({ params }: { params: { id: string, slug: string } }) {

    const [items, setItems] = useState({} as any)
    const [urls, setUrls] = useState('')
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() =>{
      const q = query(collection(db, 'projects'), where("project_id", "==", params.id))
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
            let urlsArr = []
          const uploadRef = ref(storage, `${doc.data()['project_id']}.${doc.data()['name']}/${params.slug.replaceAll('%20', ' ').replaceAll('%26', '&')}/`);
          listAll(uploadRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) =>{
                   setUrls(url)
                   urlsArr.push(url)
                });
            });
            setItems({...doc.data(), url: urlsArr})
            setLoading(false)
          });
        })
        return () => unsubscribe();
      });
    },[])  


    return (
        <div>
        <Header />
        <div className="flex flex-col items-center justify-center pb-16 pt-14 bg-center bg-cover">
            {isLoading && <TitleSkeleton lower={true} />}
            {isLoading && <CardSkeleton cards={1} />}
            {  !isLoading &&
            <div>
                <motion.div variants={projectCardsAnimation} initial='initial' animate='animate' className='flex pb-4'>
                    <h1 className="text-center px-4 text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-6xl">{items.name}</h1>
                </motion.div>
                <motion.div variants={projectCardsAnimation} initial='initial' animate='animate' className='flex pb-4'>
                    <h1 className="mx-auto text-center px-4 text-2xl md:text-3xl font-semibold leading-none tracking-tight text-gray-900 lg:text-4xl">{params.slug.replaceAll('%20', ' ').replaceAll('%26', '&')}</h1>
                </motion.div>
            </div>
                
            }
          <div className="grid grid-cols-1 gap-8 md:gap-16 py-12 px-2 md:px-auto">
            {!isLoading && <motion.div variants={projectCardsAnimation} initial='initial' animate='animate'><EmblaCarousel arr = {items.url}/></motion.div>}
          </div>
          {isLoading && <ButtonSkeleton />}
          {!isLoading && <form className='px-12 md:px-0 lg:px-0 mt-28 md:mt-16 lg:mt-0 xl:mt-0'>
                <motion.button variants={buttonProduct} initial='hidden' animate='show' formAction={ROUTES.PROJECTS + '/' + params.id} className="focus:outline-none border-transparent focus:border-transparent focus:ring-0 text-gray-900 font-medium text-base md:text-lg flex items-center gap-2 bg-white hover:bg-pink-100 py-2 px-5 rounded-2xl hover:opacity-80 shadow-lg hover:shadow-2xl">
                  <Image src={arrow2.src} width={20} height={20} alt='Back To ' />
                    {items.name}
                </motion.button>
            </form>
            }
          </div>
         </div>
      )
  }