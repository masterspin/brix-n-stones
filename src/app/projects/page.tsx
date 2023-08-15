'use client';
import { useState, useEffect } from "react";
import { collection, onSnapshot, query } from 'firebase/firestore'
import Header from "@/components/header";
import CardSkeleton from "@/components/cardSkeleton";
import { projectCardsAnimation, explainProduct } from "@/utils/animations";
import { motion } from 'framer-motion'
import { db, storage } from '@/app/firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import Link from 'next/link'
import TitleSkeleton from "@/components/titleSkeleton";

export default function Home() {

  const [items, setItems] = useState([] as any)
  const [urls, setUrls] = useState('')
  const [isLoading, setLoading] = useState(true);
  // const [temper, setTemper] = useState([] as any)

  useEffect(() =>{
    const q = query(collection(db, 'projects'))
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let itemsArr = []
      QuerySnapshot.forEach((doc) => {
        itemsArr.push({...doc.data()})
      })
      setItems(itemsArr)
      setLoading(false)
      return () => unsubscribe();
    });
  },[])

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center pb-16 pt-14 justify-center bg-center bg-cover">
      {isLoading && <TitleSkeleton lower={false} />}
        {!isLoading && 
            <motion.div variants={projectCardsAnimation} initial='initial' animate='animate' className='flex pb-4'>
                <h1 className="text-center px-4 text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Our Journey</h1>
            </motion.div>
        }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-12 pb-12 px-8 md:px-auto"> 
      {isLoading && <CardSkeleton cards={6} />}
      {
        items.map((proj) =>
          <Link href={'/projects/' + proj.type.replaceAll(' ', '-') + '/' + proj.id} key={proj.name.replaceAll(" ","-")}>
          <motion.div variants={projectCardsAnimation} initial='initial' animate='animate' className="w-full text-black hover:text-red-700 rounded overflow-hidden shadow-md py-28 mb-0" style={{backgroundImage: `url(http://drive.google.com/uc?export=view&id=${proj.coverGif.split('/')[5]})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundColor:'transparent'}}>
            <div className="pt-4 my-auto py-auto">
              <div className="bg-white text-center font-bold opacity-80 text-xl px-4">{proj.name}</div>
            </div>
        </motion.div>
        </Link>
        )
      }
      </div>
      </div>
    </div>
  )
}
